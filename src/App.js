import React, { useEffect, useState } from 'react'
import './App.css';
import { getBasicHeroInfo } from './requests'
import Nav from './components/Nav/Nav';

const featuredHeroesIds = [10, 502, 505]

function App() {
  useEffect(() => {
    fetchAndDisplayHeroes()
  }, []);

  const [featuredHeroesList, setfeaturedHeroesList] = useState([]);

  const fetchAndDisplayHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const { data } = await getBasicHeroInfo(heroId)
      heroes.push(data)
    }
    setfeaturedHeroesList(heroes)
  }
  return (
    <>
      <Nav></Nav>
      <main>
        <section className='featured'>
          {featuredHeroesList.map(({name, imgUrl, powerstats}) => (
          <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={`${name}`} />
            <div className='featured__hero__stats'>
              <div>
                <p>{powerstats.combat}</p>
              </div>
              <div>
                <p>{powerstats.durability}</p>
              </div>
              <div>
                <p>{powerstats.intelligence}</p>
              </div>
              <div>
                <p>{powerstats.speed}</p>
              </div>
              <div>
                <p>{powerstats.strength}</p>
              </div>
            </div>
          </div>
          ))}
        </section>
      </main>
      <footer>

      </footer>

    </>
  );
}

export default App;
