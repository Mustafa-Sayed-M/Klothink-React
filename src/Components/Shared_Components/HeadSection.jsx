import React from 'react';

function HeadSection({ title, description, sectionName }) {
    return (
        <div className='head-section space-y-3'>
            {/* Title */}
            <h1 className='uppercase flex items-start gap-2 max-sm:flex-col'>
                {/* Title Text */}
                <span className='text-3xl font-bold text-grey-color-10 max-sm:order-1'>{title}</span>
                {/* Section Name */}
                {
                    sectionName && <span className='text-grey-color-60 text-sm text-nowrap'>{sectionName}</span>
                }
            </h1>
            {/* Description */}
            <p className='text-grey-color-40'>{description}</p>
        </div>
    )
}

export default HeadSection;