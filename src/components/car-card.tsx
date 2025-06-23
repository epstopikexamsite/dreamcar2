'use client';
import Image from 'next/image';
import { Car } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag } from 'lucide-react';
import CarDetailsDialog from './car-details-dialog';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
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
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <CarDetailsDialog car={car} />
      </CardFooter>
    </Card>
  );
}
