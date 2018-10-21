import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {sendCloseClick} from '../actions/Actions'

class FeedModal extends Component {

  handleClick = () => {
    this.props.sendClose()
  }

  render(){
    return (
      <Fragment>
        <div id="feed-modal">
          <video controls autoPlay src={this.props.url}/>
          <button onClick={this.handleClick} id="close-button">Go Back</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.root.feedModalVisible
  }
}

const mapDispatchToProps = (dispatch) => {
  return { sendClose: () => dispatch(sendCloseClick())}
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedModal);
