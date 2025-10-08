'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl = '/blog'
}: PaginationProps) {
  const getPageUrl = (page: number) => {
    return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    pages.push(
      <Link
        key={1}
        href={getPageUrl(1)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          currentPage === 1
            ? 'bg-brand-red-700 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
        }`}
      >
        1
      </Link>
    );

    if (showEllipsisStart) {
      pages.push(
        <span key="ellipsis-start" className="px-2 text-gray-400">
          ...
        </span>
      );
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPage === i
              ? 'bg-brand-red-700 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {i}
        </Link>
      );
    }

    if (showEllipsisEnd) {
      pages.push(
        <span key="ellipsis-end" className="px-2 text-gray-400">
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(totalPages)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            currentPage === totalPages
              ? 'bg-brand-red-700 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {totalPages}
        </Link>
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="px-4 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-all duration-300 flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Poprzednia
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-400 cursor-not-allowed flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Poprzednia
        </button>
      )}

      <div className="hidden sm:flex items-center gap-2">
        {renderPageNumbers()}
      </div>

      <div className="flex sm:hidden items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
        <span className="text-sm text-gray-600">
          Strona {currentPage} z {totalPages}
        </span>
      </div>

      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="px-4 py-2 rounded-lg font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 transition-all duration-300 flex items-center gap-2"
        >
          Następna
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <button
          disabled
          className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-400 cursor-not-allowed flex items-center gap-2"
        >
          Następna
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
