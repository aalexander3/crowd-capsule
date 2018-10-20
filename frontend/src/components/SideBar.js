import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AboutEarth from './AboutEarth';
import Upload from './Upload';

class SideBar extends Component {

state = {
}

  render() {
    console.log('sidebar')
    return (
      <div className="sidebar_container">
        <h1>TEST A THING</h1>
        <Link to={ Upload }>Upload</Link>
        <Link to={ AboutEarth }>About Earth</Link>
        <Link to={ Map }>Map</Link>
      </div>
    );
  }
}

export default SideBar;
