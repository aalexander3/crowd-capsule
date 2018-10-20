import React, { Component } from 'react'
import Feed from './Feed'
import Nav from './Nav'
import SideBar from './SideBar'

class Home extends Component {

  render () {
    return (
      <div>
        <Nav />
        <div className="home-container">
          <Feed />
        </div>
      </div>
    )
  }
}

export default Home
