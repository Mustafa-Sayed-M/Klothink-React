import React from 'react';
import { useSearchParams } from 'react-router-dom';

const styleData = ['Casual', 'Formal', 'Lifestyle'];

function FilterWithStyle() {

    const [searchParams, setSearchParams] = useSearchParams();

    const styleParam = searchParams.get('style');

    const handleClick = (value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set('style', value);
        } else {
            newParams.delete('style');
        }
        setSearchParams(newParams);
    }

    return (
        <ul className='flex flex-wrap items-center gap-2'>
            <li>
                <button
                    type='button'
                    aria-label='Filter With Style'
                    title={`Find All Products`}
                    onClick={() => handleClick('')}
                    className={`${!styleParam ? 'bg-grey-color-15 border-grey-color-15 text-white' : 'sm:hover:bg-grey-color-15 border-white-color-95 sm:hover:text-white'} rounded-full border py-2 px-4 transition`}
                >
                    All
                </button>
            </li>
            {
                styleData.map((style, index) => <li key={index}>
                    <button
                        type='button'
                        aria-label='Filter With Style'
                        onClick={() => handleClick(style)}
                        title={`Find Products With ${style} Style Collection`}
                        className={`${styleParam === style ? 'bg-grey-color-15 border-grey-color-15 text-white' : 'sm:hover:bg-grey-color-15 border-white-color-95 sm:hover:text-white'} rounded-full border py-2 px-4 transition`}
                    >
                        {style}
                    </button>
                </li>)
            }
        </ul>
    )
}

export default FilterWithStyle;