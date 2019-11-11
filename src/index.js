// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click on me";
// }

// Create a react component
const App = () => {
  const buttonText = "Hi there";
  const style = {
    backgroundColor: "orangered",
    height: "25px",
    borderRadius: "5px",
    color: "black",
    border: "4px"
  };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
