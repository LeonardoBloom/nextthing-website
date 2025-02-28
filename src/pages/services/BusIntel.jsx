import React from 'react'
import ServicePages from '../../components/ServicePages'
import businessIntel from '../../img/business-intelligence.png'
import './BusIntel.css';

const BusIntel = () => {
  return (

    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={businessIntel}></img>
                </div>
                <div className='service-info'>
                    <h1>Business Intelligence e Análise de Dados</h1>

                    <p>Criar uma cultura colaborativa utilizando dados para gerar informação e inteligênciapara a organização é, com certeza, um dos grandes desafios destes novos tempos,permitindo que cada um tome decisões confiáveis, com análises profundas, na horacerta.</p>
                    <p>Ajudamos a sua empresa a tornar-se data-driven usando Inteligência Artificial (IA),Big Data, Machine Learning e processamento de linguagem natural (NLP).</p>
                    <p>Ao contrário das soluções lideradas por tecnologia, nossos serviços combinam consultoria estratégica e tecnologia para alinhar as necessidades de negócios com soluções comprovadas e emergentes que geram resultados de negócios direcionados.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Business Intelligence (BI)</li>
                        <li>Machine Learning (ML)</li>
                        <li>Inteligência Artificial (AI)</li>
                        <li>Governança de dados</li>
                        <li>Segurança de dados</li>
                        <li>Master data management</li>
                        <li>Data Warehouse Architecture</li>
                        <li>Reconciliações automatizadas</li>
                        <li>Visualização de dados</li>
                    </ul>

                </div>
            </div>
        }
    />

  )
}

export default BusIntel