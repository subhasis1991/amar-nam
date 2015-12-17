var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:    { type: String },
    author:     { type: String },
    reader:     { type: String },

    createdOn: { type: Date, default: Date.now },
    modifiedOn:  { type: Date, default: Date.now },
    lastLogin: Date,
});