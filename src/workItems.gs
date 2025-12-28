function getWorkItems(ids) {
  const { org, project } = getConfig();
  const url = `https://dev.azure.com/${org}/${project}/_apis/wit/workitems?ids=${ids}&$expand=relations&`;

  const data = fetchAzure(url);
  const headers = [
    "ID", "Title", "State", "Type",
    "Assigned To", "Priority", "Tags", "PRs"
  ];

  const rows = [headers];

  data.value.forEach(item => {
    const f = item.fields;
    const prIds = extractPRs(item.relations);

    rows.push([
      item.id,
      f["System.Title"],
      f["System.State"],
      f["System.WorkItemType"],
      f["System.AssignedTo"]?.displayName || "Unassigned",
      f["Microsoft.VSTS.Common.Priority"],
      f["System.Tags"],
      prIds.length ? getPRSummary(prIds.join(",")) : "No PR"
    ]);
  });

  return rows;
}

function extractPRs(relations = []) {
  return relations
    .filter(r => r.attributes?.name === "Pull Request")
    .map(r => r.url.split("%2F").pop());
}
