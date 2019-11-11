import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  );
};

export default Loader;
