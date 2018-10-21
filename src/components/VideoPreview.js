import React, {Component} from 'react';

class VideoPreview extends Component {
  render() {
    return (
      <div>
        <video width="250" height="250" src={this.props.url}>
        </video>
      </div>
    )
  }
}

export default VideoPreview;
