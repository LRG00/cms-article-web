const mongoose = require('mongoose');
// Article Schema
const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  cats: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Article', articleSchema);
