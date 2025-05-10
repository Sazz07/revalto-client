'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { toast } from 'sonner';

interface SaveReviewButtonProps {
  reviewId: string;
  isSaved: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export default function SaveReviewButton({
  reviewId,
  isSaved: initialSaved,
  variant = 'outline',
  size = 'icon',
}: SaveReviewButtonProps) {
  const [isSaved, setIsSaved] = useState(initialSaved);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveToggle = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSaved(!isSaved);
    setIsLoading(false);

    toast(
      isSaved ? 'Review removed from saved items' : 'Review saved successfully',
      {
        description: isSaved
          ? 'The review has been removed from your saved items.'
          : 'You can find this review in your saved items.',
        duration: 3000,
      }
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleSaveToggle}
      disabled={isLoading}
      aria-label={isSaved ? 'Unsave review' : 'Save review'}
      className={isSaved ? 'text-primary' : ''}
    >
      <Bookmark
        className={`h-[1.2em] w-[1.2em] ${isSaved ? 'fill-current' : ''}`}
      />
      {size !== 'icon' && (
        <span className='ml-2'>{isSaved ? 'Saved' : 'Save'}</span>
      )}
    </Button>
  );
}
