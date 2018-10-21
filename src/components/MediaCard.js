import React, {Component} from 'react'
import AudioPreview from './Previews/AudioPreview'
import ImagePreview from './Previews/ImagePreview'
import VideoPreview from './Previews/VideoPreview'

class MediaCard extends Component {

  state = {
    likeCount: 0
  }


  handleClick = (url) => {

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
        {this.renderSwitch(mediaType, mediaUrl)}
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

export default MediaCard;
