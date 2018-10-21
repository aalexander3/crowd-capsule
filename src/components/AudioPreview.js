import React, {Component} from 'react';
import image from '../samples/audio.png'

class AudioPreview extends Component {
  state = {
    hover: false
  }

  handleHover = (event) => {
    this.setState((prevState) => {
      return {hover: !prevState.hover}
    }, () => {
      if(this.state.hover){
        this.audio.currentTime = 0
        this.audio.play()
      }
      else {
        this.audio.pause()
      }
    })
  }

  render() {
    return (
      <div className={ this.state.hover ? "" : "video-audio-thumbnail"}>
        <img height="150" width="250" src={image} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
        <audio src={this.props.url} ref={(audio) => { this.audio = audio } }/>
      </div>
    )
  }
}

export default AudioPreview;
