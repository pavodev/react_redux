import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends Component {
  // ONLY TIME when we do direct assignement to 'this.state'
  // IT MUST BE CALLED 'state'!!!
  state = {
    lat: null,
    lon: null,
    errorMessage: ""
  };

  /*
    This method is called when the jsx is rendered on the page.
    This is the best place to do data-loading!
  */
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  // this method must always be defined!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />;
    }

    return <Loader />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
