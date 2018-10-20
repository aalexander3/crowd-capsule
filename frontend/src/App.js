import React, { Component } from 'react';
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
              <h1>FEED STUFF</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
