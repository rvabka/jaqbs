import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
  Copy
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Navigation from '@/components/Navigation';
import {
  AnimatedSection,
} from '@/components/ui/AnimatedSection';

// Mock data - zastąpisz to danymi z Sanity CMS
const articles = {
  'future-of-autonomous-trucking': {
    title: 'The Future of Autonomous Trucking: What Drivers Need to Know',
    slug: 'future-of-autonomous-trucking',
    excerpt:
      'Autonomous vehicles are reshaping the transportation industry. Learn how these changes will impact professional drivers and what skills will be valuable in the future.',
    author: 'Sarah Johnson',
    authorRole: 'Industry Analyst',
    authorImage: 'https://i.pravatar.cc/150?img=1',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80',
    content: `
      <h2>Introduction to Autonomous Trucking</h2>
      <p>The transportation industry is on the brink of a revolutionary transformation. Autonomous trucking technology is advancing rapidly, promising to reshape how goods are transported across countries and continents.</p>

      <h2>Current State of Technology</h2>
      <p>Today's autonomous trucks are equipped with advanced sensors, cameras, and AI systems that can navigate highways, manage lane changes, and respond to traffic conditions. While fully autonomous operations are still in development, many companies are already testing semi-autonomous systems.</p>

      <blockquote>
        "The future of trucking isn't about replacing drivers—it's about augmenting their capabilities and making the roads safer for everyone." - Industry Expert
      </blockquote>

      <h2>Impact on Professional Drivers</h2>
      <p>Rather than eliminating jobs, autonomous technology is likely to transform the role of truck drivers. Future drivers may act more as fleet managers, monitoring multiple vehicles and handling complex situations that require human judgment.</p>

      <h3>Skills for the Future</h3>
      <ul>
        <li>Technology proficiency and system monitoring</li>
        <li>Problem-solving and critical thinking</li>
        <li>Fleet management and logistics coordination</li>
        <li>Customer service and communication</li>
      </ul>

      <h2>Safety Improvements</h2>
      <p>One of the primary drivers behind autonomous trucking is safety. Autonomous systems don't get tired, distracted, or impaired. They can react faster to hazards and maintain consistent safe driving practices.</p>

      <h2>Preparing for the Transition</h2>
      <p>Professional drivers should start preparing now by:</p>
      <ol>
        <li>Staying informed about technological developments</li>
        <li>Taking courses in logistics and fleet management</li>
        <li>Developing computer and technical skills</li>
        <li>Building expertise in specialized hauling that requires human oversight</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The autonomous revolution in trucking is inevitable, but it's not something to fear. By staying adaptable and continuously learning, professional drivers can position themselves for success in this new era of transportation.</p>
    `,
    tags: ['Autonomous Vehicles', 'Future Tech', 'Driver Training', 'Safety'],
    relatedArticles: [
      'understanding-eld-mandates',
      'best-practices-cargo-security'
    ]
  },
  'understanding-eld-mandates': {
    title: 'Understanding ELD Mandates: A Complete Guide',
    slug: 'understanding-eld-mandates',
    excerpt:
      'Everything you need to know about Electronic Logging Device mandates, compliance requirements, and how they impact your daily operations.',
    author: 'Mike Anderson',
    authorRole: 'Compliance Specialist',
    authorImage: 'https://i.pravatar.cc/150?img=12',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Regulations',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80',
    content: `
      <h2>What is an ELD?</h2>
      <p>An Electronic Logging Device (ELD) is a piece of technology that automatically records driving time and Hours of Service (HOS) records for commercial motor vehicle drivers.</p>

      <h2>Why ELDs Are Mandatory</h2>
      <p>The ELD mandate was implemented to create a safer work environment for drivers and make it easier to accurately track, manage, and share records of duty status (RODS) data.</p>

      <h2>Compliance Requirements</h2>
      <p>All commercial motor vehicles must use ELDs if they are required to prepare hours-of-service (HOS) records of duty status (RODS).</p>
    `,
    tags: ['ELD', 'Compliance', 'Regulations', 'Safety'],
    relatedArticles: [
      'future-of-autonomous-trucking',
      'best-practices-cargo-security'
    ]
  },
  'best-practices-cargo-security': {
    title: 'Best Practices for Cargo Security in 2024',
    slug: 'best-practices-cargo-security',
    excerpt:
      'Protect your cargo and your business with these essential security practices for modern trucking operations.',
    author: 'David Martinez',
    authorRole: 'Security Consultant',
    authorImage: 'https://i.pravatar.cc/150?img=33',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Safety',
    image:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=2000&q=80',
    content: `
      <h2>The Importance of Cargo Security</h2>
      <p>Cargo theft costs the transportation industry billions of dollars annually. Implementing robust security measures is essential for protecting your goods and your business reputation.</p>

      <h2>Physical Security Measures</h2>
      <p>Essential physical security includes high-security locks, GPS tracking, and proper parking in well-lit, secure facilities.</p>

      <h2>Digital Security</h2>
      <p>Modern cargo security also involves cybersecurity measures to protect tracking systems and shipment data from hackers.</p>
    `,
    tags: ['Security', 'Cargo Protection', 'Best Practices', 'Safety'],
    relatedArticles: [
      'future-of-autonomous-trucking',
      'understanding-eld-mandates'
    ]
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    return {
      title: 'Artykuł nie znaleziony | Jaqbs Blog',
      description: 'Nie znaleziono artykułu o podanym adresie.'
    };
  }

  return {
    title: `${article.title} | Jaqbs Blog`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ],
      url: `https://jaqbs.pl/blog/${article.slug}`,
      siteName: 'Jaqbs Blog'
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      creator: '@jaqbs'
    },
    alternates: {
      canonical: `https://jaqbs.pl/blog/${article.slug}`
    }
  };
}

// Generate static params for all articles (for SSG)
export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({
    slug
  }));
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles[params.slug as keyof typeof articles];

  // If article not found, show 404
  if (!article) {
    notFound();
  }

  const shareUrl = `https://jaqbs.pl/blog/${article.slug}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      {/* Article Header */}
      <article>
        <header className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${article.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimatedSection direction="fade">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group mb-8 pt-6"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Powrót do artykułów</span>
              </Link>

              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                    <Tag className="h-4 w-4" />
                    <span>{article.category}</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    {article.title}
                  </h1>

                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center space-x-3">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-12 h-12 rounded-full border-2 border-white/30"
                      />
                      <div>
                        <div className="font-semibold">{article.author}</div>
                        <div className="text-gray-300 text-xs">
                          {article.authorRole}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('pl-PL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content - szerszy */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="up">
                {/* Article Body */}
                <div
                  className="markdown-content mb-12"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Tagi:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-brand-red-50 to-brand-blue-50 text-brand-red-700 rounded-full text-sm font-medium hover:from-brand-red-100 hover:to-brand-blue-100 transition-all cursor-pointer border border-brand-red-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar - węższy */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Share - nowy design */}
                <AnimatedSection direction="right">
                  <Card className="bg-gradient-to-br from-brand-red-700 via-brand-red-800 to-brand-blue-800 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Share2 className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-lg">
                          Udostępnij artykuł
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-[#1877F2] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Facebook className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">Facebook</span>
                        </a>

                        <a
                          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(article.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-[#1DA1F2] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Twitter className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">Twitter</span>
                        </a>

                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                        >
                          <div className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Linkedin className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">LinkedIn</span>
                        </a>

                        <button className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group w-full">
                          <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Copy className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">Kopiuj link</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Related Articles */}
                <AnimatedSection direction="right" delay={0.2}>
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4 text-lg">
                        Powiązane artykuły
                      </h3>
                      <div className="space-y-4">
                        {article.relatedArticles.map(relatedSlug => {
                          const related =
                            articles[relatedSlug as keyof typeof articles];
                          if (!related) return null;

                          return (
                            <Link
                              key={relatedSlug}
                              href={`/blog/${relatedSlug}`}
                              className="block group"
                            >
                              <div className="flex space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                <img
                                  src={related.image}
                                  alt={related.title}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm group-hover:text-brand-red-700 transition-colors line-clamp-2 mb-1">
                                    {related.title}
                                  </h4>
                                  <p className="text-xs text-gray-500">
                                    {related.readTime}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </article>

    </div>
  );
}
