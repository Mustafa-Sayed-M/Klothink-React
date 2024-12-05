import React from 'react';
import HeadSection from '../HeadSection';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchFaqs } from '../../../Utils/api';
import FaqCard from './Components/FaqCard';
import FilterFaqs from './Components/FilterFaqs';
import FaqsGridSkeleton from '../Skeletons/Faqs/FaqsGridSkeleton';

function Faqs() {

  const [searchParams] = useSearchParams();

  const faqTypeParam = searchParams.get('faqType') || '';

  // Faqs Query
  const faqsQuery = useQuery({
    queryKey: ['faqs', faqTypeParam],
    queryFn: () => fetchFaqs(faqTypeParam),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  return (
    <section className='faqs py-7' id='faqs'>
      <div className='container space-y-7'>
        {/* Head Section */}
        <HeadSection
          title={`Questions? We Have Answers.`}
          sectionName={`FAQ`}
          description={`Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience.`}
        />
        {/* Filter Faqs */}
        <FilterFaqs />
        {/* Content Grid */}
        {
          faqsQuery.isLoading ? (
            <FaqsGridSkeleton />
          ) : faqsQuery.isError ? (
            <div className="text-red-500">Failed to load products: {faqsQuery.error.message}</div>
          ) : <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-start'>
            {
              faqsQuery.data?.data.map((faq, index) => <FaqCard key={index} faqData={faq} />)
            }
          </div>
        }
      </div>
    </section>
  )
}

export default Faqs;