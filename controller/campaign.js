const express = require("express");
const genericData = require("../models/generic");

const CreateData = async (req, res) => {
  const data = req.body;

  const Data = new genericData(data);

  try {
    await Data.save();

    res.status(201).json(Data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  genericData
    .find()
    .sort({ createdAt: -1 })
    .then((note) => {
      res.status(200).json({
        message: "Fetched posts successfully.",
        data: note,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
    });
};
module.exports = { CreateData, getData };
