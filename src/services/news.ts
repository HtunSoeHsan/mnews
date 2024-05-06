"use server"
import axios from "axios";
export const getNews = async () => {
    try {
        const apiKey = "11e82e47d8e2443d89c580b56836d077";
        const everything = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;
        const url = `https://newsapi.org/v2/everything?q=Apple&from=2024-05-06&sortBy=popularity&apiKey=${apiKey}`;
        const sources = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;
        const response = await axios(everything);
        console.log("response:", response.data.articles);
        return response.data.articles;
    } catch (error) {
        return error;
    }
    
}