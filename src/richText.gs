function buildPRLinks(repo, prList) {
  if (!prList) return "";

  const base = `https://dev.azure.com/_git/${repo}/pullrequest/`;
  const prs = prList.split(",").map(p => p.trim());

  let text = prs.join(", ");
  let richText = SpreadsheetApp.newRichTextValue().setText(text);

  let cursor = 0;
  prs.forEach(pr => {
    richText.setLinkUrl(cursor, cursor + pr.length, base + pr);
    cursor += pr.length + 2;
  });

  return richText.build();
}
