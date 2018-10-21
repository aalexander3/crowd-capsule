import React, {Component} from 'react';

class ImagePreview extends Component {
  render() {
    return (
      <img height="150" width="250" src={this.props.url}/>
    )
  }
}

export default ImagePreview;
