import React from 'react'
import Ges from '../../img/GesT.png'
import ServicePages from '../../components/ServicePages'

const GesT = () => {
  return (
    <ServicePages 
        content={
            <div className='service-content'>
                <div className='service-pic'>
                    <img src={Ges}></img>
                </div>
                <div className='service-info'>
                    <h1>Gestão de TICs</h1>

                    <p>Empresas de todos os tamanhos dependem de uma gestão de
serviços de TI eficiente. Não a actividade, dimensão ou a localização
do cliente, os serviços de TI precisam ser econômicos,
confiáveis, consistentes e eficientes. Entretanto muitas PMEs
não têm tempo, talento ou dinheiro para manter as tarefas de
TI internamente.</p>
                    <p>Com a Next-Thing, você pode aproveitar soluções de TI flexíveis
e personalizáveis, adaptadas ao seu negócio e suas mudanças
contínuas. Nós trabalhamos com nossos clientes para avaliar as oportunidades para melhorar o desempenho de TI, identificando
os recursos e as capacidades necessárias para garantir resultados
duradouros.</p>

                    <h3><b>Nossos Serviços:</b></h3>
                    <ul>
                        <li>Gestão do centro de dados e da rede</li>
                        <li>Gestão de serviços na Cloud</li>
                        <li>Serviços de Help Desk de TI 24/7/365</li>
                        <li>Implementação de gestão de TI com base em ITIL®,
CobiT, ISO20K, ISO27K</li>
                        <li>Definição de medidas métricas para monitorização
do desempenho</li>
                        <li>Negociação e consultoria com fornecedores
e provedores de soluções em seu nome</li>
                        <li>Gestão de activos de TI</li>
                        <li>Monitoramento de infraestrutura de TI e alertas
automáticos</li>
                        <li>Relatórios de IT desempenho personalizados</li>
                        <li>Continuidade de negócios e recuperação de dados
de emergência sem problemas de interrupção</li>
                    </ul>

                </div>
            </div>
        }
    />
  )
}

export default GesT