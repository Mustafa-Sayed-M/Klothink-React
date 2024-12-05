import React from 'react';

function LocationCard({ locationData }) {

    const {
        locationInfo: {
            name,
            detail,
            direction,
            number
        }
    } = locationData;

    return (
        <div className='location-card space-y-5'>
            {/* Text Container */}
            <div className='text-container space-y-2 max-md:text-center'>
                {/* Name */}
                <h1 className='text-grey-color-15 font-semibold text-xl'>{name}</h1>
                {/* Detail */}
                <p className='text-grey-color-60 text-sm'>{detail}</p>
            </div>
            {/* Actions Container */}
            <div className='actions-container flex max-sm:flex-col items-center gap-3 max-md:justify-center'>
                {/* Call */}
                <a
                    target='_blank'
                    rel="noreferrer"
                    href={number}
                    title={number}
                    className='flex max-sm:w-full max-sm:justify-center items-center gap-2 max-md:flex-1 border border-white-color-95 rounded-full py-2 px-4 text-grey-color-15 sm:hover:bg-black sm:hover:border-black sm:hover:text-white transition'
                >
                    <i className="fa-solid fa-phone fa-fw"></i>
                    <span>Call Now</span>
                </a>
                {/* Direction */}
                <a
                    target='_blank'
                    rel="noreferrer"
                    title={direction}
                    href={direction}
                    className='flex max-sm:w-full max-sm:justify-center items-center gap-2 max-md:flex-1 bg-black rounded-full py-2 px-4 text-white border border-black sm:hover:bg-white sm:hover:text-black transition'
                >
                    <span>Get Direction</span>
                    <i className="fa-solid fa-arrow-right fa-fw"></i>
                </a>
            </div>
        </div>
    )
}

export default LocationCard;