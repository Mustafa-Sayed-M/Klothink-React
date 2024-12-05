import React from 'react';
import HeadSection from '../../../Shared_Components/HeadSection';
import cancellationPolicyData from '../../../../Data/conditionsPolicy/cancellationPolicy.json';
import PolicyCard from '../PolicyCard';

function CancellationPolicy() {
    return (
        <section className='cancellation-policy' id='cancellation-policy'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Cancellation Policy.`}
                    sectionName={`Flexible Ordering Experience`}
                    description={`Familiarize yourself with our cancellation policy to make changes to your order with ease.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 border border-white-color-95 rounded-xl p-5 gap-5'>
                    {
                        cancellationPolicyData.map((policyData, index) => <PolicyCard key={index} policyData={policyData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default CancellationPolicy;