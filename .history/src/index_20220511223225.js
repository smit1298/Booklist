import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
<v>
    <div>
      <h4>hello world</h4>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
</v>
    
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
