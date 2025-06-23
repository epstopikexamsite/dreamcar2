'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Fuel, Zap, Leaf, Truck } from 'lucide-react';


interface CarFiltersProps {
  brands: { name: string; logo: string }[];
  years: string[];
  fuelTypes: string[];
  maxPrice: number;
  filters: { brand: string[]; priceRange: number[]; year: string[]; fuelType: string[] };
  onFilterChange: (filters: any) => void;
}

const fuelTypeIcons: { [key: string]: React.ElementType } = {
  'Gasoline': Fuel,
  'Diesel': Truck,
  'Electric': Zap,
  'Hybrid': Leaf,
};

export default function CarFilters({ brands, years, fuelTypes, maxPrice, filters, onFilterChange }: CarFiltersProps) {
  const handleBrandChange = (brandName: string) => {
    const newBrands = filters.brand.includes(brandName)
      ? filters.brand.filter((b) => b !== brandName)
      : [...filters.brand, brandName];
    onFilterChange({ ...filters, brand: newBrands });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: value });
  };
  
  const handleYearChange = (yearValue: string) => {
    const newYears = filters.year.includes(yearValue)
      ? filters.year.filter((y) => y !== yearValue)
      : [...filters.year, yearValue];
    onFilterChange({ ...filters, year: newYears });
  };

  const handleFuelTypeChange = (fuelTypeValue: string) => {
    const newFuelTypes = filters.fuelType.includes(fuelTypeValue)
      ? filters.fuelType.filter((ft) => ft !== fuelTypeValue)
      : [...filters.fuelType, fuelTypeValue];
    onFilterChange({ ...filters, fuelType: newFuelTypes });
  };

  const fuelTypeTranslations: {[key: string]: string} = {
    'Gasoline': 'Xăng',
    'Diesel': 'Dầu',
    'Electric': 'Điện',
    'Hybrid': 'Hybrid'
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="font-semibold">Brand</Label>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {brands.map((brand) => (
              <TooltipProvider key={brand.name} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleBrandChange(brand.name)}
                      className={cn(
                        "p-2 border rounded-md flex items-center justify-center h-16 transition-all duration-200 ease-in-out transform hover:scale-105",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                        filters.brand.includes(brand.name)
                          ? "bg-primary/10 border-primary"
                          : "bg-card hover:border-primary/50"
                      )}
                    >
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={80}
                        height={32}
                        className="object-contain"
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{brand.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold">Year</Label>
          <div className="grid grid-cols-4 gap-2 pt-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                  filters.year.includes(year)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-semibold">Loại nhiên liệu</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {fuelTypes.map((fuelType) => {
              const Icon = fuelTypeIcons[fuelType];
              const isSelected = filters.fuelType.includes(fuelType);
              return (
              <button
                key={fuelType}
                onClick={() => handleFuelTypeChange(fuelType)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  isSelected
                    ? {
                        'bg-chart-1 text-accent-foreground hover:bg-chart-1/90 border-chart-1': fuelType === 'Gasoline',
                        'bg-chart-3 text-accent-foreground hover:bg-chart-3/90 border-chart-3': fuelType === 'Diesel',
                        'bg-chart-4 text-accent-foreground hover:bg-chart-4/90 border-chart-4': fuelType === 'Electric',
                        'bg-chart-2 text-accent-foreground hover:bg-chart-2/90 border-chart-2': fuelType === 'Hybrid',
                      }
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {fuelTypeTranslations[fuelType] || fuelType}
              </button>
            )})}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="max-price" className="font-semibold">Max Price</Label>
          <div className="relative pt-2">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
            <Input
              id="max-price"
              type="number"
              placeholder="Any price"
              value={filters.priceRange[1] === Number.MAX_SAFE_INTEGER ? '' : filters.priceRange[1]}
              onChange={(e) => {
                const value = e.target.value;
                const numericValue = value === '' ? Number.MAX_SAFE_INTEGER : Number(value);
                handlePriceChange([0, numericValue]);
              }}
              min={0}
              step={1000}
              className="pl-6"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
