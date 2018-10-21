import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {

state = {
}

  render() {
    console.log('sidebar')
    return (
      <div className="sidebar_container">
        <Link to="/upload">Upload</Link>
        <Link to="/aboutearth">About Earth</Link>
      </div>
    );
  }
}

export default SideBar;
