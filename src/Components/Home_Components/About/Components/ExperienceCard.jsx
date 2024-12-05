import React from 'react';

function ExperienceCard({ experienceData }) {

    const {
        icon,
        name,
        description
    } = experienceData;

    return (
        <div className='experience-card p-3 bg-white border border-white-color-95 rounded-xl space-y-3'>
            {/* Header */}
            <div className='header flex items-center gap-2'>
                {/* Icon Container */}
                <div className='icon-container w-10 h-10 flex items-center justify-center rounded-full bg-yellow-color-50'>
                    {/* Icon Image */}
                    <img
                        src={`${process.env.PUBLIC_URL}/${icon}`}
                        width={18}
                        alt={name}
                    />
                </div>
                {/* Name */}
                <h2 className='font-semibold text-xl flex-1'>{name}</h2>
            </div>
            {/* Description */}
            <p className='text-grey-color-40'>{description}</p>
        </div>
    )
}

export default ExperienceCard;