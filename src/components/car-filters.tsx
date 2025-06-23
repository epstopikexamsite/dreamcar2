'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Fuel, Zap, Leaf, Truck, Cog } from 'lucide-react';
import type { Car } from '@/lib/types';

const ManualGearboxIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 19V5" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 12H8" />
      <path d="M12 12h4" />
    </svg>
  );

const NO_PRICE_LIMIT = Number.MAX_SAFE_INTEGER;

interface CarFiltersProps {
  brands: { name: string; logo: string }[];
  years: string[];
  fuelTypes: string[];
  transmissionTypes: (Car['transmission'])[];
  filters: { brand: string[]; priceRange: number[]; year: string[]; fuelType: string[]; transmission: string[] };
  onFilterChange: (filters: any) => void;
}

const fuelTypeIcons: { [key: string]: React.ElementType } = {
  'Gasoline': Fuel,
  'Diesel': Truck,
  'Electric': Zap,
  'Hybrid': Leaf,
};

const transmissionIcons: { [key: string]: React.ElementType } = {
  'Automatic': Cog,
  'Manual': ManualGearboxIcon,
};


export default function CarFilters({ brands, years, fuelTypes, transmissionTypes, filters, onFilterChange }: CarFiltersProps) {
  const handleBrandChange = (brandName: string) => {
    const newBrands = filters.brand.includes(brandName)
      ? filters.brand.filter((b) => b !== brandName)
      : [...filters.brand, brandName];
    onFilterChange({ ...filters, brand: newBrands });
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

  const handleTransmissionChange = (transmissionValue: string) => {
    const newTransmissions = filters.transmission.includes(transmissionValue)
      ? filters.transmission.filter((t) => t !== transmissionValue)
      : [...filters.transmission, transmissionValue];
    onFilterChange({ ...filters, transmission: newTransmissions });
  };

  const fuelTypeTranslations: {[key: string]: string} = {
    'Gasoline': 'Xăng',
    'Diesel': 'Dầu',
    'Electric': 'Điện',
    'Hybrid': 'Hybrid'
  }

  const transmissionTranslations: {[key: string]: string} = {
    'Automatic': 'Số tự động',
    'Manual': 'Số tay'
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
          <Label className="font-semibold">Hộp số</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {transmissionTypes.map((transmissionType) => {
              const Icon = transmissionIcons[transmissionType];
              const isSelected = filters.transmission.includes(transmissionType);
              return (
              <button
                key={transmissionType}
                onClick={() => handleTransmissionChange(transmissionType)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {transmissionTranslations[transmissionType] || transmissionType}
              </button>
            )})}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold">Price Range</Label>
          <div className="flex items-center gap-2 pt-2">
            <div className="relative flex-1">
              <Label htmlFor="min-price" className="sr-only">Minimum Price</Label>
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
              <Input
                id="min-price"
                type="number"
                placeholder="Min"
                value={filters.priceRange[0] === 0 ? '' : filters.priceRange[0]}
                onChange={(e) => {
                  const value = e.target.value;
                  const numericValue = value === '' ? 0 : Number(value);
                  onFilterChange({ ...filters, priceRange: [numericValue, filters.priceRange[1]] });
                }}
                min={0}
                step={1000}
                className="pl-6"
              />
            </div>
            <span className="text-muted-foreground">-</span>
            <div className="relative flex-1">
              <Label htmlFor="max-price" className="sr-only">Maximum Price</Label>
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
              <Input
                id="max-price"
                type="number"
                placeholder="Max"
                value={filters.priceRange[1] === NO_PRICE_LIMIT ? '' : filters.priceRange[1]}
                onChange={(e) => {
                  const value = e.target.value;
                  const numericValue = value === '' ? NO_PRICE_LIMIT : Number(value);
                  onFilterChange({ ...filters, priceRange: [filters.priceRange[0], numericValue] });
                }}
                min={0}
                step={1000}
                className="pl-6"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
