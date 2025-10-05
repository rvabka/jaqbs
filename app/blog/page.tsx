'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Shield,
  MapPin,
  Clock,
  Fuel,
  Settings,
  Truck,
  BarChart3,
  Users,
  Building2,
  X,
  Award
} from 'lucide-react';
import {
  AnimatedSection,
  StaggeredContainer,
  StaggeredItem
} from '@/components/ui/AnimatedSection';

const categories = [
  'All',
  'Industry News',
  'Safety',
  'Technology',
  'Regulations',
  'Tips & Tricks',
  'Company News'
];

const featuredArticles = [
  {
    id: 1,
    title: 'The Future of Autonomous Trucking: What Drivers Need to Know',
    slug: 'future-of-autonomous-trucking', // DODANE
    excerpt:
      'Exploring how autonomous vehicle technology will impact the trucking industry and what it means for professional drivers.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    featured: true,
    icon: Settings
  },
  {
    id: 2,
    title: 'New DOT Regulations: Electronic Logging Device Updates',
    slug: 'understanding-eld-mandates', // DODANE
    excerpt:
      'Understanding the latest changes to ELD requirements and how they affect your daily operations.',
    author: 'Mike Rodriguez',
    date: '2024-01-12',
    category: 'Regulations',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    featured: true,
    icon: Shield
  }
];

const articles = [
  {
    id: 3,
    title: 'Fuel Efficiency Tips That Can Save You Thousands',
    slug: 'best-practices-cargo-security', // DODANE
    excerpt:
      'Proven strategies to improve your fuel economy and reduce operating costs on long hauls.',
    author: 'David Chen',
    date: '2024-01-10',
    category: 'Tips & Tricks',
    readTime: '5 min read',
    icon: Fuel
  },
  {
    id: 4,
    title: 'Winter Driving Safety: Essential Preparation Checklist',
    slug: 'future-of-autonomous-trucking', // DODANE (możesz zmienić na inny)
    excerpt:
      'Complete guide to preparing your truck and yourself for safe winter driving conditions.',
    author: 'Lisa Thompson',
    date: '2024-01-08',
    category: 'Safety',
    readTime: '7 min read',
    icon: Shield
  }
];

const stats = [
  { label: 'Lat doświadczenia', value: '15+', icon: Award },
  { label: 'Zadowolonych klientów', value: '1000+', icon: Users },
  { label: 'Pojazdów w flocie', value: '50+', icon: Truck },
  { label: 'Biur w Polsce', value: '4', icon: MapPin }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Industry News': 'bg-blue-100 text-blue-800',
      Safety: 'bg-red-100 text-red-800',
      Technology: 'bg-indigo-100 text-indigo-800',
      Regulations: 'bg-orange-100 text-orange-800',
      'Tips & Tricks': 'bg-green-100 text-green-800',
      'Company News': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection direction="fade" className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <Building2 className="h-5 w-5" />
              <span>Od 2010 roku w branży spedycyjnej</span>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
                O nas
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
                Stanowimy doskonale zgrany zespół młodych i dynamicznych ludzi,
                nastawionych na długoterminową współpracę
              </p>
            </AnimatedSection>
          </AnimatedSection>

          {/* Stats */}
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
      <section className="py-16 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-100/20 to-blue-100/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
              <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
              <span>Featured Content</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-sm hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-red-700 via-red-600 to-blue-700 flex items-center justify-center relative overflow-hidden">
                    <article.icon className="h-20 w-20 text-white opacity-80 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={`${getCategoryColor(article.category)} rounded-full px-3 py-1 animate-bounce-in`}
                      >
                        {article.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-medium">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-red-700 transition-colors leading-tight">
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
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-red-700 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles z linkami */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <span className="text-gray-600 font-medium">
              {filteredArticles.length} article
              {filteredArticles.length !== 1 ? 's' : ''} found
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card
                  className="hover:shadow-2xl transition-all duration-500 group cursor-pointer border-0 shadow-sm hover:-translate-y-1 bg-white/80 backdrop-blur-sm hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-50 via-red-100 to-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-lg">
                        <article.icon className="h-7 w-7 text-red-800 group-hover:text-red-900" />
                      </div>
                      <Badge
                        className={`${getCategoryColor(article.category)} rounded-full px-3 py-1`}
                      >
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-red-700 transition-colors line-clamp-2 leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 leading-relaxed mt-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span className="truncate max-w-[100px]">
                            {article.author}
                          </span>
                        </div>
                        <span className="font-medium">{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-red-700 group-hover:text-red-800 font-semibold">
                      <span className="text-sm">Read more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No articles found
              </h3>
              <p className="text-gray-600 text-lg">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
