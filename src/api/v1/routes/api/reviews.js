const express = require('express');

const { getAllReviews } = require('../../controllers/Reviews');

const reviews = express.Router();

reviews.get('/', getAllReviews);

module.exports = reviews;
