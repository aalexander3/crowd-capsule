import React, {Component, Fragment} from 'react'
import AudioPreview from './AudioPreview'
import ImagePreview from './ImagePreview'
import PdfPreview from './PdfPreview'
import VideoPreview from './VideoPreview'
import {connect} from 'react-redux';

class MediaRow extends Component {

  renderSwitch = (type, url) => {
    switch(type){
      // you can change these case statements depending on seed data
      case '.mp3':
        return <AudioPreview url={url} type={type}/>
      case '.jpg':
        return <ImagePreview url={url} />
      case '.png':
        return <ImagePreview url={url} />
      case '.pdf':
        return <PdfPreview url={url} />
      case '.mp4':
        return <VideoPreview url={url} />
      default:
        return <ImagePreview url={url} />
    }
  }

  mediaCells = () => {
    return this.props.filePreviews(this.props.category).map((media, index) => {
      return this.renderSwitch(media.type, media.url, index)
    })
  }

  render(){

    return (
      <Fragment>
        <h3>{this.props.category}</h3>
        {this.mediaCells()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filePreviews: (category) => {
      return state.root.media[category]
    }
  }
}

export default connect(mapStateToProps)(MediaRow);
