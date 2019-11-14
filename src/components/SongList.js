import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

/*  
    Passing the object containing the action to the connect function,
    the connect function wraps the action inside an other javascript
    function. That function is the dispatcher! Everything is done by
    redux in the background!

    We never directly call the functions!! (selectSong() -> NO!)
*/

export default connect(mapStateToProps, { selectSong })(SongList);

/* 
    function connect() {
        return function(){
            return 'Hi there!';
        }
    }

    
    connect()(); // automatically invokes the returned function
*/
