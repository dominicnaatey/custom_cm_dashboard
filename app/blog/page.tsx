import BlogPostsTable from '@/components/blog/BlogPostsTable';
import MainLayout from '@/components/MainLayout';

export default function BlogPage() {
  return (
    <MainLayout>
      <BlogPostsTable />
    </MainLayout>
  );
}
