const express = require("express");
const router = express.Router();
const { CreateData, getData } = require("../controller/campaign");

router.post("/setweeklylimit", CreateData);

router.get("/getweeklylimit", getData);
module.exports = router;
