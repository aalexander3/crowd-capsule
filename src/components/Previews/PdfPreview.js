import React, {Component} from 'react';
import PDF from 'react-pdf-js';

class PdfPreview extends Component {
  render() {
    return (
      <div>
        <PDF
            file={this.props.url}
            // onDocumentComplete={this.onDocumentComplete}
            // page={this.state.page}
          />
      </div>
    )
  }
}

export default PdfPreview;
