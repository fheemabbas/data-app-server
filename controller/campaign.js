const express = require("express");
const genericData = require("../models/add");

const CreateData = async (req, res) => {
  const data = req.body;

  // const Data = new genericData(data);
  genericData.updateOne({ _id: "626e8b61bdd7830870540073", },
    data, function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated Docs : ", data);
        res.status(200).json(data);
      }
    });
  // try {
  //   await Data.update({_id: "626e8b61bdd7830870540073", });

  //   res.status(201).json(Data);
  // } catch (error) {
  //   res.status(409).json({ message: error.message });
  // }
};

const getData = async (req, res) => {
  genericData
    .findOne({ _id: "626e8b61bdd7830870540073" })
    .then((note) => {
      res.status(200).json({
        message: "Fetched limit successfully.",
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
