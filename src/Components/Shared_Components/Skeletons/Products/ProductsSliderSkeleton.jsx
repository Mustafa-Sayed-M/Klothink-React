import React from 'react';
import ProductCardSkeleton from './ProductCardSkeleton';

function ProductsSliderSkeleton() {
    return (
        <div className='products-skeleton-slider '>
            {/* Skeletons Grid */}
            <div className='skeleton-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </div>
        </div>
    )
}

export default ProductsSliderSkeleton;