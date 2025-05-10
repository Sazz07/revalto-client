'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Sparkles, Clock, Zap, ArrowRight } from 'lucide-react';

export default function PremiumReviewsBanner() {
  return (
    <section className='w-full py-16 md:py-24 relative overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop'
          alt='Premium Background'
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/80'></div>
      </div>

      <div className='px-4 md:px-6 relative z-10'>
        <div className='max-w-3xl mx-auto text-center text-white mb-12'>
          <Badge
            variant='outline'
            className='border-white/30 text-white bg-white/10 hover:bg-white/20 mb-4'
          >
            Premium Content
          </Badge>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6'>
            Unlock In-Depth{' '}
            <span className='text-teal-300'>Premium Reviews</span>
          </h2>
          <p className='md:text-xl mb-8'>
            Get exclusive access to our most detailed and comprehensive
            product reviews with expert insights.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white'>
          {[
            {
              icon: <Shield className='h-8 w-8 text-teal-300' />,
              title: 'Expert Analysis',
              description:
                'Detailed insights from industry professionals with years of experience',
            },
            {
              icon: <Sparkles className='h-8 w-8 text-teal-300' />,
              title: 'Performance Benchmarks',
              description:
                'Comprehensive data and comparisons across similar products',
            },
            {
              icon: <Clock className='h-8 w-8 text-teal-300' />,
              title: 'Long-term Testing',
              description:
                'Reviews based on months of real-world usage and durability tests',
            },
            {
              icon: <Zap className='h-8 w-8 text-teal-300' />,
              title: 'Ad-free Experience',
              description:
                'Clean, distraction-free reading with downloadable content',
            },
          ].map((feature, i) => (
            <div
              key={i}
              className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors'
            >
              <div className='bg-teal-900/50 rounded-full w-14 h-14 flex items-center justify-center mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-white/80 mb-4'>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-10'>
          <Button
            size='lg'
            className='bg-white text-teal-800 hover:bg-white/90'
            asChild
          >
            <Link href='/premium'>
              <Sparkles className='mr-2 h-5 w-5' />
              Explore Premium
            </Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-white text-white bg-white/10 hover:bg-white/20'
            asChild
          >
            <Link href='/premium#learn-more'>
              Learn More
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}