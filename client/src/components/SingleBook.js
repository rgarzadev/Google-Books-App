import React from "react";
import API from "../utils/API";

function SingleBook(props) {
  //extract all incoming props items
  let { book, handleSave, handleDelete } = props;

  //save a book to the DB by using the API utils file
  let saveBook = () => {
    //mark book as saved before submitting it
    book.saved = true;
    API.saveBook(book)  
        .then(res => {
            handleSave(book.title);
    })
    .catch(err => console.log(err));
  }

  //open up the book.link in a new tab
  let viewBook = () => {
    window.open(book.link, '_blank');
  }

  //delete the current book.
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
            {book.authors && book.authors.length > 0 && 
              book.authors.map((author, index) => {
                return (
                <span>
                    {index == book.authors.length - 1 ? author : author + ', ' }
                </span>
                )
              })
            }  
            </div>    
            <a href={book.link} target='_blank'>Link</a>
        </li>
    );
}

export default SingleBook;