import React from 'react';

function Links({ title, linksData }) {
    return (
        <div>
            <h3 className='text-grey-color-15 font-semibold mb-2'>{title}</h3>
            <ul>
                {
                    linksData.map((link, index) => <li key={index}>
                        <a className='block py-2 text-grey-color-40 sm:hover:text-grey-color-15 transition' href={link.href}>{link.text}</a>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Links;