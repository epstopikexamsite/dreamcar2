
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { blogPosts } from '@/lib/blog-data';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostPageContent from '@/components/blog-post-page-content';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Bài Viết Không Tồn Tại</h1>
            <p className="text-muted-foreground mb-8">Rất tiếc, chúng tôi không thể tìm thấy bài viết bạn đang tìm kiếm.</p>
            <Link href="/blog">
                <Button>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Quay Lại Trang Kiến Thức Về Xe
                </Button>
            </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <BlogPostPageContent post={post} />
      <Footer />
    </div>
  );
}
