import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer'
import UploadCounter from './UploadCounter'
import {connect} from 'react-redux';
import {sendCloseClick} from '../actions/Actions'

class SideBar extends Component {

  handleClick = () => {
    this.props.sendClose()
  }

  render() {
    return (
      <div className="sidebar-container">
        <h1>CROWD CAPSULE</h1>
        <Link onClick={this.handleClick} to="/">
          <img src="home.svg" /> HOME
        </Link>
        <Link onClick={this.handleClick} to="/upload">
          <img src="upload2.svg" /> UPLOAD
        </Link>
        <Link onClick={this.handleClick} to="/about-earth">
          <img src="globe.svg" /> EARTH
        </Link>
        <Timer />
        <UploadCounter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { sendClose: () => dispatch(sendCloseClick())}
}

export default connect(null, mapDispatchToProps)(SideBar);
