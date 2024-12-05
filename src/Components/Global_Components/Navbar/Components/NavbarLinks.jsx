import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const linksData = [
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Products' }
]

function NavbarLinks() {

    const { navbarMenuOpen } = useSelector(state => state.app);

    return (
        <ul className={`flex items-center gap-2 max-md:w-full max-md:order-1 max-md:flex-col ${!navbarMenuOpen && 'max-md:hidden'}`}>
            {linksData.map((link, index) => <li key={index} className='max-md:w-full'>
                <NavLink
                    to={link.to}
                    className={({ isActive }) => `block max-md:text-center py-2 px-4 rounded-full transition ${isActive ? 'bg-white-color-97 text-grey-color-15 shadow-sm' : 'md:hover:bg-white-color-97 md:hover:text-grey-color-15 md:hover:shadow-sm text-grey-color-40'}`}
                >
                    {link.text}
                </NavLink>
            </li>)}
            <li className='max-md:w-full'>
                <NavLink
                    to={'/support'}
                    className={({ isActive }) => `block max-md:text-center sm:hidden py-2 px-4 rounded-full transition ${isActive ? 'bg-white-color-97 text-grey-color-15 shadow-sm' : 'md:hover:bg-white-color-97 md:hover:text-grey-color-15 md:hover:shadow-sm text-grey-color-40'}`}
                >
                    Contact Support
                </NavLink>
            </li>
        </ul>
    )
}

export default NavbarLinks;