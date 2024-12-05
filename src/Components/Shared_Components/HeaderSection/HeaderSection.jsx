import React from 'react';

function HeaderSection({ title, description, sectionName, boxesData }) {
    return (
        <section className='header-section pt-7' id='header-section'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 gap-5'>
                    {/* Text Area */}
                    <div className='text-area space-y-2'>
                        {/* Title */}
                        <h1 className='uppercase flex items-start gap-2 max-sm:flex-col'>
                            {/* Title Text */}
                            <span className='text-3xl font-bold text-grey-color-10 max-sm:order-1'>{title}</span>
                            {/* Section Name */}
                            {
                                sectionName && <span className='text-grey-color-60 text-sm'>{sectionName}</span>
                            }
                        </h1>
                        {/* Description */}
                        <p className='text-grey-color-40'>{description}</p>
                    </div>
                    {/* Boxes Area */}
                    <div className='boxes-area flex flex-wrap gap-4 items-center p-4 rounded-md border border-white-color-95'>
                        {/* Box */}
                        {
                            boxesData.map((box, index) => <div className={`${index === 2 ? 'sm:flex-1 max-sm:w-full' : 'flex-1'}`} key={index}>
                                <h3 className='font-semibold mb-2'>{box.name}</h3>
                                <p className='text-grey-color-40 text-sm'>{box.description}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection