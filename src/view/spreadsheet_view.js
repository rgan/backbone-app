var SpreadsheetView = Backbone.View.extend({

    el: "#spreadsheetapp",

    initialize: function() {
        this.template = Handlebars.compile($('#spreadsheet-template').html());
        _.bindAll(this, 'render');
    },

    render: function() {
        result = this.template({
            columns : _.map(this.model.columns(), function(col) { return col.attributes; }),
            rows : _.map(this.model.rows, function(row) {
                return { "cells" : row.map(function(cell) { return cell.attributes; } )} })
        });
        $("#spreadsheetapp").html(result)
        return this;
    }

});