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

const author = "Bob Woodward, Robert Costa, et al.";
  const title = "Peril";
const img = <img
        src="https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg"
        alt=""
      />
      const Book = (props) => {

  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()} </h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
