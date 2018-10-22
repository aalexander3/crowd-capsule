import React, { Component } from 'react'
import { Icon, Input } from 'antd';
import { connect } from 'react-redux'

import { postUploads } from '../actions/Actions'


class Uploader extends Component {

  // caption must be less than 140 characters
  state = {
    file: null,
    caption: '',
    loading: false,
    imageUrl: null
  }

  uploadImage = (e) => {
    this.setState({ loading: true })

    const file = e.target.files[0]

    if (file.type.includes("image")) {
      this.getBase64(file, imageUrl => this.setState({
        imageUrl,
        loading: false,
        file: file
      }))
    } else {
      this.setState({
        loading: false,
        file: file
      })
    }
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("file", this.state.file)
    data.append("caption", this.state.caption)

    if (this.state.file) {
      this.props.postUploads(data)
        .then(() => this.props.history.replace('/'))
    }
  }

  handleChange = (e) => {
    this.setState({
      caption: e.target.value
    })
  }

  render(){
    const { imageUrl, file, loading } = this.state

    const uploadButton = (
      <div className="ant-upload">
        <Icon type={loading ? 'loading' : file ? 'check' : 'plus'} />
        <div className="ant-upload-text">{file ? 'File Uploaded': 'Upload File'}</div>
      </div>
    )

    return (
      <div className="upload" >
        <h3>Upload a file to share with the capsule</h3>

        <form onSubmit={this.handleSubmit} className='form'>
          <label
            for='upload-input'
            className='upload-label' >
            {imageUrl ? <img className="upload-preview" src={imageUrl} alt="file" /> : uploadButton}
          </label>

          <input
              id='upload-input'
              className='upload-input'
              onChange={this.uploadImage}
              name='file'
              type='file'
            />

          <Input size="large" placeholder="Add a caption here" onChange={this.handleChange} value={this.state.caption} className="text-upload"/>
          <button type='submit' className='submit'>Submit</button>
       </form>
      </div>
    )
  }
}


export default connect(null, { postUploads })(Uploader)
