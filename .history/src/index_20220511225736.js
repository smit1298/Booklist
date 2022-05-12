import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      this is a book list
    </section>
  );
}

const Book = () =>

ReactDOM.render(<BookList />, document.getElementById("root"));
