import { React, useEffect, useState } from "react";

import ArticleCard from "./ArticleCard";

import { Box } from '@mui/material';
import { getNews } from "../service/api";

// Article component is responsible for displaying the news on UI
// News shld be displayed as soon as the page loads i.e.
// Article compt. ke mount hote hi it shld hit the database from where the news will be fetched
// this is done using "useEffect" hook of react

const Article = () => {

    // useState hook for storing the "response" value that has come from api
    const [news, setNews] = useState([]);

    useEffect(() => {
        dailyNews();
    }, []);

    // a function to call api i.e. api.js wala working
    // "async" b/c promise returned by api is in asynce manner
    const dailyNews = async () => {
        let response = await getNews(); // variable for holding the response of api
        setNews(response.data);
    }

    return (
        <Box>
            {
                news.map(data => (
                    <ArticleCard data={data} />
                ))
            }
        </Box>
    );
}

export default Article;