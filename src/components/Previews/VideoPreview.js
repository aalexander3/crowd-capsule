import React, {Component} from 'react';
import playButton from '../../samples/play_button.png';
import {connect} from 'react-redux';
import { feedModalVisible } from '../../actions/Actions';

class VideoPreview extends Component {
  state = {
    hover: false
  }

  handleHover = () => {
    this.setState((prevState) => {
      return {hover: !prevState.hover}
    }, () => {
      if(this.props.modalClicked){
        this.video.pause()
      }
      else if(this.state.hover){
        this.video.currentTime = 0
        this.video.play()
      }
      else {
        this.video.pause()
      }
    })
  }

  handleClick = (event) => {
    this.video.pause();
    this.props.sendClick(this.props.url);
  }

  render() {
    return (
      <div className={ this.props.modalClicked || this.state.hover ? "" : "video-audio-thumbnail" }>
        <video width="150" height="250" src={this.props.url} ref={(video) => { this.video = video } }
        onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
        onClick={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { modalClicked: state.root.feedModalVisible }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendClick: (url) => dispatch(feedModalVisible(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPreview);
