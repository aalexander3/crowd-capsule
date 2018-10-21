import React, {Component} from 'react';

class VideoPreview extends Component {
  render() {
    return (
      <video width="250" height="250" src={this.props.url}>
      </video>
    )
  }
}

export default VideoPreview;
