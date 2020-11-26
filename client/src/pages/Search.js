import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import Results from "../components/Results";


function Search() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState({})

    useEffect(() => {
        loadBooks()
    }, [])

    let loadBooks = () => {
        API.getBooks(search)
        .then(res => {
            console.log("Books: ");
            console.log(res.data.items);
            let formattedBooks = [];
            for(let i = 0; i < res.data.items.length; i++){
                let book = res.data.items[i].volumeInfo;
                let title = book.title;
                let description = book.description;
                let image = book.imageLinks.thumbnail;
                let link = book.infoLink;
                let authors = book.authors;
                book = {title, description, image, link, authors};
                formattedBooks.push(book);
            }
            setBooks(formattedBooks);
        })
        .catch(err => console.log(err));
    };

    let handleInputChange = (e) => {
        let searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
        loadBooks();
      };
    
  
  return (
        <div>
            <h1>SEARCH</h1>
            <SearchBox handleSearch={handleInputChange}/>
            <Results books={books} />
        </div>
    );
}

export default Search;