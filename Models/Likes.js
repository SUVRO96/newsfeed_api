const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  likeid: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  feedid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Likes", likeSchema);
