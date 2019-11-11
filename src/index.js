import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props); // reference to the parent's constructor function

    // ONLY TIME when we do direct assignement to 'this.state'
    // IT MUST BE CALLED 'state'!!!
    this.state = {
      lat: null,
      lon: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      error => console.error(error)
    );
  }

  // this method must always be defined!
  render() {
    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.lon}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
