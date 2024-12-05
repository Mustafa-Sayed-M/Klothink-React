import React from 'react';

function PolicyCard({ policyData }) {
    const {
        name,
        description
    } = policyData;

    return (
        <div className='policy-card space-y-2'>
            {/* Name */}
            <h1 className='text-grey-color-15 font-semibold text-xl'>{name}</h1>
            {/* Detail */}
            <p className='text-grey-color-60 text-sm'>{description}</p>
        </div>
    )
}

export default PolicyCard;