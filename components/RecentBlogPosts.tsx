'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from './ui/AnimatedSection';
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';
import { Post } from '@/lib/sanity/types';

interface RecentBlogPostsProps {
  posts: Post[];
}

export default function RecentBlogPosts({ posts }: RecentBlogPostsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      red: 'from-red-500 to-red-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      indigo: 'from-indigo-500 to-indigo-600',
      gray: 'from-gray-500 to-gray-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-red-100/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection direction="fade" className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Najnowsze wpisy</span>
          </div>

          <AnimatedSection direction="up" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Poznaj nasze <span className="gradient-text">aktualności</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dowiedz się więcej o najnowszych trendach w branży transportowej i
              logistycznej
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <StaggeredContainer
          staggerDelay={0.15}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {posts.slice(0, 3).map((post, index) => (
            <StaggeredItem key={post._id} direction="up">
              <Link href={`/blog/${post.slug.current}`}>
                <Card className="group h-full hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  {post.mainImage && (
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={post.mainImage}
                        alt={post.mainImageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div
                        className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.categoryColor)} text-white text-xs font-semibold rounded-full shadow-lg`}
                      >
                        {post.category}
                      </div>

                      {post.featured && (
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <TrendingUp className="w-4 h-4 text-red-700" />
                        </div>
                      )}
                    </div>
                  )}

                  <CardHeader className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            'pl-PL',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            }
                          )}
                        </span>
                      </div>
                      {post.readTime && (
                        <>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </div>
                        </>
                      )}
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2 leading-tight mb-3">
                      {post.title}
                    </CardTitle>

                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="flex items-center text-red-700 font-semibold text-sm group-hover:text-red-800 transition-colors">
                      <span>Czytaj więcej</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>
              </Link>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        <AnimatedSection direction="up" delay={1.0} className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-red-700 to-blue-700 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Link href="/blog" className="text-lg font-semibold">
              Zobacz wszystkie artykuły
            </Link>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
