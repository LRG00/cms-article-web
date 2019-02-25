const mongoose = require('mongoose');
// Cate Schema
const cateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Cate', cateSchema);
