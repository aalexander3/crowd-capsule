import React, {Component, Fragment} from 'react';

class MediaCell extends Component {

  render(){
    return(
      <Fragment>
        <p>{this.props.type}</p>
        <img src={this.props.url}/>
      </Fragment>
    )
  }
}

export default MediaCell;
