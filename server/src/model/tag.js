const mongoose = require('mongoose');
// Tag Schema
const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Tag', tagSchema);
