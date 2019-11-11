import React from "react";
import "./Loader.css";

const Loader = props => {
  return (
    <div className="ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui big text loader">
          {props.text || this.defaultProps.text}
        </div>
      </div>
      <p></p>
    </div>
  );
};

Loader.defaultProps = {
  text: "Loading..."
};

export default Loader;
