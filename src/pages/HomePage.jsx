import './HomePage.css';
import NavBar from '../components/NavBar'; // instead imported through scrollHandler
import heroBanner from '../img/n-back.png';
import ContactForm from '../components/ContactForm';
import ScrollHandler from '../handlers/ScrollHandler';
import hook_img from '../img/hook_img.png';
import heroLogo2 from '../img/logo1.png';
import heroLogo from '../img/logo-hero.png';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LinkScrollHandler from '../handlers/LinkScrollHandler';
import { Link } from 'react-router-dom';



function HomePage() {

    LinkScrollHandler();

    return (
        <>
        {/* NAVBAR */}
            <ScrollHandler />
            {/* Navbar is used through ScrollHandler to change its appearance through useEffect  */}

        {/* HERO */}
            <Hero
                heading={
                    <img src={heroLogo} width={500} ></img>
                }
                bg={heroBanner}
            />

        {/* HEADING AFTER HERO */}
        <div className='head-after-hero'>
            <h2>A <span className='next-thing'>Next Thing</span> é constituida por profissionais que tem uma grande experiência em Business Intelligence e Integração de Dados</h2>
            
        </div>

        {/* HOOK */}
        <div className="hook">
            <div className='hook-container'>
                <div className='hook-img'>
                    <img src={hook_img} alt="hook-image" />
                </div>

                <div className='hook-text'>
                    
                    <div className='hook-text-div'>
                        <div className='hook-text-num'>
                            <h1>01 </h1>
                            
                        </div>
                        <div className='hook-text-div-div'>
                            <h2>Missão <i class="fa-solid fa-bullseye"></i></h2>
                            <p>Ser o parceiro de tecnologia mais confiável
                            para os nossos clientes.</p>
                        </div>
                    </div>
                    <div className='hook-text-div'>
                        <div className='hook-text-num'>
                            <h1>02</h1>
                        </div>
                        <div className='hook-text-div-div'>
                            
                            <h2>Visão <i class="fa-solid fa-eye"></i></h2>
                            
                            <p>Ajudar nossos clientes a serem bem-sucedidos
                            por meio do uso seguro, optimizado e
                            produtivo de tecnologias.</p>
                        </div>
                    </div>
                    <div className='hook-text-div'>
                        <div className='hook-text-num'>
                            <h1>03</h1>
                        </div>
                        <div className='hook-text-div-div'>
                            <h2>Valores <i class="fa-regular fa-gem"></i></h2>
                            <h5>Nossos Valores:</h5>
                            <ul>
                                <li>Fazemos sempre a coisa certa</li>
                                <li>Temos paixão pelo que fazemos</li>
                                <li>Somos orientados para resultados</li>
                                <li>Primamos sempre pela excelência</li>
                                <li>Honramos nossas promessas</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* SERVICES */}
        <div className='home-servicos' id='home-servicos'>
            <h2>Serviços</h2>
            <div className='servicos-grid'>
                <div className='servicos-item'>
                    <i class="serv-icon fa-regular fa-lightbulb fa-3x"></i>
                    <h3>Business Intelligence e Análise de Dados</h3>
                    <p>Criar uma cultura colaborativa utilizando dados para gerar informação e inteligência
                    para a organização é, com certeza, um dos grandes desafios destes novos tempos,
                    permitindo que cada um tome decisões confiáveis, com análises profundas, na hora
                    certa.</p>
                    <span><Link to="/services/business-intelligence">Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-solid fa-mobile-screen-button fa-3x"></i>
                    <h3>Desenvolvimento de Aplicações e Integrações</h3>
                    <p>Desenvolvemos aplicações informáticas para diversos tipos de dispositivos oferecidos
                    actualmente e em diversas plataformas, tais como iOS, Android e Windows.
                    Focamo-nos em aplicações empresariais, em diversas indústrias, usando tecnologias
                    líder em desenvolvimento. Usamos a metodologia Agile para que os projetos tenham
                    mais sucesso. </p>
                    <span><Link to='/services/app-development'>Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-solid fa-brain fa-3x"></i>
                    <h3>Automação Inteligente (AI)</h3>
                    <p>A automação inteligente (AI) é um dos principais impulsionadores da transformação
                    digital das organizações modernas. Ela permite a equipa se concentrar-se em trabalhos que acrescentam valor adicional a organização, colocando de lado tarefas
                    manuais e repetitivas. </p>
                    <span><Link to='/services/intelligent-automation'>Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-solid fa-user-secret fa-3x"></i>
                    <h3>Cyber Segurança</h3>
                    <p>A Next-Thing guarda os seus dados mais sensíveis, libertando a sua equipa de TI para
                    se concentrar em acompanhar o ritmo de inovação e concorrência na economia digital. Desenhamos a nossa abordagem de cibersegurança para nos alinharmos com os
                    seus objetivos de negócio, não para os impedir.</p>
                    <span><Link to='/services/cybersecurity'>Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-3x fa-solid fa-sitemap"></i>
                    <h3>Governação de TI</h3>
                    <p>O serviço de consultoria da Next-Thing em Governação de TI
                    utiliza as boas práticas de frameworks estabelecidos para implementar fielmente as estratégias de negócio e visões dos
                    stakeholders em um plano de Governança de TI. Esse plano
                    é composto pela definição de processos críticos que devem
                    ser priorizados e implantados de acordo com a estratégia de
                    negócio.</p>
                    <span><Link to='/services/it-gov'>Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-3x fa-solid fa-bars-progress"></i>
                    <h3>Gestão de TICs</h3>
                    <p>Empresas de todos os tamanhos dependem de uma gestão de
                    serviços de TI eficiente. Não a actividade, dimensão ou a localização do cliente, os serviços de TI precisam ser econômicos,
                    confiáveis, consistentes e eficientes. Entretanto muitas PMEs
                    não têm tempo, talento ou dinheiro para manter as tarefas de
                    TI internamente.</p>
                    <span><Link to='/services/tic-management'>Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-3x fa-solid fa-paper-plane"></i>
                    <h3>Continuidade de Negócios</h3>
                    <p>A Next-Thing é uma empresa especializada em educação e
                    consultoria sobre Continuidade de Negócios em Moçambique
                    atendendo empresas em vários segmentos de mercado. Em um
                    mundo cada vez mais interconectado, é imperativo repensar o
                    planeamento de contingência dos serviços de tecnologias de
                    informação e comunicação.</p>
                    <span><Link to='/services/project-continuity'>Saber Mais +</Link></span>
                </div>
                <div className='servicos-item'>
                    {/* insert FONTAWESOME ICON here */}
                    <i class="serv-icon fa-3x fa-solid fa-list-check"></i>
                    <h3>Gestão de Projectos</h3>
                    <p>Nossa intervenção em gestão de projetos e Project Management Office (PMO) são adaptadas às
                    suas necessidades e podem ser facilmente executadas para identificar, tratar e mitigar os riscos
                    relacionados com a gestão, execução e controle
                    de programas e projetos complexos.</p>
                    <span><Link to='/services/project-management'>Saber Mais +</Link></span>
                </div>
            </div>
        </div>

        {/* FOOTER */}

        {/* <Footer /> */}

        <div className='copyright'>
                © Next Thing Consulting - 2024
        </div>


        </>
    )
}

export default HomePage;