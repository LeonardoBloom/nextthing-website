import React from 'react'
import ServicePages from '../../components/ServicePages'
import intelAuto from '../../img/intelligent-automation.png'

const AutoIntel = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={intelAuto}></img>
                </div>
                <div className='service-info'>
                    <h1>Automação Inteligente (AI)</h1>

                    <p>A automação inteligente (AI) é um dos principais impulsionadores da transformação
                    digital das organizações modernas. Ela permite a equipa se concentrar-se em tra-
                    balhos que acrescentam valor adicional a organização, colocando de lado tarefas
                    manuais e repetitivas.</p>
                    <p>A automação inteligente (IA) é uma combinação de tecnologias de automação robóti-
                    ca de processos (RPA) e inteligência artificial (IA). Quando bem implementada, a au-
                    tomação inteligente pode aumentar a eficiência, reduzir custos e melhorar a segu-
                    rança e a conformidade das informações.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Robotic Process Automation (RPA)</li>
                        <li>Intelligent Process Automation</li>
                        <li>Intelligent Document Processing</li>
                        <li>Desenvolvimento de chat bot e bot services</li>
                    </ul>

                </div>
            </div>
        }
    />
  )
}

export default AutoIntel