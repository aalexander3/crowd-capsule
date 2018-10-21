import React, { Component } from 'react'
import './styles/Custom.scss'
import { Provider, connect } from 'react-redux'
import AboutEarth from './components/AboutEarth'
import Upload from './components/Upload'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { getUploads } from './actions/Actions'
import FeedModal from './components/FeedModal'

class App extends Component {
  componentDidMount(){
    this.props.getUploads()
  }

  render() {
    return (

        <div className="app">
          <SideBar />
          {this.props.feedModalVisible ? <FeedModal/> : ""}
            <div className={this.props.feedModalVisible ? "no-overflow" : "main-page"}>
              <Switch>
                <Route exact path="/" exact component={ Feed }/>
                <Route exact path="/about-earth" component={ AboutEarth }/>
                <Route exact path="/upload" render={() => <Upload {...this.props} /> }/>
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

export default withRouter(connect(mapStateToProps, { getUploads })(App))
