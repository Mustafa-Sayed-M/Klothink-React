import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';
// Import Swiper styles
import 'swiper/css';
import CustomPagination from '../../../Shared_Components/ProductsSlider/Components/CustomPagination';


function TestimonialsSlider({ testimonialsData }) {

    const swiperRef = React.useRef();

    return (
        <div className='products-slider space-y-5 p-3 bg-white-color-99 border border-white-color-97 rounded-xl relative'>
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
                    }
                }}
            >
                {testimonialsData.map((testimonial, index) => <SwiperSlide key={index}>
                    <TestimonialCard testimonialData={testimonial} key={index} />
                </SwiperSlide>)}
            </Swiper>
            {/* Custom Pagination */}
            <CustomPagination
                swiperRef={swiperRef}
            />
        </div>
    )
}

export default TestimonialsSlider;