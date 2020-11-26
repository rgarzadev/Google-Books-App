import React from "react";
import SingleBook from "../components/SingleBook";


function Results(props) {
  return (
        <div>
            <ul>
                {props.books.map((book) => {
                    return (
                    <SingleBook book={book} />
                    )
                })}
            </ul>
        </div>
    );
}

export default Results;