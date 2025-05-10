import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Flag,
  ShoppingCart,
  ExternalLink,
  Lock,
} from 'lucide-react';
import TagBadge from '@/components/ui/tag-badge';
import SaveReviewButton from '@/components/ui/save-review-button';
import PremiumReviewOverlay from '../../_components/premium-review-overlay';

// Mock data for reviews
const reviewsData = {
  'sony-a7-iv': {
    id: 'sony-a7-iv',
    title: 'Sony A7 IV Mirrorless Camera',
    category: 'Electronics',
    subcategory: 'Photography',
    rating: 5.0,
    isPremium: true,
    isUnlocked: false,
    price: 5.99,
    mainImage:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2764&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542567455-cd733f23fbb1?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=2532&auto=format&fit=crop',
    ],
    author: {
      name: 'Chris Evans',
      title: 'Professional Photographer',
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&auto=format&fit=crop&crop=faces',
    },
    date: '1 month ago',
    votes: 214,
    downvotes: 12,
    productDetails: {
      price: '$2,499.99',
      purchaseSource: 'B&H Photo',
      releaseDate: 'October 2021',
      manufacturer: 'Sony',
    },
    tags: [
      { id: 'photography', name: 'Photography' },
      { id: 'cameras', name: 'Cameras' },
      { id: 'sony', name: 'Sony' },
      { id: 'mirrorless', name: 'Mirrorless' },
    ],
    content: {
      review: [
        "After spending three months with the Sony A7 IV, I can confidently say it's one of the most versatile hybrid cameras on the market today. As a professional photographer who shoots both stills and video, this camera has become my go-to for nearly every situation.",
        "The 33MP sensor provides a significant resolution boost over its predecessor while maintaining excellent low-light performance. I've shot in challenging lighting conditions, from dimly lit indoor events to astrophotography sessions, and the results have been consistently impressive. The dynamic range allows for substantial flexibility in post-processing, recovering highlights and shadows with minimal noise.",
        "Sony's autofocus system continues to be industry-leading. The real-time tracking and eye AF (which now works on birds and animals too) make capturing fast-moving subjects almost effortless. For portrait photographers, the eye AF is nothing short of revolutionary, maintaining tack-sharp focus even when subjects are moving.",
        "On the video front, the A7 IV offers 4K 60p recording (with a slight crop) and 4K 30p from the full sensor width. The 10-bit 4:2:2 color sampling provides plenty of flexibility for color grading. I've used it for client work ranging from interviews to short films, and the footage holds up beautifully, even when matched with footage from dedicated cinema cameras.",
        'The ergonomics have been significantly improved, with a deeper grip that makes the camera comfortable to hold for extended periods. The menu system, once a point of frustration with Sony cameras, has been completely redesigned and is now much more intuitive. The addition of the dedicated video record button and mode dial make switching between photo and video workflows seamless.',
        "Battery life is excellent, easily lasting a full day of shooting. The camera uses the same NP-FZ100 battery as other recent Sony cameras, which is convenient if you're already in the ecosystem.",
        "If I had to nitpick, the rolling shutter in video mode can be noticeable with fast movements, and the camera does heat up during extended video recording sessions, though I've never experienced a shutdown due to overheating.",
        'At $2,499 for the body only, the A7 IV represents a significant investment, but considering its versatility and performance, it offers excellent value for professionals and serious enthusiasts who need a hybrid camera that excels at both stills and video.',
        "In conclusion, the Sony A7 IV is a remarkable achievement that builds upon Sony's already strong foundation. It's not just an incremental update but a substantial evolution that addresses user feedback while pushing the boundaries of what's possible in this price range. Whether you're a wedding photographer, content creator, or documentary filmmaker, this camera deserves serious consideration.",
      ],
      specs: {
        sensor: {
          type: '33MP Full-Frame Exmor R CMOS',
          size: '35.9 x 23.9mm',
          isoRange: '100-51,200 (expandable to 50-204,800)',
        },
        autofocus: {
          system: '759-point phase-detection AF',
          coverage: '94% of frame',
          sensitivity: '-4 EV to +20 EV',
        },
        video: {
          '4K': 'Up to 60p (Super35), 30p (Full-frame)',
          bitDepth: '10-bit 4:2:2 internal recording',
          formats: 'XAVC S, XAVC HS, XAVC S-I',
        },
        physical: {
          weight: '658g (with battery and card)',
          dimensions: '131.3 x 96.4 x 79.8mm',
          batteryLife: 'Approx. 580 shots (viewfinder)',
        },
      },
      prosCons: {
        pros: [
          'Excellent 33MP full-frame sensor with great dynamic range',
          'Industry-leading autofocus with real-time tracking',
          '10-bit 4:2:2 video recording with flexible formats',
          'Improved ergonomics with deeper grip',
          "Redesigned menu system that's more intuitive",
          'Excellent battery life',
        ],
        cons: [
          'Noticeable rolling shutter in video mode',
          'Can heat up during extended video recording',
          'Relatively high price point for enthusiasts',
          'Slight crop in 4K 60p video mode',
          'Limited buffer for continuous shooting',
        ],
      },
    },
  },
  'kindle-paperwhite': {
    id: 'kindle-paperwhite',
    title: 'Kindle Paperwhite (11th Generation)',
    category: 'Electronics',
    subcategory: 'E-Readers',
    rating: 4.8,
    isPremium: true,
    isUnlocked: false,
    price: 4.99,
    mainImage:
      'https://images.unsplash.com/photo-1544631006-71133fe4eb61?q=80&w=2670&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1592813576147-7d8d0b3a7dba?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585436249848-3a8bf30d8020?q=80&w=2670&auto=format&fit=crop',
    ],
    author: {
      name: 'Sophia Martinez',
      title: 'Tech Reviewer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop&crop=faces',
    },
    date: '4 days ago',
    votes: 35,
    downvotes: 3,
    productDetails: {
      price: '$139.99',
      purchaseSource: 'Amazon',
      releaseDate: 'October 2021',
      manufacturer: 'Amazon',
    },
    tags: [
      { id: 'e-readers', name: 'E-Readers' },
      { id: 'amazon', name: 'Amazon' },
      { id: 'reading', name: 'Reading' },
      { id: 'kindle', name: 'Kindle' },
    ],
    content: {
      review: [
        "The latest Kindle Paperwhite represents a significant upgrade over its predecessor, offering several features that were previously exclusive to the premium Kindle Oasis. After using it daily for the past month, I can confidently say it's the best e-reader for most people.",
        "The most noticeable improvement is the larger 6.8-inch E Ink display, which provides more screen real estate while keeping the device comfortable to hold. The 300 PPI resolution ensures crisp text that's easy on the eyes, even during extended reading sessions. The adjustable warm light is a game-changer for nighttime reading, reducing blue light exposure and making the reading experience more comfortable.",
        'Amazon has finally addressed one of the biggest complaints about previous Paperwhite models by switching to USB-C charging. This brings the device in line with modern standards and significantly reduces charging time. The battery life is exceptional, lasting up to 10 weeks on a single charge with moderate use.',
        "The waterproof design (IPX8 rated) means you can read worry-free in the bath, by the pool, or at the beach. I've tested it in light rain and had no issues whatsoever. The device feels premium with its flush-front design and soft-touch back that provides a secure grip.",
        "Page turns are noticeably faster than on previous generations, with minimal ghosting. The user interface has been refreshed and feels more responsive, though Amazon's software still pushes its ecosystem a bit too aggressively for my taste.",
        'The base model comes with 8GB of storage, which is plenty for thousands of books. If you plan to store many audiobooks (which you can listen to via Bluetooth headphones), you might want to consider the 16GB or 32GB versions.',
        "My only real complaint is that the Kindle ecosystem remains somewhat closed. While you can sideload books in various formats, the process isn't as straightforward as it could be, and some formats require conversion.",
        "At $139.99 for the base model, the Kindle Paperwhite offers excellent value, especially considering the features it inherits from the more expensive Oasis. If you're an avid reader looking to upgrade from an older e-reader or make the switch from physical books, the 11th generation Paperwhite is an easy recommendation.",
      ],
      specs: {
        display: {
          size: '6.8-inch E Ink Carta 1200',
          resolution: '300 PPI',
          frontLight: '17 LEDs with adjustable warm light',
        },
        storage: {
          capacity: '8GB, 16GB, or 32GB options',
          bookCapacity: 'Thousands of books',
        },
        battery: {
          lifespan: 'Up to 10 weeks',
          charging: 'USB-C, approximately 2.5 hours to full charge',
        },
        physical: {
          weight: '205g',
          dimensions: '174 x 125 x 8.1mm',
          waterproofing: 'IPX8 rated (2 meters of fresh water for 60 minutes)',
        },
      },
      prosCons: {
        pros: [
          'Larger 6.8-inch display with 300 PPI resolution',
          'Adjustable warm light for comfortable night reading',
          'USB-C charging with excellent battery life',
          'Waterproof design (IPX8 rated)',
          'Faster page turns and improved responsiveness',
          'Great value compared to premium e-readers',
        ],
        cons: [
          "Amazon's ecosystem remains somewhat closed",
          'Ads on the lock screen unless you pay extra',
          'No physical page turn buttons',
          'Limited customization options',
          'No support for certain file formats without conversion',
        ],
      },
    },
  },
};

export default function ReviewDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Get review data based on slug
  const reviewData = reviewsData[params.slug] || reviewsData['sony-a7-iv'];

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Breadcrumb */}
      <div className='border-b'>
        <div className='container px-4 md:px-6 py-2'>
          <div className='flex text-sm text-muted-foreground'>
            <Link href='/' className='hover:text-primary'>
              Home
            </Link>
            <span className='mx-2'>/</span>
            <Link href='/reviews' className='hover:text-primary'>
              Reviews
            </Link>
            <span className='mx-2'>/</span>
            <Link
              href={`/categories/${reviewData.category.toLowerCase()}`}
              className='hover:text-primary'
            >
              {reviewData.category}
            </Link>
            <span className='mx-2'>/</span>
            <span className='text-foreground'>{reviewData.title}</span>
          </div>
        </div>
      </div>

      {/* Review Header */}
      <section className='w-full py-8 md:py-12 bg-gradient-to-b from-slate-50 to-white'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Product Images */}
            <div className='md:w-1/2 lg:w-2/5'>
              <div className='sticky top-20 space-y-4'>
                <div className='border rounded-lg overflow-hidden bg-white'>
                  <Image
                    src={reviewData.mainImage || '/placeholder.svg'}
                    alt={reviewData.title}
                    width={500}
                    height={500}
                    className='w-full object-cover'
                  />
                </div>
                <div className='grid grid-cols-4 gap-2'>
                  {reviewData.additionalImages.map((image, index) => (
                    <button
                      key={index}
                      className='border rounded-md overflow-hidden hover:border-teal-500 transition-colors'
                    >
                      <Image
                        src={image || '/placeholder.svg'}
                        alt={`Product image ${index + 1}`}
                        width={100}
                        height={100}
                        className='w-full aspect-square object-cover'
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className='md:w-1/2 lg:w-3/5 space-y-6'>
              <div className='space-y-2'>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>{reviewData.category}</Badge>
                  <Badge variant='secondary'>{reviewData.subcategory}</Badge>
                  {reviewData.isPremium && (
                    <Badge className='bg-orange-500 hover:bg-orange-500'>
                      <Lock className='h-3 w-3 mr-1' />
                      Premium Review
                    </Badge>
                  )}
                </div>
                <h1 className='text-3xl font-bold md:text-4xl'>
                  {reviewData.title}
                </h1>
                <div className='flex items-center gap-2'>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(reviewData.rating)
                            ? 'fill-amber-500 text-amber-500'
                            : 'fill-muted text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='font-medium'>
                    {reviewData.rating.toFixed(1)}
                  </span>
                  <span className='text-muted-foreground'>
                    | {reviewData.votes} votes
                  </span>
                </div>
                <div className='flex flex-wrap gap-1 pt-1'>
                  {reviewData.tags.map((tag) => (
                    <TagBadge
                      key={tag.id}
                      name={tag.name}
                      href={`/search?tag=${tag.id}`}
                    />
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <Image
                    src={reviewData.author.image || '/placeholder.svg'}
                    alt={reviewData.author.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                  <div>
                    <p className='font-medium'>{reviewData.author.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {reviewData.author.title}
                    </p>
                  </div>
                </div>
                <div className='text-sm text-muted-foreground'>
                  Published {reviewData.date}
                </div>
              </div>

              <div className='flex flex-wrap gap-4'>
                <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-1'
                >
                  <ThumbsUp className='h-4 w-4' />
                  Helpful ({reviewData.votes})
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-1'
                >
                  <ThumbsDown className='h-4 w-4' />
                  Not Helpful ({reviewData.downvotes})
                </Button>
                <SaveReviewButton
                  reviewId={reviewData.id}
                  isSaved={false}
                  variant='outline'
                  size='sm'
                />
                <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-1'
                >
                  <Share2 className='h-4 w-4' />
                  Share
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='flex items-center gap-1 text-red-500 hover:text-red-600'
                  asChild
                >
                  <Link href={`/report/${reviewData.id}`}>
                    <Flag className='h-4 w-4' />
                    Report
                  </Link>
                </Button>
              </div>

              <Separator />

              <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>Price</p>
                    <p className='font-semibold'>
                      {reviewData.productDetails.price}
                    </p>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>
                      Purchase Source
                    </p>
                    <p className='font-semibold'>
                      {reviewData.productDetails.purchaseSource}
                    </p>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>
                      Release Date
                    </p>
                    <p className='font-semibold'>
                      {reviewData.productDetails.releaseDate}
                    </p>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>
                      Manufacturer
                    </p>
                    <p className='font-semibold'>
                      {reviewData.productDetails.manufacturer}
                    </p>
                  </div>
                </div>

                <div className='flex gap-3'>
                  <Button className='bg-teal-700 hover:bg-teal-800'>
                    <ShoppingCart className='h-4 w-4 mr-2' />
                    Buy Now
                  </Button>
                  <Button variant='outline'>
                    <ExternalLink className='h-4 w-4 mr-2' />
                    Visit Official Site
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Review Content - with Premium Overlay if needed */}
              <div className='relative'>
                {reviewData.isPremium && !reviewData.isUnlocked && (
                  <PremiumReviewOverlay
                    price={reviewData.price}
                    reviewId={reviewData.id}
                  />
                )}

                <div
                  className={
                    reviewData.isPremium && !reviewData.isUnlocked
                      ? 'blur-sm select-none'
                      : ''
                  }
                >
                  <Tabs defaultValue='review' className='w-full'>
                    <TabsList className='w-full justify-start mb-4'>
                      <TabsTrigger value='review'>Full Review</TabsTrigger>
                      <TabsTrigger value='specs'>Specifications</TabsTrigger>
                      <TabsTrigger value='pros-cons'>Pros & Cons</TabsTrigger>
                    </TabsList>

                    <TabsContent value='review' className='mt-0 space-y-4'>
                      {reviewData.content.review.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      <Image
                        src={
                          reviewData.additionalImages[0] || '/placeholder.svg'
                        }
                        alt={`Sample image from ${reviewData.title}`}
                        width={800}
                        height={400}
                        className='rounded-lg my-4'
                      />
                    </TabsContent>

                    <TabsContent value='specs' className='mt-0'>
                      <div className='space-y-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                          {Object.entries(reviewData.content.specs).map(
                            ([category, specs]) => (
                              <div key={category} className='space-y-3'>
                                <h3 className='font-semibold capitalize'>
                                  {category}
                                </h3>
                                <div className='grid grid-cols-2 gap-2 text-sm'>
                                  {Object.entries(specs).map(([key, value]) => (
                                    <div key={key}>
                                      <p className='text-muted-foreground capitalize'>
                                        {key}
                                      </p>
                                      <p>{value}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value='pros-cons' className='mt-0'>
                      <div className='grid md:grid-cols-2 gap-6'>
                        <div className='space-y-4'>
                          <h3 className='font-semibold text-green-600'>Pros</h3>
                          <ul className='space-y-2'>
                            {reviewData.content.prosCons.pros.map(
                              (pro, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'
                                >
                                  <div className='rounded-full bg-green-100 p-1 mt-0.5'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='12'
                                      height='12'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      stroke='currentColor'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      className='text-green-600'
                                    >
                                      <polyline points='20 6 9 17 4 12'></polyline>
                                    </svg>
                                  </div>
                                  <span>{pro}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div className='space-y-4'>
                          <h3 className='font-semibold text-red-600'>Cons</h3>
                          <ul className='space-y-2'>
                            {reviewData.content.prosCons.cons.map(
                              (con, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'
                                >
                                  <div className='rounded-full bg-red-100 p-1 mt-0.5'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='12'
                                      height='12'
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      stroke='currentColor'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      className='text-red-600'
                                    >
                                      <line
                                        x1='18'
                                        y1='6'
                                        x2='6'
                                        y2='18'
                                      ></line>
                                      <line
                                        x1='6'
                                        y1='6'
                                        x2='18'
                                        y2='18'
                                      ></line>
                                    </svg>
                                  </div>
                                  <span>{con}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
