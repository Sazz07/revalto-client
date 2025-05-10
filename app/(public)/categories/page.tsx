import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import CategoryCard from '../_components/category-card';

// Mock data for categories
const categories = [
  {
    id: 'cat-1',
    name: 'Electronics',
    icon: 'laptop',
    count: 1240,
    href: '/categories/electronics',
    isFavorite: false,
  },
  {
    id: 'cat-2',
    name: 'Home & Kitchen',
    icon: 'home',
    count: 986,
    href: '/categories/home-kitchen',
    isFavorite: false,
  },
  {
    id: 'cat-3',
    name: 'Fashion',
    icon: 'shirt',
    count: 754,
    href: '/categories/fashion',
    isFavorite: false,
  },
  {
    id: 'cat-4',
    name: 'Beauty',
    icon: 'sparkles',
    count: 632,
    href: '/categories/beauty',
    isFavorite: false,
  },
  {
    id: 'cat-5',
    name: 'Sports',
    icon: 'dumbbell',
    count: 418,
    href: '/categories/sports',
    isFavorite: false,
  },
  {
    id: 'cat-6',
    name: 'Books',
    icon: 'book-open',
    count: 375,
    href: '/categories/books',
    isFavorite: false,
  },
  {
    id: 'cat-7',
    name: 'Smartphones',
    icon: 'smartphone',
    count: 892,
    href: '/categories/smartphones',
    isFavorite: false,
  },
  {
    id: 'cat-8',
    name: 'Food & Dining',
    icon: 'utensils',
    count: 567,
    href: '/categories/food-dining',
    isFavorite: false,
  },
  {
    id: 'cat-9',
    name: 'Automotive',
    icon: 'car',
    count: 324,
    href: '/categories/automotive',
    isFavorite: false,
  },
  {
    id: 'cat-10',
    name: 'Gaming',
    icon: 'gamepad',
    count: 489,
    href: '/categories/gaming',
    isFavorite: false,
  },
  {
    id: 'cat-11',
    name: 'Baby Products',
    icon: 'baby',
    count: 256,
    href: '/categories/baby-products',
    isFavorite: false,
  },
  {
    id: 'cat-12',
    name: 'Art & Crafts',
    icon: 'palette',
    count: 187,
    href: '/categories/art-crafts',
    isFavorite: false,
  },
];

export default function CategoriesPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Page Header */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white'>
        <div className='px-4 md:px-6 space-y-10 xl:space-y-16'>
          <div className='flex flex-col items-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Browse Categories
              </h1>
              <p className='mx-auto max-w-[700px] text-muted-foreground md:text-xl'>
                Explore reviews across a wide range of product categories
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className='w-full max-w-md mx-auto'>
            <div className='relative'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search categories...'
                className='pl-8'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className='w-full py-12 md:py-16 bg-white'>
        <div className='px-4 md:px-6'>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6'>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                icon={category.icon}
                count={category.count}
                href={category.href}
                isFavorite={category.isFavorite}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
