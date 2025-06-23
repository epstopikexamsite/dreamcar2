'use client';
import Image from 'next/image';
import { Car } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, Cog, Route, GitCommitHorizontal, Fuel, Car as CarIcon, Palette, Armchair, Zap, Leaf, Truck, CarFront, Caravan } from 'lucide-react';
import CarDetailsDialog from './car-details-dialog';

interface CarCardProps {
  car: Car;
}

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


export default function CarCard({ car }: CarCardProps) {
  const transmissionTranslations: {[key: string]: string} = {
    'Automatic': 'Số tự động',
    'Manual': 'Số tay'
  }

  const drivetrainTranslations: {[key:string]: string} = {
    'FWD': 'Cầu trước',
    'RWD': 'Cầu sau',
    'AWD': 'AWD',
    '4WD': '4x4'
  }

  const fuelTypeTranslations: {[key: string]: string} = {
    'Gasoline': 'Xăng',
    'Diesel': 'Dầu',
    'Electric': 'Điện',
    'Hybrid': 'Hybrid'
  }

  const transmissionIcons: { [key: string]: React.ElementType } = {
    'Automatic': Cog,
    'Manual': ManualGearboxIcon,
  };

  const fuelTypeIcons: { [key: string]: React.ElementType } = {
    'Gasoline': Fuel,
    'Diesel': Truck,
    'Electric': Zap,
    'Hybrid': Leaf,
  };

  const carTypeIcons: { [key: string]: React.ElementType } = {
    'Compact': CarIcon,
    'Coupe': CarIcon,
    'Sedan': CarFront,
    'SUV': Caravan,
  };

  const TransmissionIcon = transmissionIcons[car.transmission];
  const FuelIcon = fuelTypeIcons[car.fuelType];
  const TypeIcon = carTypeIcons[car.type];

  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={car.images.front}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: 'cover'}}
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="car front"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="font-headline text-xl mb-1 truncate">{car.brand} {car.model}</CardTitle>
        <p className="text-sm text-muted-foreground">{car.year}</p>
        <div className="flex items-center text-primary font-bold text-lg my-2">
          <Tag className="h-4 w-4 mr-2" />
          <span>${car.price.toLocaleString()}</span>
        </div>

        <div className="border-t pt-3 mt-auto grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 truncate">
            {TypeIcon && <TypeIcon className="w-4 h-4 text-accent shrink-0" />}
            <span className="truncate">{car.type}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            {FuelIcon && <FuelIcon className="w-4 h-4 text-accent shrink-0" />}
            <span className="truncate">{fuelTypeTranslations[car.fuelType] || car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <TransmissionIcon className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{transmissionTranslations[car.transmission] || car.transmission}</span>
          </div>
           <div className="flex items-center gap-2 truncate">
            <GitCommitHorizontal className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{drivetrainTranslations[car.drivetrain as keyof typeof drivetrainTranslations] || car.drivetrain}</span>
          </div>
          <div className="flex items-center gap-2 truncate col-span-2">
            <Route className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <Palette className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{car.exteriorColor}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <Armchair className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{car.interiorColor}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <CarDetailsDialog car={car} />
      </CardFooter>
    </Card>
  );
}
