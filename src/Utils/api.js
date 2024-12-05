const BASE_URL = `https://e-commerce-strapi-production.up.railway.app/api`;

// Fetch Products:
export const fetchProducts = async ({ category, style }) => {
    const filters = [];
    if (category) filters.push(`filters[category][name][$eq]=${category}`);
    if (style) filters.push(`filters[style][name][$eq]=${style}`);

    const queryString = filters.length ? `?${filters.join('&')}&populate=*` : `?populate=*`;
    const url = `${BASE_URL}/products${queryString}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    return response.json();
};
// Fetch Product:
export const fetchProduct = async (productId) => {
    const url = `${BASE_URL}/products/${productId}?populate=*`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch product. Status: ${response.status}`);
    }

    return response.json();
};

// Fetch Testimonials:
export const fetchTestimonials = async () => {
    const url = `${BASE_URL}/testimonials`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch testimonials. Status: ${response.status}`);
    }
    return response.json();
};

// Fetch Faqs:
export const fetchFaqs = async (faqType) => {
    const filters = [];
    if (faqType) filters.push(`filters[faq_type][name][$eq]=${faqType}`);

    const queryString = filters.length ? `?${filters.join('&')}&populate=*` : `?populate=*`;
    const url = `${BASE_URL}/faqs${queryString}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch faqs. Status: ${response.status}`);
    }
    return response.json();
};
// Fetch Faqs Types:
export const fetchFaqsTypes = async () => {
    const url = `${BASE_URL}/faq-types`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch faq types. Status: ${response.status}`);
    }
    return response.json();
};