import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import HowItWorkCard from './Components/HowItWorkCard';
import howItWorkData from '../../../Data/HowItWorks.json';

function HowItWorks() {
    return (
        <section className='how-it-works py-7' id='how-it-works'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Seamless Experience.`}
                    sectionName={`How it Works?`}
                    description={`At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 bg-white-color-99 border border-white-color-97 rounded-xl'>
                    {
                        howItWorkData.map((howItWorkData, index) => <HowItWorkCard key={index} howItWorkData={howItWorkData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;