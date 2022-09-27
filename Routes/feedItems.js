const express = require("express");
const Feeditem = require("../Models/Feeditems");

const router = express.Router();

// http://localhost:4000/feeditems/additems
router.post("/additems", async (req, res) => {
  try {
    const tempItem = new Feeditem({
      id: req.body.id,
      name: req.body.name,
      userid: req.body.userid,
      itemText: req.body.itemText,
      itemImage: req.body.itemImage,
    });
    const response = await tempItem.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

// http://localhost:4000/feeditems/allitems
router.get("/allitems", async (req, res) => {
  try {
    const response = await Feeditem.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:4000/feeditems/edititem/:id
http: router.put("/edititem/:id", async (req, res) => {
  try {
    const tempId = req.params.id;
    const tempItem = {
      id: req.body.id,
      name: req.body.name,
      userid: req.body.userid,
      itemText: req.body.itemText,
      itemImage: req.body.itemImage,
    };
    const savedItem = await Feeditem.findOneAndUpdate(
      { id: tempId },
      tempItem,
      {
        new: true,
      }
    );
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
