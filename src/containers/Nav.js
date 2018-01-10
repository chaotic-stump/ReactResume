import React from 'react'

import ResumePDF from '../assets/SeanParker2016.pdf'

const Nav = () => (
  <nav className="row">
    <div className="col-xs-12 col-sm-6">
      <h2 className="logo"><a href="/">Sean R. Parker</a></h2>
    </div>
    <div className="col-xs-12 col-sm-6">
      <ul className="header col-xs-12 col-sm-12">
        <li><a href={ResumePDF} target="_blank">Resume</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/other-work">Other Work</a></li>
      </ul>
    </div>
  </nav>
)



export default Nav