import React from 'react';
import Faqs from '../Components/Shared_Components/Faqs/Faqs';
import HeaderSection from '../Components/Shared_Components/HeaderSection/HeaderSection';
import OfficeLocations from '../Components/Support_Components/OfficeLocations/OfficeLocations';
import ReturnPolicy from '../Components/Support_Components/ConditionsPolicy/ReturnPolicy/ReturnPolicy';
import CancellationPolicy from '../Components/Support_Components/ConditionsPolicy/CancellationPolicy/CancellationPolicy';

const headSectionBoxesData = [
    {
        name: 'Email',
        description: 'mustafacoder9@gmail.com'
    },
    {
        name: 'Call Us On',
        description: '+20 1122124968'
    },
    {
        name: 'Working Hours',
        description: 'Available 24/7'
    },
];

function Support() {
    return (
        <div className='support-page space-y-10'>
            {/* Header Section */}
            <HeaderSection
                title={`Klothink Support.`}
                description={`24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.`}
                sectionName={`Your Fashion Ally`}
                boxesData={headSectionBoxesData}
            />
            {/* Office Locations */}
            <OfficeLocations />
            {/* Return Policy */}
            <ReturnPolicy />
            {/* Cancellation Policy */}
            <CancellationPolicy />
            {/* Faqs */}
            <Faqs />
        </div>
    )
}

export default Support;