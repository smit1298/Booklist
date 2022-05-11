import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <section>
      <div>
        <h4>hello world</h4>
      </div>
    </section>
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
