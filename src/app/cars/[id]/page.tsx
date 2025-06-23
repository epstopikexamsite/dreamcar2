
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cars } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Zap, Gauge, Shield, Fuel, Leaf, Truck, Cog, Car as CarIcon, Palette, Armchair, GitCommitHorizontal, Route, Ruler, Droplets, Users, Phone, ArrowLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id.toString(),
  }));
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


export default function CarDetailPage() {
  const params = useParams();
  const id = params.id;
  const car = cars.find(c => c.id.toString() === id);

  const [currentImage, setCurrentImage] = useState(car?.images.front);

  if (!car || !currentImage) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Không Tìm Thấy Xe</h1>
          <p className="text-muted-foreground mb-8">
            Rất tiếc, chúng tôi không thể tìm thấy chiếc xe bạn đang tìm kiếm.
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay Lại Cửa Hàng
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
  
  const allImages = [
    { src: car.images.front, alt: 'Front view', hint: 'car front' },
    { src: car.images.rear, alt: 'Rear view', hint: 'car rear' },
    { src: car.images.left, alt: 'Left side view', hint: 'car side left' },
    { src: car.images.right, alt: 'Right side view', hint: 'car side right' },
    { src: car.images.interiorFront, alt: 'Front interior', hint: 'car interior front' },
    { src: car.images.interiorRear, alt: 'Rear interior', hint: 'car interior rear' },
  ];

  const fuelTypeTranslations: {[key: string]: string} = {
    'Gasoline': 'Xăng', 'Diesel': 'Dầu', 'Electric': 'Điện', 'Hybrid': 'Hybrid'
  };
  const transmissionTranslations: {[key: string]: string} = {
    'Automatic': 'Số tự động', 'Manual': 'Số tay'
  };
  const drivetrainTranslations: {[key:string]: string} = {
    'FWD': 'Cầu trước', 'RWD': 'Cầu sau', 'AWD': 'AWD', '4WD': '4x4'
  };
  const fuelTypeIcons: { [key: string]: React.ElementType } = {
    Gasoline: Fuel, Diesel: Truck, Electric: Zap, Hybrid: Leaf,
  };
  const transmissionIcons: { [key: string]: React.ElementType } = {
    'Automatic': Cog, 'Manual': ManualGearboxIcon,
  };
  const FuelIcon = fuelTypeIcons[car.fuelType] || Fuel;
  const TransmissionIcon = transmissionIcons[car.transmission];


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Trang chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/" className="hover:text-primary">Cửa hàng</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{car.brand} {car.model}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4 bg-muted shadow-lg">
                <Image
                  src={currentImage}
                  alt={car.model}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-300"
                  data-ai-hint="car detail view"
                />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {allImages.map((img) => (
                <button
                  key={img.src}
                  onClick={() => setCurrentImage(img.src)}
                  className={cn(
                    'relative aspect-video rounded-md overflow-hidden ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring',
                    currentImage === img.src && 'ring-2 ring-primary'
                  )}
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" data-ai-hint={img.hint} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{car.brand} {car.model}</h1>
            <p className="text-lg text-muted-foreground mb-4">{car.year}</p>
            <p className="font-bold text-3xl text-primary mb-6">{car.price.toLocaleString('vi-VN')} VNĐ</p>
            
            <div className="grid grid-cols-3 gap-x-2 gap-y-4 text-center border rounded-lg p-4 mb-6 bg-card">
                <div className="flex flex-col items-center gap-1">
                    {TransmissionIcon && <TransmissionIcon className="w-6 h-6 mb-1 text-accent" />}
                    <span className="text-xs text-muted-foreground">Hộp số</span>
                    <span className="font-semibold text-sm">{transmissionTranslations[car.transmission] || car.transmission}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <GitCommitHorizontal className="w-6 h-6 mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Dẫn động</span>
                    <span className="font-semibold text-sm">{drivetrainTranslations[car.drivetrain as keyof typeof drivetrainTranslations] || car.drivetrain}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Route className="w-6 h-6 mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Đã đi</span>
                    <span className="font-semibold text-sm">{car.mileage.toLocaleString('vi-VN')} km</span>
                </div>
                 <div className="flex flex-col items-center gap-1">
                    <FuelIcon className="w-6 h-6 mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Nhiên liệu</span>
                    <span className="font-semibold text-sm">{fuelTypeTranslations[car.fuelType] || car.fuelType}</span>
                </div>
                 <div className="flex flex-col items-center gap-1">
                    <CarIcon className="w-6 h-6 mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Kiểu xe</span>
                    <span className="font-semibold text-sm">{car.type}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Users className="w-6 h-6 mb-1 text-accent" />
                    <span className="text-xs text-muted-foreground">Số chỗ</span>
                    <span className="font-semibold text-sm">{car.seatingCapacity}</span>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full">
                    <Button size="lg" className="w-full text-lg">
                        <Phone className="mr-2 h-5 w-5" />
                        Liên Hệ Tư Vấn
                    </Button>
                </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
            <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                    <TabsTrigger value="specs">Thông số kỹ thuật</TabsTrigger>
                    <TabsTrigger value="features">Tính năng nổi bật</TabsTrigger>
                    <TabsTrigger value="reviews">Đánh giá ({car.reviews.length})</TabsTrigger>
                </TabsList>
                <TabsContent value="specs" className="mt-6">
                    <Card>
                        <CardContent className="p-6">
                            <ul className="space-y-4 text-base">
                              <li className="flex items-center justify-between border-b pb-3"><span className="flex items-center gap-3 text-muted-foreground"><Zap className="w-5 h-5 text-accent" /> Động cơ</span> <strong className="text-right font-medium">{car.specs.engine}</strong></li>
                              <li className="flex items-center justify-between border-b pb-3"><span className="flex items-center gap-3 text-muted-foreground"><Gauge className="w-5 h-5 text-accent" /> Mã lực</span> <strong className="font-medium">{car.specs.horsepower} hp</strong></li>
                              <li className="flex items-center justify-between border-b pb-3"><span className="flex items-center gap-3 text-muted-foreground"><Droplets className="w-5 h-5 text-accent" /> Tiêu thụ nhiên liệu</span> <strong className="font-medium">{car.specs.fuelConsumption}</strong></li>
                              <li className="flex items-center justify-between border-b pb-3"><span className="flex items-center gap-3 text-muted-foreground"><Palette className="w-5 h-5 text-accent" /> Màu ngoại thất</span> <strong className="font-medium">{car.exteriorColor}</strong></li>
                              <li className="flex items-center justify-between border-b pb-3"><span className="flex items-center gap-3 text-muted-foreground"><Armchair className="w-5 h-5 text-accent" /> Màu nội thất</span> <strong className="font-medium">{car.interiorColor}</strong></li>
                              <li className="flex items-center justify-between border-b pb-3"><span className="flex items-center gap-3 text-muted-foreground"><Ruler className="w-5 h-5 text-accent" /> Kích thước (D x R x C)</span> <strong className="font-medium">{car.specs.dimensions.length} x {car.specs.dimensions.width} x {car.specs.dimensions.height} (mm)</strong></li>
                              <li className="flex items-center justify-between"><span className="flex items-center gap-3 text-muted-foreground"><Shield className="w-5 h-5 text-accent" /> Đánh giá an toàn</span> <strong><StarRating rating={car.specs.safetyRating} /></strong></li>
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-wrap gap-3">
                              {car.features.map(feature => (
                                <Badge key={feature} variant="secondary" className="text-base py-1 px-3">{feature}</Badge>
                              ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                    <Card>
                        <CardContent className="p-6 space-y-8">
                            {car.reviews.length > 0 ? (
                                car.reviews.map((review, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-4">
                                        <Avatar className="h-12 w-12 border shrink-0">
                                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="font-semibold text-lg">{review.name}</p>
                                                <StarRating rating={review.rating} />
                                            </div>
                                            <div className="p-4 bg-muted/50 rounded-lg">
                                                <p className="text-muted-foreground italic">"{review.comment}"</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted-foreground text-center py-8">Chưa có đánh giá nào cho xe này.</p>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
