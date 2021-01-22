const mongoose = require("mongoose");

const addDataSchema = mongoose.Schema({
  name: String,
  address: String,
  CreateAt: {
    type: Date,
    default: new Date(),
  },
});

const DataMessage = mongoose.model("DataMessage", addDataSchema);

module.exports = DataMessage;
