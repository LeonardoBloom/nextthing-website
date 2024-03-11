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
                <Link to="/Home"><img src={logo1} width="170"/></Link>
            </div>

            <div className='navbar-buttons'>
                <ul className='nav-links '>
                    <li className='nav-buttons '><a className={`servicos-button ${navButtonScroll}`} href="#">Serviços</a>
                        <ul className='servicos-items dropdown'>
                            <li className="nav-link-item"><a href="#">Business Intelligence e Análise de Dados</a></li>
                            <li className="nav-link-item"><a href="#">Desenvolvimento de Aplicações e Integrações</a></li>
                            <li className="nav-link-item"><a href="#">Automação Inteligente</a></li>
                            <li className="nav-link-item"><a href="#">Cyber Segurança</a></li>
                            <li className="nav-link-item"><a href="#">Governação de TI</a></li>
                            <li className="nav-link-item"><a href="#">Gestão de TICs</a></li>
                            <li className="nav-link-item"><a href="#">Continuidade de Negócios</a></li>
                            <li className="nav-link-item"><a href="#">Gestão de Projectos</a></li>
                        </ul>
                    </li>
                    <li className='nav-buttons'><Link to="/Blog" className={`${navButtonScroll}`} >Blog</Link></li>
                    <li className='nav-buttons'><Link to="/About" className={`${navButtonScroll}`} >Sobre Nós</Link></li>
                    <li className='nav-buttons'><Link to="/Contact" className={`${navButtonScroll}`} href="#">Contacto</Link></li>
                </ul>

            </div>

        </div>

        </>
    )

}

export default NavBar;