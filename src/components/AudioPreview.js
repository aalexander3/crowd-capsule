import React, {Component} from 'react';
import image from '../samples/audio.png'

class AudioPreview extends Component {
  render() {
    return (
      <div>
        <img height="150" width="250" src={image} />
        <audio src={this.props.url}></audio>
      </div>
    )
  }
}

export default AudioPreview;
