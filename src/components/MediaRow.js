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
        return <AudioPreview url={url} />
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

  render(){
    const mediaCells = this.props.filePreviews(this.props.category).map((media) => {
      return this.renderSwitch(media.type, media.url)
    })

    return (
      <Fragment>
        <h3>{this.props.category}</h3>
        {mediaCells}
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
