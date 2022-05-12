import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <h2>John doe</h2>
      <p>this is my message</p>
    </div>
  );
}

const Person = () =>

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
