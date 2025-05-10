'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <div className='flex items-center gap-2'>
          <button
            className='lg:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
            <span className='sr-only'>Toggle menu</span>
          </button>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='https://img.icons8.com/fluency/96/star-half-empty.png'
              alt='Revalto Logo'
              width={32}
              height={32}
              className='rounded-lg'
            />
            <span className='font-bold text-xl hidden md:inline-block'>
              Revalto
            </span>
          </Link>
        </div>

        <nav className='hidden lg:flex items-center gap-6'>
          <Link
            href='/'
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Home
          </Link>
          <Link
            href='/reviews'
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/reviews') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Reviews
          </Link>
          <Link
            href='/categories'
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/categories') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Categories
          </Link>
          {/* <Link
            href='/premium'
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/premium') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Premium
          </Link> */}
          <Link
            href='/about'
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive('/about') ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            About
          </Link>
        </nav>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Link href='/user/profile'>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <User className='h-5 w-5' />
                <span className='sr-only'>Account</span>
              </Button>
            </Link>
            <Link href='/cart'>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <ShoppingCart className='h-5 w-5' />
                <span className='sr-only'>Cart</span>
              </Button>
            </Link>
            <Link href='/login' className='hidden md:block'>
              <Button variant='outline' size='sm'>
                Sign In
              </Button>
            </Link>
            <Link href='/register' className='hidden md:block'>
              <Button size='sm' className='bg-teal-700 hover:bg-teal-800'>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden border-t'>
          <div className='container py-4 px-4 md:px-6 space-y-4'>
            <nav className='grid gap-2'>
              <Link
                href='/'
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary p-2 rounded-md',
                  isActive('/')
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/reviews'
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary p-2 rounded-md',
                  isActive('/reviews')
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href='/categories'
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary p-2 rounded-md',
                  isActive('/categories')
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              {/* <Link
                href='/premium'
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary p-2 rounded-md',
                  isActive('/premium')
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Premium
              </Link> */}
              <Link
                href='/about'
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary p-2 rounded-md',
                  isActive('/about')
                    ? 'bg-muted text-primary'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            <div className='flex gap-2'>
              <Link href='/login' className='flex-1'>
                <Button variant='outline' className='w-full'>
                  Sign In
                </Button>
              </Link>
              <Link href='/register' className='flex-1'>
                <Button className='w-full bg-teal-700 hover:bg-teal-800'>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
