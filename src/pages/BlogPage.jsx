import React from 'react'
// import scrollhandler for navbar
import ScrollHandler from "../handlers/ScrollHandler";
import './BlogPage.css'; 
import Footer from '../components/Footer';
import blogHero from '../img/blogHero.jpg';

function BlogPage() {
    return (
        <>
            <ScrollHandler />
            {/* <h1>Hello from About</h1> */}
            <div className="blog-hero">
                <h1>Blog</h1>
                <img className="hero-img" src={blogHero} alt="Blog Hero"></img>
            </div>
            <div className='content'>
                
            </div>

            <Footer />
        </>

    )
}

export default BlogPage;