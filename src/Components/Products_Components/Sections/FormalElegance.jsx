import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import ProductsSliderSkeleton from '../../Shared_Components/Skeletons/Products/ProductsSliderSkeleton';
import ProductsSlider from '../../Shared_Components/ProductsSlider/ProductsSlider';
import { fetchProducts } from '../../../Utils/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

function FormalElegance() {

    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const formalEleganceQuery = useQuery({
        queryKey: ['formalElegance', categoryParam],
        queryFn: () => fetchProducts({ category: categoryParam, style: `Formal` }),
        staleTime: 10 * 60 * 1000,
    });

    return (
        <section className='formal-elegance-products-active-lifestyle-section' id='products-section'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Formal Elegance`}
                    description={`Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look.`}
                />
                {/* Products Slider */}
                {
                    formalEleganceQuery.isLoading ? (
                        <ProductsSliderSkeleton />
                    ) : formalEleganceQuery.isError ? (
                        <div className="text-red-500">Failed to load products: {formalEleganceQuery.error.message}</div>
                    ) : formalEleganceQuery.data.data.length > 0 ? (
                        <ProductsSlider productsData={formalEleganceQuery.data?.data || []} />
                    ) : (
                        <p className='text-center'>No products match 💔</p>
                    )
                }
            </div>
        </section>
    )
}

export default FormalElegance;