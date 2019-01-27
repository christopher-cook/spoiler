
const express = require('express');
const router = express.Router();
const Movie = require('../models/moviedb.js');

router.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/movies');
  })
});

router.get('/seed', (req, res) => {
  Movie.create([
      {
        name: 'JAWS',
        synop: 'A shark stalks a local community off Martha\'s Vineyard',
        favActor: 'Robert Shaw',
        rating: 5
      }, {
        name: 'JAWS 2',
        synop: 'Barilla pasta',
        favActor: 'Roy Scheider',
        rating: 4
      }, {
        name: 'JAWS 3D',
        synop: 'It\'s 3D, need we say more',
        favActor: 'Louis Gossett Jr',
        rating: 3
      }
    ], (error, data) => {
        res.redirect('/movies');
    })
  });

  //Delete Route
  router.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (err, deleteMovie) => {
      res.redirect('/movies');
    });
  });
  //Edit Route
  router.get('/:id/edit', (req, res) => {
    Movie.findById(req.params.id, (err, updatedMovie) => {
      res.render('edit.ejs',
      {
          movie: updatedMovie
      });
    });
  });
//index
  router.get('/', (req, res) => {
    Movie.find(req.params.id, (err, allMovies) => {
      res.render(
      'index.ejs',
      {
        movies: allMovies
      });
    });
  });

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

  //show route
  router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
      res.render(
        'show.ejs',
        {
          movies: foundMovie
        }
      )
  });
});



router.post('/', (req, res) => {
  Movie.create(req.body, (err, createdMovie) => {
    res.redirect('/movies');
  });
});

module.exports = router;
