const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./Routes/users");
const feeditemsRoute = require("./Routes/feedItems");
const commentsRoute = require("./Routes/comments");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send("newsfeed api");
    console.log("api running..");
  } catch (err) {
    res.status(400).json(err);
  }
});

app.use("/users", userRoute);
app.use("/feeditems", feeditemsRoute);
app.use("/comments", commentsRoute);
mongoose.connect(
  "mongodb+srv://Suvro96:Suvro_96@cluster0.uq4uv.mongodb.net/newsfeed?retryWrites=true&w=majority",
  () => {
    console.log("mogoDb connected...");
  }
);

app.listen(4000);
