const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  feedid: {
    type: String,
    required: true,
  },
  likedby: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Likes", likeSchema);
