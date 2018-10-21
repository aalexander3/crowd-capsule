import React, {Component, Fragment} from 'react';
import MediaRow from './MediaRow';
import FeedModal from './FeedModal'
import {connect} from 'react-redux';

class Feed extends Component {

  mediaRows = () => {
    return this.props.categories.map((category) => {
      return <MediaRow key={category.id} category={category} />
    })
  }

  render(){

    return (
      <Fragment>
        {this.mediaRows()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feedModalVisible: state.root.feedModalVisible,
    categories: state.root.media
  }
}

export default connect(mapStateToProps)(Feed);
