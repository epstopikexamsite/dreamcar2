
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { blogPosts } from '@/lib/blog-data';
import BlogPostCard from '@/components/blog-post-card';
import { Rss } from 'lucide-react';
import type { BlogPost } from '@/lib/types';

export default function BlogPage() {
  const groupedPosts = blogPosts.reduce((acc, post) => {
    const { category } = post;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  const categories: (keyof typeof groupedPosts)[] = ['Tính năng', 'Loại động cơ', 'Loại nhiên liệu', 'Hộp số', 'Dẫn động', 'Loại xe'];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <Rss className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                    Kiến Thức Về Xe
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Nơi chia sẻ các bài đánh giá, kinh nghiệm hữu ích và kiến thức chuyên sâu từ các chuyên gia của TimeCarsAuto.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 space-y-16">
                {categories.map(category => (
                    groupedPosts[category] && (
                        <div key={category}>
                            <h2 className="text-3xl font-headline font-bold text-primary mb-8 border-b-2 border-primary/20 pb-4">{category}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {groupedPosts[category].map((post) => (
                                    <BlogPostCard key={post.slug} post={post} />
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
