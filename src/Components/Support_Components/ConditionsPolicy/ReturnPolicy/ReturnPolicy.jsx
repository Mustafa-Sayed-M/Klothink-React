import React from 'react';
import HeadSection from '../../../Shared_Components/HeadSection';
import returnPolicyData from '../../../../Data/conditionsPolicy/returnPolicy.json';
import PolicyCard from '../PolicyCard';

function ReturnPolicy() {
    return (
        <section className='return-policy' id='return-policy'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Return Policy.`}
                    sectionName={`Easy Returns at Klothink`}
                    description={`Explore our hassle-free return policy designed to ensure your satisfaction with every purchase.`}
                />
                {/* Content Grid */}
                <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 border border-white-color-95 rounded-xl p-5 gap-5'>
                    {
                        returnPolicyData.map((policyData, index) => <PolicyCard key={index} policyData={policyData} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ReturnPolicy;