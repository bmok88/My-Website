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
          <div id="icons">
            <div className="user">
              <div className="glyphicon glyphicon-user">
                <div className="label">About Me</div>
              </div>
            </div>
            <div className="briefcase">
              <div className="glyphicon glyphicon-briefcase">
                <div className="label">Applications</div>
              </div>
            </div>
            <div className="education">
              <div className="glyphicon glyphicon-education">
                <div className="label">Technical Skills</div>
              </div>
            </div>
            <div className="folder">
              <div className="glyphicon glyphicon-folder-open">
                <div className="label">Resume</div>
              </div>
            </div>
            <div className="github">
              <img src="images/GitHub-Mark-Light-64px.png" height="80" width="80"/>
              <div className="label">GitHub</div>
            </div>
            <div className="linkedin">
              <img src="images/In-White-66px-R.png" height="70" width="85"/>
              <div className="label">LinkedIn</div>
            </div>
            <div className="comment">
              <div className="glyphicon glyphicon-comment">
                <div className="label">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <Nav />
        <AboutMe />
        <Applications />
        <Contact />
      </div>
    )
  }
}

export default App;