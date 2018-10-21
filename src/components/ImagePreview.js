import React, {Component} from 'react';
import {connect} from 'react-redux';
import { feedModalVisible } from '../../actions/Actions';

class ImagePreview extends Component {
  handleClick = () => {
    console.log("clicked");
    // this.props.sendClick(this.props.url);
  }

  render() {
    return (
      <div>
        <img onClick={() => this.handleClick()} height="150" width="250" src={this.props.url}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendClick: (url) => dispatch(feedModalVisible(url))
  }
}

export default connect(null, mapDispatchToProps)(ImagePreview);
