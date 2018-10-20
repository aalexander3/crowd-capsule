import React, { Component } from 'react';

class Nav extends Component {

  render () {
    return (
      <div className="nav-container">
        <div className="item-container">
            <img src="globe.svg" />

            <div>Uploads</div>
            <div>Timer</div>
        </div>
      </div>
    )

  }

}

export default Nav;
