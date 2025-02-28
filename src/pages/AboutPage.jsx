// import scrollhandler for navbar
import './AboutPage.css';
import ScrollHandler from "../handlers/ScrollHandler"; 
import aboutHero from "../img/aboutHero.jpg";
import Footer from '../components/Footer';



function AboutPage() {

    console.log("Hello from About");

    return (
        <>
            <ScrollHandler />
            {/* <h1>Hello from About</h1> */}
            <div className="about-hero">
                <h1>Sobre Nós</h1>
                <img className="hero-img" src={aboutHero} alt="About Hero"></img>
            </div>
            <div className='content'>

                <div className='service-info'>
                    

                    <p>Na Next-Thing construímos a nossa reputação sobre paixão e trabalho árduo. Fornecemos
uma gama completa de serviços de tecnologias de informação e comunicação (TIC), quer
totalmente subcontratados, em que assumimos o papel do departamento de TI, ou como um
parceiro em que pode contar com experiências adicionais sempre que precisar.</p>
                    <p>A nossa equipa de especialistas está posicionada para lhe fornecer soluções e serviços tecnológicos
alinhados com o negócio. A Next-Thing tem a experiência e os conhecimentos
necessários para lidar com todos os seus desafios tecnológicos. Nos diferenciamos pela nossa:</p>

                    <h3><b>Experiência em sectores regulados:</b></h3>
                    <ul>
                        <p>Nossa equipe de especialistas em TI está mais
do que preparada para enfrentar as complexidades e desafios enfrentados pelas
empresas mais sofisticadas, incluindo:</p>
                        <ul>
                            <li>As organizações no setor financeiro, incluindo banca e seguros.</li>
                            <li>Organizações no sector de telecomunicações.</li>
                        </ul>
                        <p>Esta experiência permite-nos ajudar os nossos clientes a executarem o seu trabalho
de forma eficaz, eficiente e segura, ao mesmo tempo que aderem a protocolos rigorosos
de conformidade. É importante trabalhar com um prestador de serviços que
entenda a TI para sectores regulados.</p>
                    </ul>

                    <h3><b>Experiência no suporte de PMES:</b></h3>
                    <ul>
                        <p>Somos experientes em oferecer suporte especializado
em TI para pequenas e medias empresas. O nosso suporte de TI para
pequenas e medias empresas irá ajudá-lo a resolver desafios do negócio, reduzir o
risco tecnológico e alcançar os seus objetivos.</p>
                        <p>A nossa equipa de especialistas trabalha em estreita colaboração com os nossos
clientes de modo a fornecer um suporte de TI inigualável, que seja adaptado às necessidades
específicas de cada um deles.</p>
                    </ul>

                    <h3><b>Serviço de cliente excepcional:</b></h3>
                    <ul>
                        <p>Acreditamos que empresas de todas as dimensões,
em todas as indústrias, merecem serviços de TI da mais alta qualidade. Nós nos
comprometemos em fornecer um serviço de cliente excecional para cada um dos
nossos clientes. Na verdade, nós tratamos cada cliente como uma relação única e
adaptamos cada contrato para necessidades de negócios do cliente.</p>
                    </ul>

                    <p>Ao envolvermo-nos com qualquer cliente, olhamos para além da simples prestação de um
serviço. O nosso objetivo é tornar-nos um parceiro de confiança para todos os nossos clientes.
</p>
<p>
A nossa intervenção passa por identificar as suas necessidades, compreender o seu negócio e
o sector de mercado em que operam. Estamos a par das tendências tecnológicas e compartilhamos
com nossos clientes informações sobre o impacto que estas possam ter nos nossos
clientes.</p>

                </div>
                
            </div>

            {/* <Footer /> */}
        <div className='copyright'>
                © Next Thing Consulting - 2024
            </div>
        </>

    )
}

export default AboutPage;