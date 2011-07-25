describe('SpreadsheetRow', function() {
    var firstColumn;
    var aCell;
    var aRow;

    beforeEach(function() {
        firstColumn = new SpreadsheetColumn({ "name" : "col1"})
        aCell = new SpreadsheetCell({"column" : firstColumn, "value": "v1"})
        aRow = new SpreadsheetRow([aCell]);
    });


    it('should have one column with name col1', function() {
        expect(aRow.columns.length).toBe(1);
        expect(aRow.columns[0].get("name")).toBe("col1");
    });
});


describe('Spreadsheet', function() {
    var firstColumn;
    var aCell;
    var aRow;
    var aSpreadsheet;

    beforeEach(function() {
        firstColumn = new SpreadsheetColumn({ "name" : "col1"})
        var secondColumn = new SpreadsheetColumn({ "name" : "col2"})
        aCell = new SpreadsheetCell({"column" : firstColumn, "value": "v1"})
        var anotherCell = new SpreadsheetCell({"column" : secondColumn, "value": "v2"})
        aRow = new SpreadsheetRow([aCell, anotherCell]);
        aSpreadsheet = new Spreadsheet();
        aSpreadsheet.add(aRow)
    });


    it("should have one row", function() {
        expect(aSpreadsheet.rows.length).toBe(1);
    });

    it("should return first row", function() {
        expect(aSpreadsheet.firstRow()).toBe(aRow);
    });

    it('should have two columns', function() {
        expect(aSpreadsheet.columns().length).toBe(2);
    });

    it('should have first column with name col1', function() {
        expect(aSpreadsheet.columns()[0].get("name")).toBe("col1");
    });
});