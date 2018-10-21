import React, {Component} from 'react';

class ImagePreview extends Component {
  render() {
    return (
      <div>
        <img height="150" width="250" className="img-fix" src={this.props.url}/>
      </div>
    )
  }
}

export default ImagePreview;
