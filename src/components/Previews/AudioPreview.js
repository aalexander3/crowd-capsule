import React, {Component} from 'react';
import image from '../../samples/audio.png'
import {connect} from 'react-redux';

class AudioPreview extends Component {
  state = {
    hover: false
  }

  handleHover = (event) => {
    this.setState((prevState) => {
      return {hover: !prevState.hover}
    }, () => {
      if(this.props.modalClicked){
        this.audio.pause()
      }
      else if(this.state.hover){
        this.audio.currentTime = 0
        this.audio.play()
      }
      else {
        this.audio.pause()
      }
    })
  }
  //
  // audioOrVideo = () => {
  //   if(this.props.type === ".mp3"){
  //
  //   }
  // }

  render() {
    return (
      <div className={ this.props.modalClicked || this.state.hover ? "" : "video-audio-thumbnail" }>
        <img height="150" width="250" src={image} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
        <audio src={this.props.url} ref={(audio) => { this.audio = audio } }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { modalClicked: state.root.feedModalVisible }
}

export default connect(mapStateToProps)(AudioPreview);
