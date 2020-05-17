import axios from "axios";

const key = process.env.REACT_APP_API

export default {
    getBooks: query => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + key)
    }
}