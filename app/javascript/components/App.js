import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Route } from 'react-router-dom'

import HelloRailsReact from './HelloRailsReact'

import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloRailsReact greeting="friend"/>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
