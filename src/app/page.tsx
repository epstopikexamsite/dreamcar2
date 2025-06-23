'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import CarFilters from '@/components/car-filters';
import CarCard from '@/components/car-card';
import { cars as allCars } from '@/lib/data';
import { Button } from '@/components/ui/button';

const NO_PRICE_LIMIT = Number.MAX_SAFE_INTEGER;

export default function Home() {
  const [filters, setFilters] = useState({
    brand: [] as string[],
    priceRange: [0, NO_PRICE_LIMIT],
    year: [] as string[],
    fuelType: [] as string[],
    transmission: [] as string[],
    type: [] as string[],
    exteriorColor: [] as string[],
    interiorColor: [] as string[],
    drivetrain: [] as string[],
  });
  const [showAll, setShowAll] = useState(false);

  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      const brandMatch = filters.brand.length === 0 || filters.brand.includes(car.brand);
      const priceMatch = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      const yearMatch = filters.year.length === 0 || filters.year.includes(car.year.toString());
      const fuelMatch = filters.fuelType.length === 0 || filters.fuelType.includes(car.fuelType);
      const transmissionMatch = filters.transmission.length === 0 || filters.transmission.includes(car.transmission);
      const typeMatch = filters.type.length === 0 || filters.type.includes(car.type);
      const exteriorColorMatch = filters.exteriorColor.length === 0 || filters.exteriorColor.includes(car.exteriorColor);
      const interiorColorMatch = filters.interiorColor.length === 0 || filters.interiorColor.includes(car.interiorColor);
      const drivetrainMatch = filters.drivetrain.length === 0 || filters.drivetrain.includes(car.drivetrain);
      return brandMatch && priceMatch && yearMatch && fuelMatch && transmissionMatch && typeMatch && exteriorColorMatch && interiorColorMatch && drivetrainMatch;
    });
  }, [filters]);

  const brands = useMemo(() => {
    const uniqueBrands = allCars.reduce((acc, car) => {
      if (!acc.some(b => b.name === car.brand)) {
        acc.push({ name: car.brand, logo: car.logo });
      }
      return acc;
    }, [] as { name: string; logo: string }[]);
    return uniqueBrands;
  }, []);
  const years = useMemo(() => [...Array.from(new Set(allCars.map(car => car.year.toString())))].sort((a, b) => Number(b) - Number(a)), []);
  const fuelTypes = useMemo(() => [...Array.from(new Set(allCars.map(car => car.fuelType)))].sort(), []);
  const transmissionTypes = useMemo(() => [...Array.from(new Set(allCars.map(car => car.transmission)))].sort(), []);
  const carTypes = useMemo(() => [...Array.from(new Set(allCars.map(car => car.type)))].sort(), []);
  const exteriorColors = useMemo(() => [...Array.from(new Set(allCars.map(car => car.exteriorColor)))].sort(), []);
  const interiorColors = useMemo(() => [...Array.from(new Set(allCars.map(car => car.interiorColor)))].sort(), []);
  const drivetrains = useMemo(() => [...Array.from(new Set(allCars.map(car => car.drivetrain)))].sort(), []);

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
              fuelTypes={fuelTypes}
              transmissionTypes={transmissionTypes}
              carTypes={carTypes}
              exteriorColors={exteriorColors}
              interiorColors={interiorColors}
              drivetrains={drivetrains}
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
