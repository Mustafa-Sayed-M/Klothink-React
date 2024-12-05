import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './Components/ProductCard';
import CustomPagination from './Components/CustomPagination';
// Import Swiper styles
import 'swiper/css';

function ProductsSlider({ productsData }) {

    const swiperRef = React.useRef();

    return (
        <div className='products-slider space-y-5'>
            {/* Swiper Slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={swiper => swiperRef.current = swiper}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
            >
                {productsData.map((product, index) => <SwiperSlide key={index}>
                    <ProductCard productData={product} />
                </SwiperSlide>)}
            </Swiper>
            {/* Custom Pagination */}
            <CustomPagination swiperRef={swiperRef} />
        </div>
    )
}

export default ProductsSlider;