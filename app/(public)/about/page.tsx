import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Star,
  Users,
  FileText,
  MessageSquare,
  Award,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative w-full py-16 md:py-24 lg:py-32 overflow-hidden'>
        {/* Background with overlay gradient */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop'
            alt='Team Background'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-teal-700/70'></div>
        </div>

        <div className='relative z-10 px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center text-white space-y-6'>
            <Badge className='bg-white/20 hover:bg-white/30 text-white border-none'>
              Our Story
            </Badge>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
              About <span className='text-teal-300'>Revalto</span>
            </h1>
            <p className='text-lg md:text-xl text-white/80 max-w-[800px] mx-auto'>
              We're building the most trusted community for honest product
              reviews and recommendations.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4 pt-2'>
              <Button
                size='lg'
                className='bg-white text-teal-800 hover:bg-white/90'
                asChild
              >
                <Link href='/reviews'>Explore Reviews</Link>
              </Button>
            </div>

            {/* Team count */}
            <div className='flex justify-center items-center gap-6 pt-8'>
              <div className='flex items-center gap-2'>
                <Users className='h-6 w-6 text-teal-300' />
                <span className='text-lg font-medium'>50+ Team Members</span>
              </div>
              <div className='flex items-center gap-2'>
                <FileText className='h-6 w-6 text-teal-300' />
                <span className='text-lg font-medium'>25,000+ Reviews</span>
              </div>
              <div className='flex items-center gap-2'>
                <MessageSquare className='h-6 w-6 text-teal-300' />
                <span className='text-lg font-medium'>100,000+ Comments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className='absolute bottom-0 left-0 right-0 translate-y-[1px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 120'
            className='w-full h-auto block'
          >
            <path
              fill='#ffffff'
              fillOpacity='1'
              d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='w-full py-16 md:py-24 bg-white'>
        <div className='px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-6'>
                Our Story
              </h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  Revalto was founded in 2020 by a group of tech enthusiasts who
                  were frustrated with the lack of honest, unbiased product
                  reviews online. Too often, reviews were influenced by
                  sponsorships, affiliate commissions, or simply didn't provide
                  enough depth to make informed purchasing decisions.
                </p>
                <p>
                  We started with a simple mission: create a platform where
                  people could find and share authentic product experiences. No
                  paid reviews, no hidden agendas—just real people sharing their
                  honest opinions.
                </p>
                <p>
                  What began as a small community of tech reviewers has grown
                  into a comprehensive platform covering everything from
                  electronics to home goods, with thousands of contributors and
                  millions of readers each month.
                </p>
                <p>
                  Today, Revalto is recognized as one of the most trusted
                  sources for product reviews, known for our rigorous testing
                  standards, detailed analysis, and commitment to transparency.
                </p>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute -top-6 -left-6 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-xl'></div>
              <div className='absolute -bottom-8 -right-8 w-32 h-32 bg-teal-300 rounded-full opacity-20 blur-xl'></div>
              <Image
                src='https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop'
                alt='Team working together'
                width={600}
                height={400}
                className='rounded-lg shadow-xl w-full'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className='w-full py-16 md:py-24 bg-slate-50'>
        <div className='px-4 md:px-6'>
          <div className='text-center mb-12 max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-4'>
              Our Core Values
            </h2>
            <p className='text-muted-foreground md:text-lg'>
              The principles that guide everything we do at Revalto
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='border-none shadow-md'>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                  <CheckCircle2 className='h-6 w-6 text-teal-700' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Honesty</h3>
                <p className='text-muted-foreground'>
                  We believe in complete transparency. Our reviews are never
                  influenced by brands or sponsorships, ensuring you get the
                  unvarnished truth.
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md'>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                  <Award className='h-6 w-6 text-teal-700' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Excellence</h3>
                <p className='text-muted-foreground'>
                  We hold ourselves to the highest standards. Our testing
                  methodologies are rigorous, and we're constantly refining our
                  approach to provide better insights.
                </p>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md'>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                  <Users className='h-6 w-6 text-teal-700' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>Community</h3>
                <p className='text-muted-foreground'>
                  We believe in the power of collective wisdom. Our platform is
                  built to foster meaningful discussions and shared experiences
                  among users.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className='w-full py-16 md:py-24 bg-white'>
        <div className='px-4 md:px-6'>
          <div className='text-center mb-12 max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-4'>
              Meet Our Team
            </h2>
            <p className='text-muted-foreground md:text-lg'>
              The passionate people behind Revalto
            </p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='relative mx-auto w-32 h-32 mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=faces'
                  alt='David Chen'
                  fill
                  className='rounded-full object-cover'
                />
              </div>
              <h3 className='font-semibold text-lg'>David Chen</h3>
              <p className='text-teal-700 mb-2'>Founder & CEO</p>
              <p className='text-sm text-muted-foreground'>
                Former tech journalist with a passion for consumer advocacy.
              </p>
            </div>

            <div className='text-center'>
              <div className='relative mx-auto w-32 h-32 mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop&crop=faces'
                  alt='Sarah Johnson'
                  fill
                  className='rounded-full object-cover'
                />
              </div>
              <h3 className='font-semibold text-lg'>Sarah Johnson</h3>
              <p className='text-teal-700 mb-2'>Chief Editor</p>
              <p className='text-sm text-muted-foreground'>
                15+ years experience in product testing and review methodology.
              </p>
            </div>

            <div className='text-center'>
              <div className='relative mx-auto w-32 h-32 mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop&crop=faces'
                  alt='Michael Rodriguez'
                  fill
                  className='rounded-full object-cover'
                />
              </div>
              <h3 className='font-semibold text-lg'>Michael Rodriguez</h3>
              <p className='text-teal-700 mb-2'>Head of Technology</p>
              <p className='text-sm text-muted-foreground'>
                Tech expert specializing in electronics and gadget testing.
              </p>
            </div>

            <div className='text-center'>
              <div className='relative mx-auto w-32 h-32 mb-4'>
                <Image
                  src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&auto=format&fit=crop&crop=faces'
                  alt='Emily Wong'
                  fill
                  className='rounded-full object-cover'
                />
              </div>
              <h3 className='font-semibold text-lg'>Emily Wong</h3>
              <p className='text-teal-700 mb-2'>Community Manager</p>
              <p className='text-sm text-muted-foreground'>
                Dedicated to building and nurturing our reviewer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Review Process */}
      <section className='w-full py-16 md:py-24 bg-slate-50'>
        <div className='px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='order-2 md:order-1'>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-6'>
                Our Review Process
              </h2>
              <div className='space-y-6'>
                <div className='flex gap-4'>
                  <div className='w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center flex-shrink-0'>
                    1
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>
                      Research & Selection
                    </h3>
                    <p className='text-muted-foreground'>
                      We research market trends and user requests to select
                      products that matter most to our community.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center flex-shrink-0'>
                    2
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>
                      Hands-On Testing
                    </h3>
                    <p className='text-muted-foreground'>
                      Our experts use products in real-world conditions for at
                      least 2 weeks before forming opinions.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center flex-shrink-0'>
                    3
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>
                      Benchmark & Compare
                    </h3>
                    <p className='text-muted-foreground'>
                      We run standardized tests and compare results with similar
                      products to provide context.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center flex-shrink-0'>
                    4
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>
                      Community Feedback
                    </h3>
                    <p className='text-muted-foreground'>
                      We incorporate feedback from our community of users to
                      provide diverse perspectives.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center flex-shrink-0'>
                    5
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-1'>
                      Editorial Review
                    </h3>
                    <p className='text-muted-foreground'>
                      Our editorial team reviews all content for accuracy,
                      clarity, and adherence to our standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='order-1 md:order-2 relative'>
              <div className='absolute -top-6 -right-6 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-xl'></div>
              <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-teal-300 rounded-full opacity-20 blur-xl'></div>
              <Image
                src='https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2670&auto=format&fit=crop'
                alt='Our review process'
                width={600}
                height={400}
                className='rounded-lg shadow-xl size-full'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='w-full py-16 md:py-24 bg-white'>
        <div className='px-4 md:px-6'>
          <div className='text-center mb-12 max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-4'>
              What Our Community Says
            </h2>
            <p className='text-muted-foreground md:text-lg'>
              Hear from the people who use Revalto every day
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='border-none shadow-md'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-1 mb-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className='h-5 w-5 fill-amber-500 text-amber-500'
                    />
                  ))}
                </div>
                <p className='text-muted-foreground mb-6 italic'>
                  "I've been using Revalto for over a year now, and it's become
                  my go-to resource before making any purchase. The depth of the
                  reviews and the honesty of the community is unmatched."
                </p>
                <div className='flex items-center gap-3'>
                  <Image
                    src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&auto=format&fit=crop&crop=faces'
                    alt='Alex Wong'
                    width={48}
                    height={48}
                    className='rounded-full'
                  />
                  <div>
                    <p className='font-medium'>Alex Wong</p>
                    <p className='text-sm text-muted-foreground'>
                      Community Member
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-1 mb-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className='h-5 w-5 fill-amber-500 text-amber-500'
                    />
                  ))}
                </div>
                <p className='text-muted-foreground mb-6 italic'>
                  "As someone who writes reviews on Revalto, I appreciate how
                  the platform encourages honest feedback. The community is
                  supportive, and the editorial team is always helpful."
                </p>
                <div className='flex items-center gap-3'>
                  <Image
                    src='https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&auto=format&fit=crop&crop=faces'
                    alt='Rachel Green'
                    width={48}
                    height={48}
                    className='rounded-full'
                  />
                  <div>
                    <p className='font-medium'>Rachel Green</p>
                    <p className='text-sm text-muted-foreground'>Reviewer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-none shadow-md'>
              <CardContent className='p-6'>
                <div className='flex items-center gap-1 mb-4'>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className='h-5 w-5 fill-amber-500 text-amber-500'
                    />
                  ))}
                </div>
                <p className='text-muted-foreground mb-6 italic'>
                  "Revalto has saved me from making several expensive mistakes.
                  The detailed comparisons and long-term usage reports give me
                  confidence in my purchasing decisions."
                </p>
                <div className='flex items-center gap-3'>
                  <Image
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop&crop=faces'
                    alt='Thomas Brown'
                    width={48}
                    height={48}
                    className='rounded-full'
                  />
                  <div>
                    <p className='font-medium'>Thomas Brown</p>
                    <p className='text-sm text-muted-foreground'>
                      Premium Member
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className='w-full py-16 md:py-24 bg-slate-50'>
        <div className='px-4 md:px-6'>
          <div className='text-center mb-12 max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl mb-4'>
              As Featured In
            </h2>
            <p className='text-muted-foreground md:text-lg'>
              Revalto has been recognized by leading publications
            </p>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16'>
            <div className='grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'>
              <Image
                src='https://img.icons8.com/ios-filled/100/000000/forbes-magazine.png'
                alt='Forbes'
                width={120}
                height={40}
              />
            </div>
            <div className='grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'>
              <Image
                src='https://img.icons8.com/ios-filled/100/000000/techcrunch.png'
                alt='TechCrunch'
                width={120}
                height={40}
              />
            </div>
            <div className='grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'>
              <Image
                src='https://img.icons8.com/ios-filled/100/000000/wired-magazine.png'
                alt='Wired'
                width={120}
                height={40}
              />
            </div>
            <div className='grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'>
              <Image
                src='https://img.icons8.com/ios-filled/100/000000/the-verge.png'
                alt='The Verge'
                width={120}
                height={40}
              />
            </div>
            <div className='grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'>
              <Image
                src='https://img.icons8.com/ios-filled/100/000000/cnet.png'
                alt='CNET'
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-16 md:py-24 bg-teal-700 text-white'>
        <div className='px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center space-y-6'>
            <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
              Join Our Community Today
            </h2>
            <p className='text-xl text-white/80'>
              Become part of a growing community of reviewers and consumers who
              value honesty and transparency.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white bg-white/10 hover:bg-white/20'
              >
                <Link href='/reviews'>Browse Reviews</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
