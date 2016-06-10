'use strict';

var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

function newSender(context, opConfig, jobConfig) {
    var context = context;
    var opConfig = opConfig;
    var filename = opConfig.filename;

    return function(data, msg) {
        var csvOutput = '';

        var fields = opConfig.fields;

        for (var i = 0; i < data.length; i++) {
            var record = [];
            for (var j = 0; j < fields.length; j++) {
                var field = fields[j];
                var value = '';
                if (data[i][field]) {
                    value = data[i][field];
                }

                record.push(value);
            }

            csvOutput += record.join(',') + '\n';
        }

        return fs.appendFileAsync(filename, csvOutput);
    }
}

function schema() {
    return {
        filename: {
            doc: 'path to the file where the data will be saved to, directory must pre-exist',
            default: null,
            format: 'required_String'
        },
        fields: {
            doc: 'List of fields to extract from the incoming records and save to the file. ' +
            'The order here determines the order of records in the file.',
            default: [],
            format: Array
        }
    };
}

module.exports = {
    newSender: newSender,
    schema: schema
};
