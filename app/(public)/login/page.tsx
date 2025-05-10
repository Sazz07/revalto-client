'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Logo } from '@/components/shared/logo';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center px-4 md:px-0'>
      <div className='w-full max-w-md space-y-6'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Logo variant='creative' size='md' />
          <h1 className='text-2xl font-bold'>Welcome back</h1>
          <p className='text-sm text-muted-foreground'>
            Enter your credentials to access your account
          </p>
        </div>

        <Card>
          <CardContent className='pt-6'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='name@example.com'
                    className='pl-10'
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    href='/forgot-password'
                    className='text-xs text-primary hover:underline'
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    className='pl-10'
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='absolute right-1 top-1 h-8 w-8'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className='h-4 w-4 text-muted-foreground' />
                    ) : (
                      <Eye className='h-4 w-4 text-muted-foreground' />
                    )}
                    <span className='sr-only'>
                      {showPassword ? 'Hide password' : 'Show password'}
                    </span>
                  </Button>
                </div>
              </div>

              <div className='flex items-center space-x-2'>
                <Checkbox id='remember' />
                <Label htmlFor='remember' className='text-sm'>
                  Remember me
                </Label>
              </div>

              <Button
                type='submit'
                className='w-full cursor-pointer'
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>

          <Separator />

          <CardFooter className='flex flex-col gap-4 p-6'>
            <div className='text-center text-sm'>
              Don&apos;t have an account?{' '}
              <Link href='/register' className='text-primary hover:underline'>
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
