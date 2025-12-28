function getConfig() {
  const props = PropertiesService.getScriptProperties();
  return {
    org: props.getProperty("AZURE_ORG"),
    project: props.getProperty("AZURE_PROJECT"),
    pat: props.getProperty("AZURE_PAT"),
    apiVersion: props.getProperty("AZURE_API_VERSION") || "7.0"
  };
}
