import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import Results from "../components/Results";


function Search() {
    
    const [books, setBooks] = useState([])

    useEffect(() => {
        //loadBooks()
    }, [])

    let loadBooks = (searchTerm) => {
        API.getBooks(searchTerm)
        .then(res => {
            let formattedBooks = [];
            for(let i = 0; i < res.data.items.length; i++){
                let book = res.data.items[i].volumeInfo;
                let title = book.title;
                let description = book.description;
                let image = book.imageLinks.thumbnail;
                let link = book.infoLink;
                let authors = book.authors;
                let saved = false;
                book = {title, description, image, link, authors, saved};
                formattedBooks.push(book);
            }
            setBooks(formattedBooks);
        })
        .catch(err => console.log(err));
    };

    let handleInputChange = (e) => {
        let searchTerm = e.target.value.toLowerCase();
        if(searchTerm.length > 0){
            loadBooks(searchTerm);
        } else {
            setBooks([]);
        }
      };

    // Handle a save event 
    let handleSave = (title) => {
        // Loop through books state and remove book that matches title 
        let filteredBooks = books.filter((book) => {
            return book.title !== title;
        });
        setBooks(filteredBooks); 
      };
    
  
  return (
        <div>
            <h1>SEARCH</h1>
            <SearchBox handleSearch={handleInputChange}/>
            <Results books={books} handleSave={handleSave}/>
        </div>
    );
}

export default Search;