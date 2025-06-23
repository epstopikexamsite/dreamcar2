'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import CarFilters from '@/components/car-filters';
import CarCard from '@/components/car-card';
import { cars as allCars } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [filters, setFilters] = useState({
    brand: 'all',
    priceRange: [0, 200000],
    year: 'all',
  });
  const [showAll, setShowAll] = useState(false);

  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      const brandMatch = filters.brand === 'all' || car.brand === filters.brand;
      const priceMatch = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      const yearMatch = filters.year === 'all' || car.year.toString() === filters.year;
      return brandMatch && priceMatch && yearMatch;
    });
  }, [filters]);

  const brands = useMemo(() => {
    const uniqueBrands = allCars.reduce((acc, car) => {
      if (!acc.some(b => b.name === car.brand)) {
        acc.push({ name: car.brand, logo: car.logo });
      }
      return acc;
    }, [] as { name: string; logo: string }[]);
    return [{ name: 'all', logo: '/logos/all.svg' }, ...uniqueBrands];
  }, []);
  const years = useMemo(() => ['all', ...Array.from(new Set(allCars.map(car => car.year.toString())))].sort((a, b) => (b === 'all' ? -1 : a === 'all' ? 1 : Number(b) - Number(a))), []);
  const maxPrice = useMemo(() => Math.max(...allCars.map(car => car.price)), []);

  const visibleCars = showAll ? filteredCars : filteredCars.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <CarFilters 
              brands={brands} 
              years={years}
              maxPrice={maxPrice}
              filters={filters} 
              onFilterChange={setFilters} 
            />
          </aside>
          <section className="lg:col-span-3">
            <h1 className="text-3xl font-headline font-bold mb-6 text-foreground">Featured Vehicles</h1>
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">No cars match your criteria.</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters.</p>
              </div>
            )}
            {filteredCars.length > 6 && !showAll && (
              <div className="text-center mt-8">
                <Button onClick={() => setShowAll(true)} size="lg">Show All</Button>
              </div>
            )}
          </section>
        </div>
      </main>
      <footer className="w-full py-6 bg-primary/10 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DREAMCAR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
