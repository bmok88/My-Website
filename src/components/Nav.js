import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="nav">
          <ul>
            <li><Link to="/" style={{ textDecoration: 'none' }}>About Me</Link></li>
            <li><Link to="/" style={{ textDecoration: 'none' }}>Projects</Link></li>
            <li><Link to="/" style={{ textDecoration: 'none' }}>Contact</Link></li>
            <li><a href="https://github.com/bmok88" style={{ textDecoration: 'none' }} target="_blank"><img src="http://imgur.com/BPgB3w6.png"/></a></li>
            <li><a href="https://www.linkedin.com/in/brendan-mok/" style={{ textDecoration: 'none' }} target="_blank"><img src="http://imgur.com/IoJNZPx.png"/></a></li>
          </ul>
        </div>
      </BrowserRouter>
    )
  }
}

export default Nav;