const express = require('express');
const router  = express.Router();
const Movie = require("../models/movies");

/* get the list of all the movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((list)=>{
    // console.log("movies in the backend: ", list)
    res.json(list);
  })
  .catch((err)=>{
    res.json(err)
  })
});

//get details about a specific movie
router.get('/movies/:movieID', (req, res, next) => {
  Movie.findById(req.params.movieID)
  .then((theProduct)=>{
    res.json(theProduct);
  })
  .catch((err)=>{
    res.json(err)
  })
});


module.exports = router;