import React from 'react';
import socialProfilesData from '../../../../Data/socialProfiles.json';

function SocialProfiles() {
    return (
        <ul className='social-profiles flex items-center gap-2'>
            {
                socialProfilesData.map((link, index) => <li key={index}>
                    <a
                        title={`Go to ${link.fontAwesomeIconClass} Profile`}
                        href={link.href}
                        target='_blank'
                        rel="noreferrer"
                        className='block w-10 h-10 leading-10 text-center text-xl rounded-full bg-grey-color-15 text-white transition'
                    >
                        <i className={`fa-brands fa-${link.fontAwesomeIconClass} fa-fw`}></i>
                    </a>
                </li>)
            }
        </ul>
    )
}

export default SocialProfiles;