import React from 'react';

function NavbarCartButton() {
    return (
        <button
            type='button'
            title={`No Items Yet.`}
            className='block w-10 h-10 rounded-full text-center leading-10 bg-yellow-color-50'
        >
            <i className="fa-solid fa-cart-shopping fa-fw"></i>
        </button>
    )
}

export default NavbarCartButton;