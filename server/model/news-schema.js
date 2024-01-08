// this file is for validating the data going from data.js to MongoDB
// this is done using "mongoose"

import mongoose from "mongoose";
// mongoose have Schema function that helps to validate the data as per requiremnent
const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true,
        unique: true
    },
    timestamp: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    },
})

// need to store above data in a "collection" (collection -> table; cluster -> database)
// "model" function helps to do so

const news = mongoose.model('news', newsSchema); // "news" -> collection name

export default news;