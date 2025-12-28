function getAuthHeader() {
  const { pat } = getConfig();
  return {
    Authorization: "Basic " + Utilities.base64Encode(":" + pat)
  };
}
