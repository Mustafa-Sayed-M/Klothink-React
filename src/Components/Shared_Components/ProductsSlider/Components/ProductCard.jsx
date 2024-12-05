import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../../Actions/AddToCart';

function ProductCard({ productData }) {

    const {
        documentId,
        title,
        image,
        price,
        fit,
    } = productData;

    return (
        <div className='product-card space-y-3 rounded-md border border-white-color-95'>
            {/* Image Container */}
            <div className='image-container relative'>
                {/* Image Link */}
                <Link to={`/products/${documentId}`} className='flex items-center justify-center h-[250px] bg-white-color-97 p-3 rounded-md shadow-sm'>
                    {/* Image */}
                    <img
                        src={image?.url}
                        alt={title}
                        className='object-cover'
                    />
                </Link>
                {/* Button Add to Cart */}
                <AddToCart
                    product={productData}
                    className={`w-11 h-11 flex items-center justify-center rounded-full bg-yellow-color-50 border border-yellow-color-50 sm:hover:bg-white transition text-grey-color-15 absolute z-10 right-4 bottom-0 translate-y-1/2 shadow-sm`}
                />
            </div>
            {/* Product Info */}
            <div className='product-info space-y-1 p-3'>
                {/* Title */}
                <h1 className='line-clamp-1 text-grey-color-15 font-bold text-lg'>{title}</h1>
                {/* Sub Info */}
                <div className='sub-info flex items-center justify-between'>
                    {/* Fit */}
                    <p className='text-grey-color-60'>{fit}</p>
                    {/* Price */}
                    <p className='text-grey-color-15 font-bold'>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;