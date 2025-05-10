import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

type PaginationControlsProps = {
  totalPages: number;
  currentPage: number;
};

export default function PaginationControls({
  totalPages,
  currentPage,
}: PaginationControlsProps) {
  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Calculate range around current page
    const rangeStart = Math.max(2, currentPage - 1);
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push('ellipsis1');
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('ellipsis2');
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className='flex items-center justify-center space-x-2 py-8'>
      <Button
        variant='outline'
        size='icon'
        disabled={currentPage === 1}
        asChild={currentPage !== 1}
      >
        {currentPage === 1 ? (
          <span>
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Previous page</span>
          </span>
        ) : (
          <Link href={`?page=${currentPage - 1}`}>
            <ChevronLeft className='h-4 w-4' />
            <span className='sr-only'>Previous page</span>
          </Link>
        )}
      </Button>

      {pageNumbers.map((page, i) => {
        if (page === 'ellipsis1' || page === 'ellipsis2') {
          return (
            <Button
              key={`ellipsis-${i}`}
              variant='outline'
              size='icon'
              disabled
            >
              <MoreHorizontal className='h-4 w-4' />
              <span className='sr-only'>More pages</span>
            </Button>
          );
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? 'default' : 'outline'}
            className={
              currentPage === page ? 'bg-teal-700 hover:bg-teal-800' : ''
            }
            asChild={currentPage !== page}
          >
            {currentPage === page ? (
              <span>{page}</span>
            ) : (
              <Link href={`?page=${page}`}>{page}</Link>
            )}
          </Button>
        );
      })}

      <Button
        variant='outline'
        size='icon'
        disabled={currentPage === totalPages}
        asChild={currentPage !== totalPages}
      >
        {currentPage === totalPages ? (
          <span>
            <ChevronRight className='h-4 w-4' />
            <span className='sr-only'>Next page</span>
          </span>
        ) : (
          <Link href={`?page=${currentPage + 1}`}>
            <ChevronRight className='h-4 w-4' />
            <span className='sr-only'>Next page</span>
          </Link>
        )}
      </Button>
    </div>
  );
}
