import React, { Component } from 'react'


export default class Timer extends Component {
  state = {
    time: 10000000,
    interval: 0
  }

  componentDidMount(){
    let interval = this.startCount()
    this.setState({
      interval
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
    this.setState({
      interval: 0
    })
  }

  startCount = () => {
    setInterval(() => {
      this.setState(prevState => ({ time: --prevState.time }))
    }, 1000)
  }

  render (){
    return (
      <div>
        <h3>Seconds until blastoff: {this.state.time}</h3>
      </div>
    )
  }
}
