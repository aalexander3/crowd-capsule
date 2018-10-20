import React, { Component } from 'react'

const BASE_URL = 'http://localhost:3000/uploads'

export default class Upload extends Component {

  state = {
    file: {}
  }

  uploadImage = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    const data = new FormData()
    data.append("file", this.state.file)

    fetch(BASE_URL, {
      method: "POST",
      body: data
    })
    .then(res => res.json())
    .then(console.log)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.uploadImage}
            name="file"
            type="file"
          />
          <input type='submit' />
        </form>


      </div>
    )
  }
}
