const express = require("express");
const { Router } = require("express");
const {
  getShows,
  getShowsByGenres,
  avgRateOfGenres,
  getByCountryName,
  avgRateOfWeights,
  getByCompanyName,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", getShows);
router.get("/genres/:name", getShowsByGenres);
router.get("/avgrate/:name", avgRateOfGenres);
router.get("/country/:name", getByCountryName);
router.get("/avgweight/:name", avgRateOfWeights);
router.get("/company", getByCompanyName);

module.exports = router;
