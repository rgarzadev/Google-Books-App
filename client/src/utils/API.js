import axios from "axios";

export default {
    getbooks: () => {
        return axios.get("/api/books");
    },
    getSavedBooks: () => {
        return axios.get("/api/books");
    },
    deleteBook: (id) => {
        return axios.delete("/api/books" + id);
    },
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    }
}