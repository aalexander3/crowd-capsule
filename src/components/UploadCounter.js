import React from 'react'
import { connect } from 'react-redux'

const UploadCounter = props => {

  return(
    <div>
      <h3>Number of worldwide uploads: {props.count}</h3>
    </div>
  )
}

const reduceCount = (state) => {
  return state.root.media.reduce((acc, val) => {
    return (acc + val.uploads.length)
  }, 0)
}

const mapStateToProps = state => {
  return {
    count: reduceCount(state)
  }
}

export default connect(mapStateToProps)(UploadCounter)
