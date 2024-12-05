import React from 'react';
import HeadSection from '../../../Shared_Components/HeadSection';
import { Link } from 'react-router-dom';

function TextArea() {
    return (
        <div className='text-area'>
            {/* Head Section */}
            <HeadSection
                title={`Elevate Your Style with Klothink`}
                sectionName={`Style Redefined.`}
                description={`Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.`}
            />
            {/* Links */}
            <ul className='flex items-center gap-2 mt-5'>
                {/* Shop Link */}
                <li>
                    <Link
                        to={'/products'}
                        className='bg-yellow-color-50 py-2 px-4 rounded-full flex items-center gap-2 text-grey-color-15'
                    >
                        <i className="fa-solid fa-bag-shopping fa-fw"></i>
                        <span>Shop Now</span>
                    </Link>
                </li>
                {/* Contact Link */}
                <li>
                    <Link
                        to={'/support'}
                        className='py-2 px-4 rounded-full block border border-white-color-95 text-grey-color-15'
                    >
                        <span>Contact Us</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TextArea;