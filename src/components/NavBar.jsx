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
                <Link to="/nextthing-website/Home"><img src={logo1} width="300"/></Link>
            </div>

            <div className='navbar-buttons'>
                <ul className='nav-links '>
                <li className='nav-buttons'><Link to="/nextthing-website/About" className={`${navButtonScroll}`} >Sobre Nós</Link></li>
                    <li className='nav-buttons '><Link to="/nextthing-website/Home#home-servicos" className={`servicos-button ${navButtonScroll}`}>Serviços</Link>
                        <ul className='servicos-items dropdown'>
                            <li className="nav-link-item"><Link to="/nextthing-website/services/business-intelligence">Business Intelligence e Análise de Dados</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/app-development'>Desenvolvimento de Aplicações e Integrações</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/intelligent-automation'>Automação Inteligente</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/cybersecurity'>Cyber Segurança</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/it-gov'>Governação de TI</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/tic-management'>Gestão de TICs</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/project-continuity'>Continuidade de Negócios</Link></li>
                            <li className="nav-link-item"><Link to='/nextthing-website/services/project-management'>Gestão de Projectos</Link></li>
                        </ul>
                    </li>
                    <li className='nav-buttons'><Link to="/nextthing-website/Contact" className={`${navButtonScroll}`} href="#">Contacto</Link></li>
                </ul>

            </div>

        </div>

        </>
    )

}

export default NavBar;