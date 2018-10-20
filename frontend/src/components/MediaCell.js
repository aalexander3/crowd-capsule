import React, {Component, Fragment} from 'react';

class MediaCell extends Component {
  state = {
    filetype: ""
  }

  render(){
    return(
      <Fragment>
        <p>{this.props.type}</p>
        <img className="media-cells" src={this.props.url}/>
      </Fragment>
    )
  }
}

export default MediaCell;
