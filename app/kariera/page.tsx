import { Suspense } from 'react';
import { client } from '@/lib/sanity/client';
import { jobsQuery } from '@/lib/sanity/queries';
import { Job } from '@/lib/sanity/types';
import CareerContent from '@/components/CareerContent';
import { PageHero } from '@/components/PageHero';

async function getJobs() {
  return await client.fetch<Job[]>(jobsQuery);
}

export const revalidate = 60;

export default async function CareerPage() {
  const jobs = await getJobs();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHero
        title="Kariera"
        description="Rozwijaj swoją karierę w dynamicznej firmie transportowej. Oferujemy stabilne zatrudnienie i możliwości rozwoju w branży TSL."
      />

      <Suspense
        fallback={<div className="py-20 text-center">Ładowanie...</div>}
      >
        <CareerContent jobs={jobs} />
      </Suspense>
    </div>
  );
}
