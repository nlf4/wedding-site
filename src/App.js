import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/our-story" component={OurStory} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/details" component={Details} />
        <Route exact path='/rsvp' component={RSVP} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
