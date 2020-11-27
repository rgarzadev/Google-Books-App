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
    window.open(
      book.link,
      '_blank' // <- This is what makes it open in a new window.
    );
    //window.location.href = book.link;
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
            <h3>{book.title}</h3>
            <div>{book.description}</ div>
            <img src={book.image} alt={book.title} />
            <div>  
            {book.authors.map((author, index) => {
                    return (
                    <span>
                        {index == book.authors.length - 1 ? author : author + ', ' }
                    </span>
                    )
                })}
            </div>    
            <a href={book.link} target='_blank'>Link</a>
        </li>
    );
}

export default SingleBook;