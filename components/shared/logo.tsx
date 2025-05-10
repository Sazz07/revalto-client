import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  variant?: 'default' | 'minimal' | 'creative' | 'elegant';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asLink?: boolean;
};

export function Logo({
  variant = 'default',
  size = 'md',
  className,
  asLink = true,
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const logoContent = (
    <>
      {variant === 'minimal' && (
        <div className={cn(sizeClasses[size], 'aspect-square', className)}>
          <svg
            viewBox='0 0 80 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-full'
          >
            <path
              d='M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0Z'
              fill='url(#paint0_radial_minimal)'
            />
            <path
              d='M40 16L45.8 28.4453L59.5 30.2L49.6 39.7547L52.2 53.4L40 46.8L27.8 53.4L30.4 39.7547L20.5 30.2L34.2 28.4453L40 16Z'
              fill='white'
            />
            <defs>
              <radialGradient
                id='paint0_radial_minimal'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(16 16) rotate(45) scale(90.5097)'
              >
                <stop stopColor='#14B8A6' />
                <stop offset='1' stopColor='#0F766E' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}

      {variant === 'creative' && (
        <div className={cn('flex items-center gap-2', className)}>
          <div className={cn(sizeClasses[size], 'aspect-square relative')}>
            <svg
              viewBox='0 0 80 80'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full w-full'
            >
              <path
                d='M72 40C72 57.6731 57.6731 72 40 72C22.3269 72 8 57.6731 8 40C8 22.3269 22.3269 8 40 8C57.6731 8 72 22.3269 72 40Z'
                fill='url(#paint0_linear_creative)'
                stroke='url(#paint1_linear_creative)'
                strokeWidth='4'
              />
              <path
                d='M40 20L47.3 35.1H63.6L50.1 44.7L57.5 59.8L40 50.2L22.5 59.8L29.9 44.7L16.4 35.1H32.7L40 20Z'
                fill='white'
              />
              <path
                d='M40 26L44.7 35.9H55.4L46.8 42.1L51.5 52L40 45.8L28.5 52L33.2 42.1L24.6 35.9H35.3L40 26Z'
                fill='url(#paint2_linear_creative)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_creative'
                  x1='8'
                  y1='8'
                  x2='72'
                  y2='72'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0D9488' />
                  <stop offset='1' stopColor='#0F766E' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_creative'
                  x1='8'
                  y1='8'
                  x2='72'
                  y2='72'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#5EEAD4' />
                  <stop offset='1' stopColor='#14B8A6' />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_creative'
                  x1='24.6'
                  y1='26'
                  x2='55.4'
                  y2='52'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#5EEAD4' />
                  <stop offset='1' stopColor='#14B8A6' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {size !== 'sm' && (
            <span
              className={cn(
                'font-bold tracking-tight bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent',
                textSizeClasses[size]
              )}
            >
              Revalto
            </span>
          )}
        </div>
      )}

      {variant === 'elegant' && (
        <div className={cn('flex items-center gap-2', className)}>
          <div className={cn(sizeClasses[size], 'aspect-square relative')}>
            <svg
              viewBox='0 0 80 80'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full w-full'
            >
              <path
                d='M40 8L48.2 24.9H66.4L51.8 35.7L60 52.6L40 41.8L20 52.6L28.2 35.7L13.6 24.9H31.8L40 8Z'
                fill='url(#paint0_linear_elegant)'
              />
              <path
                d='M40 16L45.8 28.4L59.5 30.2L49.6 39.7L52.2 53.4L40 46.8L27.8 53.4L30.4 39.7L20.5 30.2L34.2 28.4L40 16Z'
                fill='white'
              />
              <path
                d='M40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8C22.3269 8 8 22.3269 8 40C8 57.6731 22.3269 72 40 72Z'
                stroke='url(#paint1_linear_elegant)'
                strokeWidth='2'
                strokeDasharray='4 4'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_elegant'
                  x1='13.6'
                  y1='8'
                  x2='66.4'
                  y2='52.6'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0D9488' />
                  <stop offset='1' stopColor='#0F766E' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_elegant'
                  x1='8'
                  y1='8'
                  x2='72'
                  y2='72'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#5EEAD4' />
                  <stop offset='1' stopColor='#14B8A6' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {size !== 'sm' && (
            <span
              className={cn(
                'font-bold tracking-tight bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent',
                textSizeClasses[size]
              )}
            >
              Revalto
            </span>
          )}
        </div>
      )}

      {variant === 'default' && (
        <div className={cn('flex items-center gap-2', className)}>
          <div className={cn(sizeClasses[size], 'aspect-square relative')}>
            <svg
              viewBox='0 0 80 80'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='h-full w-full'
            >
              <path
                d='M10 20C10 14.4772 14.4772 10 20 10H60C65.5228 10 70 14.4772 70 20V60C70 65.5228 65.5228 70 60 70H20C14.4772 70 10 65.5228 10 60V20Z'
                fill='url(#paint0_linear_default)'
              />
              <path
                d='M40 20L47.3 35.1H63.6L50.1 44.7L57.5 59.8L40 50.2L22.5 59.8L29.9 44.7L16.4 35.1H32.7L40 20Z'
                fill='white'
              />
              <path
                d='M40 28L44.7 37.9H55.4L46.8 44.1L51.5 54L40 47.8L28.5 54L33.2 44.1L24.6 37.9H35.3L40 28Z'
                fill='url(#paint1_linear_default)'
                fillOpacity='0.5'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_default'
                  x1='10'
                  y1='10'
                  x2='70'
                  y2='70'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0D9488' />
                  <stop offset='1' stopColor='#0F766E' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_default'
                  x1='24.6'
                  y1='28'
                  x2='55.4'
                  y2='54'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#5EEAD4' />
                  <stop offset='1' stopColor='#14B8A6' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {size !== 'sm' && (
            <span
              className={cn(
                'font-bold tracking-tight bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent',
                textSizeClasses[size]
              )}
            >
              Revalto
            </span>
          )}
        </div>
      )}
    </>
  );

  if (asLink) {
    return <Link href='/'>{logoContent}</Link>;
  }

  return logoContent;
}
