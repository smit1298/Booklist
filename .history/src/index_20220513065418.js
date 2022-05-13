import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {data} from "./books";
import Book from "./Book";

// set up vars


function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById("root"));
