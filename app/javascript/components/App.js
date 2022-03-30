import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import HelloRailsReact from './HelloRailsReact'

import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/hello" element={<HelloRailsReact greeting="friend" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
