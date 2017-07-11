import React from 'react'

class Overlay extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    console.log(document.getElementsByClassName('cover'))
    console.log(e)
    document.getElementsByClassName('cover')[e].style.width = 0;
  }

  render() {
    return (
      <div id="overlay">
        <div id="gaunt" className="cover"><a href="javascript:void(0)" onClick={() => this.handleClose(0)}>&times;</a><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Gauntlet.png"/><p>The Gauntlet is a social media platform that allows users to embrace competition in a fun and friendly manner. Users can submit custom challenges where others can respond to and try to "one-up" the challenge. People will vote on the challenges and responses, and users of the application are ranked based on total up votes. At its core, The Gauntlet is designed to be a mobile app that encourages users to be more social and active. </p></div>
        <div id="wefit" className="cover"><a href="javascript:void(0)" onClick={() => this.handleClose(1)}>&times;</a><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Screen+Shot+2017-03-08+at+3.52.42+PM.png"/><p>WeFitly is a community driven marketplace for personal training. Depending on what they desire, users can book either a private or group service with a personal trainer set to their schedule and goals. Personal trainers have the option to confirm or reject the booking. Further features would include a review/rating system for each trainer so that users can make a more educated decision on which trainer they would want to book.</p></div>
        <div id="rain" className="cover"><a href="javascript:void(0)" onClick={() => this.handleClose(2)}>&times;</a><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Screen+Shot+2017-03-08+at+5.34.24+PM.png"/><p>RainSong is a location and weather based music generator. On initial load, this application will give you a playlist of music that fits the current mood of the weather. Users can customize their playlists and share it with others.</p></div>
      </div>
    )
  }
}

export default Overlay;