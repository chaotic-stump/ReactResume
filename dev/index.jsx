import React from "react";
import ReactDOM from "react-dom";
import {IndexRoute, IndexLink, Link, hashHistory, Router, Route} from 'react-router';


  var destination = document.querySelector("#container");

  var Home = React.createClass({
    render: function() {
      return (
        <div className="col-xs-12 col-sm-8">
          <div className="main col-xs-12 col-sm-12">

            <h2>Welcome to my portfolio site.</h2>
            <p>My name is Sean Parker.</p>
            <p>Discovering my love for web development in college, I made the transition from journalist to full time coder in 2012. As you can see by my resum&egrave;, I've worked in startups, corporate, and government organizations since then.</p>
            <p>I'm a team player who quickly picks up on how your organization works together, and a self starter who independently gets things done. </p>

            <p>Have a look around at my portfolio, github and linkedin to see how I can fit on your team.</p>
          </div>
        </div>
      );
    }
  });

  // Portfolio page
  var Portfolio = React.createClass({
    render: function() {
      return (
        <div className="col-xs-12 col-sm-8">
          <div className="main col-xs-12 col-sm-12">
            <h2>Portfolio</h2>
            <p>Creating functional interfaces is one of my specialties. The sites in this gallery are custom themes built on WordPress through a Yootheme framework.</p>

            <div id="myCarousel" className="carousel slide" data-ride="carousel">


              { /* Wrapper for slides */ }
              <div className="carousel-inner" role="listbox">
                <div className="item bl-slide active">
                  <a href="http://www.bell-law.com/" rel="nofollow" target="blank"><img src="images/Bell-Law.jpg" alt="Christopher John Designs screen shot" /></a>
                </div>

                <div className="item">
                  <a href="http://christopherjohndesigns.com" rel="nofollow" target="blank"><img src="images/Christopher-John-Design.jpg" alt="Christopher John Designs screen shot" /></a>
                </div>

                <div className="item">
                  <a href="http://collierpodiatry.com/" rel="nofollow" target="blank"><img src="images/Collier-Podiatry.jpg" alt="Collier Podiatry website screenshot" /></a>
                </div>

                <div className="item">
                  <a href="http://valleyoakdentalgroup.com/" rel="nofollow" target="blank"><img src="images/Valley-Oak.jpg" alt="Valley Oak Dental" /></a>
                </div>

                <div className="item">
                  <a href="http://arlingtonschoolofmusic.com/" rel="nofollow" target="blank"><img src="images/Arlington-School-of-Music.jpg" alt="Arlington School of Music" /></a>
                </div>

                <div className="item">
                  <a href="http://latahcreekfamilydentistry.com/" rel="nofollow" target="blank"><img src="images/Latah-Creek.jpg" alt="Latah Creek Family Dentistry" /></a>
                </div>

                <div className="item">
                  <a href="http://altaridge.com/" rel="nofollow" target="blank"><img src="images/Alta-Ridge.jpg" alt="Alta Ridge" /></a>
                </div>

                <div className="item">
                  <a href="https://web.archive.org/web/20150117075222/http://jklandscape.com/" rel="nofollow" target="blank"><img src="images/JK-Landscape.jpg" alt="JK Landscape" /></a>
                </div>

                <div className="item">
                  <a href="http://www.aabal.com/" rel="nofollow" target="blank"><img src="images/Aabal-Heating-Cooling.jpg" alt="Aabal Heating and Cooling" /></a>
                </div>

                <div className="item">
                  <a href="http://www.zoblaw.com/" rel="nofollow" target="blank"><img src="images/Zobrist-Law.jpg" alt="Zobrist Law" /></a>
                </div>

                <div className="item">
                  <a href="http://swfna.com/" rel="nofollow" target="blank"><img src="images/SWFNA.jpg" alt="South West Florida Neurosurgical Association" /></a>
                </div>

                <div className="item">
                  <a href="http://star-brite.com/" rel="nofollow" target="blank"><img src="images/Starbright.jpg" alt="Starbright" /></a>
                </div>

                <div className="item">
                  <a href="http://septictechnologies.com/" rel="nofollow" target="blank"><img src="images/Septic-Technologies.jpg" alt="Septic-Technologies" /></a>
                </div>

                <div className="item">
                  <a href="http://www.reliabletrans.com/" rel="nofollow" target="blank"><img src="images/Reliable-Transportation.jpg" alt="Reliable-Transportation" /></a>
                </div>

                <div className="item">
                  <a href="http://oandldoorsystems.com/" rel="nofollow" target="blank"><img src="images/O-L-Door.jpg" alt="O and L door systems" /></a>
                </div>

                <div className="item">
                  <a href="http://www.muellerinteriors.com/" rel="nofollow" target="blank"><img src="images/Mueller-Interiors.jpg" alt="Mueller Interiors" /></a>
                </div>

                <div className="item">
                  <a href="http://msglassoutlet.com/" rel="nofollow" target="blank"><img src="images/MS-Glass-Outlet.jpg" alt="MS Glass Outlet" /></a>
                </div>

                <div className="item">
                  <a href="http://modernpumpinc.com/" rel="nofollow" target="blank"><img src="images/Modern-Pump-Inc.jpg" alt="Modern Pump Incorporated" /></a>
                </div>

                <div className="item">
                  <a href="http://mccreapc.com" rel="nofollow" target="blank"><img src="images/McCrea-PC.jpg" alt="McCrea PC" /></a>
                </div>

                <div className="item">
                  <a href="http://kreislerlaw.com/" rel="nofollow" target="blank"><img src="images/Kreisler-Law.jpg" alt="Kreisler Law" /></a>
                </div>

                <div className="item">
                  <a href="http://greshaminjurylaw.com/" rel="nofollow" target="blank"><img src="images/Gresham-Injury-Law.jpg" alt="Gresham Injury Law" /></a>
                </div>

              </div>



              {/*  Left and right controls */}
              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      );
    }
  });

  // Other Work page
  var otherWork = React.createClass({
    render: function() {
      return (
        <div className="col-xs-12 col-sm-8">
          <div className="main col-xs-12 col-sm-12">
            <h2>OTHER WORK</h2>
            <p>Along with web development I have a varied skillset in other areas.</p>
            <ul>
              <li>As Editor-in-Chief and Managing Editor at BYU-Idaho's newspaper, The Scroll, I oversaw the visual layout/design of a weekly publication.</li>
              <li>SEO Account Manager for 3 months - Google Analytics, Place Listings and Keywork Research.</li>
              <li>Basic Graphic Design - <a href="images/GenMillsFlier.pdf" target="_blank">brochure</a> and <a href="images/InfoKitSample.pdf" target="_blank">infokit</a> built in Adobe Illustrator.</li>
              <li>Team Leader for the winning <a href="images/Booklet.pdf">ad campaign</a> in my Advertising class. Which I laid out with Adobe InDesign.</li>
            </ul>

            <p>An example of an e-commerce redesign I did on my own time, where I also designed the visual components in Photoshop to match the theme of existing images from the old site. The old site was built with html tables. A practice that has been outdated for several years.</p>
            <p>Click on the images below to interact with the full sites.</p>
            <div className="epicRedesign row">
              <div className="epicOld col-xs-12 col-md-6">
                <p><b>Before</b></p>
                <a href="https://web.archive.org/web/20160311020159/http://epiclongboards.com/" rel="nofollow" target="blank"><img src="images/oldEpicBoards.png" alt="old epic longboards website" /></a>
              </div>
              <div className="epicNew col-xs-12 col-md-6">
                <p><b>After</b></p>
                <a href="http://epic.seanrparker.com" rel="nofollow" target="blank"><img src="images/newEpicBoards.png" alt="new Epic Longboards site designed by Sean R Parker" /></a>
                <a href="http://epic.seanrparker.com/product-category/plywood-longboards/" rel="nofollow" target="blank"><img src="images/epicNewCategory.png" alt="Epic Longboards product category page designed by Sean R Parker" /></a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  // Sidebar - infobox
  var InfoBox = React.createClass({
    render: function() {
      return (
        <div className="col-xs-12 col-sm-4">
          <div className="infobox col-xs-12 col-sm-12">
            <h2>Contact:</h2>
            <ul>
              <li><i className="fa fa-linkedin fa-2" aria-hidden="true"></i><b>Linkedin:</b> <a href="http://linkedin.com/in/seanrparker">/in/seanrparker</a> </li>
              <li><b><span className="fa fa-linkedin fa-2"></span>Github:</b> <a href="http://github.com/seanrparker">/SeanRParker</a></li>
            </ul>
          </div>
        </div>
      );
    }
  });

  // App template
  var App = React.createClass({
    render: function() {
      return (
        <div>
          <nav className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="logo"><IndexLink activeClassName="active" to="/">Sean R. Parker</IndexLink></h2>
            </div>
            <div className="col-xs-12 col-sm-6">
              <ul className="header col-xs-12 col-sm-12">
                <li><a href="pdf/SeanParker2016.pdf" target="_blank">Resume</a></li>
                <li><Link activeClassName="active" to="/web-design">Web Design</Link></li>
                <li><Link activeClassName="active" to="/other-work">Other Work</Link></li>
              </ul>
            </div>
          </nav>
          <div className="content row">
            {this.props.children}
            <InfoBox/>
          </div>
        </div>
      );
    }
  });

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/web-design" component={Portfolio} />
        <Route path="/other-work" component={otherWork} />
      </Route>
    </Router>,
    destination
  );
  // The 'OLD' way (React 101)
  // ReactDOM.render(
  //   <div>
  //     <App/>
  //   </div>,
  //   destination
  // );
