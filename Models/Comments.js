const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  commentid: {
    type: String,
    unique: true,
  },
  feedid: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
