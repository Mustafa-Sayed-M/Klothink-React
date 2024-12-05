import React from 'react';

function HeroArea() {
    return (
        <div className='hero-area flex items-center justify-center'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/home_images/landing/hero.png`}
                alt='Hero'
            />
        </div>
    )
}

export default HeroArea;