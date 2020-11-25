import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("");
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