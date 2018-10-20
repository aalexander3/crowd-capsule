import React, {Component, Fragment} from 'react';
import MediaRow from './MediaRow';
import {connect} from 'react-redux';

class Feed extends Component {

  render(){
    const mediaRows = this.props.categories.map((category) => {
      return <MediaRow key={category} category={category}/>
    })

    return (
      <Fragment>
        {mediaRows}
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
