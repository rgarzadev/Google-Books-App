import React from "react";
import API from "../utils/API";

function SingleBook(props) {
  let { book } = props;
  // TODO add more book fields

  let saveBook = () => {
    API.saveBook(book)  
        .then(res => {
            console.log("Book Saved!");
            console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  return (
        <li>
            <button onClick={saveBook}>Save</button>
            <span>{book.title}</span>
        </li>
    );
}

export default SingleBook;