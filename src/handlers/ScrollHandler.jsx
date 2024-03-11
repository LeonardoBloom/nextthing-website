import { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';

const ScrollHandler = () => {

    // shared state to hold scrolling information
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect (() => {
        const handleScroll = () => {
            // determine whether page has been scrolled
            console.log('Scrolling');
            const scrolled = window.scrollY > 100;
            console.log('Is Scrolled:', scrolled);
            setIsScrolled(scrolled)
        }

        // add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div>
            <NavBar isScrolled={isScrolled} />
            
        </div>
    )
}

export default ScrollHandler;