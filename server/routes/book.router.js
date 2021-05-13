const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    const NY_TIMES_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.TIMES_API}`
    axios.get(NY_TIMES_URL).then(response => {
      res.status(200).send(response.data);
    }).catch(err => {
      console.log('Error searching gifs', err.response)
      res.send(500);
    });
  });

module.exports = router