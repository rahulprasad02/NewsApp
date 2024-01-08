// this is for calling the database using "axios"

import axios from "axios";

// this funct is for calling api
// try and catch for handling the exception occurence in api calling
// since response is in form of async manner hence function is async
export const getNews = async () => {

    const URL = 'http://localhost:8000';

    try {
        return await axios.get(`${URL}/news`); // this is a get api only
    } catch (error) {
        console.log('Error while calling get news api', error);
    }
}