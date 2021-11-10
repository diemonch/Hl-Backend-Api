// Include required packages references

import  express from "express";
import  cors from "cors";
import  logger from 'morgan';
import  morgan from "morgan";



//Swagger

import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('./swagger/swagger.json');

// Load the app config
import config from './config/config';

//Load the routes
import HobbiesRoutes from './routes/hobbiesroutes';
import  UserRoutes from './routes/userroutes';
//Load DB connection
import connectDB from "./database/dbconnect";


// Init the app

var app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const appConfig = new config();

//Connect to the MongoDB
connectDB();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const userRoutes:UserRoutes = new UserRoutes();
const hobbyRoutes:HobbiesRoutes = new HobbiesRoutes();
app.use(userRoutes.router);
app.use(hobbyRoutes.router);

//Start the server

app.listen(appConfig.LISTEN_PORT, function(){
    console.log('Server is running and listening on port ' + appConfig.LISTEN_PORT);
});

