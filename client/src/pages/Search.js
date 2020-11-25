import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Search() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState({})

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
        .then(res => {
            console.log("Books: ");
            console.log(res.data);
            setBooks(res.data);
        })
        .catch(err => console.log(err));
    };
  
  return (
        <div>
            <h1>SEARCH</h1>
        </div>
    );
}

export default Search;