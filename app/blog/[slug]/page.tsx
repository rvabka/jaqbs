import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { urlFor } from '@/lib/sanity';
import { getPostBySlug } from '@/lib/sanityQueries';

export const revalidate = 3600; // Revalidate at most every hour

// Component for rendering portable text
const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full my-6 h-80 md:h-96">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            fill
            className="object-contain"
          />
        </div>
      );
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value?.href?.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <Link
          href={value?.href || '#'}
          rel={rel}
          className="text-primary underline"
        >
          {children}
        </Link>
      );
    }
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold my-5">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold my-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold my-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold my-3">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="my-4">{children}</p>
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
    )
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>
  }
};

// Format date function
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default async function BlogPost({
  params
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full h-72 md:h-96">
            {post.mainImage ? (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Brak obrazka</span>
              </div>
            )}
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap text-sm text-gray-600 mb-4">
              <span className="mr-4">{formatDate(post.publishedAt)}</span>
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category: string) => (
                    <span
                      key={category}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <div className="text-lg text-gray-600 italic mb-8 border-l-4 border-primary pl-4 py-1">
                {post.excerpt}
              </div>
            )}

            <div className="prose max-w-none">
              <PortableText
                value={post.content}
                components={PortableTextComponents}
              />
            </div>

            {post.author && (
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  {post.author.image && (
                    <div className="w-12 h-12 relative mr-4">
                      <Image
                        src={urlFor(post.author.image)
                          .width(100)
                          .height(100)
                          .url()}
                        alt={post.author.name}
                        className="rounded-full"
                        fill
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">Autor: {post.author.name}</h3>
                    {post.author.bio && (
                      <div className="text-sm text-gray-600 mt-1">
                        <PortableText
                          value={post.author.bio}
                          components={PortableTextComponents}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            ← Powrót do listy wpisów
          </Link>
        </div>
      </div>
    </div>
  );
}
