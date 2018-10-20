import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './Custom.scss';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          </header>
              <h1>ICE STUFF</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
