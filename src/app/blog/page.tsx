'use client';

import Header from '@/components/layout/header';
import { blogPosts } from '@/lib/blog-data';
import BlogPostCard from '@/components/blog-post-card';
import { Rss } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <Rss className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                    Tin Tức & Kiến Thức Về Xe
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Cập nhật những thông tin mới nhất, các bài đánh giá xe và kinh nghiệm hữu ích từ các chuyên gia của TIME CARS AUTO.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-primary/10 mt-auto">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TIME CARS AUTO. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </div>
  );
}
