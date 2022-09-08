const mongoose = require("mongoose");
const feeditemSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  itemText: {
    type: String,
  },
  itemImage: {
    type: String,
  },
});

module.exports = mongoose.model("Feeditem", feeditemSchema);
