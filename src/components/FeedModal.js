import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {sendCloseClick} from '../actions/Actions'
import closeButton from '../samples/close.svg'

class FeedModal extends Component {

  handleClick = () => {
    this.props.sendClose()
  }

  renderMedia = () => {
    switch(this.props.type){
      case '.mp4':
        return <video controls autoPlay src={this.props.url}/>
      case '.jpg':
        return <img src={this.props.url}/>
      case '.png':
        return <img src={this.props.url}/>
      case '.mp3':
        return <audio controls autoplay src={this.props.url}/>
      default:
        return <p>{"We can't find this file. 😢"}</p>
    }
  }

  render(){
    return (
      <Fragment>
        <div id="feed-modal">
          {this.renderMedia()}
          <img src={closeButton} onClick={this.handleClick} id="close-button"/>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.root.feedModalVisible.url,
    type: state.root.feedModalVisible.type
  }
}

const mapDispatchToProps = (dispatch) => {
  return { sendClose: () => dispatch(sendCloseClick())}
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedModal);
