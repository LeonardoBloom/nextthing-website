import React from 'react'
import ScrollHandler from '../handlers/ScrollHandler'
import Footer from './Footer'
import servicesHero from '../img/services-hero.jpg'
import './ServicePages.css'

const ServicePages = (prop) => {


  return (
    <>
        <ScrollHandler />
        <div className="service-hero">
            <h1>Serviços</h1>
            <img className="hero-img" height={300} src={servicesHero} alt="Services Hero"></img>
        </div>
        {prop.content}
        <Footer />
    
    </>
  )
}

export default ServicePages