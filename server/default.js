// this file is for importing the data from data.js for our application

import { data } from "./constants/data.js";

// import News from news-schema inorder to validate it
import news from "./model/news-schema.js";

const DefaultData = async () => {
    try { 
        // "insertMany" is the function that is used for inserting many objects into the database
        await news.insertMany(data);
        console.log('Data imported successfully')
    } catch (error) {
        console.log('Error in collecting data', error.message);
    }
}

export default DefaultData;