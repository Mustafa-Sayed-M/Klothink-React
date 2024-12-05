import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFaqsOpen } from '../../../../Store/slices/appSlice';

function FaqCard({ faqData }) {

    const dispatch = useDispatch();

    const { faqsOpen } = useSelector(state => state.app);

    const { id, question, answer } = faqData;

    const handleClick = () => {
        dispatch(handleFaqsOpen(id));
    };

    return (
        <div onClick={handleClick} className={`faq-card shadow-sm p-3 rounded-xl cursor-pointer border border-white-color-95 ${faqsOpen.includes(id) ? 'bg-white-color-99' : 'sm:hover:bg-white-color-99'}`}>
            {/* Header */}
            <div className='header flex items-center justify-between'>
                {/* Question */}
                <h1 className='flex-1 text-grey-color-15 font-semibold text-sm'>{question}</h1>
                {/* State Icon */}
                <div className='state-icon text-grey-color-15'>
                    <i className={`fa-solid fa-${faqsOpen.includes(id) ? 'minus' : 'plus'} fa-fw`}></i>
                </div>
            </div>
            {/* Answer */}
            {
                faqsOpen.includes(id) && <p className='text-grey-color-60 mt-2'>{answer}</p>
            }
        </div>
    )
}

export default FaqCard;