function fetchAzure(url) {
  const { apiVersion } = getConfig();
  return JSON.parse(
    UrlFetchApp.fetch(`${url}&api-version=${apiVersion}`, {
      headers: getAuthHeader(),
      muteHttpExceptions: true
    }).getContentText()
  );
}
