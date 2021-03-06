import React from 'react'

class Applications extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    document.getElementById(e).style.width = "100%";
  }

  render() {
    return (
      <div id="applications">
        <div id="applications-header">Full Stack Applications</div>
          <div className="app" ref="gauntlet">
            <div className="app image"><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Gauntlet.png"/></div>
            <button id="view" className="btn btn-default" onClick={() => this.handleButtonClick("gaunt")}>View</button>
            <a href="https://github.com/bmok88/TheGauntlet" target="_blank"><button id="git" className="btn btn-default">Github</button></a>
            <p className="apptitle">The Gauntlet</p>
            <p>React/Redux, Node.js/Express, AWS S3, MySQL</p>
          </div>
          <div className="app" ref="wefitly">
            <div className="app image"><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Screen+Shot+2017-03-08+at+3.52.42+PM.png"/></div>
            <button id="view" className="btn btn-default" onClick={() => this.handleButtonClick("wefit")}>View</button>
            <a href="https://github.com/wefitly/wefitly" target="_blank"><button id="git" className="btn btn-default">Github</button></a>
            <p className="apptitle">WeFitly</p>
            <p>React, Node.js/Express, MongoDB/Mongoose</p>
          </div>
          <div className="app" ref="rainsong">
            <div className="app image"><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Screen+Shot+2017-03-08+at+5.34.24+PM.png"/></div>
            <button id="view" className="btn btn-default" onClick={() => this.handleButtonClick("rain")}>View</button>
            <a href="https://github.com/bmok88/RainSong/tree/playList" target="_blank"><button id="git" className="btn btn-default">Github</button></a>
            <p className="apptitle">RainSong</p>
            <p>Angular, Node.js/Express, MongoDB/Mongoose</p>
          </div>
      </div>
    );
  }
}

export default Applications;