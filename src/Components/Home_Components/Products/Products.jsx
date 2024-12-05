import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../../../Utils/api';
import HeadSection from '../../Shared_Components/HeadSection';
import ProductsSliderSkeleton from '../../Shared_Components/Skeletons/Products/ProductsSliderSkeleton';
import FilterProducts from './FilterProducts/FilterProducts';
import ProductsSlider from '../../Shared_Components/ProductsSlider/ProductsSlider';

function Products() {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const styleParam = searchParams.get('style');

    // Products Query
    const productsQuery = useQuery({
        queryKey: ['products', categoryParam, styleParam],
        queryFn: () => fetchProducts({ category: categoryParam, style: styleParam }),
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return (
        <section className='products py-7' id='products'>
            <div className='container space-y-7'>
                {/* Head Section */}
                <HeadSection
                    title={`Discover Fashion.`}
                    sectionName={`Products`}
                    description={`Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.`}
                />
                {/* Filter Products */}
                <FilterProducts />
                {/* Products Slider */}
                {
                    productsQuery.isLoading ? (
                        <ProductsSliderSkeleton />
                    ) : productsQuery.isError ? (
                        <div className="text-red-500">Failed to load products: {productsQuery.error.message}</div>
                    ) : productsQuery.data.data.length > 0 ? (
                        <ProductsSlider productsData={productsQuery.data.data} />
                    ) : (
                        <p className='text-center'>No products match 💔</p>
                    )
                }
            </div>
        </section>
    );
}

export default Products;