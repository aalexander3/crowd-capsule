import React, {Component, Fragment} from 'react'
import AudioPreview from './Previews/AudioPreview'
import ImagePreview from './Previews/ImagePreview'
import PdfPreview from './Previews/PdfPreview'
import VideoPreview from './Previews/VideoPreview'
import MediaCard from './MediaCard'
import {connect} from 'react-redux';

class MediaRow extends Component {



  mediaCells = () => {
    return this.props.filePreviews(this.props.category).map((media) => {
      return <MediaCard mediaType={media.type} mediaUrl={media.url} />
    })
  }

  render(){

    return (
      <Fragment>
        <h3>{this.props.category}</h3>
        <div className="mediacard-container">
          {this.mediaCells()}
        </div>
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
