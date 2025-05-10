import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import FavoriteCategoryButton from '../../_components/favorite-category-button';
import ReviewCard from '../../_components/review-card';
import ReviewListItem from '../../_components/review-list-item';
import PaginationControls from '@/components/ui/pagination-controls';

// Mock data for the category
const categoryData = {
  id: 'cat-1',
  name: 'Electronics',
  icon: 'laptop',
  description:
    'Discover the latest and greatest in electronics, from smartphones and laptops to headphones, cameras, and more. Read honest reviews from our community of tech enthusiasts.',
  count: 1240,
  isFavorite: false,
};

// Mock data for popular tags in this category
const popularTags = [
  { id: 'tag-1', name: 'Smartphones' },
  { id: 'tag-2', name: 'Laptops' },
  { id: 'tag-3', name: 'Headphones' },
  { id: 'tag-4', name: 'Cameras' },
  { id: 'tag-5', name: 'Smart Home' },
  { id: 'tag-6', name: 'Wearables' },
];

// Mock data for reviews
const reviews = [
  {
    id: 'review-1',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    category: {
      id: 'cat-1',
      name: 'Electronics',
    },
    tags: [
      { id: 'tag-3', name: 'Headphones' },
      { id: 'tag-7', name: 'Noise Cancelling' },
      { id: 'tag-8', name: 'Wireless' },
    ],
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=300&text=Sony+Headphones',
    author: {
      id: 'author-1',
      name: 'Michael Chen',
    },
    date: '2 days ago',
    votes: 42,
    comments: 12,
    href: '/reviews/sony-wh-1000xm5',
    isPremium: true,
    isSaved: false,
    excerpt:
      'These headphones have completely transformed my listening experience. The noise cancellation is unmatched, and the sound quality is exceptional...',
  },
  {
    id: 'review-2',
    title: 'Apple MacBook Pro 16-inch',
    category: {
      id: 'cat-1',
      name: 'Electronics',
    },
    tags: [
      { id: 'tag-2', name: 'Laptops' },
      { id: 'tag-9', name: 'Apple' },
      { id: 'tag-10', name: 'MacOS' },
    ],
    rating: 4.9,
    image: '/placeholder.svg?height=200&width=300&text=MacBook',
    author: {
      id: 'author-2',
      name: 'Alex Wong',
    },
    date: '1 day ago',
    votes: 38,
    comments: 9,
    href: '/reviews/macbook-pro-16',
    isPremium: false,
    isSaved: false,
    excerpt:
      'The new M2 Pro chip in this MacBook Pro delivers exceptional performance and battery life. The Liquid Retina XDR display is stunning for creative work, and the keyboard is a joy to type on.',
  },
  {
    id: 'review-3',
    title: 'Samsung Galaxy S23 Ultra',
    category: {
      id: 'cat-1',
      name: 'Electronics',
    },
    tags: [
      { id: 'tag-1', name: 'Smartphones' },
      { id: 'tag-11', name: 'Samsung' },
      { id: 'tag-12', name: 'Android' },
    ],
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=300&text=Galaxy+S23',
    author: {
      id: 'author-3',
      name: 'David Kim',
    },
    date: '1 week ago',
    votes: 156,
    comments: 42,
    href: '/reviews/galaxy-s23-ultra',
    isPremium: false,
    isSaved: false,
    excerpt:
      "The S23 Ultra's camera system is truly remarkable, especially in low light. The S Pen functionality adds versatility, and the battery easily lasts a full day of heavy use.",
  },
  {
    id: 'review-4',
    title: 'Sony A7 IV Camera',
    category: {
      id: 'cat-1',
      name: 'Electronics',
    },
    tags: [
      { id: 'tag-4', name: 'Cameras' },
      { id: 'tag-13', name: 'Photography' },
      { id: 'tag-14', name: 'Mirrorless' },
    ],
    rating: 5.0,
    image: '/placeholder.svg?height=200&width=300&text=Sony+A7IV',
    author: {
      id: 'author-4',
      name: 'Chris Evans',
    },
    date: '1 month ago',
    votes: 214,
    comments: 56,
    href: '/reviews/sony-a7-iv',
    isPremium: true,
    isSaved: false,
    excerpt:
      "After spending three months with the Sony A7 IV, I can confidently say it's one of the most versatile hybrid cameras on the market today. As a professional photographer who shoots both stills and video, this camera has become my go-to for nearly every situation.",
  },
  {
    id: 'review-5',
    title: 'Bose QuietComfort Earbuds II',
    category: {
      id: 'cat-1',
      name: 'Electronics',
    },
    tags: [
      { id: 'tag-3', name: 'Headphones' },
      { id: 'tag-7', name: 'Noise Cancelling' },
      { id: 'tag-15', name: 'Earbuds' },
    ],
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=300&text=Bose+Earbuds',
    author: {
      id: 'author-5',
      name: 'Thomas Brown',
    },
    date: '2 weeks ago',
    votes: 98,
    comments: 24,
    href: '/reviews/bose-quietcomfort',
    isPremium: false,
    isSaved: false,
    excerpt:
      'These earbuds offer incredible noise cancellation in a compact form factor. The sound quality is excellent, with rich bass and clear highs. The fit is comfortable even for extended listening sessions.',
  },
  {
    id: 'review-6',
    title: 'LG C2 OLED TV',
    category: {
      id: 'cat-1',
      name: 'Electronics',
    },
    tags: [
      { id: 'tag-16', name: 'TVs' },
      { id: 'tag-17', name: 'OLED' },
      { id: 'tag-18', name: '4K' },
    ],
    rating: 4.9,
    image: '/placeholder.svg?height=200&width=300&text=LG+OLED',
    author: {
      id: 'author-6',
      name: 'Michelle Park',
    },
    date: '2 months ago',
    votes: 189,
    comments: 47,
    href: '/reviews/lg-c2-oled',
    isPremium: false,
    isSaved: false,
    excerpt:
      'The LG C2 OLED delivers stunning picture quality with perfect blacks and vibrant colors. The gaming features, including 4K 120Hz support and VRR, make it an excellent choice for both movie watching and gaming.',
  },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the category data based on the slug
  const category = categoryData;

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Category Header */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white'>
        <div className='px-4 md:px-6'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='flex-1 space-y-4'>
              <div className='flex items-center gap-4'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  {category.name}
                </h1>
                <FavoriteCategoryButton
                  categoryId={category.id}
                  isFavorite={category.isFavorite}
                  variant='outline'
                  size='default'
                />
              </div>
              <p className='text-muted-foreground md:text-xl max-w-[700px]'>
                {category.description}
              </p>
              <div className='flex flex-wrap gap-2 pt-2'>
                {popularTags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/categories/${params.slug}?tag=${tag.id}`}
                    className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors'
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className='flex-shrink-0 bg-primary/10 p-8 rounded-full'>
              <div className='w-24 h-24 flex items-center justify-center text-primary'>
                {getCategoryIcon(category.icon, 'h-16 w-16')}
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className='w-full max-w-4xl mx-auto mt-12'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='relative flex-1'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder={`Search in ${category.name}...`}
                  className='pl-8'
                />
              </div>
              <div className='flex gap-2'>
                <Button variant='outline' className='flex items-center gap-1'>
                  <Filter className='h-4 w-4' />
                  Filters
                </Button>
                <Button>Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className='w-full py-12 md:py-16 bg-white'>
        <div className='px-4 md:px-6'>
          <Tabs defaultValue='grid' className='w-full'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
              <div>
                <h2 className='text-2xl font-bold'>{category.name} Reviews</h2>
                <p className='text-muted-foreground'>
                  Showing 1-6 of {category.count} reviews
                </p>
              </div>
              <div className='flex items-center gap-2 w-full sm:w-auto'>
                <Select defaultValue='newest'>
                  <SelectTrigger className='w-full sm:w-[180px]'>
                    <SelectValue placeholder='Sort by' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='newest'>Newest First</SelectItem>
                    <SelectItem value='oldest'>Oldest First</SelectItem>
                    <SelectItem value='highest'>Highest Rated</SelectItem>
                    <SelectItem value='lowest'>Lowest Rated</SelectItem>
                    <SelectItem value='most-votes'>Most Votes</SelectItem>
                  </SelectContent>
                </Select>

                <TabsList className='grid w-16 grid-cols-2'>
                  <TabsTrigger value='grid' className='px-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <rect x='3' y='3' width='7' height='7' />
                      <rect x='14' y='3' width='7' height='7' />
                      <rect x='3' y='14' width='7' height='7' />
                      <rect x='14' y='14' width='7' height='7' />
                    </svg>
                    <span className='sr-only'>Grid view</span>
                  </TabsTrigger>
                  <TabsTrigger value='list' className='px-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <line x1='3' y1='6' x2='21' y2='6' />
                      <line x1='3' y1='12' x2='21' y2='12' />
                      <line x1='3' y1='18' x2='21' y2='18' />
                    </svg>
                    <span className='sr-only'>List view</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value='grid' className='mt-0'>
              <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    category={review.category}
                    tags={review.tags}
                    rating={review.rating}
                    image={review.image}
                    author={review.author}
                    date={review.date}
                    votes={review.votes}
                    comments={review.comments}
                    href={review.href}
                    isPremium={review.isPremium}
                    isSaved={review.isSaved}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value='list' className='mt-0'>
              <div className='space-y-4'>
                {reviews.map((review) => (
                  <ReviewListItem
                    key={review.id}
                    title={review.title}
                    category={review.category.name}
                    rating={review.rating}
                    image={review.image}
                    author={review.author.name}
                    date={review.date}
                    votes={review.votes}
                    comments={review.comments}
                    href={review.href}
                    excerpt={review.excerpt}
                    isPremium={review.isPremium}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <PaginationControls totalPages={104} currentPage={1} />
        </div>
      </section>
    </div>
  );
}

// Helper function to get category icon
function getCategoryIcon(iconName: string, className = 'h-6 w-6') {
  const props = { className };

  switch (iconName.toLowerCase()) {
    case 'laptop':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          {...props}
        >
          <rect width='18' height='12' x='3' y='4' rx='2' ry='2' />
          <line x1='2' x2='22' y1='20' y2='20' />
        </svg>
      );
    case 'home':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          {...props}
        >
          <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
          <polyline points='9 22 9 12 15 12 15 22' />
        </svg>
      );
    case 'shirt':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          {...props}
        >
          <path d='M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z' />
        </svg>
      );
    case 'sparkles':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          {...props}
        >
          <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
          <path d='M5 3v4' />
          <path d='M19 17v4' />
          <path d='M3 5h4' />
          <path d='M17 19h4' />
        </svg>
      );
    default:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          {...props}
        >
          <rect width='18' height='12' x='3' y='4' rx='2' ry='2' />
          <line x1='2' x2='22' y1='20' y2='20' />
        </svg>
      );
  }
}
