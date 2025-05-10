import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Star, MessageSquare, ThumbsUp, Lock } from 'lucide-react';

type ReviewListItemProps = {
  title: string;
  category: string;
  rating: number;
  image: string;
  author: string;
  date: string;
  votes: number;
  comments: number;
  href: string;
  excerpt: string;
  isPremium?: boolean;
};

export default function ReviewListItem({
  title,
  category,
  rating,
  image,
  author,
  date,
  votes,
  comments,
  href,
  excerpt,
  isPremium = false,
}: ReviewListItemProps) {
  return (
    <div className='flex gap-4 p-4 border rounded-lg hover:shadow-md transition-all'>
      <div className='flex-shrink-0'>
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          width={120}
          height={120}
          className='rounded-md object-cover'
        />
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center gap-2 mb-1'>
          <Badge variant='secondary' className='text-xs'>
            {category}
          </Badge>
          {isPremium && (
            <Badge className='bg-orange-500 hover:bg-orange-500 text-xs'>
              <Lock className='h-3 w-3 mr-1' />
              Premium
            </Badge>
          )}
        </div>
        <Link href={href}>
          <h3 className='font-semibold hover:text-teal-700 transition-colors line-clamp-1'>
            {title}
          </h3>
        </Link>
        <div className='flex items-center gap-1 my-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? 'fill-amber-500 text-amber-500'
                  : 'fill-muted text-muted-foreground'
              }`}
            />
          ))}
          <span className='text-xs font-medium ml-1'>{rating.toFixed(1)}</span>
        </div>
        <p className='text-sm text-muted-foreground line-clamp-2 mb-2'>
          {excerpt}
        </p>
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
          <div className='flex items-center gap-4'>
            <span>By {author}</span>
            <span>{date}</span>
          </div>
          <div className='flex items-center gap-3'>
            <span className='flex items-center gap-1'>
              <ThumbsUp className='h-3 w-3' />
              {votes}
            </span>
            <span className='flex items-center gap-1'>
              <MessageSquare className='h-3 w-3' />
              {comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
