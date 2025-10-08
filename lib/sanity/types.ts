export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  body?: any[]; 
  publishedAt: string;
  updatedAt?: string;
  readTime?: number;
  featured: boolean;
  category: string;
  categorySlug: string;
  categoryColor: string;
  tags?: string[];
  mainImage: string;
  mainImageAlt: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    focusKeyword?: string;
    keywords?: string[];
    ogImage?: string;
    noIndex?: boolean;
    canonicalUrl?: string;
  };
  relatedPosts?: RelatedPost[];
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  readTime?: number;
  mainImage: string;
  category: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  color: string;
}
