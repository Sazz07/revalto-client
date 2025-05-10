'use client';

import CategoriesSection from './_components/hero/categories-section';
import ExploreReviewsSection from './_components/hero/explore-reviews-section';
import FeaturedReviewsSection from './_components/hero/featured-reviews-section';
import HeroSection from './_components/hero/hero-section';
import NewsletterSection from './_components/hero/newsletter-section';
import PremiumReviewsBanner from './_components/hero/premium-reviews-banner';
import StatisticsSection from './_components/hero/statistics-section';
import ValuePropositionSection from './_components/hero/value-proposition-section';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <HeroSection />
      <ValuePropositionSection />
      <CategoriesSection />
      <FeaturedReviewsSection />
      <ExploreReviewsSection />
      <PremiumReviewsBanner />
      <StatisticsSection />
      <NewsletterSection />
    </div>
  );
}
