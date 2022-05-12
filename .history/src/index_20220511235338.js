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
  return (
    <article className="book">
      
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg"
    alt=""
    srcset=""
  />
);

const Title = () => <h1>Peril</h1>;

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Bob Woodward, Robert Costa, et al.
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById("root"));
