import React, {Component} from 'react';
import { connect } from 'react-redux';
import {sendCloseClick} from '../actions/Actions'

class CloseButton extends Component {
  handleClick = () => {
    this.props.sendClose()
  }

  render(){
    return(
      <button onClick={this.handleClick} id="close-button">Go Back</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { sendClose: () => dispatch(sendCloseClick())}
}

export default connect(null, mapDispatchToProps)(CloseButton);
