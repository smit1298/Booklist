import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
<div>
    <div>
      <h4>hello world</h4>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
</div>
    
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
