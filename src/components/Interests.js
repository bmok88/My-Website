import React from 'react'

const Interests = () => (
  <div id="interests">
    <div id="interests-header">Software Interests</div>
    <div className="logo web">
      <div><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/web_dev_icon.png" /></div>
      <p className="interest">Web Development</p>
      <p>Creating responsive and interactive web applications with modern technologies that exhibit beautiful designs and exceptional features to optimize UX.</p>
    </div>
    <div className="logo js">
       <div><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/js_logo.png" /></div>
      <p className="interest">JavaScript</p>
      <p>Understanding the finest details of this powerful language and utilizing it to create web apps, design algorithms, and produce server-side code.</p>
    </div>
    <div className="logo api">
       <div><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/api_logo.png" /></div>
      <p className="interest">API Design</p>
      <p>Developing RESTful API's with best practices such as RESTful URL's and actions, query parameters, HTTP status codes, JSON, caching, and appropriate headers.</p>
    </div>
    <div className="logo system">
      <div><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/Webalys-Kameleon.pics-Graph-Magnifier+(1).ico" /></div>
      <p className="interest">System Design</p>
      <p>Architecting smart, scalable designs to common problems and bottlenecks that provide creative solutions from the client to server to database.</p>
    </div>
    <div id="future">
      Future Endeavors...
    </div>
    <div className="logo mobile">
       <div><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/mobile_logo.png" /></div>
      <p className="interest">Mobile Development</p>
    </div>
    <div className="logo game">
       <div><img src="https://s3-us-west-1.amazonaws.com/brendanmok.herokuapp.com/game_logo.png"/></div>
      <p className="interest">Game Development</p>
    </div>
  </div>
)

export default Interests;