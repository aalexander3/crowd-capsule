import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer'
import UploadCounter from './UploadCounter'

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar-container">
        <h1>CROWD CAPSULE</h1>
        <Link to="/">
          <img src="globe.svg" /> HOME
        </Link>
        <Link to="/upload">
          <img src="globe.svg" /> UPLOAD
        </Link>
        <Link to="/about-earth">
          <img src="globe.svg" /> EARTH
        </Link>
        <Timer />
        <UploadCounter />
      </div>
    );
  }
}

export default SideBar;
