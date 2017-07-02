import React from 'react'

const Interests = () => (
  <div id="interests">
    <div id="interests-header">Software Interests</div>
    <div className="logo web">
      <div><img src="https://d2ln17qvd2qkrp.cloudfront.net/wp-content/uploads/service_blurb-web_development.png" /></div>
      <p className="interest">Web Development</p>
      <p>Creating responsive and interactive web applications with modern technologies that exhibit beautiful designs and exceptional features to optimize UX.</p>
    </div>
    <div className="logo js">
       <div><img src="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082014/js1_0.png?itok=BqOjTfHU" /></div>
      <p className="interest">JavaScript</p>
      <p>Understanding the finest details of this powerful language and utilizing it to create software, design algorithms, and of course mess around with.</p>
    </div>
    <div className="logo api">
       <div><img src="http://yvesfrateur.be/wp-content/uploads/2015/09/api-icon.png" /></div>
      <p className="interest">API Design</p>
      <p>Developing RESTful API's with best practices such as RESTful URL's and actions, query parameters, HTTP status codes, JSON, caching, and appropriate headers.</p>
    </div>
    <div className="logo system">
      <div><img src="images/Webalys-Kameleon.pics-Graph-Magnifier (1).ico" /></div>
      <p className="interest">System Design</p>
      <p>Architecting smart, scalable designs to common problems and bottlenecks that provide creative solutions from the client to server to database.</p>
    </div>
    <div id="future">
      Future Endeavors...
    </div>
    <div className="logo mobile">
       <div><img src="https://static1.squarespace.com/static/54691977e4b0773873087bc2/t/54ab600ce4b010b9ae3a9bef/1420517389330/Doozy+Labs+Mobile+Development+Icon" /></div>
      <p className="interest">Mobile Development</p>
    </div>
    <div className="logo game">
       <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vg_development_icon.svg/200px-Vg_development_icon.svg.png"/></div>
      <p className="interest">Game Development</p>
    </div>
  </div>
)

export default Interests;