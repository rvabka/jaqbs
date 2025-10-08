import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { client } from '@/lib/sanity/client';
import { postQuery, recentPostsQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '@/lib/sanity/portableTextComponents';
import ShareButtons from '@/components/blog/ShareButtons';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPost(slug: string): Promise<Post | null> {
  return await client.fetch(postQuery, { slug });
}

async function getRecentPosts(): Promise<Post[]> {
  return await client.fetch(recentPostsQuery);
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Artykuł nie znaleziony | Jaqbs Blog'
    };
  }

  const metaTitle = post.seo?.metaTitle || post.title;
  const metaDescription = post.seo?.metaDescription || post.excerpt;
  const ogImage = post.seo?.ogImage || post.mainImage;

  return {
    title: `${metaTitle} | Jaqbs Blog`,
    description: metaDescription,
    keywords: post.seo?.keywords?.join(', ') || post.tags?.join(', '),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      url: `https://jaqbs.eu/blog/${post.slug.current}`,
      siteName: 'Jaqbs Blog'
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
      site: '@jaqbs',
      creator: '@jaqbs'
    },
    alternates: {
      canonical:
        post.seo?.canonicalUrl || `https://jaqbs.eu/blog/${post.slug.current}`
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: !post.seo?.noIndex,
      googleBot: {
        index: !post.seo?.noIndex,
        follow: !post.seo?.noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

export const revalidate = 60;

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getPost(slug),
    getRecentPosts()
  ]);

  if (!post) {
    notFound();
  }

  const filteredRecentPosts = recentPosts
    .filter(p => p._id !== post._id)
    .slice(0, 3);

  const shareUrl = `https://jaqbs.eu/blog/${post.slug.current}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Jaqbs'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jaqbs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://jaqbs.pl/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': shareUrl
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://jaqbs.pl'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://jaqbs.pl/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `https://jaqbs.pl/blog?kategoria=${post.categorySlug}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: shareUrl
      }
    ]
  };
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article>
        <header className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 pt-10">
            <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white/80 py-2 font-light hover:text-white transition-all duration-300"
                  >
                    Strona główna /
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white/80 py-2 font-light hover:text-white transition-all duration-300"
                  >
                    Blog /
                  </Link>
                </li>
                <li className="text-white/80 py-2 font-bold">{post.title}</li>
              </ol>
            </nav>

            <AnimatedSection direction="up">
              <Badge className={`${getCategoryColor(post.categoryColor)} mb-4`}>
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                {post.readTime && (
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min czytania</span>
                  </div>
                )}
                {post.updatedAt && (
                  <div className="flex items-center space-x-2 text-gray-300">
                    <span>•</span>
                    <span>
                      Aktualizacja:{' '}
                      {new Date(post.updatedAt).toLocaleDateString('pl-PL')}
                    </span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </header>

        {post.mainImage && (
          <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
            <AnimatedSection direction="up" delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={post.mainImage}
                  alt={post.mainImageAlt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <AnimatedSection direction="fade" delay={0.3}>
                <div className="prose prose-lg max-w-none markdown-content">
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="pt-8 border-t mt-12">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-brand-red-700 rounded-full"></span>
                      Tagi:
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-brand-red-50 hover:to-brand-red-100 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover-lift"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-brand-red-700" />
                    Udostępnij artykuł:
                  </h3>
                  <ShareButtons shareUrl={shareUrl} title={post.title} />
                </div>
              </AnimatedSection>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {filteredRecentPosts.length > 0 && (
                  <Card className="shadow-lg border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-6 bg-gradient-to-b from-brand-red-700 to-brand-blue-700 rounded-full"></div>
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          Ostatnie artykuły
                          <TrendingUp className="h-4 w-4 text-brand-red-700" />
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {filteredRecentPosts.map(recent => (
                          <Link
                            key={recent._id}
                            href={`/blog/${recent.slug.current}`}
                            className="block group"
                          >
                            <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-brand-red-200">
                              {recent.mainImage && (
                                <div className="aspect-video overflow-hidden relative">
                                  <img
                                    src={recent.mainImage}
                                    alt={recent.mainImageAlt || recent.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <Badge
                                    className={`absolute top-3 left-3 ${getCategoryColor(recent.categoryColor)} shadow-lg`}
                                  >
                                    {recent.category}
                                  </Badge>
                                </div>
                              )}
                              <div className="p-4">
                                <h4 className="font-semibold text-sm group-hover:text-brand-red-700 line-clamp-2 mb-2 transition-colors leading-snug">
                                  {recent.title}
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                                  {recent.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>
                                      {new Date(
                                        recent.publishedAt
                                      ).toLocaleDateString('pl-PL', {
                                        day: 'numeric',
                                        month: 'short'
                                      })}
                                    </span>
                                  </div>
                                  {recent.readTime && (
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      <span>{recent.readTime} min</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red-700 to-brand-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/blog"
                        className="mt-6 block text-center px-4 py-2 bg-gradient-to-r from-brand-red-700 to-brand-blue-700 text-white rounded-lg font-semibold hover:from-brand-red-800 hover:to-brand-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Zobacz wszystkie artykuły
                      </Link>
                    </CardContent>
                  </Card>
                )}

                {post.relatedPosts && post.relatedPosts.length > 0 && (
                  <Card className="shadow-lg border-0 overflow-hidden">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-brand-red-700 rounded-full"></div>
                        Powiązane artykuły
                      </h3>
                      <div className="space-y-4">
                        {post.relatedPosts.map(related => (
                          <Link
                            key={related._id}
                            href={`/blog/${related.slug.current}`}
                            className="block group"
                          >
                            <div className="flex space-x-3 p-3 rounded-xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300">
                              {related.mainImage && (
                                <img
                                  src={related.mainImage}
                                  alt={related.title}
                                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                                />
                              )}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm group-hover:text-brand-red-700 line-clamp-2 mb-1 transition-colors">
                                  {related.title}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  {related.readTime && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {related.readTime} min
                                    </span>
                                  )}
                                  {related.category && (
                                    <>
                                      <span>•</span>
                                      <span>{related.category}</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-gradient-to-br from-brand-blue-900 to-brand-red-800 text-white shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">
                      Potrzebujesz wsparcia?
                    </h3>
                    <p className="text-sm text-gray-200 mb-4">
                      Skontaktuj się z naszym zespołem ekspertów
                    </p>
                    <Link
                      href="/kontakt"
                      className="block w-full text-center px-6 py-3 bg-white text-brand-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Skontaktuj się
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
