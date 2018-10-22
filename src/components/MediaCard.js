import React, {Component} from 'react'
import { connect } from 'react-redux'
import AudioPreview from './Previews/AudioPreview'
import ImagePreview from './Previews/ImagePreview'
import VideoPreview from './Previews/VideoPreview'

import { updateUpvote, feedModalVisible } from '../actions/Actions'

class MediaCard extends Component {

  handleClick = (id) => {
    this.props.updateUpvote(id).then(console.log)
  }

  handleMediaClick = () => {
    this.props.feedModalVisible(this.props.upload.path, this.props.mediaType);
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
    const { mediaType } = this.props
    const { path, upvotes, location_name, id} = this.props.upload
    return (
      <div className="media-card">
        <div onClick={this.handleMediaClick}>
          {this.renderSwitch(mediaType, path)}
        </div>
        <div className="data-container">
          <h1>From {location_name}</h1>
          <h2>October 21,2018</h2>
        </div>
        <div className="like-count-container">
          <a onClick={() => this.handleClick(id)} >
            <img src="heart.svg" alt='heart icon'/>
          </a>
          <span>{upvotes}</span>
        </div>
      </div>
    )

  }

}

export default connect(null, { updateUpvote, feedModalVisible })(MediaCard);
