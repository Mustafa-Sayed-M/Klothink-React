import React from 'react';
import locationsData from '../../../Data/officeLocations.json';
import LocationCard from './LocationCard';

function OfficeLocations() {
    return (
        <section className='office-locations' id='office-locations'>
            <div className='container'>
                {/* Section Title */}
                <p className='text-grey-color-60 mb-3'>Office Locations</p>
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 border border-white-color-95 rounded-xl p-5 gap-5'>
                    {
                        locationsData.map((locationData, index) => <LocationCard key={index} locationData={locationData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default OfficeLocations;