import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// set up vars
const books = [
  { id: 1,
    img: "https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Peril",
    author: "Bob Woodward, Robert Costa, et al."
  },
  { id: 2,
    img: "https://m.media-amazon.com/images/I/91a-dL30+TS._AC_UL480_FMwebp_QL65_.jpg",
    title: "By Water Beneath the Walls: The Rise of the Navy SEALs",
    author: "Benjamin H. Milligan, Kaleo Griffith, et al."
  },
  { id: 3,
    img: "https://m.media-amazon.com/images/I/81rqFJVA5VL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Working Backwards",
    author: "Colin Bryar, Bill Carr, et al."
  }
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({img, title, author}) => {
  const clickHandler = () =>{
    alert('hello world')
  };
  const complexExample =(author) =>{
console.log(author);
  }
  return (
    <article className="book" onMouseOver={()=>{
      console.log(title)
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>Refrence Example</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button></article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
