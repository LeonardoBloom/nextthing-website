import React from 'react'
import ServicePages from '../../components/ServicePages'
import govt from '../../img/govt.png'

const GovT = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={govt}></img>
                </div>
                <div className='service-info'>
                    <h1>Governação de TI</h1>

                    <p>O serviço de consultoria da Next-Thing em Governação de TI
                    utiliza as boas práticas de frameworks estabelecidos para implementar
                    fielmente as estratégias de negócio e visões dos
                    stakeholders em um plano de Governança de TI. Esse plano
                    é composto pela definição de processos críticos que devem
                    ser priorizados e implantados de acordo com a estratégia de
                    negócio.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Elaboração de plano estratégico</li>
                        <li>Estruturação dos serviços da área de TI</li>
                        <li>Implementação da governação de TI usando
                        o Cobit, ITIL, ISO20K, ISO27K</li>
                        <li>Avaliação e optimização de processos</li>
                        <li>Definição e acompanhamento dos projectos
da área de TI</li>
                        <li>Estruturação e implementação de processos para
o gerenciamento de serviços da área de TI com base em
melhores práticas</li>
                        <li>Definição de mecanismos para integração entre serviços
de TI e processos de negócio</li>
                        <li>Definição de controles internos</li>
                        <li>Implementação de soluções para a gestão de riscos
de TI</li>
                        <li>Definição de métricas de gestão</li>
                    </ul>

                </div>
            </div>
        }
    />
  )
}

export default GovT