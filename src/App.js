import React, { Component } from 'react'
import './styles/Custom.scss'
import AboutEarth from './components/AboutEarth'
import Upload from './components/Upload'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import { Route, Switch } from 'react-router-dom'
import FeedModal from './components/FeedModal'
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (

        <div className="app">
          {this.props.feedModalVisible ? <FeedModal/> : ""}
          <SideBar />
          <div className="main-page">
            <Switch>
              <Route exact path="/" exact component={ Feed }/>
              <Route exact path="/about-earth" component={ AboutEarth }/>
              <Route exact path="/upload" component={ Upload }/>
            </Switch>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    feedModalVisible: state.root.feedModalVisible,
  }
}

export default connect(mapStateToProps)(App);
