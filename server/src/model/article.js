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
  createTime: {
    type: Date,
    default: Date.now,
  },
  updateTime: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('Article', articleSchema);
