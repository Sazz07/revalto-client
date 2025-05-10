import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, Star } from 'lucide-react';
import ReviewCard from '../_components/review-card';
import ReviewListItem from '../_components/review-list-item';
import PaginationControls from '@/components/ui/pagination-controls';

export default function ReviewsPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Page Header */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white'>
        <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <Badge
                variant='outline'
                className='border-teal-700 text-teal-700'
              >
                All Reviews
              </Badge>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Discover Honest Product Reviews
              </h1>
              <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                Browse thousands of authentic reviews from our community of
                users
              </p>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className='w-full max-w-4xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='relative flex-1'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search reviews by product name, brand, or keyword...'
                  className='pl-8'
                />
              </div>
              <div className='flex gap-2'>
                <Button variant='outline' className='flex items-center gap-1'>
                  <Filter className='h-4 w-4' />
                  Filters
                </Button>
                <Button className='bg-teal-700 hover:bg-teal-800'>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className='w-full py-12 md:py-16 bg-white'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Filters Sidebar */}
            <div className='lg:w-1/4 space-y-6'>
              <div className='p-4 border rounded-lg space-y-4'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-semibold'>Filters</h3>
                  <Button variant='ghost' size='sm' className='h-8 text-xs'>
                    Reset
                  </Button>
                </div>

                <div className='space-y-2'>
                  <h4 className='text-sm font-medium'>Categories</h4>
                  <div className='space-y-1'>
                    {[
                      'Electronics',
                      'Home & Kitchen',
                      'Fashion',
                      'Beauty',
                      'Sports',
                      'Books',
                    ].map((category) => (
                      <div
                        key={category}
                        className='flex items-center space-x-2'
                      >
                        <input
                          type='checkbox'
                          id={`category-${category
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                          className='h-4 w-4 rounded border-gray-300 text-teal-700 focus:ring-teal-700'
                        />
                        <label
                          htmlFor={`category-${category
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                          className='text-sm'
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant='link'
                    size='sm'
                    className='h-auto p-0 text-xs text-teal-700'
                  >
                    Show more
                  </Button>
                </div>

                <div className='space-y-2'>
                  <h4 className='text-sm font-medium'>Rating</h4>
                  <div className='space-y-3 pt-2'>
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className='flex items-center space-x-2'>
                        <input
                          type='checkbox'
                          id={`rating-${rating}`}
                          className='h-4 w-4 rounded border-gray-300 text-teal-700 focus:ring-teal-700'
                        />
                        <label
                          htmlFor={`rating-${rating}`}
                          className='flex items-center text-sm'
                        >
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < rating
                                  ? 'fill-amber-500 text-amber-500'
                                  : 'fill-muted text-muted-foreground'
                              }`}
                            />
                          ))}
                          <span className='ml-1'>{rating}+ stars</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='space-y-2'>
                  <h4 className='text-sm font-medium'>Price Range</h4>
                  <div className='pt-4 px-2'>
                    <Slider
                      defaultValue={[0, 1000]}
                      min={0}
                      max={1000}
                      step={10}
                    />
                    <div className='flex items-center justify-between mt-2 text-xs text-muted-foreground'>
                      <span>$0</span>
                      <span>$1000+</span>
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <h4 className='text-sm font-medium'>Review Type</h4>
                  <div className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <input
                        type='checkbox'
                        id='standard-reviews'
                        className='h-4 w-4 rounded border-gray-300 text-teal-700 focus:ring-teal-700'
                      />
                      <label htmlFor='standard-reviews' className='text-sm'>
                        Standard Reviews
                      </label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <input
                        type='checkbox'
                        id='premium-reviews'
                        className='h-4 w-4 rounded border-gray-300 text-teal-700 focus:ring-teal-700'
                      />
                      <label htmlFor='premium-reviews' className='text-sm'>
                        Premium Reviews
                      </label>
                    </div>
                  </div>
                </div>

                <Button className='w-full bg-teal-700 hover:bg-teal-800'>
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Reviews List */}
            <div className='lg:w-3/4 space-y-6'>
              <Tabs defaultValue='grid' className='w-full'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                  <div>
                    <h2 className='text-2xl font-bold'>All Reviews</h2>
                    <p className='text-muted-foreground'>
                      Showing 1-12 of 1,240 reviews
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
                    <ReviewCard
                      id='1'
                      title='Apple MacBook Pro 16-inch'
                      category={{ id: '1', name: 'Electronics' }}
                      rating={4.9}
                      image='/placeholder.svg?height=200&width=300&text=MacBook'
                      author={{ id: '1', name: 'Alex Wong' }}
                      date='1 day ago'
                      votes={42}
                      comments={12}
                      href='/reviews/macbook-pro-16'
                    />
                    <ReviewCard
                      id='2'
                      title='Oura Ring Gen 3'
                      category={{ id: '2', name: 'Wearables' }}
                      rating={4.7}
                      image='/placeholder.svg?height=200&width=300&text=Oura+Ring'
                      author={{ id: '2', name: 'Emma Davis' }}
                      date='2 days ago'
                      votes={38}
                      comments={9}
                      href='/reviews/oura-ring-gen3'
                    />
                  </div>
                </TabsContent>

                <TabsContent value='list' className='mt-0'>
                  <div className='space-y-4'>
                    <ReviewListItem
                      title='Apple MacBook Pro 16-inch'
                      category='Electronics'
                      rating={4.9}
                      image='/placeholder.svg?height=120&width=120&text=MacBook'
                      author='Alex Wong'
                      date='1 day ago'
                      votes={42}
                      comments={12}
                      href='/reviews/macbook-pro-16'
                      excerpt='The new M2 Pro chip in this MacBook Pro delivers exceptional performance and battery life. The Liquid Retina XDR display is stunning for creative work, and the keyboard is a joy to type on.'
                    />
                    <ReviewListItem
                      title='Oura Ring Gen 3'
                      category='Wearables'
                      rating={4.7}
                      image='/placeholder.svg?height=120&width=120&text=Oura+Ring'
                      author='Emma Davis'
                      date='2 days ago'
                      votes={38}
                      comments={9}
                      href='/reviews/oura-ring-gen3'
                      excerpt='This smart ring tracks sleep, activity, and readiness with impressive accuracy. The battery life is excellent, lasting about a week between charges, and the app provides detailed insights.'
                    />
                    <ReviewListItem
                      title='Philips Hue Smart Lights'
                      category='Smart Home'
                      rating={4.5}
                      image='/placeholder.svg?height=120&width=120&text=Philips+Hue'
                      author='James Wilson'
                      date='3 days ago'
                      votes={27}
                      comments={8}
                      href='/reviews/philips-hue'
                      excerpt='These smart lights integrate seamlessly with most smart home systems. The color accuracy is excellent, and the app makes it easy to create scenes and automations.'
                    />
                    <ReviewListItem
                      title='Kindle Paperwhite'
                      category='Electronics'
                      rating={4.8}
                      image='/placeholder.svg?height=120&width=120&text=Kindle'
                      author='Sophia Martinez'
                      date='4 days ago'
                      votes={35}
                      comments={14}
                      href='/reviews/kindle-paperwhite'
                      excerpt='The latest Paperwhite offers the perfect reading experience with its warm light, waterproof design, and weeks of battery life. Page turns are quick and the display is crisp even in bright sunlight.'
                      isPremium={true}
                    />
                    <ReviewListItem
                      title='Samsung Galaxy S23 Ultra'
                      category='Smartphones'
                      rating={4.6}
                      image='/placeholder.svg?height=120&width=120&text=Galaxy+S23'
                      author='David Kim'
                      date='1 week ago'
                      votes={156}
                      comments={42}
                      href='/reviews/galaxy-s23-ultra'
                      excerpt="The S23 Ultra's camera system is truly remarkable, especially in low light. The S Pen functionality adds versatility, and the battery easily lasts a full day of heavy use."
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <PaginationControls totalPages={104} currentPage={1} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
