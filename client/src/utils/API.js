import axios from "axios";

export default {
    getBooks: query => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    }
};