'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { FormWrapper, FormInput, FormCheckbox } from '@/components/form';
import { loginSchema, LoginFormValues } from '@/lib/schemas/auth-schemas';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);

    // Log form values
    console.log('Login form values:', values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
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
            <FormWrapper
              schema={loginSchema}
              onSubmit={handleSubmit}
              defaultValues={{ email: '', password: '', remember: false }}
              className='space-y-4'
            >
              <FormInput
                name='email'
                label='Email'
                type='email'
                placeholder='name@example.com'
                icon={<Mail className='h-4 w-4' />}
                disabled={isLoading}
              />

              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <label htmlFor='password' className='text-sm font-medium'>
                    Password
                  </label>
                  <Link
                    href='/forgot-password'
                    className='text-xs text-primary hover:underline'
                  >
                    Forgot password?
                  </Link>
                </div>
                <FormInput
                  name='password'
                  type='password'
                  placeholder='••••••••'
                  icon={<Lock className='h-4 w-4' />}
                  disabled={isLoading}
                />
              </div>

              <FormCheckbox
                name='remember'
                label='Remember me'
                disabled={isLoading}
              />

              <Button
                type='submit'
                className='w-full cursor-pointer'
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </FormWrapper>
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
