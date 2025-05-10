'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

type FavoriteCategoryButtonProps = {
  categoryId: string;
  isFavorite: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

export default function FavoriteCategoryButton({
  categoryId,
  isFavorite: initialFavorite,
  variant = 'outline',
  size = 'icon',
}: FavoriteCategoryButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const [isLoading, setIsLoading] = useState(false);

  const handleFavoriteToggle = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsFavorite(!isFavorite);
    setIsLoading(false);

    toast(
      isFavorite
        ? 'Category removed from favorites'
        : 'Category added to favorites',
      {
        description: isFavorite
          ? 'The category has been removed from your favorites.'
          : 'You can find this category in your favorites.',
        duration: 3000,
      }
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleFavoriteToggle}
      disabled={isLoading}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className={isFavorite ? 'text-red-500' : ''}
    >
      <Heart
        className={`h-[1.2em] w-[1.2em] ${isFavorite ? 'fill-current' : ''}`}
      />
      {size !== 'icon' && (
        <span className='ml-2'>{isFavorite ? 'Favorited' : 'Favorite'}</span>
      )}
    </Button>
  );
}
