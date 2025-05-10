'use client';

import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import Link from 'next/link';

type PremiumReviewOverlayProps = {
  price: number;
  reviewId?: string;
  onPurchase?: () => void;
};

export default function PremiumReviewOverlay({
  price,
  reviewId,
  onPurchase,
}: PremiumReviewOverlayProps) {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-10 rounded-lg p-6 text-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4'>
        <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 mx-auto'>
          <Lock className='h-6 w-6' />
        </div>
        <h3 className='text-xl font-bold'>Premium Review Content</h3>
        <p className='text-muted-foreground'>
          This in-depth review is available exclusively to premium users. Unlock
          now for detailed insights, comprehensive analysis, and expert
          recommendations.
        </p>
        <div className='text-2xl font-bold text-primary'>
          ${price.toFixed(2)}
        </div>
        <div className='pt-2'>
          {onPurchase ? (
            <Button className='w-full' onClick={onPurchase}>
              Unlock Premium Review
            </Button>
          ) : (
            <Button className='w-full' asChild>
              <Link
                href={reviewId ? `/checkout?review=${reviewId}` : '/checkout'}
              >
                Unlock Premium Review
              </Link>
            </Button>
          )}
        </div>
        <p className='text-xs text-muted-foreground pt-2'>
          One-time payment. No subscription required.
        </p>
      </div>
    </div>
  );
}
