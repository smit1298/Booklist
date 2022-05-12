import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


// set up vars


const firstaaaaaaaaaaaaaaaaabook ={
    
}
    const author = "Bob Woodward, Robert Costa, et al.";
const title = "Peril";
const img =
  "https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg";

  function BookList() {
  return (
    <section className="booklist">
      <Book job='developer'/>
      <Book title="random title" number ={22} />
    </section>
  );
}
const Book = (props) => {

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
<p>{props.job}</p>
<p>{props.title}</p>
<p>{props.number}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
