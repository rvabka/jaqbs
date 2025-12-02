'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Search, Calendar, ArrowRight, X } from 'lucide-react';
import { Post, Category } from '@/lib/sanity/types';
import Pagination from '@/components/blog/Pagination';

interface BlogContentProps {
  posts: Post[];
  categories: Category[];
  currentPage: number;
  totalPages: number;
}

export default function BlogContent({
  posts,
  categories,
  currentPage,
  totalPages
}: BlogContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategorySlug = searchParams.get('kategoria') || 'All';
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (categorySlug: string) => {
    if (categorySlug === 'All') {
      router.push('/blog', { scroll: false });
    } else {
      router.push(`/blog?kategoria=${categorySlug}`, { scroll: false });
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory =
      selectedCategorySlug === 'All' ||
      post.categorySlug === selectedCategorySlug;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-800',
      red: 'bg-red-100 text-red-800',
      green: 'bg-green-100 text-green-800',
      orange: 'bg-orange-100 text-orange-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      gray: 'bg-gray-100 text-gray-800'
    };
    return colors[color] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Szukaj artykułów..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-12 pr-12 py-6 text-lg border-2 focus:border-brand-red-700"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategorySlug === 'All'
                  ? 'bg-brand-red-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wszystkie
            </button>
            {categories.map(category => (
              <button
                key={category._id}
                onClick={() => handleCategoryChange(category.slug.current)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategorySlug === category.slug.current
                    ? 'bg-brand-red-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Wszystkie artykuły
          </h2>
          <span className="text-gray-600 font-medium">
            {filteredPosts.length}{' '}
            {filteredPosts.length === 1 ? 'artykuł' : 'artykuły'}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <Card hover={false} className="hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-sm hover:-translate-y-1 bg-white/80 backdrop-blur-sm hover-lift h-full">
                {post.mainImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.mainImage}
                      alt={post.mainImageAlt || post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      className={`${getCategoryColor(post.categoryColor)} rounded-full px-3 py-1`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-red-700 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
                      </span>
                    </div>
                    {post.readTime && (
                      <span className="font-medium">{post.readTime} min</span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center text-brand-red-700 group-hover:text-brand-red-800 font-semibold">
                    <span className="text-sm">Czytaj więcej</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Nie znaleziono artykułów
            </h3>
            <p className="text-gray-600 text-lg">
              Spróbuj zmienić kryteria wyszukiwania
            </p>
          </div>
        )}

        {!searchTerm && selectedCategorySlug === 'All' && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </section>
  );
}
