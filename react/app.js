import React from 'react';
import ReactDOM from 'react-dom/client';

// react.createElement => object => HTML Element => render
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, 
    React.createElement("h1", { id: "heading" }, "Welcome to React"),
  ),
);


console.log("parent", parent); // object

// JSX (transiled before it reaches the JS) -> Babel
// JSX => react.createElement => JS object =>  HTML Element => render
const jsxHeading = (<div id='parent'>
  <div id='child'>
    <h1 id="heading">React using JSX</h1>
  </div>
</div>)

console.log("jsxHeading", jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);// object => html element
