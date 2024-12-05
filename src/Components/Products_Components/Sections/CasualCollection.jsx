import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../Utils/api';
import ProductsSliderSkeleton from '../../Shared_Components/Skeletons/Products/ProductsSliderSkeleton';
import ProductsSlider from '../../Shared_Components/ProductsSlider/ProductsSlider';

function CasualCollection() {

    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    // Casual Collection Query
    const casualCollectionQuery = useQuery({
        queryKey: ['casualCollection', categoryParam],
        queryFn: () => fetchProducts({ category: categoryParam, style: `Casual` }),
        staleTime: 10 * 60 * 1000,
    });

    return (
        <section className='casual-collection-products-active-lifestyle-section' id='products-section'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Casual Collection`}
                    description={`Discover our versatile men's casual wear collection, where comfort meets contemporary fashion.`}
                />
                {/* Products Slider */}
                {
                    casualCollectionQuery.isLoading ? (
                        <ProductsSliderSkeleton />
                    ) : casualCollectionQuery.isError ? (
                        <div className="text-red-500">Failed to load products: {casualCollectionQuery.error.message}</div>
                    ) : casualCollectionQuery.data.data.length > 0 ? (
                        <ProductsSlider productsData={casualCollectionQuery.data?.data || []} />
                    ) : (
                        <p className='text-center'>No products match 💔</p>
                    )
                }
            </div>
        </section>
    )
}

export default CasualCollection;