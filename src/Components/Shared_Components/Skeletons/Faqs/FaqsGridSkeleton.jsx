import React from 'react';
import FaqsGridSkeletonCard from './FaqsGridSkeletonCard';

function FaqsGridSkeleton() {
    return (
        <div className='faqs-grid-skeleton grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-start'>
            {/* Row 1 */}
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            {/* Row 2 */}
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            {/* Row 3 */}
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            {/* Row 4 */}
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            {/* Row 5 */}
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
            <FaqsGridSkeletonCard />
        </div>
    )
}

export default FaqsGridSkeleton;