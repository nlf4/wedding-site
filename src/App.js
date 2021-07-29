import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Registry from './components/Registry';
import Details from './components/Details';
import RSVP from './components/Rsvp';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ourstory" component={OurStory} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/details" component={Details} />
        <Route exact path='/rsvp' component={RSVP} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
