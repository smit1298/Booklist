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
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          fugit, cum ad labore in quod saepe repellendus minima impedit laborum
          a, laboriosam porro eveniet deserunt aliquam illum. Aliquam,
          voluptatem impedit?
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quia
          recusandae ducimus quisquam illum eaque, iusto repellendus pariatur,
          minus, dicta ullam excepturi praesentium minima! Enim eligendi eius
          quibusdam iste dolor!
        </p>
      </Book>
    </section>
  );
}
const Book = ({ img, title, author, childre }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
