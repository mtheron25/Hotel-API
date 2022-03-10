const express = require("express");
const router = express.Router();
const con = require("../dbConnection.js");

//GET ALL
router.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

//GET ONE
router.get("/:id", (req, res) => {});

//CREATE
router.post("/", (req, res) => {});

//UPDATE
router.put("/:id", (req, res) => {});

//DELETE
router.delete("/:id", (req, res) => {});

module.exports = router;
