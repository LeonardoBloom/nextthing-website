import React from 'react'
import ContNego from '../../img/ContNeg.png'
import ServicePages from '../../components/ServicePages'

const ContNeg = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={ContNego}></img>
                </div>
                <div className='service-info'>
                    <h1>Continuidade de Negócios</h1>

                    <p>A Next-Thing é uma empresa especializada em educação e
consultoria sobre Continuidade de Negócios em Moçambique
atendendo empresas em vários segmentos de mercado. Em um
mundo cada vez mais interconectado, é imperativo repensar o
planeamento de contingência dos serviços de tecnologias de
informação e comunicação.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Implementação e gestão do programa de continuidade</li>
                        <li>Elaboração de política de continuidade de negócios</li>
                        <li>Análise e avaliação de riscos de TI</li>
                        <li>Análise de Impactos no negócio (BIA - Business Impact
Analysis)</li>
                        <li>Estratégias de continuidade</li>
                        <li>Preparação para resposta a emergências</li>
                        <li>Desenvolvimento de plano de continuidade para TI,
Processos e Pessoas</li>
                        <li>Análise de infraestrutura de TI</li>
                        <li>Formação (palestras, workshops, reuniões,
apoio a directorias)</li>
                        <li>Exercícios e testes de planos de
continuidade</li>
                        <li>Auditoria e validação de fornecedores</li>
                    </ul>

                </div>
            </div>
        }
    />
  )
}

export default ContNeg