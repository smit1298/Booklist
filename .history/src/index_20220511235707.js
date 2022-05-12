import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
          </section>
  );
}

const Book = () => {
    const title = 'Peril';
  return (
    <article className="book">
       <img
    src="https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg"
    alt=""
    srcset=""
  />
  <h1>Peril</h1> 
  <h4>
    Bob Woodward, Robert Costa, et al.
  </h4>
    </article>
  );
};


ReactDOM.render(<BookList />, document.getElementById("root"));
