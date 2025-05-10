import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className='w-full py-16 md:py-24 bg-slate-50'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto'>
          <div className='inline-block rounded-full bg-teal-100 p-3 text-teal-700'>
            <Mail className='h-6 w-6' />
          </div>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
            Stay Updated with the Latest Reviews
          </h2>
          <p className='text-muted-foreground md:text-xl max-w-[700px]'>
            Subscribe to our newsletter and never miss out on new product
            reviews, exclusive offers, and community updates.
          </p>
          <div className='flex w-full max-w-md flex-col sm:flex-row gap-3 mt-4'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='flex-1 h-12'
            />
            <Button className='bg-teal-700 hover:bg-teal-800 h-12' size='lg'>
              Subscribe
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
          <p className='text-xs text-muted-foreground mt-2'>
            By subscribing, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
}
