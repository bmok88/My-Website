import React from 'react'
import { Link, Router, Route, BrowserRouter } from 'react-router-dom'
import css from '../styles/app.scss'
import AboutMe from './Aboutme'
import Applications from './Applications'
import Skills from './Skills'
import Interests from './Interests'

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="home">
          <div id="snippet">
            <div id="name">Brendan Mok</div>
            <p id="title">Software Engineer</p>
          </div>
          <div id="icons">
            <div className="user">
            <a href="#me">
              <div className="glyphicon glyphicon-user">
                <div className="label">About Me</div>
              </div>
            </a>
            </div>
            <div className="briefcase">
            <a href="#applications">
              <div className="glyphicon glyphicon-briefcase">
                <div className="label">Applications</div>
              </div>
            </a>
            </div>
            <div className="education">
            <a href="#skills">
              <div className="glyphicon glyphicon-education">
                <div className="label">Skills</div>
              </div>
            </a>
            </div>
            <div className="paperclip">
              <a href="#interests">
              <div className="glyphicon glyphicon-paperclip">
                <div className="label">Interests</div>
              </div>
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/bmok88"><img src="images/GitHub-Mark-Light-64px.png" height="75" width="75"/></a>
              <div className="label">GitHub</div>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/brendan-mok/"><img src="images/In-White-66px-R.png" height="65" width="80"/></a>
              <div className="label">LinkedIn</div>
            </div>
            <div className="comment">
            <a href="#contact">
              <div className="glyphicon glyphicon-comment">
                <div className="label">Contact</div>
              </div>
            </a>
            </div>
          </div>
        </div>
        <AboutMe />
        <Interests />
        <Applications />
        <Skills />
      </div>
    )
  }
}

export default App;