'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


interface CarFiltersProps {
  brands: { name: string; logo: string }[];
  years: string[];
  maxPrice: number;
  filters: { brand: string; priceRange: number[]; year: string; };
  onFilterChange: (filters: any) => void;
}

export default function CarFilters({ brands, years, maxPrice, filters, onFilterChange }: CarFiltersProps) {
  const handleBrandChange = (value: string) => {
    onFilterChange({ ...filters, brand: value });
  };

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: value });
  };
  
  const handleYearChange = (value: string) => {
    onFilterChange({ ...filters, year: value });
  };

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
                        filters.brand === brand.name
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
          <Label htmlFor="year-select" className="font-semibold">Year</Label>
          <Select value={filters.year} onValueChange={handleYearChange}>
            <SelectTrigger id="year-select">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="font-semibold">Price Range</Label>
            <span className="text-sm font-medium text-primary">
              ${filters.priceRange[1].toLocaleString()}
            </span>
          </div>
          <Slider
            min={0}
            max={maxPrice}
            step={1000}
            value={[filters.priceRange[1]]}
            onValueChange={(value) => handlePriceChange([0, value[0]])}
            className="w-full"
          />
           <div className="text-xs text-muted-foreground flex justify-between">
              <span>$0</span>
              <span>${maxPrice.toLocaleString()}</span>
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
