const mongoose = require("mongoose");
// With schema porperty define
const addDataSchema = mongoose.Schema({
  name: String,
  address: String,
  CreateAt: {
    type: Date,
    default: new Date(),
  },
});
//without schema define
const addDataNoSchema = mongoose.Schema(
  { any: {} },
  {
    strict: false,
    CreateAt: {
      type: Date,
      default: new Date(),
    },
    versionKey: false,
  }
);

const DataMessage = mongoose.model("DataMessage", addDataSchema);

module.exports = DataMessage;
