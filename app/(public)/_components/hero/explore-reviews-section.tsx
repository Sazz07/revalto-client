'use client';

import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, TrendingUp, Award, Clock } from 'lucide-react';
import ReviewCard from '../review-card';

export default function ExploreReviewsSection() {
  return (
    <section className='w-full py-12 md:py-16 bg-slate-50'>
      <div className='px-4 md:px-6'>
        <Tabs defaultValue='latest' className='w-full'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-4'>
                Explore Reviews
              </h2>
              <TabsList className='bg-white/80 p-1 rounded-lg'>
                <TabsTrigger
                  value='latest'
                  className='rounded-md data-[state=active]:bg-teal-700 data-[state=active]:text-white'
                >
                  <Clock className='h-4 w-4 mr-2' />
                  Latest
                </TabsTrigger>
                <TabsTrigger
                  value='trending'
                  className='rounded-md data-[state=active]:bg-teal-700 data-[state=active]:text-white'
                >
                  <TrendingUp className='h-4 w-4 mr-2' />
                  Trending
                </TabsTrigger>
                <TabsTrigger
                  value='top-rated'
                  className='rounded-md data-[state=active]:bg-teal-700 data-[state=active]:text-white'
                >
                  <Award className='h-4 w-4 mr-2' />
                  Top Rated
                </TabsTrigger>
              </TabsList>
            </div>
            <Link
              href='/reviews'
              className='group flex items-center text-teal-700 hover:text-teal-800'
            >
              View all reviews
              <ChevronRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5' />
            </Link>
          </div>

          <TabsContent value='latest' className='mt-0'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              <ReviewCard
                id='macbook-pro-16'
                title='Apple MacBook Pro 16-inch'
                category={{
                  id: 'electronics',
                  name: 'Electronics',
                }}
                rating={4.9}
                image='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop'
                author={{
                  id: 'alex-wong',
                  name: 'Alex Wong',
                  image:
                    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&auto=format&fit=crop&crop=faces',
                }}
                date='1 day ago'
                votes={42}
                comments={12}
                href='/reviews/macbook-pro-16'
                tags={[
                  { id: 'laptops', name: 'Laptops' },
                  { id: 'apple', name: 'Apple' },
                ]}
              />
              {/* Add more ReviewCard components here */}
            </div>
          </TabsContent>

          <TabsContent value='trending' className='mt-0'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {/* Add ReviewCard components for trending tab */}
            </div>
          </TabsContent>

          <TabsContent value='top-rated' className='mt-0'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {/* Add ReviewCard components for top-rated tab */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
