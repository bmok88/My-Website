import React from 'react'
import { Link, Router, Route, BrowserRouter } from 'react-router-dom'
import css from '../styles/app.scss'
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="intro">
          <div id="snippet">
            <h1 id="name">Brendan Mok</h1>
            <p className="title">Software Engineer</p>
          </div>
        </div>
        <hr />
        <Nav />
      </div>
    )
  }
}

export default App;