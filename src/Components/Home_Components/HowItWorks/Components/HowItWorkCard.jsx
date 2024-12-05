import React from 'react';

function HowItWorkCard({ howItWorkData }) {

    const {
        id,
        name,
        description
    } = howItWorkData;

    return (
        <div className='how-it-work-card p-3 bg-white border border-white-color-95 rounded-xl space-y-3'>
            {/* Number */}
            <h1 className='text-white-color-90 text-5xl font-semibold'>0{id}</h1>
            {/* Name */}
            <h2 className='font-semibold text-xl flex-1'>{name}</h2>
            {/* Description */}
            <p className='text-grey-color-40'>{description}</p>
        </div>
    )
}

export default HowItWorkCard;