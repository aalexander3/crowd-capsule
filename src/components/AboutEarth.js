import React, { Component } from 'react';
import Map from './Map'
import About from './About'

class AboutEarth extends Component {

  state={
    location: {}
  }

  hover = (location) => {
    console.log(location);
    this.setState({location: location})
  }

  leave = () => {

    this.setState({location: {}}, () => {
      console.log(this.state);
    })
  }

  render () {
    return (
    <div>
      {this.state.location.id ? <p>Test</p> : <About/>}
      <Map hover={this.hover} leave={this.leave}/>
    </div>
  )
  }

}

export default AboutEarth;
