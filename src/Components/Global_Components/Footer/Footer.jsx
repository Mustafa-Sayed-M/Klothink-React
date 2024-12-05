import React from 'react';
import SocialProfiles from './Components/SocialProfiles';
import { Link } from 'react-router-dom';
import Links from './Components/Links';
import AppLogo from '../../Shared_Components/AppLogo';

function Footer() {
    return (
        <footer className='border-t border-t-white-color-95 py-7 space-y-7'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
                    {/* Left Col */}
                    <div className='left-col col-span-2 space-y-7'>
                        {/* App Logo */}
                        <AppLogo />
                        {/* Form Subscribe */}
                        <form onSubmit={e => e.preventDefault()} className='flex max-sm:flex-col items-center gap-2'>
                            {/* Input */}
                            <input
                                type='email'
                                id='email'
                                required
                                name='email'
                                autoComplete='on'
                                placeholder='Enter your email'
                                className='max-sm:w-full sm:flex-1 focus:outline-none p-3 rounded-full bg-white-color-99 border border-white-color-95 text-grey-color-60 placeholder:text-grey-color-60'
                            />
                            {/* Button Submit */}
                            <button
                                type='submit'
                                className='w-full p-3 text-grey-color-15 rounded-full bg-yellow-color-50'
                                title='Submit'
                                aria-label='Submit'
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    {/* Home Links */}
                    <Links
                        title={`Home`}
                        linksData={[
                            { href: '', text: 'Features' },
                            { href: '', text: 'Popular Products' },
                            { href: '', text: 'Testimonials' },
                            { href: '', text: 'FAQ' },
                        ]}
                    />
                    {/* Menswear Links */}
                    <Links
                        title={`Menswear`}
                        linksData={[
                            { href: '', text: 'Casual' },
                            { href: '', text: 'Formal' },
                            { href: '', text: 'Party' },
                            { href: '', text: 'Business' },
                        ]}
                    />
                    {/* Womenswear Links */}
                    <Links
                        title={`Womenswear`}
                        linksData={[
                            { href: '', text: 'Casual' },
                            { href: '', text: 'Formal' },
                            { href: '', text: 'Party' },
                            { href: '', text: 'Business' },
                        ]}
                    />
                    {/* Kidswear Links */}
                    <Links
                        title={`Kidswear`}
                        linksData={[
                            { href: '', text: 'Casual' },
                            { href: '', text: 'Formal' },
                            { href: '', text: 'Party' }
                        ]}
                    />
                </div>
            </div>
            {/* Copyright */}
            <div className='copyright border-t border-t-white-color-95 pt-7'>
                <div className='container flex max-lg:flex-col gap-5 items-center justify-between'>
                    {/* Condition Links */}
                    <ul className='flex items-center gap-3'>
                        <li>
                            <Link to={``} className='text-grey-color-40 sm:hover:text-grey-color-15 transition'>Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to={``} className='text-grey-color-40 sm:hover:text-grey-color-15 transition'>Privacy Policy</Link>
                        </li>
                    </ul>
                    {/* Social Profiles */}
                    <SocialProfiles />
                    {/* Copyright Text */}
                    <p className='text-grey-color-40'>© 2024 Klothink. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;