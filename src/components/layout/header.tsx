'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { usePathname } from 'next/navigation';
import AIRecommender from '../ai-recommender';

interface HeaderProps {
    isFilterVisible?: boolean;
    onToggleFilter?: () => void;
}

export default function Header({ isFilterVisible, onToggleFilter }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
            <Link href="/" aria-label="Trang chủ DREAMCAR">
            <Image
                src="/logo.svg"
                alt="DREAMCAR"
                width={220}
                height={50}
                priority
            />
            </Link>
            <nav className="hidden md:flex items-center gap-4">
                <Link href="/about" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Giới thiệu
                </Link>
            </nav>
        </div>
        <div className="flex items-center gap-4">
            {pathname === '/' && onToggleFilter && (
                <Button onClick={onToggleFilter} variant="destructive">
                    <Filter className="mr-2 h-4 w-4" />
                    {isFilterVisible ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'}
                </Button>
            )}
             {pathname === '/' && (
                <AIRecommender />
             )}
             {pathname !== '/about' && (
                <Link href="/about" className="md:hidden">
                    <Button variant="outline">
                        Giới thiệu
                    </Button>
                </Link>
             )}
        </div>
      </div>
    </header>
  );
}
