import React, { Component } from 'react'
import './styles/Custom.scss'
import { Provider } from 'react-redux'
import AboutEarth from './components/AboutEarth'
import Upload from './components/Upload'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import store from './store'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <SideBar />
          <div className="main-page">
            <Switch>
              <Route exact path="/" exact component={ Feed }/>
              <Route exact path="/about-earth" component={ AboutEarth }/>
              <Route exact path="/upload" component={ Upload }/>
            </Switch>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
