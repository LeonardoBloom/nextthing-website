import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';



export const PageRoutes = () => {

    return (
        <Router>
            
            <Routes>
                {/* PRIMARY PAGES */}
                <Route exact path="/" element={<Navigate to="/Home" replace/>} />
                <Route path="/Home" element={<HomePage />} />
                <Route path='/Blog' element={<BlogPage />} />
                <Route path='/About' element={<AboutPage />} />
                <Route path='/Contact' element={<ContactPage />} />

                {/* SERVICES PAGES */}
            </Routes>
        </Router>
    )

}