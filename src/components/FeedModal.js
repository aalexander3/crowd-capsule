import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class FeedModal extends Component {
  render(){
    return (
      <Fragment>
        <div id="feed-modal">
          <video controls autoPlay src={this.props.url}/>
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

export default connect(mapStateToProps)(FeedModal);
