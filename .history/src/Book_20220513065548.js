import React from 'react'

const Books = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        Refrence Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};
const Book = () => {
  return (
    <div><</div>
  )
}

export default Book