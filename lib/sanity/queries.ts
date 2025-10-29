import { groq } from 'next-sanity';

export const postsQuery = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    featured,
    "category": category->title,
    "categorySlug": category->slug.current,
    "categoryColor": category->color,
    tags,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    seo
  }
`;

export const postsCountQuery = groq`
  count(*[_type == "post" && status == "published"])
`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    excerpt,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "asset": {
          "url": asset->url,
          "_ref": asset->_ref
        }
      }
    },
    publishedAt,
    updatedAt,
    readTime,
    featured,
    "category": category->title,
    "categorySlug": category->slug.current,
    "categoryColor": category->color,
    tags,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    seo {
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      "ogImage": ogImage.asset->url,
      noIndex,
      canonicalUrl
    },
    "relatedPosts": relatedPosts[]-> {
      _id,
      title,
      slug,
      excerpt,
      readTime,
      "mainImage": mainImage.asset->url,
      "category": category->title
    }
  }
`;

export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true && status == "published"] | order(publishedAt desc) [0...2] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "category": category->title,
    "categoryColor": category->color,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }
`;

export const recentPostsQuery = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "category": category->title,
    "categoryColor": category->color,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt
  }
`;

export const jobsQuery = `*[_type == "job" && active == true] | order(featured desc, publishedAt desc) {
  _id,
  title,
  slug,
  location,
  type,
  salary,
  description,
  requirements,
  responsibilities,
  benefits,
  category,
  featured,
  active,
  publishedAt
}`;

export const featuredJobsQuery = `*[_type == "job" && active == true && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  location,
  type,
  salary,
  description,
  requirements,
  responsibilities,
  benefits,
  category,
  featured,
  active,
  publishedAt
}`;

export const jobBySlugQuery = `*[_type == "job" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  location,
  type,
  salary,
  description,
  requirements,
  responsibilities,
  benefits,
  category,
  featured,
  active,
  publishedAt
}`;
