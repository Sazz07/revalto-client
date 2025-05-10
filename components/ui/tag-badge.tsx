'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

interface TagBadgeProps {
  name: string;
  href?: string;
  onRemove?: () => void;
  interactive?: boolean;
}

export default function TagBadge({
  name,
  href,
  onRemove,
  interactive = true,
}: TagBadgeProps) {
  const Tag = () => (
    <span className='tag-pill'>
      {name}
      {onRemove && (
        <button
          onClick={onRemove}
          className='ml-1 hover:text-primary-foreground'
        >
          <X className='h-3 w-3' />
          <span className='sr-only'>Remove tag</span>
        </button>
      )}
    </span>
  );

  if (!interactive) {
    return <Tag />;
  }

  return href ? (
    <Link href={href} className='mr-1.5 mb-1.5 inline-block'>
      <Tag />
    </Link>
  ) : (
    <div className='mr-1.5 mb-1.5 inline-block'>
      <Tag />
    </div>
  );
}
