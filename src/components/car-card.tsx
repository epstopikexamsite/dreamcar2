'use client';
import Image from 'next/image';
import { Car } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, Cog, Route, GitCommitHorizontal } from 'lucide-react';
import CarDetailsDialog from './car-details-dialog';

interface CarCardProps {
  car: Car;
}

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

  const transmissionIcons: { [key: string]: React.ElementType } = {
    'Automatic': Cog,
    'Manual': ManualGearboxIcon,
  };

  const TransmissionIcon = transmissionIcons[car.transmission];

  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: 'cover'}}
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="car side"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{car.brand} {car.model}</CardTitle>
        <p className="text-sm text-muted-foreground">{car.year}</p>
        <div className="flex items-center text-primary font-bold text-lg mt-2">
          <Tag className="h-4 w-4 mr-2" />
          <span>${car.price.toLocaleString()}</span>
        </div>

        <div className="border-t pt-3 mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <TransmissionIcon className="w-4 h-4 text-accent" />
            <span>{transmissionTranslations[car.transmission] || car.transmission}</span>
          </div>
           <div className="flex items-center gap-2">
            <GitCommitHorizontal className="w-4 h-4 text-accent" />
            <span>{drivetrainTranslations[car.drivetrain as keyof typeof drivetrainTranslations] || car.drivetrain}</span>
          </div>
          <div className="flex items-center gap-2">
            <Route className="w-4 h-4 text-accent" />
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
        </div>

      </CardContent>
      <CardFooter className="p-4 pt-0">
        <CarDetailsDialog car={car} />
      </CardFooter>
    </Card>
  );
}
