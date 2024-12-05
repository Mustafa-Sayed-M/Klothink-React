import React from 'react';

function AddToCart({ className, text, product }) {
    return (
        <button
            title={'Add to Cart'}
            aria-label='Add to Cart'
            type='button'
            className={`${className}`}
        >
            <i className="fa-solid fa-cart-shopping fa-fw"></i>
            {
                text && <span className='ml-2'>{text}</span>
            }
        </button>
    )
}

export default AddToCart;