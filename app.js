// Include required packages references

const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const  mongoose = require("mongoose");
const cors = require("cors");
const logger = require('morgan');
const morgan = require("morgan");

// Load the app config
config = require('./config/config');

//Load the routes
const ApartmentRoutes = require('./routes/apartmentroutes');
const AuthenticationRoutes = require('./routes/userroutes');

// Init the app

var app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Connect to the MongoDB
mongoose.connect(config.MONGO_URI,{useNewurlParser:true, useUnifiedTopology:true});
mongoose.connection.on('error', function(err) {
  console.log('>[Error]: Unable to connect to MongoDB.', err);
});
mongoose.connection.once('open', ()=>{
    console.log('>[Message]:DB Connection is established')
})


app.use(ApartmentRoutes);
app.use(AuthenticationRoutes);

//Start the server

app.listen(config.LISTEN_PORT, function(){
    console.log('Server is running and listening on port ' + config.LISTEN_PORT);
});

