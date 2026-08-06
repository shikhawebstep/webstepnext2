import BlogSlugClient from '@/components/Blog/BlogSlugClient';
import { fetchBlogs, fetchBlogBySlug } from '@/lib/contentApi';

export async function generateStaticParams() {
  const data = await fetchBlogs({ categories: [], blogs: [] });
  const blogs = data?.blogs || [];
  return blogs.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const result = await fetchBlogBySlug(slug);
  const post = result?.blog || null;
  const related = result?.related || [];
  return <BlogSlugClient post={post} related={related} slug={slug} />;
}
