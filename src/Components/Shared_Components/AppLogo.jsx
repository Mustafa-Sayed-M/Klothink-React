import React from 'react';
import { Link } from 'react-router-dom';

function AppLogo() {
    return (
        <Link to={'/'} className='block'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                alt='App Logo'
            />
        </Link>
    )
}

export default AppLogo;