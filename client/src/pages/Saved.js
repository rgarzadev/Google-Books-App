import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Results from "../components/Results";

function Saved() {
    //one state called books.
    const [books, setBooks] = useState([])

    //run this when page/component loads
    useEffect(() => {
        loadBooks()
    }, [])

    let loadBooks = () => {
        API.getSavedBooks()
        .then(res => {
            setBooks(res.data);
        })
        .catch(err => console.log(err));
    };

    //delete all books 
    let deleteBooks = () => {
        API.deleteAllBooks()  
        .then(res => {
            //make sure that the number of deleted books match the initial books array size
            if(res.data.deletedCount === books.length){
                setBooks([]);
            }
        })
        .catch(err => console.log(err));
      }
    
    //delete a single book 
    let deleteBook = () => {
            loadBooks();
      } 
      
  return (
        <div className="container">
            <h1>Saved Books</h1>
            <button type="button" class="btn btn-outline-primary" onClick={deleteBooks}>Delete Saved Books</button>
            <Results books={books} handleDelete={deleteBook} />
        </div>
    );
}

export default Saved;