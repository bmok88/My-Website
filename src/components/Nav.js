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
            <li><Link to="/" style={{ textDecoration: 'none' }}><img src="http://imgur.com/BPgB3w6.png"/></Link></li>
            <li><Link to="/" style={{ textDecoration: 'none' }}><img src="http://imgur.com/IoJNZPx.png"/></Link></li>
          </ul>
        </div>
      </BrowserRouter>
    )
  }
}

export default Nav;