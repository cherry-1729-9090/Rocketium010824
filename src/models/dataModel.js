const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  language: String,
  id: String,
  bio: String,
  version: Number
});

module.exports = mongoose.model('Data', dataSchema);