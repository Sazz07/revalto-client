'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CategoryCard from './category-card';

export default function CategoriesSection() {
  return (
    <section className='w-full py-12 md:py-16 bg-slate-50'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Popular Categories
            </h2>
            <p className='text-muted-foreground md:text-lg'>
              Explore reviews across our most popular product categories
            </p>
          </div>
          <Link
            href='/categories'
            className='group flex items-center text-teal-700 hover:text-teal-800'
          >
            View all categories
            <ChevronRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6'>
          <CategoryCard
            id='electronics'
            name='Electronics'
            icon='laptop'
            count={1240}
            href='/categories/electronics'
          />
          <CategoryCard
            id='home-kitchen'
            name='Home & Kitchen'
            icon='home'
            count={986}
            href='/categories/home-kitchen'
          />
          <CategoryCard
            id='fashion'
            name='Fashion'
            icon='shirt'
            count={754}
            href='/categories/fashion'
          />
          <CategoryCard
            id='beauty'
            name='Beauty'
            icon='sparkles'
            count={632}
            href='/categories/beauty'
          />
          <CategoryCard
            id='sports'
            name='Sports'
            icon='dumbbell'
            count={418}
            href='/categories/sports'
          />
          <CategoryCard
            id='books'
            name='Books'
            icon='book-open'
            count={375}
            href='/categories/books'
          />
        </div>
      </div>
    </section>
  );
}
