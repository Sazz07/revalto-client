import { Card, CardContent } from '@/components/ui/card';
import { Users, Star, FileText, MessageSquare } from 'lucide-react';

export default function StatisticsSection() {
  return (
    <section className='w-full py-16 md:py-24 bg-white'>
      <div className='px-4 md:px-6'>
        <div className='flex flex-col items-center text-center space-y-4 mb-10'>
          <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
            Our Growing Community
          </h2>
          <p className='text-muted-foreground md:text-lg max-w-[700px]'>
            Join thousands of users sharing and discovering honest product
            reviews
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='flex flex-col items-center justify-center p-6'>
              <div className='w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <Users className='h-6 w-6 text-teal-700' />
              </div>
              <div className='text-3xl font-bold'>10,000+</div>
              <p className='text-sm text-muted-foreground text-center'>
                Active Users
              </p>
            </CardContent>
          </Card>

          <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='flex flex-col items-center justify-center p-6'>
              <div className='w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <FileText className='h-6 w-6 text-teal-700' />
              </div>
              <div className='text-3xl font-bold'>25,000+</div>
              <p className='text-sm text-muted-foreground text-center'>
                Product Reviews
              </p>
            </CardContent>
          </Card>

          <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='flex flex-col items-center justify-center p-6'>
              <div className='w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <Star className='h-6 w-6 text-teal-700' />
              </div>
              <div className='text-3xl font-bold'>4.8/5</div>
              <p className='text-sm text-muted-foreground text-center'>
                Average Rating
              </p>
            </CardContent>
          </Card>

          <Card className='border-none shadow-md hover:shadow-lg transition-shadow'>
            <CardContent className='flex flex-col items-center justify-center p-6'>
              <div className='w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4'>
                <MessageSquare className='h-6 w-6 text-teal-700' />
              </div>
              <div className='text-3xl font-bold'>100,000+</div>
              <p className='text-sm text-muted-foreground text-center'>
                Comments
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
