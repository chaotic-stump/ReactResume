import React from 'react';

// images
import EpicBefore from '../assets/images/oldEpicBoards.png';
import EpicAfter from '../assets/images/newEpicBoards.png';
import EpicCategory from '../assets/images/epicNewCategory.png';

// Design samples
import AdBook from '../assets/Booklet.pdf';
import GenMills from '../assets/GenMillsFlier.pdf';
import InfoKit from '../assets/InfoKitSample.pdf';


const OtherWork = () => (
  <div>
      <h2>OTHER WORK</h2>
      <p>Along with web development I have a varied skillset in other areas.</p>
      <ul>
        <li>As Editor-in-Chief and Managing Editor at BYU-Idaho&apos;s newspaper, The Scroll, I oversaw the visual layout/design of a weekly publication.</li>
        <li>SEO Account Manager for 3 months - Google Analytics, Place Listings and Keyword Research.</li>
        <li>Basic Graphic Design - <a href={GenMills} target="_blank">brochure</a> and <a href={InfoKit} target="_blank">infokit</a> built in Adobe Illustrator.</li>
        <li>Team Leader for the winning <a href={AdBook} target="_blank">ad campaign</a> in my Advertising class. Which I laid out with Adobe InDesign.</li>
      </ul>

      <p>An example of an e-commerce redesign I did on my own time, where I also designed the visual components in Photoshop to match the theme of existing images from the old site. The old site was built with html tables. A practice that has been outdated for several years.</p>
      <p>Click on the images below to interact with the full sites.</p>
      <div className="epicRedesign row">
        <div className="epicOld col-xs-12 col-md-6">
          <p><b>Before</b></p>
          <a href="https://web.archive.org/web/20160311020159/http://epiclongboards.com/" rel="nofollow" target="blank"><img src={EpicBefore} alt="old epic longboards website" /></a>
        </div>
        <div className="epicNew col-xs-12 col-md-6">
          <p><b>After</b></p>
          <a href="http://epic.seanrparker.com" rel="nofollow" target="blank"><img src={EpicAfter} alt="new Epic Longboards site designed by Sean R Parker" /></a>
          <a href="http://epic.seanrparker.com/product-category/plywood-longboards/" rel="nofollow" target="blank"><img src={EpicCategory} alt="Epic Longboards product category page designed by Sean R Parker" /></a>
        </div>
      </div>
    </div>

)

export default OtherWork
