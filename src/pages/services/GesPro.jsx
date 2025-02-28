import React from 'react'
import GestPro from '../../img/GesPro.png'
import ServicePages from '../../components/ServicePages'

const GesPro = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={GestPro}></img>
                </div>
                <div className='service-info'>
                    <h1>Gestão de Projectos</h1>

                    <p>Nossa intervenção em gestão de projetos e Project
Management Office (PMO) são adaptadas às
suas necessidades e podem ser facilmente executadas
para identificar, tratar e mitigar os riscos
relacionados com a gestão, execução e controle
de programas e projetos complexos.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Transformação Agile</li>
                        <li>Gestão de Mudanças</li>
                        <li>Gerenciamento de Portfólio de Projetos</li>
                        <li>Estabelecimentos de Unidades de Gestão
de Projetos (PMO) para projetos de TI</li>
                        <li>Definição e acompanhamento dos projetos
da área de TI</li>
                        <li>Alinhamento estratégico de Projetos</li>
                        <li>Outsourcing de recursos para gestão
de projetos</li>
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

export default GesPro