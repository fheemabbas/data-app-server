const express = require("express");
const router = express.Router();
const { CreateData, getData } = require("../controller/campaign");

router.post("/", CreateData);

router.get("/", getData);
module.exports = router;
