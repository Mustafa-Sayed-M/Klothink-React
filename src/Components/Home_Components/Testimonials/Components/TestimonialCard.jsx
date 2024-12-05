import React from 'react';

function TestimonialCard({ testimonialData }) {

    const {
        avatarUrl,
        author: {
            name
        },
        content,
    } = testimonialData;

    return (
        <div className='testimonial-card p-3 bg-white border border-white-color-95 rounded-xl space-y-3 h-full'>
            {/* Header */}
            <div className='header flex items-center justify-between'>
                {/* Author Info */}
                <div className='author-info flex items-center gap-2'>
                    {/* Avatar */}
                    <img
                        src={avatarUrl}
                        alt={name}
                        className='rounded-full object-cover w-[50px] h-[50px]'
                    />
                    {/* Sub Info */}
                    <div className='space-y-2'>
                        {/* Name */}
                        <h3 className='font-semibold text-lg'>{name}</h3>
                        {/* Rating */}
                        <ul className='flex items-center gap-0.5 text-sm'>
                            <li className='text-yellow-color-50'><i className="fa-solid fa-star fa-fw"></i></li>
                            <li className='text-yellow-color-50'><i className="fa-solid fa-star fa-fw"></i></li>
                            <li className='text-yellow-color-50'><i className="fa-solid fa-star fa-fw"></i></li>
                            <li className='text-yellow-color-50'><i className="fa-solid fa-star fa-fw"></i></li>
                            <li className='text-yellow-color-50'><i className="fa-solid fa-star fa-fw"></i></li>
                        </ul>
                    </div>
                </div>
                {/* Quote Icon */}
                <i className="fa-solid fa-quote-left fa-fw text-yellow-color-50 text-4xl"></i>
            </div>
            {/* Description */}
            <p className='text-grey-color-40'>{content}</p>
        </div>
    )
}

export default TestimonialCard;