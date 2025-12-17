import { CreateBlogPost } from '@/components/blog/CreateBlogPost';
import MainLayout from '@/components/MainLayout';

export default function CreatePostPage() {
  return (
    <MainLayout>
      <CreateBlogPost />
    </MainLayout>
  );
}
