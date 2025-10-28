import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import CheapestTransport from '@/components/CheapestTransport';
import DriverOpportunity from '@/components/DriverOpportunity';
import GlobalService from '@/components/GlobalService';
import Faq from '@/components/Faq';
import { client } from '@/lib/sanity/client';
import { recentPostsQuery } from '@/lib/sanity/queries';
import { Post } from '@/lib/sanity/types';
import RecentBlogPosts from '@/components/RecentBlogPosts';

export default async function Home() {
  async function getRecentPosts() {
    return await client.fetch<Post[]>(recentPostsQuery);
  }

  const recentPosts = await getRecentPosts();

  return (
    <main className="min-h-screen">
      <Hero />
      <Partners />
      <CheapestTransport />
      <GlobalService />
      <DriverOpportunity />
      <Faq />
      <RecentBlogPosts posts={recentPosts} />
    </main>
  );
}
