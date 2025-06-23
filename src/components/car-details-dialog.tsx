'use client';
import Image from 'next/image';
import { Car } from '@/lib/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Gauge, Shield, Fuel } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h3 className="font-headline text-lg font-semibold mb-3 border-b pb-2">Specifications</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between"><span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-accent" /> <strong>Engine</strong></span> <span className="text-muted-foreground">{car.specs.engine}</span></li>
                  <li className="flex items-center justify-between"><span className="flex items-center"><Gauge className="w-4 h-4 mr-2 text-accent" /> <strong>Horsepower</strong></span> <span className="text-muted-foreground">{car.specs.horsepower} hp</span></li>
                  <li className="flex items-center justify-between"><span className="flex items-center"><Fuel className="w-4 h-4 mr-2 text-accent" /> <strong>Fuel Efficiency</strong></span> <span className="text-muted-foreground">{car.specs.fuelEfficiency}</span></li>
                  <li className="flex items-center justify-between"><span className="flex items-center"><Shield className="w-4 h-4 mr-2 text-accent" /> <strong>Safety Rating</strong></span> <span><StarRating rating={car.specs.safetyRating} /></span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold mb-3 border-b pb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
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
