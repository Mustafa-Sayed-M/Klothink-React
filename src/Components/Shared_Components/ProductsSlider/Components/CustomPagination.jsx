import React from 'react';

const PrevButton = ({ handleClick }) => {
    return (
        <button
            type='button'
            aria-label='Previous Button'
            title='Previous'
            onClick={() => handleClick('PREV')}
            className='w-10 h-10 leading-10 text-center rounded-full border border-grey-color-15 text-grey-color-15 sm:hover:bg-black sm:hover:text-white sm:hover:border-black transition'
        >
            <i className="fa-solid fa-angle-left fa-fw"></i>
        </button>
    )
};

const NextButton = ({ handleClick }) => {
    return (
        <button
            type='button'
            aria-label='Next Button'
            title='Next'
            onClick={() => handleClick('NEXT')}
            className='w-10 h-10 leading-10 text-center rounded-full border border-grey-color-15 text-grey-color-15 sm:hover:bg-black sm:hover:text-white sm:hover:border-black transition'
        >
            <i className="fa-solid fa-angle-right fa-fw"></i>
        </button>
    )
};

function CustomPagination({ swiperRef }) {

    const handleClick = (slideType) => {
        if (slideType === 'NEXT') {
            swiperRef.current.slideNext();
        } else if (slideType === 'PREV') {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className={`custom-pagination flex items-center justify-end gap-2`}>
            <PrevButton handleClick={handleClick} />
            <NextButton handleClick={handleClick} />
        </div>
    )
}

export default CustomPagination;