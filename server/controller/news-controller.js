// this file defines the callback function that is called when route.js is handled

// import "news" which contains all the data
import news from "../model/news-schema.js"

// here, request contains the body of the api when it is called
// response contains the actual response from backend to that api request
export const getNews = async (request, response) => {
    try {
        let data = await news.find({}); // empty object with "find" means we are importing all data from the collection
        // sending this data to frontend
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json({ message: data.message });
    }
}
