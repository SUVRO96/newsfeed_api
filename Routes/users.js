const express = require("express");
const Users = require("../Models/Users");

const router = express.Router();

router.post("/adduser", async (req, res) => {
  try {
    const tempUser = new Users({
      userid: req.body.userid,
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    });
    const response = await tempUser.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const response = await Users.find();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  const tempEmail = req.body.email;
  const tempPassword = req.body.password;
  try {
    const response = await Users.find({
      email: tempEmail,
      password: tempPassword,
    });
    if (response.length === 0) {
      res.status(404).json("user not found");
    } else if (response.length === 1) {
      res.status(200).json(response[0]);
    } else {
      res.status(401).json("contact customer care");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
