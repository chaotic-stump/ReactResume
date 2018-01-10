import React from 'react'

const Nav = () => (
  <nav className="row">
    <div className="col-xs-12 col-sm-6">
      <h2 className="logo"><a href="/">Sean R. Parker</a></h2>
    </div>
    <div className="col-xs-12 col-sm-6">
      <ul className="header col-xs-12 col-sm-12">
        <li><a href="pdf/SeanParker2016.pdf" target="_blank">Resume</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/other-work">Other Work</a></li>
      </ul>
    </div>
  </nav>
)



export default Nav