import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>this is a car</article>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
