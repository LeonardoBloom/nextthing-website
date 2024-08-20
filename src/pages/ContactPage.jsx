// import scrollhandler for navbar
import ScrollHandler from "../handlers/ScrollHandler";
import './ContactPage.css';
import Footer from "../components/Footer";
import contactHero from '../img/contactHero.jpg';

function ContactPage() {

    return (
        <>
            <ScrollHandler />

            <div className="contact-hero">
                <h1>Contacte-nos</h1>
                <img className="hero-img" src={contactHero} alt="Contact Hero"></img>
            </div>
            <div className='content'>
                
            </div>

            <Footer />
            
        </>

    )

}

export default ContactPage;