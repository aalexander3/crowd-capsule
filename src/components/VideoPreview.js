import React, {Component} from 'react';
import playButton from '../samples/play_button.png';

class VideoPreview extends Component {
  state = {
    hover: false
  }

  handleHover = (event) => {
    this.setState((prevState) => {
      return {hover: !prevState.hover}
    }, () => {
      if(this.state.hover){
        this.video.currentTime = 0
        this.video.play()
      }
      else {
        this.video.pause()
      }
    })
  }

  render() {
    return (
      <div className="video-thumbnail">
        <video width="250" height="250" src={this.props.url} ref={(video) => { this.video = video } } onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
      </div>
    )
  }
}

export default VideoPreview;
