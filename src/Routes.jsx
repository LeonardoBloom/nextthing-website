import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTopHandler from './handlers/ScrollToTopHandler';



export const PageRoutes = () => {

    return (
        <Router>
            <ScrollToTopHandler />
            <Routes>
                {/* PRIMARY PAGES */}
                <Route exact path="/nextthing-website/" element={<Navigate to="/nextthing-website/Home" replace/>} />
                <Route path="/nextthing-website/Home" element={<HomePage />} />
                <Route path='/nextthing-website/Blog' element={<BlogPage />} />
                <Route path='/nextthing-website/About' element={<AboutPage />} />
                <Route path='/nextthing-website/Contact' element={<ContactPage />} />

                {/* SERVICES PAGES */}
            </Routes>
        </Router>
    )

}