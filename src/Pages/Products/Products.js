import React from 'react';
import HeaderSection from '../../Components/Shared_Components/HeaderSection/HeaderSection';
import FilterProducts from '../../Components/Products_Components/FilterProducts';
import CasualCollection from '../../Components/Products_Components/Sections/CasualCollection';
import FormalElegance from '../../Components/Products_Components/Sections/FormalElegance';
import ActiveLifestyle from '../../Components/Products_Components/Sections/ActiveLifestyle';

const headSectionBoxesData = [
    {
        name: 'Exclusive Offers',
        description: '30% off on select items'
    },
    {
        name: 'New Arrivals',
        description: '50+ new arrivals Daily'
    },
    {
        name: 'Over 1,500 +',
        description: 'curated fashion products.'
    },
];

function Products() {
    return (
        <div className='products-page py-10 space-y-7'>
            {/* Header Section */}
            <HeaderSection
                title={`Discover Now`}
                description={`Dive into the world of fashion excellence at Klothink. Our curated selection brings together the latest trends and timeless classics, offering you a diverse array of clothing items that resonate with your unique style.`}
                sectionName={`Products`}
                boxesData={headSectionBoxesData}
            />
            {/* Filter Products */}
            <FilterProducts />
            {/* Products Sections */}
            <div className='space-y-7'>
                {/* Casual Collection Section */}
                <CasualCollection />
                {/* Formal Elegance Section */}
                <FormalElegance />
                {/* Active Lifestyle Section */}
                <ActiveLifestyle />
            </div>
        </div>
    )
}

export default Products;