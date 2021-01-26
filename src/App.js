import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import HeroFeatured from './components/HeroFeatured/HeroFeatured';

function App() {
  
  return (
    <>
      <Nav></Nav>
      <main>
        <div className="container">
          <HeroFeatured />
        </div> 
      </main>
      <footer>
      </footer>

    </>
  );
}

export default App;
