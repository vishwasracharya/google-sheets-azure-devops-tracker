function getPullRequestStatus(prId) {
  const { org, project } = getConfig();
  const url = `https://dev.azure.com/${org}/${project}/_apis/git/pullrequests/${prId}?`;
  const pr = fetchAzure(url);

  if (!pr.mergeStatus || pr.mergeStatus !== "succeeded") {
    return `${prId} (Conflicts)`;
  }
  return `${prId} (${pr.status})`;
}

function getPRSummary(prIds) {
  return prIds
    .split(",")
    .map(id => getPullRequestStatus(id.trim()))
    .join(", ");
}
