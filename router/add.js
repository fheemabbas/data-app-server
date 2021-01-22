const express = require("express");
const router = express.Router();
const { addData } = require("../controller/add");

router.get("/", addData);
module.exports = router;
