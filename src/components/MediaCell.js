import React, {Component, Fragment} from 'react';
import AudioPreview from './AudioPreview'
import ImagePreview from './ImagePreview'
import PdfPreview from './PdfPreview'
import VideoPreview from './VideoPreview'

class MediaCell extends Component {

  renderSwitch = (type) => {
    switch(type){
      // you can change these case statements depending on seed data
      case '.mp3':
        return <AudioPreview />
      case '.jpg':
        return <ImagePreview />
      case '.png':
        return <ImagePreview />
      case '.pdf':
        return <PdfPreview />
      case '.mp4':
        return <VideoPreview />
      default:
        return <ImagePreview />
    }
  }

  render(){
    return(
      <Fragment>
        {this.renderSwitch(this.props.type)}
      </Fragment>
    )
  }
}

export default MediaCell;
