import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MessageSquare, ThumbsUp, Lock } from 'lucide-react';
import SaveReviewButton from '@/components/ui/save-review-button';
import TagBadge from '@/components/ui/tag-badge';

type ReviewCardProps = {
  id: string;
  title: string;
  category: {
    id: string;
    name: string;
  };
  tags?: {
    id: string;
    name: string;
  }[];
  rating: number;
  image: string;
  author: {
    id: string;
    name: string;
    image?: string;
  };
  date: string;
  votes: number;
  comments: number;
  href: string;
  isPremium?: boolean;
  isSaved?: boolean;
};

export default function ReviewCard({
  id,
  title,
  category,
  tags = [],
  rating,
  image,
  author,
  date,
  votes,
  comments,
  href,
  isPremium = false,
  isSaved = false,
}: ReviewCardProps) {
  return (
    <Card className='overflow-hidden transition-all hover:shadow-md'>
      <div className='relative'>
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          width={300}
          height={200}
          className='w-full h-[160px] object-cover'
        />
        <div className='absolute top-2 left-2 flex gap-2'>
          <Badge
            variant='secondary'
            className='bg-white/90 text-slate-900 text-xs'
          >
            {category.name}
          </Badge>
        </div>
        {isPremium && (
          <div className='absolute top-2 right-2'>
            <Badge className='bg-orange-500 hover:bg-orange-500 text-xs'>
              <Lock className='h-3 w-3 mr-1' />
              Premium
            </Badge>
          </div>
        )}
        <div className='absolute bottom-2 right-2'>
          <SaveReviewButton
            reviewId={id}
            isSaved={isSaved}
            size='icon'
            variant='ghost'
          />
        </div>
      </div>
      <CardContent className='p-4'>
        <div className='flex items-center gap-1 mb-1'>
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
        <Link href={href}>
          <h3 className='font-semibold line-clamp-2 hover:text-primary transition-colors mb-1'>
            {title}
          </h3>
        </Link>
        <p className='text-xs text-muted-foreground mb-2'>
          By {author.name} • {date}
        </p>
        {tags.length > 0 && (
          <div className='flex flex-wrap mb-2'>
            {tags.slice(0, 3).map((tag) => (
              <TagBadge
                key={tag.id}
                name={tag.name}
                href={`/reviews?tag=${tag.id}`}
              />
            ))}
            {tags.length > 3 && (
              <span className='text-xs text-muted-foreground ml-1 mt-1'>
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
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
          <Link
            href={href}
            className='text-xs font-medium text-primary hover:text-primary/80'
          >
            Read review
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
