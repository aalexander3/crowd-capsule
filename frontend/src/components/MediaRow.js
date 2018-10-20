import React, {Component} from 'react'
import MediaCell from './MediaCell'
import {connect} from 'react-redux';

class MediaRow extends Component {
  render(){
    const mediaCells = this.props.filePreviews(this.props.category).map((media) => {
      return <MediaCell key={media.url} type={media.type} url={media.url}/>
    })

    return (
      <div className="media-row">
        <h3>{this.props.category}</h3>
        {mediaCells}
      </div>
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
