import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronRight } from 'lucide-react';

type FeaturedReviewCardProps = {
  title: string;
  category: string;
  rating: number;
  image: string;
  author: {
    name: string;
    image: string;
    date: string;
  };
  isPremium: boolean;
  excerpt: string;
  href: string;
};

export default function FeaturedReviewCard({
  title,
  category,
  rating,
  image,
  author,
  isPremium,
  excerpt,
  href,
}: FeaturedReviewCardProps) {
  return (
    <Card className='overflow-hidden transition-all hover:shadow-lg border-none shadow-md group'>
      <div className='relative'>
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          width={600}
          height={400}
          className='w-full h-[250px] object-cover transition-transform group-hover:scale-105 duration-300'
        />
        <div className='absolute top-3 left-3 flex gap-2'>
          <Badge variant='secondary' className='bg-white/90 text-slate-900'>
            {category}
          </Badge>
          {isPremium && (
            <Badge className='bg-orange-500 hover:bg-orange-600'>Premium</Badge>
          )}
        </div>
      </div>
      <CardContent className='p-6'>
        <div className='flex items-center gap-1 mb-2'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? 'fill-amber-500 text-amber-500'
                  : 'fill-muted text-muted-foreground'
              }`}
            />
          ))}
          <span className='text-sm font-medium ml-1'>{rating.toFixed(1)}</span>
        </div>
        <h3 className='text-xl font-bold mb-2 group-hover:text-teal-700 transition-colors'>
          {title}
        </h3>
        <p className='text-muted-foreground mb-4 line-clamp-3'>{excerpt}</p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src={author.image || '/placeholder.svg'}
              alt={author.name}
              width={40}
              height={40}
              className='rounded-full'
            />
            <div>
              <p className='text-sm font-medium'>{author.name}</p>
              <p className='text-xs text-muted-foreground'>{author.date}</p>
            </div>
          </div>
          <Link
            href={href}
            className='group/link flex items-center text-sm font-medium text-teal-700 hover:text-teal-800'
          >
            Read more
            <ChevronRight className='ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
