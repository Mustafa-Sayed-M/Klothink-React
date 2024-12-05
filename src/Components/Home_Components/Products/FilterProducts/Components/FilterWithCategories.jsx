import React from 'react';
import { useSearchParams } from 'react-router-dom';

const categoriesData = [
    'Menswear',
    'Womenswear',
    'Kidswear'
];

function FilterWithCategories() {

    const [searchParams, setSearchParams] = useSearchParams();

    const categoryParam = searchParams.get('category');

    const handleClick = (value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set('category', value);
        } else {
            newParams.delete('category');
        }
        setSearchParams(newParams);
    }

    return (
        <ul className='flex flex-wrap items-center gap-2'>
            <li>
                <button
                    type='button'
                    aria-label='Filter With Categories'
                    onClick={() => handleClick('')}
                    title={`Find All Products`}
                    className={`${!categoryParam ? 'text-grey-color-15' : 'sm:hover:text-grey-color-15 text-grey-color-60'} rounded-full py-2 px-4 transition uppercase`}
                >
                    All
                </button>
            </li>
            {
                categoriesData.map((category, index) => <li key={index}>
                    <button
                        type='button'
                        aria-label='Filter With Categories'
                        onClick={() => handleClick(category)}
                        title={`Find Products With ${category} Category`}
                        className={`${categoryParam === category ? 'text-grey-color-15' : 'sm:hover:text-grey-color-15 text-grey-color-60'} rounded-full p-2 transition uppercase`}
                    >
                        {category}
                    </button>
                </li>)
            }
        </ul>
    )
}

export default FilterWithCategories;