import React from 'react'
import ServicePages from '../../components/ServicePages'
import cyberSec from '../../img/cyberSec.png'

const CyberSec = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={cyberSec}></img>
                </div>
                <div className='service-info'>
                    <h1>Cyber Segurança</h1>

                    <p>A Next-Thing guarda os seus dados mais sensíveis, libertando a sua equipa de TI para
                    se concentrar em acompanhar o ritmo de inovação e concorrência na economia dig-
                    ital. Desenhamos a nossa abordagem de cibersegurança para nos alinharmos com os
                    seus objetivos de negócio, não para os impedir.</p>
                    <p>Aliamos conhecimento, experiência, melhores práticas e técnicas efectivas de apli-
                    cação da segurança da informação, de uma forma estruturada para melhor proteger
                    o negócio dos nossos clientes.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Análise de riscos de segurança da informação</li>
                        <li>Avaliação de risco e monitoramento da Dark Web</li>
                        <li>Centro de operações de segurança</li>
                        <li>SIEM (Informações de Segurança e Gerenciamento de Eventos)</li>
                        <li>Serviço de resposta a incidentes</li>
                        <li>Segurança da rede</li>
                        <li>Testes de penetração</li>
                        <li>Segurança gerenciada de endpoints</li>
                        <li>Consultoria de segurança cibernética</li>
                        <li>Consciencialização e treinamento</li>
                    </ul>

                </div>
            </div>
        }
    />
  )
}

export default CyberSec