import React from 'react'
import ServicePages from '../../components/ServicePages'
import appDevelopment from '../../img/app-development.png'

const DevApp = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={appDevelopment}></img>
                </div>
                <div className='service-info'>
                    <h1>Desenvolvimento de Aplicações e Integrações</h1>

                    <p>Desenvolvemos aplicações informáticas para diversos tipos de dispositivos oferecidos
                    actualmente e em diversas plataformas, tais como iOS, Android e Windows.</p>
                    <p>Focamo-nos em aplicações empresariais, em diversas indústrias, usando tecnologias
                    líder em desenvolvimento. Usamos a metodologia Agile para que os projetos tenham
                    mais sucesso.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Reengenharia e migração</li>
                        <li>Serviços de manutenção de software</li>
                        <li>Desenvolvimento de portais</li>
                        <li>Desenvolvimento de aplicações Windows</li>
                        <li>Desenvolvimento de aplicações Web</li>
                        <li>Desenvolvimento de aplicações móveis</li>
                    </ul>

                </div>
            </div>
        }
    />
  )
}

export default DevApp