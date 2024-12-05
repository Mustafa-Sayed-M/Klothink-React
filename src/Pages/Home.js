import React from 'react';
import Landing from '../Components/Home_Components/Landing/Landing';
import Products from '../Components/Home_Components/Products/Products';
import About from '../Components/Home_Components/About/About';
import Testimonials from '../Components/Home_Components/Testimonials/Testimonials';
import Faqs from '../Components/Shared_Components/Faqs/Faqs';
import HowItWorks from '../Components/Home_Components/HowItWorks/HowItWorks';

function Home() {
    return (
        <div className="home-page">
            {/* Landing */}
            <Landing />
            {/* Products */}
            <Products />
            {/* About */}
            <About />
            {/* Testimonials */}
            <Testimonials />
            {/* Faqs */}
            <Faqs />
            {/* How It Works */}
            <HowItWorks />
        </div>
    )
}

export default Home;