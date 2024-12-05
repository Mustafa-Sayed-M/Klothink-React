import React from 'react';
import TextArea from './Components/TextArea';
import HeroArea from './Components/HeroArea';

function Landing() {
    return (
        <section className='landing' id='lading'>
            <div className='container py-7'>
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 gap-5 items-center'>
                    {/* Text Area */}
                    <TextArea />
                    {/* Hero Area */}
                    <HeroArea />
                </div>
            </div>
        </section>
    )
}

export default Landing;