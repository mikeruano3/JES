var mongoose = require('mongoose')
const Schema = mongoose.Schema;

var fiscaliaSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    }
}, { collection: 'fiscalias' });

module.exports = mongoose.model('fiscalias', fiscaliaSchema);