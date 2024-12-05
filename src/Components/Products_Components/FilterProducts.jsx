import React from 'react';
import { useSearchParams } from 'react-router-dom';

const categoriesData = [
    {
        value: 'Menswear',
        text: 'Menswear',
        fontAwesomeIconClass: 'person',
    },
    {
        value: 'Womenswear',
        text: 'Womenswear',
        fontAwesomeIconClass: 'child-dress',
    },
    {
        value: 'Kidswear',
        text: 'Kidswear',
        fontAwesomeIconClass: 'child',
    }
];

function FilterProducts() {


    const [searchParams, setSearchParams] = useSearchParams();

    const categoryParam = searchParams.get('category');

    const handleClick = (paramKey, paramValue) => {
        const newParams = new URLSearchParams(searchParams);
        if (paramValue) {
            newParams.set(paramKey, paramValue);
        } else {
            newParams.delete(paramKey);
        }
        setSearchParams(newParams);
    }

    return (
        <div className='filter-products'>
            <div className='container'>
                <ul className='flex flex-wrap items-center gap-2 rounded-full border border-white-color-95 w-fit mx-auto p-2'>
                    <li className=''>
                        <button
                            type='button'
                            aria-label='Filter With Categories'
                            onClick={() => handleClick('category')}
                            title={`Find All Products`}
                            className={`${!categoryParam ? 'bg-yellow-color-50 border-yellow-color-50 text-grey-color-15' : 'bg-white-color-97 border-white-color-95 text-grey-color-30 sm:hover:bg-yellow-color-50 sm:hover:border-yellow-color-50 sm:hover:text-grey-color-15'} rounded-full py-2 px-4 transition uppercase`}
                        >
                            All
                        </button>
                    </li>
                    {
                        categoriesData.map((category, index) => <li key={index}>
                            <button
                                type='button'
                                aria-label='Filter With Categories'
                                onClick={() => handleClick('category', category.value)}
                                title={`Find Products With ${category.text} Category`}
                                className={`${categoryParam === category.value ? 'bg-yellow-color-50 border-yellow-color-50 text-grey-color-15' : 'bg-white-color-97 border-white-color-95 text-grey-color-30 sm:hover:bg-yellow-color-50 sm:hover:border-yellow-color-50 sm:hover:text-grey-color-15'} rounded-full py-2 px-4 transition uppercase`}
                            >
                                <i className={`fa-solid fa-${category.fontAwesomeIconClass} fa-fw me-2`}></i>
                                <span>{category.text}</span>
                            </button>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default FilterProducts;