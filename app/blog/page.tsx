'use client';

import { useState } from 'react';
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
  Building2
} from 'lucide-react';

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
    excerpt:
      'Complete guide to preparing your truck and yourself for safe winter driving conditions.',
    author: 'Lisa Thompson',
    date: '2024-01-08',
    category: 'Safety',
    readTime: '7 min read',
    icon: Shield
  },
  {
    id: 5,
    title: 'Supply Chain Trends Shaping 2024',
    excerpt:
      'Key trends and predictions for the logistics industry in the coming year.',
    author: 'Robert Kim',
    date: '2024-01-05',
    category: 'Industry News',
    readTime: '9 min read',
    icon: TrendingUp
  },
  {
    id: 6,
    title: 'Route Optimization: Technology That Saves Time and Money',
    excerpt:
      'How modern GPS and route planning software can improve your efficiency.',
    author: 'Amanda Foster',
    date: '2024-01-03',
    category: 'Technology',
    readTime: '6 min read',
    icon: MapPin
  },
  {
    id: 7,
    title: 'Building Strong Relationships with Dispatchers',
    excerpt:
      'Communication strategies that lead to better loads and smoother operations.',
    author: 'Carlos Martinez',
    date: '2024-01-01',
    category: 'Tips & Tricks',
    readTime: '4 min read',
    icon: Users
  },
  {
    id: 8,
    title: 'Hours of Service Changes: What You Need to Know',
    excerpt:
      'Recent updates to HOS regulations and their impact on driver schedules.',
    author: 'Jennifer Walsh',
    date: '2023-12-28',
    category: 'Regulations',
    readTime: '8 min read',
    icon: Clock
  },
  {
    id: 9,
    title: 'Moving Mountain Expands Fleet with 500 New Trucks',
    excerpt:
      'Company announces major expansion to meet growing demand for transportation services.',
    author: 'Moving Mountain PR',
    date: '2023-12-25',
    category: 'Company News',
    readTime: '3 min read',
    icon: Truck
  },
  {
    id: 10,
    title: 'Data Analytics in Logistics: Making Smarter Decisions',
    excerpt:
      'How data-driven insights are revolutionizing fleet management and operations.',
    author: 'Dr. Emily Watson',
    date: '2023-12-22',
    category: 'Technology',
    readTime: '10 min read',
    icon: BarChart3
  }
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
      <Navigation />

      <section className="relative bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-red-800 text-white py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/abstract-logistics-pattern.png')] opacity-5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-red-700/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium mb-8">
              <Building2 className="h-5 w-5" />
              <span>Od 2010 roku w branży spedycyjnej</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              O nas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
              Stanowimy doskonale zgrany zespół młodych i dynamicznych ludzi,
              nastawionych na długoterminową współpracę
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-50 rounded-full px-4 py-2 text-sm font-medium text-red-800 mb-6">
              <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
              <span>Przeszukaj artykuły</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Znajdź interesujące Cię treści
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Przeglądaj nasze artykuły według kategorii lub użyj wyszukiwarki
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
            <div className="flex flex-col space-y-6">
              {/* Search Input */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Szukaj artykułów..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full text-lg focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 outline-none bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700 hover:scale-105'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Counter */}
              <div className="text-center">
                <span className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600">
                  <span className="font-medium">
                    {searchTerm || selectedCategory !== 'All'
                      ? `Znaleziono ${
                          articles.filter(article => {
                            const matchesCategory =
                              selectedCategory === 'All' ||
                              article.category === selectedCategory;
                            const matchesSearch =
                              article.title
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()) ||
                              article.excerpt
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase());
                            return matchesCategory && matchesSearch;
                          }).length
                        } artykułów`
                      : `${articles.length} wszystkich artykułów`}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="text-center mb-8">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="inline-flex items-center space-x-2 text-red-700 hover:text-red-800 font-medium transition-colors duration-300"
              >
                <X className="h-4 w-4" />
                <span>Wyczyść filtry</span>
              </button>
            </div>
          )}
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
              <Card
                key={article.id}
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
            ))}
          </div>
        </div>
      </section>

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
              <Card
                key={article.id}
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
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-red-700 group-hover:text-red-800 font-semibold">
                    <span className="text-sm">Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
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

      <section className="py-24 bg-gradient-to-br from-brand-red-700 via-brand-red-800 to-brand-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Stay Updated with Industry News
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ industry professionals. Get weekly insights, regulatory
            updates, and expert analysis delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900 rounded-full py-6 px-6 text-lg border-0 shadow-lg"
            />
            <Button className="bg-white text-brand-red-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-6 text-lg font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
