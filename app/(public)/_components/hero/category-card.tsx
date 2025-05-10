import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Laptop,
  Home,
  Shirt,
  Sparkles,
  Dumbbell,
  BookOpen,
  Smartphone,
  Utensils,
  Car,
  Gamepad,
  Baby,
  Palette,
} from 'lucide-react';
import FavoriteCategoryButton from './favorite-category-button';

type CategoryCardProps = {
  id: string;
  name: string;
  icon: string;
  count: number;
  href: string;
  isFavorite?: boolean;
};

export default function CategoryCard({
  id,
  name,
  icon,
  count,
  href,
  isFavorite = false,
}: CategoryCardProps) {
  const getIcon = (iconName: string) => {
    const props = { className: 'h-10 w-10 mb-3 text-teal-700' };

    switch (iconName.toLowerCase()) {
      case 'laptop':
        return <Laptop {...props} />;
      case 'home':
        return <Home {...props} />;
      case 'shirt':
        return <Shirt {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'dumbbell':
        return <Dumbbell {...props} />;
      case 'book-open':
        return <BookOpen {...props} />;
      case 'smartphone':
        return <Smartphone {...props} />;
      case 'utensils':
        return <Utensils {...props} />;
      case 'car':
        return <Car {...props} />;
      case 'gamepad':
        return <Gamepad {...props} />;
      case 'baby':
        return <Baby {...props} />;
      case 'palette':
        return <Palette {...props} />;
      default:
        return <Laptop {...props} />;
    }
  };

  return (
    <Card className='overflow-hidden transition-all hover:shadow-md hover:border-primary/20 h-full relative group border-none shadow-md'>
      <Link href={href} className='absolute inset-0 z-10'>
        <span className='sr-only'>View {name} category</span>
      </Link>
      <CardContent className='p-6 flex flex-col items-center justify-center text-center'>
        {getIcon(icon)}
        <h3 className='font-medium text-base'>{name}</h3>
        <p className='text-sm text-muted-foreground mt-1'>{count} reviews</p>
      </CardContent>
      <div className='absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity'>
        <FavoriteCategoryButton
          categoryId={id}
          isFavorite={isFavorite}
          size='icon'
          variant='ghost'
        />
      </div>
    </Card>
  );
}
