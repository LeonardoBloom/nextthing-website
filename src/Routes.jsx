import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTopHandler from './handlers/ScrollToTopHandler';

// SERVICES
import BusIntel from './pages/services/BusIntel';
import AutoIntel from './pages/services/AutoIntel';
import ContNeg from './pages/services/ContNeg';
import CyberSec from './pages/services/CyberSec';
import DevApp from './pages/services/DevApp';
import GesPro from './pages/services/GesPro';
import GesT from './pages/services/GesT';
import GovT from './pages/services/GovT';

export const PageRoutes = () => {

    return (
        <Router>
            <ScrollToTopHandler />
            <Routes>
                {/* PRIMARY PAGES */}
                <Route path="/" element={<Navigate to="/Home" />} />
                {/* <Route path='/' element={<Navigate to='/Home' replace/>} /> */}
                <Route path='/Home' element={<HomePage />} />
                <Route path='/Blog' element={<BlogPage />} />
                <Route path='/About' element={<AboutPage />} />
                <Route path='/Contact' element={<ContactPage />} />


                {/* SERVICES PAGES */}
                {/* Business Intelligence */}
                <Route path='/services/business-intelligence' element={<BusIntel />} />
                {/* Desenvolvimento de Aplicacoes */}
                <Route path='/services/app-development' element={<DevApp />} />
                {/* Automacao Inteligente */}
                <Route path='/services/intelligent-automation' element={<AutoIntel />} />
                {/* Cyber Security */}
                <Route path='/services/cybersecurity' element={<CyberSec />} />
                {/* Governacao de TI */}
                <Route path='/services/it-gov' element={<GovT />} />
                {/* Gestao de TICs */}
                <Route path='/services/tic-management' element={<GesT />} />
                {/* Continuidade de Negocios */}
                <Route path='/services/project-continuity' element={<ContNeg />} />
                {/* Business Intelligence */}
                <Route path='/services/project-management' element={<GesPro />} />
            </Routes>
        </Router>
    )

}