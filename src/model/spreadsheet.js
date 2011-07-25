var SpreadsheetColumn = Backbone.Model.extend({

});

var SpreadsheetCell = Backbone.Model.extend({

});

var SpreadsheetRow = Backbone.Collection.extend({
    model : SpreadsheetCell,

    initialize: function() {
        this.columns = this.map(function(cell) {
            return cell.get("column");
        })
    }
});


var Spreadsheet = Backbone.Model.extend({

    initialize: function() {
        this.rows = [];
    },

    firstRow: function() {
        return this.rows[0]
    },

    columns: function() {
        return this.firstRow().columns;
    },

    add: function(row) {
        this.rows.push(row)
    }
});