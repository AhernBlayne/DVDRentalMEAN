const mongoose = require('mongoose');


const dvdschema = new mongoose.Schema({
  title: String,
  director: String,
  run_time: String
});

mongoose.model('Dvd', dvdschema);