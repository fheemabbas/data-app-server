const express = require("express");
const router = express.Router();
const { CreateData } = require("../controller/add");
router.post("/", CreateData);
module.exports = router;
