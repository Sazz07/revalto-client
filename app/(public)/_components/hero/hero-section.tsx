'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className='relative w-full py-16 md:py-24 lg:py-32 overflow-hidden border-none'>
      {/* Background with overlay gradient */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop'
          alt='Background'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-teal-700/70'></div>
      </div>
      <div className='relative z-10 px-4 md:px-6'>
        <div className='max-w-5xl mx-auto text-center text-white'>
          <Badge className='bg-white/20 hover:bg-white/30 text-white border-none mb-6'>
            Trusted by 10,000+ users
          </Badge>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6'>
            Discover Products{' '}
            <span className='text-teal-300'>Worth Your Money</span>
          </h1>
          <p className='text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8'>
            Join our community of reviewers sharing authentic experiences with
            products across all categories.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <Button
              size='lg'
              className='bg-white text-teal-800 hover:bg-white/90'
              asChild
            >
              <Link href='/reviews'>
                <Search className='mr-2 h-5 w-5' />
                Explore Reviews
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-white text-white bg-white/10 hover:bg-white/20'
              asChild
            >
              <Link href='/reviews/create'>
                <Star className='mr-2 h-5 w-5' />
                Write a Review
              </Link>
            </Button>
          </div>

          {/* Featured Products Showcase */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            {[
              {
                image:
                  'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop',
                title: 'Headphones',
                rating: 4.8,
              },
              {
                image:
                  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop',
                title: 'Laptops',
                rating: 4.9,
              },
              {
                image:
                  'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2671&auto=format&fit=crop',
                title: 'Smartphones',
                rating: 4.7,
              },
              {
                image:
                  'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2670&auto=format&fit=crop',
                title: 'TVs',
                rating: 4.6,
              },
            ].map((item, i) => (
              <div
                key={i}
                className='group relative overflow-hidden rounded-xl aspect-[4/3]'
              >
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-3 text-white'>
                  <div className='flex items-center gap-1 mb-1'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3 w-3 ${
                          star <= Math.floor(item.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                    <span className='text-xs ml-1'>{item.rating}</span>
                  </div>
                  <p className='font-medium text-sm'>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className='flex flex-wrap items-center justify-center gap-6 mt-10'>
            <div className='flex -space-x-3'>
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&auto=format&fit=crop&crop=faces',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&crop=faces',
              ].map((src, i) => (
                <div
                  key={i}
                  className='inline-block rounded-full ring-2 ring-white'
                >
                  <Image
                    src={src || '/placeholder.svg'}
                    alt={`User ${i + 1}`}
                    width={40}
                    height={40}
                    className='rounded-full h-10 w-10 object-cover'
                  />
                </div>
              ))}
              <div className='rounded-full bg-teal-600 ring-2 ring-white h-10 w-10 flex items-center justify-center text-sm font-medium'>
                +5k
              </div>
            </div>
            <div className='flex items-center'>
              <div className='flex'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className='h-5 w-5 fill-amber-400 text-amber-400'
                  />
                ))}
              </div>
              <span className='ml-2 text-sm font-medium'>
                4.8/5 from over 2,000 reviews
              </span>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* Wave divider */}
      <div className='absolute bottom-0 left-0 right-0 translate-y-[1px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 120'
          className='w-full h-auto block'
        >
          <path
            fill='#ffffff'
            fillOpacity='1'
            d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'
          ></path>
        </svg>
      </div>
    </section>
  );
}