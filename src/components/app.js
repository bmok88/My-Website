import React from 'react'
import { Link, Router, Route, BrowserRouter } from 'react-router-dom'
import css from '../styles/app.scss'
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="intro">
          <h1>Brendan Mok</h1>
          <p>-Software Engineer-</p>
        </div>
        <hr />
        <Nav />
      </div>
    )
  }
}

export default App;