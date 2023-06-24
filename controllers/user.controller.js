const express = require("express");
const mongoose = require("mongoose");
const Shows = require("../models/shows");

const getShows = async (req, res) => {
  try {
    const getShows = await Shows.find({});
    res.json({ Shows: getShows });
  } catch (error) {
    console.log(error);
  }
};
const getShowsByGenres = async (req, res) => {
  try {
    const genre = req.params.name;
    const getShows = await Shows.find({ genres: genre });
    res.json({ Shows: getShows });
  } catch (error) {
    console.log(error);
  }
};
const avgRateOfGenres = async (req, res) => {
  try {
    let avg = 0;
    const genre = req.params.name;
    const getShows = await Shows.find({ genres: genre });
    for (const show of getShows) {
      avg += show.rating.average;
    }

    console.log(getShows.length, avg);
    res.json({ avgRating: avg / getShows.length });
  } catch (error) {
    console.log(error);
  }
};
const getByCountryName = async (req, res) => {
  try {
    const country = req.params.name;
    const getShows = await Shows.find({ "network.country.name": country });

    res.json({ Shows: getShows });
  } catch (error) {
    console.log(error);
  }
};
const avgRateOfWeights = async (req, res) => {
  try {
    let avg = 0;
    const country = req.params.name;
    const getShows = await Shows.find({ "network.country.name": country });
    for (const show of getShows) {
      avg += show.weight;
    }

    res.json({ avgRating: avg });
  } catch (error) {
    console.log(error);
  }
};
const getByCompanyName = async (req, res) => {
  try {
    const name = req.params.name;
    const getShows = await Shows.aggregate([
      {
        $group: {
          _id: "$network.name",
          films: {
            $push: {
              name: "$name",
              rating: "$rating.average",
            },
          },
        },
      },
      {
        $project: {
          companyName: "$_id",
          films: "$films",
          _id: 0,
        },
      },
    ]);
    res.json({ getShows });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getShows,
  getShowsByGenres,
  avgRateOfGenres,
  getByCountryName,
  avgRateOfWeights,
  getByCompanyName,
};
