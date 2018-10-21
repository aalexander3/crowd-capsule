import React, { Component } from 'react'
import { Icon, Form, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { UploadAdapter } from '../adapters/UploadAdapter'
import { getUploads, postUploads } from '../actions/Actions'

const BASE_URL = 'http://localhost:3000/uploads'

class Upload extends Component {

  // caption must be less than 140 characters
  state = {
    file: null,
    caption: ''
  }

  componentDidMount(){
    this.props.getUploads()
  }

  uploadImage = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("file", this.state.file)
    data.append("caption", this.state.caption)

    if (this.state.file) {
      this.props.postUploads(data)
    }
  }

  handleChange = (e) => {
    this.setState({
      caption: e.target.value
    })
  }

  render(){
    return (
      <div className="upload" >
        <h3>Upload a file to share in the capsule</h3>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            onChange={this.handleChange}
            id='form-input-control-caption'
            placeholder='Add a caption'
            className='input-text'
          />
          <label
            for='upload-input'
            className='upload-label' >
            <Icon name='cloud upload' />
            {this.state.file ? 'File Selected' : 'Select a File'}
          </label>
          <input
            id='upload-input'
            className='upload-input'
            onChange={this.uploadImage}
            name='file'
            type='file'
          />
           <button type='submit' className='submit'>Submit</button>
       </form>
      </div>
    )
  }
}


export default connect(null, { getUploads, postUploads })(Upload)
