import React from 'react'

// Images - TODO refactor so it just calls one folder - probably a function with keys and map
import BellLaw from '../assets/images/Bell-Law.jpg'
import ChristopherJohnDesign from '../assets/images/Christopher-John-Design.jpg'
import CollierPodiatry from '../assets/images/Collier-Podiatry.jpg'
import ValleyOak from '../assets/images/Valley-Oak.jpg'
import ArlingtonSchoolOfMusic from '../assets/images/Arlington-School-of-Music.jpg'
import LatahCreek from '../assets/images/Latah-Creek.jpg'
import AltaRidge from '../assets/images/Alta-Ridge.jpg'
import JKLandscape from '../assets/images/JK-Landscape.jpg'
import AabalHC from '../assets/images/Aabal-Heating-Cooling.jpg'
import Zobrist from '../assets/images/Zobrist-Law.jpg'
import SWFNA from '../assets/images/SWFNA.jpg'
import StarBright from '../assets/images/Starbright.jpg'
import SepticTech from '../assets/images/Septic-Technologies.jpg'
import RelTransport from '../assets/images/Reliable-Transportation.jpg'
import OLDoors from '../assets/images/O-L-Door.jpg'
import MuellerInteriors from '../assets/images/Mueller-Interiors.jpg'
import MSGlass from '../assets/images/MS-Glass-Outlet.jpg'
import ModernPump from '../assets/images/Modern-Pump-Inc.jpg'
import McCreaPC from '../assets/images/McCrea-PC.jpg'
import KreislerLaw from '../assets/images/Kreisler-Law.jpg'
import GreshamInjLaw from '../assets/images/Gresham-Injury-Law.jpg'


const Portfolio = () => (
  <div className="col-xs-12 col-sm-8">
    <div className="main col-xs-12 col-sm-12">
      <h2>Portfolio</h2>
      <p>Creating functional interfaces is one of my specialties. The sites in this gallery are custom themes built on WordPress through a Yootheme framework.</p>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">


        { /* Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item bl-slide active">
            <a href="http://www.bell-law.com/" rel="nofollow" target="blank"><img src={BellLaw} alt="Bell Law" /></a>
          </div>

          <div className="item">
            <a href="http://christopherjohndesigns.com" rel="nofollow" target="blank"><img src={ChristopherJohnDesign} alt="Christopher John Designs screen shot" /></a>
          </div>

          <div className="item">
            <a href="http://collierpodiatry.com/" rel="nofollow" target="blank"><img src={CollierPodiatry} alt="Collier Podiatry website screenshot" /></a>
          </div>

          <div className="item">
            <a href="http://valleyoakdentalgroup.com/" rel="nofollow" target="blank"><img src={ValleyOak} alt="Valley Oak Dental" /></a>
          </div>

          <div className="item">
            <a href="http://arlingtonschoolofmusic.com/" rel="nofollow" target="blank"><img src={ArlingtonSchoolOfMusic} alt="Arlington School of Music" /></a>
          </div>

          <div className="item">
            <a href="http://latahcreekfamilydentistry.com/" rel="nofollow" target="blank"><img src={LatahCreek} alt="Latah Creek Family Dentistry" /></a>
          </div>

          <div className="item">
            <a href="http://altaridge.com/" rel="nofollow" target="blank"><img src={AltaRidge} alt="Alta Ridge" /></a>
          </div>

          <div className="item">
            <a href="https://web.archive.org/web/20150117075222/http://jklandscape.com/" rel="nofollow" target="blank"><img src={JKLandscape} alt="JK Landscape" /></a>
          </div>

          <div className="item">
            <a href="http://www.aabal.com/" rel="nofollow" target="blank"><img src={AabalHC} alt="Aabal Heating and Cooling" /></a>
          </div>

          <div className="item">
            <a href="http://www.zoblaw.com/" rel="nofollow" target="blank"><img src={Zobrist} alt="Zobrist Law" /></a>
          </div>

          <div className="item">
            <a href="http://swfna.com/" rel="nofollow" target="blank"><img src={SWFNA} alt="South West Florida Neurosurgical Association" /></a>
          </div>

          <div className="item">
            <a href="http://star-brite.com/" rel="nofollow" target="blank"><img src={StarBright} alt="Starbright" /></a>
          </div>

          <div className="item">
            <a href="http://septictechnologies.com/" rel="nofollow" target="blank"><img src={SepticTech} alt="Septic-Technologies" /></a>
          </div>

          <div className="item">
            <a href="http://www.reliabletrans.com/" rel="nofollow" target="blank"><img src={RelTransport} alt="Reliable-Transportation" /></a>
          </div>

          <div className="item">
            <a href="http://oandldoorsystems.com/" rel="nofollow" target="blank"><img src={OLDoors} alt="O and L door systems" /></a>
          </div>

          <div className="item">
            <a href="http://www.muellerinteriors.com/" rel="nofollow" target="blank"><img src={MuellerInteriors} alt="Mueller Interiors" /></a>
          </div>

          <div className="item">
            <a href="http://msglassoutlet.com/" rel="nofollow" target="blank"><img src={MSGlass} alt="MS Glass Outlet" /></a>
          </div>

          <div className="item">
            <a href="http://modernpumpinc.com/" rel="nofollow" target="blank"><img src={ModernPump} alt="Modern Pump Incorporated" /></a>
          </div>

          <div className="item">
            <a href="http://mccreapc.com" rel="nofollow" target="blank"><img src={McCreaPC} alt="McCrea PC" /></a>
          </div>

          <div className="item">
            <a href="http://kreislerlaw.com/" rel="nofollow" target="blank"><img src={KreislerLaw} alt="Kreisler Law" /></a>
          </div>

          <div className="item">
            <a href="http://greshaminjurylaw.com/" rel="nofollow" target="blank"><img src={GreshamInjLaw} alt="Gresham Injury Law" /></a>
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
)

export default Portfolio