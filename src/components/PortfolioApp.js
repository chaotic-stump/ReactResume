import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Nav from './Nav.js'
import Home from './Home.js'
import Portfolio from './Portfolio.js'
import OtherWork from './OtherWork.js'
import InfoBox from './InfoBox.js'

const PortfolioApp = () => (
  <div className="App">
      <header>
        <Nav />
      </header>
      <div className="content row">
      <div className="col-xs-12 col-sm-8">
        <div className="main col-xs-12 col-sm-12">

    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route Path="/other-work" component={OtherWork} />
        </Switch>
    </BrowserRouter>
        <InfoBox />
        </div>
      </div>

      </div>
  </div>
);

export default PortfolioApp;
