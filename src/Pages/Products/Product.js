import React from 'react';
import { useParams } from 'react-router-dom';
import Faqs from '../../Components/Shared_Components/Faqs/Faqs';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../../Utils/api';
import AddToCart from '../../Components/Shared_Components/Actions/AddToCart';

function Product() {

    const { productId } = useParams();

    // Product Query
    const productQuery = useQuery({
        queryKey: [`product-${productId}`],
        queryFn: () => fetchProduct(productId),
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return (
        <div className={`product-page ${productId}`}>
            {/* Container */}
            <div className='container py-7'>
                {/* Content Grid */}
                <div className='content-grid grid lg:grid-cols-2 gap-7 items-start'>
                    {/* Product Image */}
                    <div className='product-image flex items-center justify-center bg-white-color-97 p-5 rounded-xl'>
                        <img
                            src={productQuery.data?.data.image.url}
                            alt={productQuery.data?.data.title}
                        />
                    </div>
                    {/* Product Info */}
                    <div className='product-info space-y-3'>
                        {/* Header */}
                        <div className='header flex max-sm:flex-col items-center justify-between gap-3'>
                            {/* Title Container */}
                            <div className='title-container space-y-2 max-sm:flex max-sm:items-center max-sm:justify-between max-sm:w-full'>
                                {/*  */}
                                <div className='box-container'>
                                    {/*  */}
                                    <div className='space-y-2'>
                                        {/* Stock */}
                                        <div className='py-2 px-4 rounded-full w-fit bg-yellow-color-50 text-grey-color-15'>{productQuery.data?.data.stock} Left!</div>
                                        {/* Category and Style */}
                                        <p className='text-grey-color-40'>{productQuery.data?.data.category.name} {productQuery.data?.data.style.name}</p>
                                    </div>
                                    {/* Title */}
                                    <h1 className='font-semibold text-2xl text-grey-color-15'>{productQuery.data?.data.title}</h1>
                                </div>
                                {/* Price */}
                                <h2 className='font-bold text-2xl'>${productQuery.data?.data.price}</h2>
                            </div>
                            {/* Actions */}
                            <div className='flex items-center gap-3 max-sm:w-full max-sm:*:w-full'>
                                {/* Buy Now */}
                                <button
                                    title='Buy Button'
                                    aria-label='Buy Button'
                                    type='button'
                                    className={`py-2 px-4 rounded-full bg-grey-color-15 text-white`}
                                >
                                    <i className="fa-solid fa-bag-shopping fa-fw"></i>
                                    <span className='ml-2'>Buy Now</span>
                                </button>
                                {/* Add to Cart */}
                                <AddToCart
                                    product={productQuery.data?.data}
                                    className={`py-2 px-4 rounded-full border border-white-color-95 text-grey-color-15`}
                                    text={`Add to Cart`}
                                />
                            </div>
                        </div>
                        {/* Box Container */}
                        <div className='p-3 rounded-xl border border-white-color-95 grid sm:grid-cols-2 gap-5'>
                            {/* Material */}
                            <div className='box-material space-y-2'>
                                <p className='text-grey-color-15'>Material</p>
                                <p className='text-grey-color-40'>{productQuery.data?.data.material}</p>
                            </div>
                            {/* Fit */}
                            <div className='box-material space-y-2'>
                                <p className='text-grey-color-15'>Fit</p>
                                <p className='text-grey-color-40'>{productQuery.data?.data.fit}</p>
                            </div>
                            {/* Sizes */}
                            <div className='box-material space-y-2 sm:col-span-2'>
                                <p className='text-grey-color-15'>Available Sizes</p>
                                <ul className='flex items-center gap-2'>
                                    {
                                        productQuery.data?.data.product_sizes.map((size, index) => <li
                                            key={index}
                                            className='uppercase font-semibold w-10 h-10 rounded-md bg-grey-color-15 text-white text-center leading-10'
                                        >
                                            {size.size}
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* Information */}
                        <div className='space-y-3 p-3 rounded-xl border border-white-color-95'>
                            {/* Title */}
                            <h3 className='text-grey-color-15 text-xl font-semibold'>Shipping Information</h3>
                            {/* List of Features */}
                            <ul className='features list-inside list-disc space-y-2'>
                                {
                                    (productQuery.data?.data.information || []).map((info, index) => <li key={index} className='text-grey-color-40'>{info}</li>)
                                }
                            </ul>
                        </div>
                        {/* Features */}
                        <div className='space-y-3 p-3 rounded-xl border border-white-color-95'>
                            {/* Title */}
                            <h3 className='text-grey-color-15 text-xl font-semibold'>Features</h3>
                            {/* List of Features */}
                            <ul className='features list-inside list-disc space-y-2'>
                                {
                                    (productQuery.data?.data.features || []).map((feature, index) => <li key={index} className='text-grey-color-40'>{feature}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Faqs */}
            <Faqs />
        </div>
    )
}

export default Product;