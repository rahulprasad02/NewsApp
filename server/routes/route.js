// this file is for creating a route
// done using express

import express from "express";

// import the callback function for "route"
import { getNews } from "../controller/news-controller.js";

const route = express.Router();

route.get('/news', getNews);

export default route;
