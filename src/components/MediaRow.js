import React, {Component, Fragment} from 'react'
import AudioPreview from './Previews/AudioPreview'
import ImagePreview from './Previews/ImagePreview'
import PdfPreview from './Previews/PdfPreview'
import VideoPreview from './Previews/VideoPreview'
import MediaCard from './MediaCard'

class MediaRow extends Component {

  mediaCells = () => {
    return this.props.category.uploads.map((media, index) => {
      return <MediaCard mediaType={media.path.slice(-4)} mediaUrl={media.path} />
    })
  }

  render(){
    return (
      <Fragment>
        <h3>{this.props.category.name}</h3>
        <div className="mediacard-container">
          {this.mediaCells()}
        </div>
      </Fragment>
    )
  }
}

export default MediaRow;
