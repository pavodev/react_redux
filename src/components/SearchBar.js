import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    // avoid the browser to submit the form automatically
    // pressing enter doesn't reload the page
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-bar">Image Search</label>
            <input
              id="search-bar"
              type="text"
              value={this.state.form}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/* 
    FLOW: User types into the input, the callback gets called. Inside that 
    callback we update the state of our component. Then the component re-renders, 
    after this the input element is told what its value is (coming from state)!

    Controlled element:
        A controlled component (in this example an input) gets its value from
        the updated state.
        The state gets updated by the callback that has been assigned as event
        handler!
        Example:
            <input
              id="search-bar"
              type="text"
              value={this.state.form}
              onChange={e => this.setState({ term: e.target.value })}
            />

    Uncontrolled element:
        Example:
            <input
              id="search-bar"
              type="text"
              onChange={callbackName}
            />
*/

/* 
      THIS ISSUE:
        Sometimes in Javascript, the 'this' loses its reference.
        How do this behaves in a function??
        We always have to look where the function is called and then who called
        the function!

        class Car {
          setDriveSound(sound) {
            this,sound = sound;
          }

          drive() {
            return this.sound
          }
        }

        const car = new Car();
        car.setDriveSound('vroom');
        car.drive(); --> this equals to the car!!

        TO SOLVE THE PROBLEM WE CAN USE ARROW FUNCTIONS
    */
//console.log(this.state.term);
