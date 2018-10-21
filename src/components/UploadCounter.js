import React, { Component } from 'react'

export default class UploadCounter extends Component {

  state = {
    uploadCount: 0
  }


  render(){
    return(
      <div>
        <h3>Number of worldwide uploads: {this.state.uploadCount}</h3>
      </div>
    )
  }
}
