
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { BlogPost } from '@/lib/types';

export default function BlogPostPageContent({ post }: { post: BlogPost }) {
  return (
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
  );
}
