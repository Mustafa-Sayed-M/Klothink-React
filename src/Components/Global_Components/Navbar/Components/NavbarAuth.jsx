import { SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';

function NavbarAuth() {

    const { user } = useUser();

    return (
        <>
            {
                user ? (
                    <UserButton />
                ) : (
                    <SignUpButton mode='modal'>
                        <div className="w-10 h-10 border border-white-color-95 text-grey-color-15 rounded-full cursor-pointer flex items-center justify-center sm:hover:border-yellow-color-50 transition">
                            <i className="fa-solid fa-user-plus"></i>
                        </div>
                    </SignUpButton>
                )
            }
        </>
    )
}

export default NavbarAuth;