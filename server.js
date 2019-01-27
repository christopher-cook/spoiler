
//Dependencies
//
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
app.use(methodOverride('_method'));
// const movies = require('./models/moviedb.js');
app.use(express.static('public'));
const db = mongoose.connection;
app.use(express.urlencoded({extended:false}));
const moviesController = require('./controllers/moviedb.js');
app.use('/movies', moviesController);
// const movies = ([
//   {
//     name: 'Jaws',
//     synop: 'A shark stalks a local community off Martha\'s Vineyard',
//     favActor: 'Robert Shaw',
//     rating: 5
//   }
// ]);

// app.get('/', (req, res) => {
//   res.render('index.ejs');
// });
//index route
// app.get('/movies', (req, res) => {
//   Movie.find({}, (err, allMovies) => {
//     res.render(
//     'index.ejs',
//     {
//       movie:allMovies
//     }
//   )
// });
// });
//
// //show route
// app.get('/movies/:id', (req, res) => {
//   res.send(movies[req.params.id]);
// });

app.listen(3000, () => {
  console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/shiza', {useNewUrlParser:true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
