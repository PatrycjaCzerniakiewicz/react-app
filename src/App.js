import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import HeroFeatured from './components/HeroFeatured/HeroFeatured';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  
  return (
    <>
    <Router>
      <Nav />
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <HeroFeatured />
            </Route>
            <Route path="/search:name">

            </Route>
            <Route path="/hero/:id">

            </Route>
          </Switch> 
        </div> 
      </main>
      <footer>
        <div className="container">
          <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
        </div>
      </footer>
    </Router>
    </>
  );
}

export default App;
