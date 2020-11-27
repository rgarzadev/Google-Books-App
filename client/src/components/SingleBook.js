import React from "react";
import {
  Link
} from "react-router-dom";
import API from "../utils/API";

function SingleBook(props) {
  let { book, handleSave, handleDelete} = props;

  let saveBook = () => {
    // Mark book as saved before submitting it
    book.saved = true;
    API.saveBook(book)  
        .then(res => {
            handleSave(book.title);
    })
    .catch(err => console.log(err));
  }

  let viewBook = () => {
    window.location.href = book.link;
  }

  let deleteBook = () => {
    
    API.deleteBook(book._id)  
    .then(res => {
        handleDelete();
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
            <div>{JSON.stringify(book)}</div><br />
        </li>
    );
}

export default SingleBook;