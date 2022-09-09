const express = require("express");
const mongoose = require("mongoose");
const Likes = require("../Models/Likes");

const router = express.Router();

router.get("/likes", async (req, res) => {
  try {
    const response = await Likes.find();
    res.status(200).json(response);
  } catch (err) {
    res.send(400).json(err);
  }
});

router.post("/addlike", async (req, res) => {
  try {
    const tempObj = new Likes({
      feedid: req.body.feedid,
      likedby: req.body.likedby,
    });
    const response = await tempObj.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/search/:feedid", async (req, res) => {
  const feedid = req.params.feedid;
  try {
    const response = await Likes.find({ feedid: feedid });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
