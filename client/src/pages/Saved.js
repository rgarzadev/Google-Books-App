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

    // Delete All Books 
    let deleteBooks = () => {
        API.deleteAllBooks()  
        .then(res => {
            console.log("Books Deleted!");
            console.log(res.data);
            if(res.data.deletedCount === books.length){
                setBooks([]);
            }
        })
        .catch(err => console.log(err));
      }
    
    // Delete a Single Book 
    let deleteBook = () => {
            loadBooks();
      } 
  return (
        <div>
            <h1>Saved Books</h1>
            <button onClick={deleteBooks}>Delete All Books</button>
            <Results books={books} handleDelete={deleteBook} />
        </div>
    );
}

export default Saved;