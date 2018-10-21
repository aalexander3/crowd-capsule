import React, { Component } from 'react';
import Map from './Map'
import About from './About'
import LocationUploads from './LocationUploads'

class AboutEarth extends Component {

  state = {
    location: {}
  }

  hover = (location) => {
    console.log(location);
    this.setState({location: location})
  }

  // leave = () => {
  //   this.setState({ location: {} })
  // }

  render () {
    return (
    <div>
      <div className="earth-paragraph">
        {this.state.location.id ? <LocationUploads /> : <About/>}
      </div>
      <Map hover={this.hover} />
    </div>
  )
  }

}

export default AboutEarth;
