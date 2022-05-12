import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
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

const Author = () => <h4>Bob Woodward, Robert Costa, et al.</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
