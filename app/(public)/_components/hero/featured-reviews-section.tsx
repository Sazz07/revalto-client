'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import FeaturedReviewCard from './featured-review-card';

export default function FeaturedReviewsSection() {
  return (
    <section className='w-full py-12 md:py-16 bg-white'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Featured Reviews
            </h2>
            <p className='text-muted-foreground md:text-lg'>
              Handpicked reviews from our community
            </p>
          </div>
          <Link
            href='/reviews'
            className='group flex items-center text-teal-700 hover:text-teal-800'
          >
            View all reviews
            <ChevronRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </div>

        <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
          <FeaturedReviewCard
            title='Sony WH-1000XM5 Wireless Headphones'
            category='Electronics'
            rating={4.8}
            image='https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop'
            author={{
              name: 'Michael Chen',
              image:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=faces',
              date: '2 days ago',
            }}
            isPremium={true}
            excerpt='These headphones have completely transformed my listening experience. The noise cancellation is unmatched, and the sound quality is exceptional. Battery life is impressive, lasting well over 30 hours on a single charge.'
            href='/reviews/sony-wh-1000xm5'
          />
          <FeaturedReviewCard
            title='Dyson V12 Detect Slim Cordless Vacuum'
            category='Home & Kitchen'
            rating={4.5}
            image='https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=2670&auto=format&fit=crop'
            author={{
              name: 'Sarah Johnson',
              image:
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&auto=format&fit=crop&crop=faces',
              date: '1 week ago',
            }}
            isPremium={false}
            excerpt="The Dyson V12 Detect Slim is a game-changer for home cleaning. The laser detection system actually shows dust you can't see with the naked eye. It's lightweight yet powerful, making it easy to clean the entire house without fatigue."
            href='/reviews/dyson-v12-detect'
          />
        </div>
      </div>
    </section>
  );
}