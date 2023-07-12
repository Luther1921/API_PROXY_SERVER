const express = require("express");
const router = express.Router();
const apicache = require("apicache");
const { getApi } = require("../controller/weatherController");

//setting cache
let cache = apicache.middleware;

router.get("/", cache("2 minutes"), getApi);

module.exports = router;
