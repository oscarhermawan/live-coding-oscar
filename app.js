"use strict"

const express = require('express')
const mongoose = require('mongoose')
let app = express()

mongoose.connect('mongodb://localhost:27017/live-code', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mongodb connected");
  }
})



var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

