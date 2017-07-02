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
            <p>Software Engineer</p>
          </div>
          <div id="icons">
            <div className="icon user">
            <a href="#me">
              <div className="glyphicon glyphicon-user"></div>
              <div className="label">About Me</div>
            </a>
            </div>
            <div className="icon briefcase">
            <a href="#applications">
              <div className="glyphicon glyphicon-briefcase"></div>
              <div className="label">Applications</div>
            </a>
            </div>
            <div className="icon education">
            <a href="#skills">
              <div className="glyphicon glyphicon-education"></div>
              <div className="label">Skills</div>
            </a>
            </div>
            <div className="icon paperclip">
              <a href="#interests">
              <div className="glyphicon glyphicon-paperclip"></div>
              <div className="label">Interests</div>
              </a>
            </div>
            <div className="icon github">
              <a href="https://github.com/bmok88"><img src="images/GitHub-Mark-Light-64px.png" className="glyphicon github"/>
              <div className="label">GitHub</div>
              </a>
            </div>
            <div className="icon linkedin">
              <a href="https://www.linkedin.com/in/brendan-mok/"><img src="images/In-White-66px-R.png" className="glyphicon linkedin"/>
                <div className="label">LinkedIn</div>
              </a>
            </div>
            <div className="icon comment">
            <a href="#contact">
              <div className="glyphicon glyphicon-comment"></div>
              <div className="label">Contact</div>
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