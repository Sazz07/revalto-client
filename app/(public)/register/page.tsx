'use client';

import { useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, User } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { FormWrapper, FormInput } from '@/components/form';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true);

    // Log form values
    console.log('Register form values:', values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
  };

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center px-4 md:px-6'>
      <div className='w-full max-w-md space-y-6'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Logo variant='creative' size='md' />
          <h1 className='text-2xl font-bold'>Create an account</h1>
          <p className='text-sm text-muted-foreground'>
            Enter your information to create an account
          </p>
        </div>

        <Card>
          <CardContent className='pt-6'>
            <FormWrapper
              schema={registerSchema}
              onSubmit={handleSubmit}
              defaultValues={{ name: '', email: '', password: '' }}
              className='space-y-4'
            >
              <FormInput
                name='name'
                label='Full Name'
                placeholder='John Doe'
                icon={<User className='h-4 w-4' />}
                disabled={isLoading}
              />

              <FormInput
                name='email'
                label='Email'
                type='email'
                placeholder='name@example.com'
                icon={<Mail className='h-4 w-4' />}
                disabled={isLoading}
              />

              <FormInput
                name='password'
                label='Password'
                type='password'
                placeholder='••••••••'
                icon={<Lock className='h-4 w-4' />}
                disabled={isLoading}
              />

              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? 'Creating account...' : 'Create Account'}
              </Button>
            </FormWrapper>
          </CardContent>

          <Separator />

          <CardFooter className='flex flex-col gap-4 p-6'>
            <div className='text-center text-sm'>
              Already have an account?{' '}
              <Link href='/login' className='text-primary hover:underline'>
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
