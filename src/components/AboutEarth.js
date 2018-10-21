import React, { Component } from 'react';
import Map from './Map'
import About from './About'
import MediaRow from './MediaRow'

class AboutEarth extends Component {

  state = {
    location: {}
  }

  hover = (location) => {
    this.setState({location: location})
  }

  leave = () => {
    this.setState({ location: {} })
  }

  renderRow = () => {
    return(
      <div>
        <MediaRow category={this.state.location} />
        <br/>
        <button className="submit" onClick={this.leave}>Back to Earth</button>
      </div>
    )
  }

  render () {
    return (
    <div>
      <div className="earth-paragraph">
        {this.state.location.id ? this.renderRow(): <About/>}
      </div>
      <Map hover={this.hover} />
    </div>
  )
  }

}

export default AboutEarth;
