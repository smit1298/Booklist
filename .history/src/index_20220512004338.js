import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// set up vars

const firstBook = {
  img: "https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg",
  title: "Peril",
  author: "Bob Woodward, Robert Costa, et al."
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/91a-dL30+TS._AC_UL480_FMwebp_QL65_.jpg",
  title: "By Water Beneath the Walls: The Rise of the Navy SEALs",
  author: "Benjamin H. Milligan, Kaleo Griffith, et al."
};
 
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
    const {img, title, autho} = props
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author} </h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
