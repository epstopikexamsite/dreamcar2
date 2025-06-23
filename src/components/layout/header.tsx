'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface HeaderProps {
    isFilterVisible: boolean;
    onToggleFilter: () => void;
}

export default function Header({ isFilterVisible, onToggleFilter }: HeaderProps) {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" aria-label="Trang chủ DREAMCAR">
          <Image
            src="/logo.svg"
            alt="DREAMCAR"
            width={220}
            height={50}
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
            <Button onClick={onToggleFilter} variant="destructive">
                <Filter className="mr-2 h-4 w-4" />
                {isFilterVisible ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'}
            </Button>
        </div>
      </div>
    </header>
  );
}
