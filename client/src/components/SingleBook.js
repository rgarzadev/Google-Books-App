import React from "react";
import {
  Link
} from "react-router-dom";
import API from "../utils/API";

function SingleBook(props) {
  let { book } = props;
  // TODO add more book fields

  let saveBook = () => {
    // Mark book as saved before submitting it
    book.saved = true;
    // TODO Remove later
    console.log(JSON.stringify(book));
    API.saveBook(book)  
        .then(res => {
            console.log("Book Saved!");
            console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  let viewBook = () => {
    window.location.href = book.link;
  }

  let deleteBook = () => {
    // TODO Remove later
    console.log(JSON.stringify(book._id));
    
    API.deleteBook(book._id)  
    .then(res => {
        console.log("Book Deleted!");
        console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  return (
        <li>
           
            <button onClick={viewBook}>View</button>
            { !book.saved ?
              <button onClick={saveBook}>Save</button>
              : 
              <button onClick={deleteBook}>Delete</button>  
            }
            <span>{book.title}</span>
        </li>
    );
}

export default SingleBook;