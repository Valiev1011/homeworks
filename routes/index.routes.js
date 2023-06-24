const express = require("express");
const { Router } = require("express");

const router = Router();

router.use("/shows", require("./shows.routes"));

module.exports = router;
