import React from 'react';
import photoGrid from '../components/photo-grid.png'

function Hero() {
  return (
    <section className='hero'>
    <img className='hero__photo' src={photoGrid} />
    <h1 className='hero__header'>Online Experiences</h1>
    <p className='hero__text'>Join unique interactive activities led by 
    one-of-a-kind hosts—all without leaving home.</p>
</section>
  )
}

export default Hero;
