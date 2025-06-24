
import Image from 'next/image';
import { Car } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tag, Cog, Route, GitCommitHorizontal, Fuel, Car as CarIcon, Users, Zap, Leaf, Truck, CarFront, Caravan, Palette, Armchair } from 'lucide-react';
import CarDetailsDialog from './car-details-dialog';
import { cn } from '@/lib/utils';

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
  'Brown': 'bg-amber-800',
};

export default function CarCard({ car }: CarCardProps) {
  const drivetrainTranslations: {[key:string]: string} = {
    'FWD': 'Cầu trước',
    'RWD': 'Cầu sau',
    'AWD': 'AWD',
    '4WD': '4x4'
  }

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

  const transmissionIcons: { [key: string]: React.ElementType } = {
    'Số tự động': Cog,
    'Số tay': ManualGearboxIcon,
  };

  const fuelTypeIcons: { [key: string]: React.ElementType } = {
    'Xăng': Fuel,
    'Dầu': Truck,
    'Điện': Zap,
    'Hybrid': Leaf,
  };

  const carTypeIcons: { [key: string]: React.ElementType } = {
    'Compact': CarIcon,
    'Coupe': CarIcon,
    'Sedan': CarFront,
    'SUV': Caravan,
    'Truck': Truck,
  };

  const TransmissionIcon = transmissionIcons[car.transmission];
  const FuelIcon = fuelTypeIcons[car.fuelType];
  const TypeIcon = carTypeIcons[car.type];

  return (
    <Card className={cn(
      "overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card",
      car.status === 'Đã bán' && 'opacity-70'
      )}>
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={car.images.exterior.frontThreeQuarter}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: 'cover'}}
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="car front quarter"
          />
          {car.status === 'Đã bán' && (
            <Badge
                variant="destructive"
                className="absolute top-2 right-2 z-10 text-sm py-1 px-3 rotate-12"
            >
                Đã bán
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="font-headline text-xl mb-1 truncate font-bold">{car.brand} {car.model}</CardTitle>
        <p className="text-sm text-muted-foreground">{car.year}</p>
        <div className="flex items-center text-primary font-bold text-lg my-2">
          <Tag className="h-4 w-4 mr-2" />
          <span>{car.price.toLocaleString('vi-VN')} VNĐ</span>
        </div>

        <div className="border-t pt-3 mt-auto grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 truncate">
            <Route className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{car.mileage.toLocaleString('vi-VN')} km</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            {FuelIcon && <FuelIcon className="w-4 h-4 text-accent shrink-0" />}
            <span className="truncate">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            {TransmissionIcon && <TransmissionIcon className="w-4 h-4 text-accent shrink-0" />}
            <span className="truncate">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <GitCommitHorizontal className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{drivetrainTranslations[car.drivetrain as keyof typeof drivetrainTranslations] || car.drivetrain}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            {TypeIcon && <TypeIcon className="w-4 h-4 text-accent shrink-0" />}
            <span className="truncate">{car.type}</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <Users className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{car.seatingCapacity} chỗ</span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <Palette className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate flex items-center gap-2">
              Ngoại thất {colorTranslations[car.exteriorColor] || car.exteriorColor}
              <span className={cn('h-3 w-3 rounded-full border border-black/20', colorMap[car.exteriorColor] || 'bg-gray-300')} />
            </span>
          </div>
          <div className="flex items-center gap-2 truncate">
            <Armchair className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate flex items-center gap-2">
              Nội thất {colorTranslations[car.interiorColor] || car.interiorColor}
              <span className={cn('h-3 w-3 rounded-full border border-black/20', colorMap[car.interiorColor] || 'bg-gray-300')} />
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <CarDetailsDialog car={car} />
      </CardFooter>
    </Card>
  );
}
