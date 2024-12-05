import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import experienceData from '../../../Data/experience.json';
import ExperienceCard from './Components/ExperienceCard';

function About() {
    return (
        <section className='about py-7' id='about'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`The Klothink Experience.`}
                    sectionName={`About Us`}
                    description={`At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 gap-3 p-3 bg-white-color-99 border border-white-color-97 rounded-xl'>
                    {
                        experienceData.map((experienceData, index) => <ExperienceCard key={index} experienceData={experienceData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default About;