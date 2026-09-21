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

// component => functional based component & class based component
// functional based component

const number = 100;


const HeadingComponent = ()=> {
  let addition = 10 + 100;
  
  return (<div id='parent'>
            <div id='child'>
              <h1 id="heading">{number} React using JSX using functional based component</h1>
              {addition}
              {console.log("Hello there, this is from react component")}
            </div>
          </div>
        )
}

// with no-return keyword
const AnotherComponent = ()=> (
    <div>
      <div id='div-heading'>
        <h2>THis is heading 2, and we are in another heading</h2>
        <HeadingComponent /> {/** this is prefered way to render component */}
        <HeadingComponent></HeadingComponent>
        <h3> rendering a component like normal function</h3>
        {HeadingComponent()}
      </div>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AnotherComponent />);// object => html element
