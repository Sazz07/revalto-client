'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Bell, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Logo } from './logo';

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-16 items-center justify-between px-4 md:px-6'>
        <div className='flex items-center gap-2 md:gap-4'>
          <div className='md:hidden'>
            <MobileNav />
          </div>
          <Logo variant='creative' size='md' />
        </div>
        <div className='hidden md:flex'>
          <nav className='flex items-center gap-6 text-sm'>
            <Link
              href='/reviews'
              className='transition-colors hover:text-foreground/80'
            >
              Reviews
            </Link>
            <Link
              href='/categories'
              className='transition-colors hover:text-foreground/80'
            >
              Categories
            </Link>

            <Link
              href='/about'
              className='transition-colors hover:text-foreground/80'
            >
              About
            </Link>
          </nav>
        </div>
        <div className='flex items-center gap-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <Bell className='h-5 w-5' />
                <span className='sr-only'>Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                New reviews in your favorite categories
              </DropdownMenuItem>
              <DropdownMenuItem>
                Your review received 5 upvotes
              </DropdownMenuItem>
              <DropdownMenuItem>
                New premium features available
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <User className='h-5 w-5' />
                <span className='sr-only'>User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/user/profile' className='flex w-full'>
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/user/settings' className='flex w-full'>
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/reviews/create' className='flex w-full'>
                  Write a Review
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/login' className='flex w-full'>
                  Sign out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-[80vw]'>
        <DropdownMenuItem>
          <Link href='/reviews' className='flex w-full'>
            Reviews
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/categories' className='flex w-full'>
            Categories
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link href='/about' className='flex w-full'>
            About
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Navbar;
