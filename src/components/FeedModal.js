import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeedModal extends Component {
  render(){
    return (
      <div id="feed-modal">
        <video controls autoPlay src={this.props.url}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.root.feedModalVisible
  }
}

export default connect(mapStateToProps)(FeedModal);
