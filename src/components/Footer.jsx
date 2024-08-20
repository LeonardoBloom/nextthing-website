import React from 'react'
import './Footer.css';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className='foot'>
            <div className='contacts'>
                <div className='contact-info'>
                    <h1>Contacte-nos Aqui:</h1>
                    <div className='email-div'>
                        <h3>Email:</h3>
                        <p>Info@Nextthing.Co.Mz</p>
                    </div>
                    <div className='tel-div'>
                        <h3>Telefone:</h3>
                        <p>+258 82 832 0920</p>
                    </div>
                    <div className='address-div'>
                        <h3>Endereço:</h3>
                        <p>Av 24 De Julho, 2464, Polana, Maputo, Moçambique</p>
                    </div>
                    <div className='hours-div'>
                        <h3>Horas de Abertura:</h3>
                        <p>Segunda A Sexta -
                            <b> 08:00 - 19:00</b>
                        </p>
                        <p>
                            Sabado -
                            <b> 09:00 - 12:00</b></p>
                    </div>
                    <div className='socials-div'>
                        <h3>As Nossas Redes:</h3>
                        <div className='socials'>
                            <a className='fb-icon' href='https://www.facebook.com/NextThingConsulting/'>
                                <i class="socials-icon devicon-facebook-plain" ></i>
                            </a>
                            <a className='li-icon' href='https://www.linkedin.com/company/next-thing/'>
                                <i class="socials-icon devicon-linkedin-plain"></i> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contact-form'>
                    <h1>Ou Mande-nos uma mensagem:</h1>
                    <ContactForm />
                </div>
                
            </div>
            <div className='copyright'>
                © Next Thing Consulting - 2024
            </div>
        </footer>
  )
}

export default Footer