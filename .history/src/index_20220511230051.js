import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      
    </section>
  );
}

const Book = () => {
  return <article>this is a car</article>;
};

const Image = 
ReactDOM.render(<BookList />, document.getElementById("root"));
