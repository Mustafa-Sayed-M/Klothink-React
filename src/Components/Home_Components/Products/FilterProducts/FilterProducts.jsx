import React from 'react';
import FilterWithCategories from './Components/FilterWithCategories';
import FilterWithStyle from './Components/FilterWithStyle';

function FilterProducts() {
    return (
        <div className='filter-products flex items-center justify-between max-md:flex-col gap-5'>
            {/* Filter With Categories */}
            <FilterWithCategories />
            {/* Filter With Style */}
            <FilterWithStyle />
        </div>
    )
}

export default FilterProducts;