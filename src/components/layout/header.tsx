'use client';

import Image from 'next/image';
import Link from 'next/link';
import AIRecommender from '@/components/ai-recommender';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" aria-label="DREAMCAR homepage">
          <Image
            src="/logo.svg"
            alt="DREAMCAR"
            width={220}
            height={50}
            priority
          />
        </Link>
        <AIRecommender />
      </div>
    </header>
  );
}
