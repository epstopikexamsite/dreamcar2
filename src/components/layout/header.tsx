'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    isFilterVisible?: boolean;
    onToggleFilter?: () => void;
}

export default function Header({ isFilterVisible, onToggleFilter }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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
            <nav className="hidden md:flex items-center gap-6">
                <Link href="/about" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Giới thiệu
                </Link>
                <Link href="/team" className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Đội ngũ
                </Link>
            </nav>
        </div>
        <div className="flex items-center gap-2">
            {isHomePage && onToggleFilter && (
                <Button onClick={onToggleFilter} variant="destructive">
                    <Filter className="mr-2 h-4 w-4" />
                    {isFilterVisible ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'}
                </Button>
            )}
            <div className="flex items-center gap-2 md:hidden">
                {pathname !== '/about' && (
                    <Link href="/about">
                        <Button variant="outline" size="sm">
                            Giới thiệu
                        </Button>
                    </Link>
                )}
                {pathname !== '/team' && (
                    <Link href="/team">
                        <Button variant="outline" size="sm">
                            Đội ngũ
                        </Button>
                    </Link>
                )}
            </div>
        </div>
      </div>
    </header>
  );
}
