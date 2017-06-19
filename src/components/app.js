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
            <h1 id="name">Brendan Mok</h1>
            <p className="title">Software Engineer</p>
            <p className="descrip">Welcome to my island in this sea of computers we call the Internet!</p>
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