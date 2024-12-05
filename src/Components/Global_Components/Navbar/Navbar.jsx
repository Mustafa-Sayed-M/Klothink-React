import React from 'react';
import NavbarLinks from './Components/NavbarLinks';
import AppLogo from '../../Shared_Components/AppLogo';
import { NavLink } from 'react-router-dom';
import NavbarMenuToggler from './Components/NavbarMenuToggler';
import NavbarAuth from './Components/NavbarAuth';
import NavbarCartButton from './Components/NavbarCartButton';

function Navbar() {
    return (
        <nav className='border-b border-b-white-color-95'>
            <div className='container flex flex-wrap items-center justify-between py-3 gap-y-3'>
                {/* Navbar Links */}
                <NavbarLinks />
                {/* App Logo */}
                <AppLogo />
                {/* Right Box */}
                <div className='right-box text-grey-color-15 flex items-center gap-3'>
                    {/* Cart button */}
                    <NavbarCartButton />
                    {/* Navbar Auth */}
                    <NavbarAuth />
                    {/* Contact Support Link */}
                    <NavLink
                        to={'/support'}
                        className={({ isActive }) => `block max-sm:hidden py-2 px-4 rounded-full border border-white-color-95 ${isActive ? 'bg-yellow-color-50 border-yellow-color-50' : 'sm:hover:bg-yellow-color-50 sm:hover:border-yellow-color-50'} transition`}
                    >
                        Contact Support
                    </NavLink>
                    {/* Navbar Menu Toggler */}
                    <NavbarMenuToggler />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;