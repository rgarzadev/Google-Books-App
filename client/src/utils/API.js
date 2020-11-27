import axios from "axios";

export default {
    getBooks: (query) => {
        return axios.get(`/api/search/${query}`);
    },
    getSavedBooks: () => {
        return axios.get("/api");
    },
    deleteBook: (id) => {
        return axios.delete("/api/" + id);
    },
    saveBook: (bookData) => {
        return axios.post("/api", bookData);
    },
    deleteAllBooks: () => {
        return axios.delete("/api/delete/all");
    }
}