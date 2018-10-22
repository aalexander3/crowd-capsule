import React, {Component, Fragment} from 'react'
import MediaCard from './MediaCard'

class MediaRow extends Component {

  mediaCells = () => {
    return this.props.category.uploads.sort((a,b) => b.upvotes - a.upvotes).map((media, index) => {
      return <MediaCard mediaType={media.path.slice(-4)} upload={media}/>
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
