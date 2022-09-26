const express = require("express");
const mongoose = require("mongoose");
const Likes = require("../Models/Likes");

const router = express.Router();

router.get("/alllikes", async (req, res) => {
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
      likeid: req.body.likeid,
      feedid: req.body.feedid,
      name: req.body.name,
      userid: req.body.userid,
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

router.post("/search/forpost", async (req, res) => {
  const feedid = req.body.feedid;
  const userid = req.body.userid;
  try {
    const response = await Likes.find({ feedid: feedid, userid: userid });
    console.log(response);
    if (response.length === 0) {
      res.status(200).json("not liked");
    } else {
      res.status(200).json("already liked");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
