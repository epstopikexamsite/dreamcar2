
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/lib/types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={post.aiHint}
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-6 flex-grow">
        <Link href={`/blog/${post.slug}`} className="block">
          <CardTitle className="font-headline text-2xl mb-3 hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
        </div>
        <CardDescription className="text-base">{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/blog/${post.slug}`} className="w-full">
            <Button variant="outline" className="w-full">
                Đọc thêm <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
