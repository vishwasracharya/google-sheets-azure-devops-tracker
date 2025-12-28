function getActiveSheetName() {
  return SpreadsheetApp.getActiveSpreadsheet()
    .getActiveSheet()
    .getName();
}

function getSprintSheets() {
  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  return sheets
    .filter(s => s.getName().startsWith("Sprint-"))
    .map(s => [s.getName()]);
}
