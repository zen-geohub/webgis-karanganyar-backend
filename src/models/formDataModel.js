const mongoose = require('mongoose');

const formDataSchema = mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('FormData', formDataSchema);