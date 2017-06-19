import React from 'react'
import { Link, Router, Route, BrowserRouter } from 'react-router-dom'
import css from '../styles/app.scss'
import Nav from './Nav'
import AboutMe from './Aboutme'
import Applications from './Applications'
import Contact from './Contact'
class App extends React.Component {
  render() {
    return (
      <div>
        <div id="home">
          <div id="snippet">
            <div id="name">Brendan Mok</div>
            <p id="title">Software Engineer</p>
          </div>
        </div>
        <hr />
        <Nav />
        <AboutMe />
        <Applications />
        <Contact />
      </div>
    )
  }
}

export default App;