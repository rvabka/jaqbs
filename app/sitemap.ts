import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://jaqbs.eu';

  const posts = await client.fetch<{ slug: string; _updatedAt: string }[]>(`
    *[_type == "post"] {
      "slug": slug.current,
      _updatedAt
    }
  `);

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/kariera`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/dla-przewoznika`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6
    },
    {
      url: `${baseUrl}/wycena`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }
  ];

  const blogPosts = posts.map(
    (post: { slug: any; _updatedAt: string | number | Date }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6
    })
  );

  return [...staticPages, ...blogPosts];
}
