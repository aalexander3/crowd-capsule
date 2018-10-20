import React, { Component } from 'react';
import './Custom.scss';
import { Provider } from 'react-redux';
import Home from './components/Home';
import AboutEarth from './components/AboutEarth';
import Upload from './components/Upload';
import store from './store';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            < Route exact path="/" exact component={ Home }/>
            < Route path="/aboutearth" exact component={ AboutEarth }/>
            < Route path="/upload" exact component={ Upload }/>
        </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
