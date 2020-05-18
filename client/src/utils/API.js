import axios from "axios";

export default {
    getBooks: query => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },
    saveBook: object => {
        return axios.post("/api/books", object)
    },
    getSavedBooks: () => {
        return axios.get("/api/books");
    },
    deleteBook: id => {
        return axios.delete("/api/books", id);
    }
};