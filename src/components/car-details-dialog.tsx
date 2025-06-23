'use client';
import Image from 'next/image';
import { Car } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Gauge, Shield, Fuel, Leaf, Truck, Cog, Car as CarIcon, Palette, Armchair, GitCommitHorizontal, Route } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

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

interface CarDetailsDialogProps {
  car: Car;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.round(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

export default function CarDetailsDialog({ car }: CarDetailsDialogProps) {
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

  const drivetrainTranslations: {[key: string]: string} = {
    'FWD': 'Cầu trước',
    'RWD': 'Cầu sau',
    'AWD': 'AWD',
    '4WD': '4x4'
  }

  const fuelTypeIcons: { [key: string]: React.ElementType } = {
    Gasoline: Fuel,
    Diesel: Truck,
    Electric: Zap,
    Hybrid: Leaf,
  };

  const transmissionIcons: { [key: string]: React.ElementType } = {
    'Automatic': Cog,
    'Manual': ManualGearboxIcon,
  };

  const FuelIcon = fuelTypeIcons[car.fuelType] || Fuel;
  const TransmissionIcon = transmissionIcons[car.transmission];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">View Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader className="mb-4">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  style={{objectFit: 'cover'}}
                  data-ai-hint="car interior"
                />
              </div>
              <DialogTitle className="font-headline text-3xl">{car.brand} {car.model} ({car.year})</DialogTitle>
              <DialogDescription className="text-primary font-bold text-xl">${car.price.toLocaleString()}</DialogDescription>
            </DialogHeader>
            
            <div className="py-4 space-y-4">
                <div className="flex items-center justify-around text-center border rounded-lg py-4">
                    <div className="flex flex-col items-center gap-1 w-1/3">
                        {TransmissionIcon && <TransmissionIcon className="w-6 h-6 mb-1 text-accent" />}
                        <span className="text-xs text-muted-foreground">Hộp số</span>
                        <span className="font-semibold">{transmissionTranslations[car.transmission] || car.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-1/3">
                        <GitCommitHorizontal className="w-6 h-6 mb-1 text-accent" />
                        <span className="text-xs text-muted-foreground">Dẫn động</span>
                        <span className="font-semibold">{drivetrainTranslations[car.drivetrain as keyof typeof drivetrainTranslations] || car.drivetrain}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 w-1/3">
                        <Route className="w-6 h-6 mb-1 text-accent" />
                        <span className="text-xs text-muted-foreground">Số km đã chạy</span>
                        <span className="font-semibold">{car.mileage.toLocaleString()} km</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm pt-2">
                    <div className="flex items-center justify-between border-b pb-2"><span className="flex items-center gap-2"><CarIcon className="w-4 h-4 text-accent" /> <strong>Loại xe</strong></span> <span className="text-muted-foreground">{car.type}</span></div>
                    <div className="flex items-center justify-between border-b pb-2"><span className="flex items-center gap-2"><FuelIcon className={cn("w-4 h-4", {
                        "text-chart-1": car.fuelType === 'Gasoline',
                        "text-chart-3": car.fuelType === 'Diesel',
                        "text-chart-4": car.fuelType === 'Electric',
                        "text-chart-2": car.fuelType === 'Hybrid',
                        "text-accent": !Object.keys(fuelTypeIcons).includes(car.fuelType)
                      })} /> <strong>Nhiên liệu</strong></span> <span className="text-muted-foreground">{fuelTypeTranslations[car.fuelType] || car.fuelType}</span></div>
                    <div className="flex items-center justify-between border-b pb-2"><span className="flex items-center gap-2"><Palette className="w-4 h-4 text-accent" /> <strong>Màu ngoại thất</strong></span> <span className="text-muted-foreground">{car.exteriorColor}</span></div>
                    <div className="flex items-center justify-between border-b pb-2"><span className="flex items-center gap-2"><Armchair className="w-4 h-4 text-accent" /> <strong>Màu nội thất</strong></span> <span className="text-muted-foreground">{car.interiorColor}</span></div>
                </div>
            </div>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-headline text-lg font-semibold mb-3 border-b pb-2">Technical Specifications</h3>
                <ul className="space-y-3 text-sm pt-2">
                  <li className="flex items-center justify-between"><span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-accent" /> <strong>Engine</strong></span> <span className="text-muted-foreground">{car.specs.engine}</span></li>
                  <li className="flex items-center justify-between"><span className="flex items-center"><Gauge className="w-4 h-4 mr-2 text-accent" /> <strong>Horsepower</strong></span> <span className="text-muted-foreground">{car.specs.horsepower} hp</span></li>
                  <li className="flex items-center justify-between"><span className="flex items-center"><Fuel className="w-4 h-4 mr-2 text-accent" /> <strong>Fuel Efficiency</strong></span> <span className="text-muted-foreground">{car.specs.fuelEfficiency}</span></li>
                  <li className="flex items-center justify-between"><span className="flex items-center"><Shield className="w-4 h-4 mr-2 text-accent" /> <strong>Safety Rating</strong></span> <span><StarRating rating={car.specs.safetyRating} /></span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold mb-3 border-b pb-2">Features</h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {car.features.map(feature => (
                    <Badge key={feature} variant="secondary">{feature}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-3 mt-4 border-b pb-2">Reviews & Ratings</h3>
              <div className="space-y-4">
                {car.reviews.length > 0 ? car.reviews.map((review, index) => (
                  <div key={index} className="border-t pt-4 first:border-t-0">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{review.name}</p>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 italic">"{review.comment}"</p>
                  </div>
                )) : (
                  <p className="text-sm text-muted-foreground">No reviews yet for this model.</p>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
