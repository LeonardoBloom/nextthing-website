import './NavBar.css';
import logo1 from '../img/logo1.png';
import { Link } from 'react-router-dom';

const NavBar = ({isScrolled}) => {
    console.log('NavBar isScrolled:', isScrolled);

    const navScroll = isScrolled ? 'nav-scroll' : '';
    const navButtonScroll = isScrolled ? 'nav-button-scroll' : '';

    

    return (
        <>
        <div className={`navbar ${navScroll}`}>

            <div className="nav-logo">
                <Link to="/Home"><img src={logo1} width="300"/></Link>
            </div>

            <div className='navbar-buttons'>
                <ul className='nav-links '>
                <li className='nav-buttons'><Link to="/About" className={`${navButtonScroll}`} >Sobre Nós</Link></li>
                    <li className='nav-buttons '><Link to="/Home#home-servicos" className={`servicos-button ${navButtonScroll}`}>Serviços</Link>
                        <ul className='servicos-items dropdown'>
                            <li className="nav-link-item"><Link to="/services/business-intelligence">Business Intelligence e Análise de Dados</Link></li>
                            <li className="nav-link-item"><Link to='/services/app-development'>Desenvolvimento de Aplicações e Integrações</Link></li>
                            <li className="nav-link-item"><Link to='/services/intelligent-automation'>Automação Inteligente</Link></li>
                            <li className="nav-link-item"><Link to='/services/cybersecurity'>Cyber Segurança</Link></li>
                            <li className="nav-link-item"><Link to='/services/it-gov'>Governação de TI</Link></li>
                            <li className="nav-link-item"><Link to='/services/tic-management'>Gestão de TICs</Link></li>
                            <li className="nav-link-item"><Link to='/services/project-continuity'>Continuidade de Negócios</Link></li>
                            <li className="nav-link-item"><Link to='/services/project-management'>Gestão de Projectos</Link></li>
                        </ul>
                    </li>
                    <li className='nav-buttons'><Link to="/Contact" className={`${navButtonScroll}`} href="#">Contacto</Link></li>
                </ul>

            </div>

        </div>

        </>
    )

}

export default NavBar;