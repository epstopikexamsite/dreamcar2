'use client';

import { Car } from 'lucide-react';
import AIRecommender from '@/components/ai-recommender';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Car className="h-8 w-8 text-white" />
          <h1 className="text-2xl md:text-3xl font-headline font-bold tracking-wider">Dream Rides</h1>
        </div>
        <AIRecommender />
      </div>
    </header>
  );
}
