
//Dependencies
//
const express = require('express');
const app = express();
// const methodOverride = require('method-override');
// const mongoose = require('mongoose');
// const db = mongoose.connection;
//
//
const movies = ([
  {
    name: 'Jaws',
    synop: 'A shark stalks a local community off Martha\'s Vineyard',
    favActor: 'Robert Shaw',
    rating: 5
  }
]);

// app.get('/', (req, res) => {
//   res.render('index.ejs');
// });

app.get('/movies', (req, res) => {
  res.send(movies);
});
app.get('/movies/:id', (req, res) => {
  res.send(movies[req.params.id]);
});

app.listen(3000, () => {
  console.log('listening...');
});

// mongoose.connect('mongodb://localhost:27017/shiza', {useNewUrlParser:true});
// mongoose.connection.once('open', () => {
//     console.log('connected to mongo');
// });
