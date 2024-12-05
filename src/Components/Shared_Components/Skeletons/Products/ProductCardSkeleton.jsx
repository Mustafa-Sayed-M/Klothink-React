import React from 'react';

function ProductCardSkeleton() {

    const sharedStyles = `bg-gray-300 animate-pulse rounded-md`;

    return (
        <div className='product-card-skeleton space-y-2'>
            {/* Image */}
            <div className={`h-[250px] bg-gray-300 ${sharedStyles}`}></div>
            {/* Title */}
            <p className={`w-36 h-5 ${sharedStyles}`}></p>
            {/* Foot */}
            <div className='foot flex items-center justify-between'>
                {/* Fit */}
                <p className={`w-16 h-5 ${sharedStyles}`}></p>
                {/* Price */}
                <p className={`w-16 h-5 ${sharedStyles}`}></p>
            </div>
        </div>
    )
}

export default ProductCardSkeleton;