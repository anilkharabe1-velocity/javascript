// <div id='parent'>
//   <div id='child'>
//     <h1 id="heading">Welcome to React</h1>
//     <h2 id="heading2">Lets learn React</h1>
//   </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Welcome to React"),
    React.createElement("h2", { id: "heading2" }, "Lets learn React"),
  ]),
);

console.log("parent", parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);// object => html element
