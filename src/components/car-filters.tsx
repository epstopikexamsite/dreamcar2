
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Fuel, Zap, Leaf, Truck, Cog, Car, CarFront, Caravan, Tag, Calendar, Palette, Armchair, GitCommitHorizontal, Package, PackageCheck, PackageX, Users, Star, Cpu } from 'lucide-react';
import type { Car as CarType } from '@/lib/types';

const ManualGearboxIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24"
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
  fuelTypes: (CarType['fuelType'])[];
  transmissionTypes: (CarType['transmission'])[];
  carTypes: (CarType['type'])[];
  exteriorColors: string[];
  interiorColors: string[];
  drivetrains: string[];
  seatingCapacities: number[];
  features: string[];
  engineCategories: string[];
  filters: { 
    brand: string[]; 
    priceRange: number[]; 
    year: string[]; 
    fuelType: string[]; 
    transmission: string[]; 
    type: string[];
    exteriorColor: string[];
    interiorColor: string[];
    drivetrain: string[];
    seatingCapacity: number[];
    features: string[];
    engineCategory: string[];
    status: string;
  };
  onFilterChange: (filters: any) => void;
  showTitle?: boolean;
}

const fuelTypeIcons: { [key: string]: React.ElementType } = {
  'Xăng': Fuel,
  'Dầu': Truck,
  'Điện': Zap,
  'Hybrid': Leaf,
};

const transmissionIcons: { [key: string]: React.ElementType } = {
  'Số tự động': Cog,
  'Số tay': ManualGearboxIcon,
};

const carTypeIcons: { [key: string]: React.ElementType } = {
  'Compact': Car,
  'Coupe': Car,
  'Sedan': CarFront,
  'SUV': Caravan,
  'Truck': Truck,
};

const colorMap: { [key: string]: string } = {
  'White': 'bg-white border',
  'Black': 'bg-black',
  'Silver': 'bg-slate-300',
  'Gray': 'bg-gray-500',
  'Red': 'bg-red-500',
  'Blue': 'bg-blue-500',
  'Green': 'bg-green-500',
  'Beige': 'bg-amber-200',
  'Tan': 'bg-amber-400',
  'Brown': 'bg-amber-800'
};

const colorTranslations: { [key: string]: string } = {
  'White': 'Trắng',
  'Black': 'Đen',
  'Silver': 'Bạc',
  'Gray': 'Xám',
  'Red': 'Đỏ',
  'Blue': 'Xanh lam',
  'Green': 'Xanh lá',
  'Beige': 'Be',
  'Tan': 'Nâu tan',
  'Brown': 'Nâu',
};


export default function CarFilters({ brands, years, fuelTypes, transmissionTypes, carTypes, exteriorColors, interiorColors, drivetrains, seatingCapacities, features, engineCategories, filters, onFilterChange, showTitle = true }: CarFiltersProps) {
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

  const handleTypeChange = (typeValue: string) => {
    const newTypes = filters.type.includes(typeValue)
      ? filters.type.filter((t) => t !== typeValue)
      : [...filters.type, typeValue];
    onFilterChange({ ...filters, type: newTypes });
  };

  const handleExteriorColorChange = (color: string) => {
    const newColors = filters.exteriorColor.includes(color)
        ? filters.exteriorColor.filter((c) => c !== color)
        : [...filters.exteriorColor, color];
    onFilterChange({ ...filters, exteriorColor: newColors });
  };

  const handleInteriorColorChange = (color: string) => {
    const newColors = filters.interiorColor.includes(color)
        ? filters.interiorColor.filter((c) => c !== color)
        : [...filters.interiorColor, color];
    onFilterChange({ ...filters, interiorColor: newColors });
  };
  
  const handleDrivetrainChange = (drivetrainValue: string) => {
    const newDrivetrains = filters.drivetrain.includes(drivetrainValue)
      ? filters.drivetrain.filter((d) => d !== drivetrainValue)
      : [...filters.drivetrain, drivetrainValue];
    onFilterChange({ ...filters, drivetrain: newDrivetrains });
  };

  const handleSeatingCapacityChange = (capacity: number) => {
    const newCapacities = filters.seatingCapacity.includes(capacity)
      ? filters.seatingCapacity.filter((c) => c !== capacity)
      : [...filters.seatingCapacity, capacity];
    onFilterChange({ ...filters, seatingCapacity: newCapacities });
  };

  const handleFeatureChange = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter((f) => f !== feature)
      : [...filters.features, feature];
    onFilterChange({ ...filters, features: newFeatures });
  };
  
  const handleEngineCategoryChange = (engineCategoryValue: string) => {
    const newEngineCategories = filters.engineCategory.includes(engineCategoryValue)
        ? filters.engineCategory.filter((ec) => ec !== engineCategoryValue)
        : [...filters.engineCategory, engineCategoryValue];
    onFilterChange({ ...filters, engineCategory: newEngineCategories });
  };

  const drivetrainTranslations: {[key: string]: string} = {
    'FWD': 'Cầu trước',
    'RWD': 'Cầu sau',
    'AWD': 'AWD',
    '4WD': '4x4'
  }

  return (
    <Card>
      {showTitle && (
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Bộ lọc</CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn("space-y-6", !showTitle && "pt-6")}>
        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Package className="w-4 h-4" /> Trạng thái</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => onFilterChange({ ...filters, status: 'Còn hàng' })}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  filters.status === 'Còn hàng'
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <PackageCheck className="w-4 h-4" />
                Còn hàng
              </button>
              <button
                onClick={() => onFilterChange({ ...filters, status: 'Đã bán' })}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  filters.status === 'Đã bán'
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <PackageX className="w-4 h-4" />
                Đã bán
              </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Tag className="w-4 h-4" /> Hãng xe</Label>
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
          <Label className="font-semibold flex items-center gap-2"><Tag className="w-4 h-4" /> Giá tối đa</Label>
          <div className="relative pt-2">
            <Label htmlFor="max-price" className="sr-only">Giá tối đa</Label>
            <Input
              id="max-price"
              type="number"
              placeholder="Nhập giá tối đa"
              value={filters.priceRange[1] === NO_PRICE_LIMIT ? '' : filters.priceRange[1]}
              onChange={(e) => {
                const value = e.target.value;
                const numericValue = value === '' ? NO_PRICE_LIMIT : Number(value);
                onFilterChange({ ...filters, priceRange: [0, numericValue] });
              }}
              min={0}
              step={10000000}
              className="pr-12"
            />
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground">
              VNĐ
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Calendar className="w-4 h-4" /> Năm sản xuất</Label>
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
          <Label className="font-semibold flex items-center gap-2"><Users className="w-4 h-4" /> Số chỗ ngồi</Label>
          <div className="grid grid-cols-4 gap-2 pt-2">
            {seatingCapacities.map((capacity) => (
              <button
                key={capacity}
                onClick={() => handleSeatingCapacityChange(capacity)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                  filters.seatingCapacity.includes(capacity)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {capacity} chỗ
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Palette className="w-4 h-4" /> Màu ngoại thất</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {exteriorColors.map((color) => {
                const isSelected = filters.exteriorColor.includes(color);
                return (
                    <button
                        key={color}
                        onClick={() => handleExteriorColorChange(color)}
                        className={cn(
                            "p-2 border rounded-md flex items-center justify-start h-10 transition-colors duration-200 text-sm font-medium gap-2",
                            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                            isSelected
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-card hover:bg-accent hover:text-accent-foreground"
                        )}
                        >
                        <span
                            className={cn(
                            'h-4 w-4 rounded-full border border-black/20 shrink-0',
                            colorMap[color] || 'bg-gray-200'
                            )}
                        />
                        <span className="truncate">{colorTranslations[color] || color}</span>
                    </button>
                )
            })}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Armchair className="w-4 h-4" /> Màu nội thất</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {interiorColors.map((color) => {
                const isSelected = filters.interiorColor.includes(color);
                return (
                    <button
                        key={color}
                        onClick={() => handleInteriorColorChange(color)}
                        className={cn(
                            "p-2 border rounded-md flex items-center justify-start h-10 transition-colors duration-200 text-sm font-medium gap-2",
                            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                            isSelected
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-card hover:bg-accent hover:text-accent-foreground"
                        )}
                        >
                        <span
                            className={cn(
                            'h-4 w-4 rounded-full border border-black/20 shrink-0',
                            colorMap[color] || 'bg-gray-200'
                            )}
                        />
                        <span className="truncate">{colorTranslations[color] || color}</span>
                    </button>
                )
            })}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Fuel className="w-4 h-4" /> Loại nhiên liệu</Label>
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
                        'bg-chart-1 text-accent-foreground hover:bg-chart-1/90 border-chart-1': fuelType === 'Xăng',
                        'bg-chart-3 text-accent-foreground hover:bg-chart-3/90 border-chart-3': fuelType === 'Dầu',
                        'bg-chart-4 text-accent-foreground hover:bg-chart-4/90 border-chart-4': fuelType === 'Điện',
                        'bg-chart-2 text-accent-foreground hover:bg-chart-2/90 border-chart-2': fuelType === 'Hybrid',
                      }
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {fuelType}
              </button>
            )})}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Cog className="w-4 h-4" /> Hộp số</Label>
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
                {transmissionType}
              </button>
            )})}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><GitCommitHorizontal className="w-4 h-4" /> Dẫn động</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {drivetrains.map((drivetrain) => {
              const isSelected = filters.drivetrain.includes(drivetrain);
              return (
              <button
                key={drivetrain}
                onClick={() => handleDrivetrainChange(drivetrain)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {drivetrainTranslations[drivetrain as keyof typeof drivetrainTranslations] || drivetrain}
              </button>
            )})}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Cpu className="w-4 h-4" /> Loại động cơ</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {engineCategories.map((engineCategory) => {
              const isSelected = filters.engineCategory.includes(engineCategory);
              return (
              <button
                key={engineCategory}
                onClick={() => handleEngineCategoryChange(engineCategory)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {engineCategory}
              </button>
            )})}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Car className="w-4 h-4" /> Loại xe</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {carTypes.map((carType) => {
              const Icon = carTypeIcons[carType];
              const isSelected = filters.type.includes(carType);
              return (
              <button
                key={carType}
                onClick={() => handleTypeChange(carType)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium gap-2",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
                  isSelected
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {carType}
              </button>
            )})}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-semibold flex items-center gap-2"><Star className="w-4 h-4" /> Tính năng</Label>
          <div className="flex flex-wrap gap-2 pt-2">
            {features.map((feature) => (
              <button
                key={feature}
                onClick={() => handleFeatureChange(feature)}
                className={cn(
                  "p-2 border rounded-md flex items-center justify-center h-10 transition-colors duration-200 text-sm font-medium",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                  filters.features.includes(feature)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
