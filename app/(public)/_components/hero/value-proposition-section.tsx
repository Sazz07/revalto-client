'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Shield, Sparkles, Zap } from 'lucide-react';

export default function ValuePropositionSection() {
  return (
    <section className='w-full py-12 md:py-16 bg-white'>
      <div className='px-4 md:px-6'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-4'>
            Why Choose Revalto?
          </h2>
          <p className='text-muted-foreground md:text-lg max-w-3xl mx-auto'>
            We're building the most trusted community for honest product
            reviews and recommendations.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <Card className='bg-white border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='p-6 text-center'>
              <div className='mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <Shield className='h-6 w-6 text-teal-700' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Verified Reviews</h3>
              <p className='text-muted-foreground'>
                All reviews are from verified purchasers who have actually
                used the products.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-white border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='p-6 text-center'>
              <div className='mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <Sparkles className='h-6 w-6 text-teal-700' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                Unbiased Opinions
              </h3>
              <p className='text-muted-foreground'>
                Our reviewers are not influenced by brands or sponsorships,
                ensuring honest feedback.
              </p>
            </CardContent>
          </Card>

          <Card className='bg-white border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='p-6 text-center'>
              <div className='mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <Zap className='h-6 w-6 text-teal-700' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>
                In-Depth Analysis
              </h3>
              <p className='text-muted-foreground'>
                Get detailed insights beyond basic ratings to make informed
                purchasing decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}