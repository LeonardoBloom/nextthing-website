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
                
            </div>

            <Footer />
        </>

    )
}

export default AboutPage;