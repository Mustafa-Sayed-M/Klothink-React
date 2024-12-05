import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import ProductsSliderSkeleton from '../../Shared_Components/Skeletons/Products/ProductsSliderSkeleton';
import ProductsSlider from '../../Shared_Components/ProductsSlider/ProductsSlider';
import { fetchProducts } from '../../../Utils/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

function ActiveLifestyle() {

    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const activeLifestyleQuery = useQuery({
        queryKey: ['activeLifestyle', categoryParam],
        queryFn: () => fetchProducts({ category: categoryParam, style: `Lifestyle` }),
        staleTime: 10 * 60 * 1000,
    });


    return (
        <section className='active-lifestyle-products-section' id='products-section'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Active Lifestyle`}
                    description={`Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility.`}
                />
                {/* Products Slider */}
                {
                    activeLifestyleQuery.isLoading ? (
                        <ProductsSliderSkeleton />
                    ) : activeLifestyleQuery.isError ? (
                        <div className="text-red-500">Failed to load products: {activeLifestyleQuery.error.message}</div>
                    ) : activeLifestyleQuery.data.data.length > 0 ? (
                        <ProductsSlider productsData={activeLifestyleQuery.data?.data || []} />
                    ) : (
                        <p className='text-center'>No products match 💔</p>
                    )
                }
            </div>
        </section>
    )
}

export default ActiveLifestyle;