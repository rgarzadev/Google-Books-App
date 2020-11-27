import React from "react";
import SingleBook from "../components/SingleBook";

function Results(props) {
  
  return (
        <div>
            <ul>
                {props.books.map((book) => {
                    return (
                    <div>
                        <SingleBook book={book} handleSave={props.handleSave} handleDelete={props.handleDelete}/>
                    </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default Results;