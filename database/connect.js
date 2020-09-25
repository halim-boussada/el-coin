const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/test-coin', {useNewUrlParser: true,useUnifiedTopology: true});

module.exports = db;