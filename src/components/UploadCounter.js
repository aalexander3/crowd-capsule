import React from 'react'
import { connect } from 'react-redux'

const UploadCounter = props => {

  return(
    <div>
      <h3>Number of worldwide uploads: {props.count}</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.root.uploads.length
  }
}

export default connect(mapStateToProps)(UploadCounter)
