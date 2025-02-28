import ScrollHandler from "../handlers/ScrollHandler";
import logo1 from '../img/logo1.png';

import React from 'react'

const Hero = (prop) => {
  return (
    <>
        <ScrollHandler />
        <div className="hero-carousel">
                <div className='hero-head'>
                    {prop.heading}
                </div>
            <img className='bg-img' src={prop.bg} alt='hero-background'></img>
        </div>

    </>
  )
}

export default Hero