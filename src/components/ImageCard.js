import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 5);

    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;

// REACT REFS
/* 
    Gives access to a single DOM element.
    We create refs in the constructor, assign them to instance variables,
    then pass to a particular JSX element as props.
*/
