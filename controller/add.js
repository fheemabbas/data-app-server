const express = require("express");
const DataMessage = require("../models/add");

const CreateData = async (req, res) => {
  const data = req.body;

  const Data = new DataMessage(data);

  try {
    await Data.save();

    res.status(201).json(Data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
module.exports = { CreateData };
