import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// set up vars
const books = [
  {
    img: "https://m.media-amazon.com/images/I/811kCP93H-L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Peril",
    author: "Bob Woodward, Robert Costa, et al."
  },
  {
    img: "https://m.media-amazon.com/images/I/91a-dL30+TS._AC_UL480_FMwebp_QL65_.jpg",
    title: "By Water Beneath the Walls: The Rise of the Navy SEALs",
    author: "Benjamin H. Milligan, Kaleo Griffith, et al."
  },
  {
    img: "https://m.media-amazon.com/images/I/81rqFJVA5VL._AC_UL480_FMwebp_QL65_.jpg.com/The-Judges-List-A-Novel/dp/B093N8JP2B/ref=sr_1_9?adgrpid=84117582920&gclid=CjwKCAjwve2TBhByEiwAaktM1Kh46lE-gMmF3uSLNo-tIHyFTuJJ1XBKl0PHM8YGTJ8y1PcG_G-EexoCno4QAvD_BwE&hvadid=585479451089&hvdev=c&hvlocphy=1010294&hvnetw=g&hvqmt=e&hvrand=15497484331230503888&hvtargid=kwd-304937885481&hydadcr=22334_13333075&keywords=amazon+books&qid=1652384096&sr=8-9",
    title: "The Maid",
    author: "Nita Prose"
  }
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
