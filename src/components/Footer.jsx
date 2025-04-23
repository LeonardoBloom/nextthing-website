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
                        <p>+258 84 324 6880</p>
                    </div>
                    <div className='address-div'>
                        <h3>Endereço:</h3>
                        <p>Rua Joe Slovo Nº 22, Prédio Saratoga, 4º Andar, Porta Nº 3, Maputo, Moçambique</p>
                    </div>
                    <div className='hours-div'>
                        <h3>Horas de Abertura:</h3>
                        <p>Segunda A Sexta -
                            <b> 08:00 - 16:00</b>
                        </p>
                        
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