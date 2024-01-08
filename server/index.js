//import cors for resolving issue with browser's secutiy
// issue - we have our frontend on port 3000 but backend at port 8000 and we want to share data from backend to frontend but this isn't allowed by browser b/w 2 different ports
import cors from 'cors';

import dotenv from 'dotenv'; // dotenv is used to write imp credentials into it such that they are not visible in plain code

// this file for setting up the server side logic using Express

// import Express using ES6 features of Node.js
import express from "express";

// import DB connection file
import Connection from "./database/db.js";

// import data-import file
import DefaultData from "./default.js";

// import route file
import route from "./routes/route.js";

// initializing express
const app = express();
dotenv.config(); // initialize dotenv

app.use(cors()); // using cors
// calling Route w/o any default route
app.use('/', route);

const PORT = 8000; // one of the arguments of listen()

// extracting credentials from .env file using process.env
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password); // pass these credential to "connection" as they are required for making connection with DB

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();