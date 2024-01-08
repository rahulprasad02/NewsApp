// this file for connecting our project with database i.e. MongoDB
// external libraries like MonogDB/Mongoose are used for doing so

// importing mongoose
import mongoose from "mongoose";

// trycatch b/c monogDB is an external entity hence possibility of error always exists

const Connection = async (username, password) => {
    try {
       
        const URL = `mongodb+srv://${username}:${password}@inshorts-clone.vjw9d5t.mongodb.net/?retryWrites=true&w=majority` ; //URL from MongoDB db
        // use mongoose function "connect" to connect with DB
        await mongoose.connect(URL, { useNewURLParser: true})
        console.log('Database connected successfully');

    } catch (error) {
        console.log('Error while connecting with database', error);
    }
}

export default Connection;