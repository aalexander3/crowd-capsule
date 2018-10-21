import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LangDropDown from './LangDropDown'

class Nav extends Component {

  render () {
    return (
      <div className="nav-container">
        <div className="item-container">
          <Link to="/">
            <img src="globe.svg"/>
          </Link>
            <LangDropDown />
            <div>Uploads</div>
            <div>Timer</div>
        </div>
      </div>
    )

  }

}

export default Nav;
