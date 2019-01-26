
//Dependencies
//
const express = require('express');
const app = express();
// const methodOverride = require('method-override');
// const mongoose = require('mongoose');
// const db = mongoose.connection;
//
//
app.get('/', (req, res) => {
  console.log("Good start to the project");
});







app.listen(3000, () => {
  console.log('listening...');
});
