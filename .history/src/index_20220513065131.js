import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {}

// set up vars


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
