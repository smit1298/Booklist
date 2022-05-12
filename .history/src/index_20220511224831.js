import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
    <Person />
      <p>this is my message</p>
    </div>
  );
}

const Person = () => <h2>john doe</h2>
const Message = ()
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
