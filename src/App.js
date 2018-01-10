import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import '../src/assets/style.css'
import Nav from './containers/Nav.js'
import Home from './containers/Home.js'
import Portfolio from './containers/Portfolio.js'
import OtherWork from './containers/OtherWork.js'
import InfoBox from './containers/InfoBox.js'

const App = () => (
  <div className="App">
      <header>
        <Nav />
      </header>
      <div className="content row">
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
);

export default App;
