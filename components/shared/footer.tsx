'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full border-t bg-background'>
      <div className='px-4 md:px-6 py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='font-bold text-xl'>Revalto</div>
            </div>
            <p className='text-sm text-muted-foreground'>
              Honest product reviews from real users. Discover the best products
              for your needs.
            </p>
            <div className='flex items-center gap-4'>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='#'
                className='text-muted-foreground hover:text-primary'
              >
                <Youtube className='h-5 w-5' />
                <span className='sr-only'>YouTube</span>
              </Link>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>Explore</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/reviews'
                  className='text-muted-foreground hover:text-primary'
                >
                  All Reviews
                </Link>
              </li>
              <li>
                <Link
                  href='/categories'
                  className='text-muted-foreground hover:text-primary'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href='/premium'
                  className='text-muted-foreground hover:text-primary'
                >
                  Premium Reviews
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-primary'
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>Resources</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/help'
                  className='text-muted-foreground hover:text-primary'
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href='/guidelines'
                  className='text-muted-foreground hover:text-primary'
                >
                  Review Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-muted-foreground hover:text-primary'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-muted-foreground hover:text-primary'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-sm font-medium'>Legal</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/terms'
                  className='text-muted-foreground hover:text-primary'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-muted-foreground hover:text-primary'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/cookies'
                  className='text-muted-foreground hover:text-primary'
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/accessibility'
                  className='text-muted-foreground hover:text-primary'
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t text-center text-sm text-muted-foreground'>
          <p>© {new Date().getFullYear()} Revalto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
