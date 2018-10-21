import React, {Component, Fragment} from 'react';
import MediaRow from './MediaRow';
import {connect} from 'react-redux';

class Feed extends Component {

  mediaRows = () => {
    return this.props.categories.map((category) => {
      return <MediaRow key={category} category={category}/>
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
    categories: ["Art", "Science", "Literature"]
  }
}

export default connect(mapStateToProps)(Feed);
