describe('SpreadsheetView', function() {
    var view;

    beforeEach(function() {
        var firstColumn = new SpreadsheetColumn({ "name" : "col1"})
        var aCell = new SpreadsheetCell({"column" : firstColumn, "value": "v1"})
        var aRow = new SpreadsheetRow([aCell]);
        var aSpreadsheet = new Spreadsheet();
        aSpreadsheet.add(aRow)

        setFixtures('<div id="spreadsheetapp"></div><script type="text/template" id="spreadsheet-template"><table><tr>{{#columns}}<td>{{name}}</td>{{/columns}}</tr>{{#rows}}<tr>{{#cells}}<td>{{value}}</td>{{/cells}}</tr>{{/rows}}</table></script>');

        view = new SpreadsheetView({ model: aSpreadsheet });
    });

    it("should render the spreadsheet", function() {
        view.render()
        expect($("#spreadsheetapp").html()).toBe("<table><tbody><tr><td>col1</td></tr><tr><td>v1</td></tr></tbody></table>");
    });

});