import { Suspense } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Calendar,
  ArrowRight,
  Award,
  Users,
  Truck,
  MapPin
} from 'lucide-react';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';
import { client } from '@/lib/sanity/client';
import {
  postsQuery,
  postsCountQuery,
  featuredPostsQuery,
  categoriesQuery
} from '@/lib/sanity/queries';
import { Post, Category } from '@/lib/sanity/types';
import BlogContent from '@/components/blog/BlogContent';

const stats = [
  { label: 'Lat doświadczenia', value: '15+', icon: Award },
  { label: 'Zadowolonych klientów', value: '1000+', icon: Users },
  { label: 'Pojazdów w flocie', value: '50+', icon: Truck },
  { label: 'Biur w Polsce', value: '4', icon: MapPin }
];

const POSTS_PER_PAGE = 9;

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

async function getPosts(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  return await client.fetch<Post[]>(postsQuery, { start, end });
}

async function getPostsCount() {
  return await client.fetch<number>(postsCountQuery);
}

async function getFeaturedPosts() {
  return await client.fetch<Post[]>(featuredPostsQuery);
}

async function getCategories() {
  return await client.fetch<Category[]>(categoriesQuery);
}

export const revalidate = 60;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const [posts, totalCount, featuredPosts, categories] = await Promise.all([
    getPosts(currentPage),
    getPostsCount(),
    getFeaturedPosts(),
    getCategories()
  ]);

  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection direction="fade" className="text-center">
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
                Blog
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
                Najnowsze wiadomości, porady i trendy z branży transportowej
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <StaggeredContainer
            staggerDelay={0.1}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <StaggeredItem key={index} direction="up">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-10 w-10 mx-auto mb-3 text-white" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {currentPage === 1 && featuredPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-100/20 to-blue-100/20 rounded-full blur-3xl animate-float"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
                <div className="w-2 h-2 bg-brand-red-700 rounded-full animate-pulse"></div>
                <span>Wyróżnione</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Najważniejsze artykuły
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map(article => (
                <Link key={article._id} href={`/blog/${article.slug.current}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-sm hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                    <div className="aspect-video bg-gradient-to-br from-brand-red-700 via-brand-red-600 to-brand-blue-700 overflow-hidden">
                      {article.mainImage && (
                        <img
                          src={article.mainImage}
                          alt={article.mainImageAlt || article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <CardHeader className="p-8">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="rounded-full px-3 py-1">
                          {article.category}
                        </Badge>
                        {article.readTime && (
                          <span className="text-sm text-gray-500 font-medium">
                            {article.readTime} min
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-brand-red-700 transition-colors leading-tight">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed mt-3">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {new Date(article.publishedAt).toLocaleDateString(
                                'pl-PL'
                              )}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-brand-red-700 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Suspense
        fallback={<div className="py-20 text-center">Ładowanie...</div>}
      >
        <BlogContent
          posts={posts}
          categories={categories}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
}
