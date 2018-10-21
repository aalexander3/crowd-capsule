import React, {Component} from 'react';
import PDF from 'react-pdf-js';

class PdfPreview extends Component {
  render() {
    return (
      <PDF
          file={this.props.url}
          // onDocumentComplete={this.onDocumentComplete}
          // page={this.state.page}
        />
    )
  }
}

export default PdfPreview;
