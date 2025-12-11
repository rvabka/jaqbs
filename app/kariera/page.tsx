import { Suspense } from 'react';
import { client } from '@/lib/sanity/client';
import { jobsQuery } from '@/lib/sanity/queries';
import { Job } from '@/lib/sanity/types';
import CareerContent from '@/components/CareerContent';
import { PageHero } from '@/components/PageHero';
import { Metadata } from 'next';

async function getJobs() {
  return await client.fetch<Job[]>(jobsQuery);
}

export const metadata: Metadata = {
  title: 'Kariera - Praca w Jaqbs | Oferty pracy',
  description:
    'Dołącz do zespołu Jaqbs! Sprawdź aktualne oferty pracy w transporcie i spedycji. Stabilne zatrudnienie, rozwój kariery, konkurencyjne wynagrodzenie.',
  keywords:
    'praca transport, praca spedycja, oferty pracy jaqbs, kariera transport, praca kierowca, praca spedytor, praca logistyka',
  openGraph: {
    title: 'Kariera - Praca w Jaqbs',
    description:
      'Dołącz do zespołu Jaqbs! Sprawdź aktualne oferty pracy w transporcie i spedycji.',
    url: 'https://jaqbs.eu/kariera',
    type: 'website'
  }
};

export const revalidate = 60;

export default async function CareerPage() {
  const jobs = await getJobs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Kariera"
        description="Dołącz do naszego zespołu i rozwijaj swoją przyszłość z Jaqbs."
      />

      <Suspense
        fallback={<div className="py-20 text-center">Ładowanie...</div>}
      >
        <CareerContent jobs={jobs} />
      </Suspense>
    </div>
  );
}
