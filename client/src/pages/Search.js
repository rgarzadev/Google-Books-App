import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SearchBox from "../components/SearchBox";
import Results from "../components/Results";

function Search() {
    //used to delay search when typing
    let timer = null;
    //we have one state called books.
    const [books, setBooks] = useState([]);

    //run this when component is ready. 
    useEffect(() => {
        //loadBooks("JavaScript");
    }, [])

    //function that calls the API backend to make a search
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
            //update the book state
            setBooks(formattedBooks);
        })
        .catch(err => console.log(err));
    };


    //call this function when user types in a character
    let handleInputChange = (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          let searchTerm = e.target.value.toLowerCase();
          searchBooks(searchTerm);
        }, 500); 
      };

    //helper function to load books based on search term
    let searchBooks = (searchTerm) => {
        if(searchTerm.length > 0){
            loadBooks(searchTerm);
        } else {
            setBooks([]);
        }
    }

    //handle a save event 
    let handleSave = (title) => {
        //loop through books state and remove book that matches title 
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