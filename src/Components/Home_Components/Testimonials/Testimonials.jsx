import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import TestimonialsSlider from './Components/TestimonialsSlider';
import testimonialsData from '../../../Data/testimonials.json';

function Testimonials() {
    return (
        <section className='testimonials py-7' id='testimonials'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Customers Love.`}
                    sectionName={`Testimonials`}
                    description={`At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion.`}
                />
                {/* Testimonials Slider */}
                <TestimonialsSlider testimonialsData={testimonialsData} />
            </div>
        </section>
    )
}

export default Testimonials;