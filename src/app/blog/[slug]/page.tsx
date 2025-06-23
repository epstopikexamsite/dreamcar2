'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

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
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
            <article>
                <header className="mb-8">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            data-ai-hint={post.aiHint}
                        />
                    </div>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
                    <div className="flex items-center gap-6 text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </header>

                <Card className="p-6 sm:p-8">
                  <div
                      className="text-foreground/90 space-y-4 text-lg"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </Card>

            </article>

            <div className="mt-12 text-center">
                <Link href="/blog">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Xem Tất Cả Bài Viết
                    </Button>
                </Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
