'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface PaginationProps {
  totalPages: number;
}

type PaginationParams = 'next' | 'prev';

export const Pagination = ({ totalPages }: PaginationProps) => {
  const pageParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const page = pageParams.get('page') || '1';
  const nextSite = +page >= 10 ? 10 : parseInt(page) + 1;
  const prevSite = +page <= 1 ? 1 : parseInt(page) - 1;

  const createQueryString = useCallback(
    (paginationParams: PaginationParams, value: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const params = new URLSearchParams(pageParams);
      params.set('page', value);

      return params.toString();
    },
    [pageParams],
  );

  return (
    <div className="btn-group">
      <button
        className="btn"
        onClick={() => router.push(pathname + '?' + createQueryString('prev', prevSite.toString()))}
      >
        «
      </button>
      <button className="btn">
        Page {page} / {totalPages}
      </button>
      <button
        className="btn"
        onClick={() => router.push(pathname + '?' + createQueryString('next', nextSite.toString()))}
      >
        »
      </button>
    </div>
  );
};
