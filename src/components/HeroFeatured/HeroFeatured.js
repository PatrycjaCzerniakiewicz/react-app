import React, { useEffect, useState } from 'react'
import './HeroFeatured.css'
import { getBasicHeroInfo } from '../../requests'
import HeroSimplified from '../HeroSimplified/HeroSimplified';

const featuredHeroesIds = [10, 502, 505]

function HeroFeatured() {

    useEffect(() => {
        fetchAndDisplayHeroes()
      }, []);
    
      const [featuredHeroesList, setfeaturedHeroesList] = useState([]);
    
      const fetchAndDisplayHeroes = async () => {
        let heroes = [];
        for (const heroId of featuredHeroesIds) {
          const data = await getBasicHeroInfo(heroId)
          heroes.push(data)
        }
        setfeaturedHeroesList(heroes)
      }

    return (
        <section className='featured'>
          {featuredHeroesList.map(({name, imgUrl, powerstats}) => (
              <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />
          ))}
        </section>
    )
} 

export default HeroFeatured