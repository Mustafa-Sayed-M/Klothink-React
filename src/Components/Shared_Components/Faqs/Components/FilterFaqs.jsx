import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFaqsTypes } from '../../../../Utils/api';

function FilterFaqs() {

    // Faqs Types Query
    const faqsTypesQuery = useQuery({
        queryKey: ['faqsTypes'],
        queryFn: () => fetchFaqsTypes(),
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    const [searchParams, setSearchParams] = useSearchParams();

    const faqTypeParam = searchParams.get('faqType');

    const handleClick = (value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value) {
            newParams.set('faqType', value);
        } else {
            newParams.delete('faqType');
        }
        setSearchParams(newParams);
    };

    return (
        <ul className='flex flex-wrap items-center gap-2'>
            <li>
                <button
                    type='button'
                    aria-label='Filter With Categories'
                    onClick={() => handleClick('')}
                    title={`Find All Products`}
                    className={`${!faqTypeParam ? 'text-grey-color-15' : 'sm:hover:text-grey-color-15 text-grey-color-60'} rounded-full py-2 px-4 transition uppercase`}
                >
                    All
                </button>
            </li>
            {
                faqsTypesQuery.data?.data.map((faqType, index) => <li key={index}>
                    <button
                        type='button'
                        aria-label='Filter With Categories'
                        onClick={() => handleClick(faqType.name)}
                        title={`Find Faqs With ${faqType.name} Type`}
                        className={`${faqTypeParam === faqType.name ? 'text-grey-color-15' : 'sm:hover:text-grey-color-15 text-grey-color-60'} rounded-full p-2 transition uppercase`}
                    >
                        {faqType.name}
                    </button>
                </li>)
            }
        </ul>
    )
}

export default FilterFaqs;