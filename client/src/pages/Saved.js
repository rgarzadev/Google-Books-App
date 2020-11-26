import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Results from "../components/Results";


function Saved() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    let loadBooks = () => {
        API.getSavedBooks()
        .then(res => {
            console.log("Saved Books Returned!");
            console.log(res.data);
            setBooks(res.data);
        })
        .catch(err => console.log(err));
    };
  
  return (
        <div>
            <h1>Saved Books</h1>
            <Results books={books} />
        </div>
    );
}

export default Saved;