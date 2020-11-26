import axios from "axios";

export default {
    getBooks: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyApsibtIXP1-tNIxH2bicAYhvx7fIB3J1c`);
    },
    getSavedBooks: () => {
        return axios.get("/api");
    },
    deleteBook: (id) => {
        return axios.delete("/api/" + id);
    },
    saveBook: (bookData) => {
        // TODO Remove later
        console.log("bookData.saved: " + bookData.saved);
        return axios.post("/api", bookData);
    }
}