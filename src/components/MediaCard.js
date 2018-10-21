import React, {Component} from 'react'
import AudioPreview from './Previews/AudioPreview'
import ImagePreview from './Previews/ImagePreview'
import VideoPreview from './Previews/VideoPreview'
import {connect} from 'react-redux';
import { feedModalVisible } from '../actions/Actions';

class MediaCard extends Component {

  state = {
    likeCount: 0
  }


  handleClick = (url) => {
  }

  handleMediaClick = () => {
    this.props.sendClick(this.props.mediaUrl, this.props.mediaType);
  }

  renderSwitch = (type, url) => {
    switch(type){
      // you can change these case statements depending on seed data
      case '.mp3':
        return <AudioPreview url={url} />
      case '.jpg':
        return <ImagePreview url={url} />
      case '.png':
        return <ImagePreview url={url} />
      case '.mp4':
        return <VideoPreview url={url} />
      default:
        return <ImagePreview url={url} />
    }
  }


  render() {
    const {mediaUrl, mediaType } = this.props
    return (
      <div className="media-card">
        <div onClick={this.handleMediaClick}>
          {this.renderSwitch(mediaType, mediaUrl)}
        </div>
        <div className="data-container">
          <h1>From Germany</h1>
          <h2>October 21,2018</h2>
        </div>
        <div className="like-count-container">
          <a onClick={() => this.handleClick(mediaUrl)} >
            <img src="heart.svg"/>
          </a>
          <span>33</span>
        </div>
      </div>
    )

  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    sendClick: (url, type) => dispatch(feedModalVisible(url, type))
  }
}

export default connect(null, mapDispatchToProps)(MediaCard);
