const mongoose = require('mongoose');
// Users Schema
const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userGroup: {
    type: String,
    required: true,
  },
  passwd: {
    type: String,
    required: true,
  },
  rePasswd: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Users', usersSchema);
