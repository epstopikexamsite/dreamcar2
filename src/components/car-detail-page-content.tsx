
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Zap, Gauge, Shield, Fuel, Leaf, Truck, Cog, Car as CarIcon, Palette, Armchair, GitCommitHorizontal, Route, Ruler, Droplets, Users, Phone, ChevronRight, Weight, CalendarDays, Maximize, CircleArrowRight, Wind, BarChart, HardDrive, Cpu, Battery, BatteryCharging, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Car, CarSpec } from '@/lib/types';

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

const SpecRow = ({ icon, label, value }: { icon: React.ElementType, label: string, value: React.ReactNode }) => {
    const IconComponent = icon;
    return (
        <li className="flex items-center justify-between border-b pb-3 text-base">
            <span className="flex items-center gap-3 text-muted-foreground">
                <IconComponent className="w-5 h-5 text-accent" /> {label}
            </span> 
            <strong className="text-right font-medium text-foreground/90">{value}</strong>
        </li>
    );
};


export default function CarDetailPageContent({ car }: { car: Car }) {
  const [currentImage, setCurrentImage] = useState(car.images.exterior.frontThreeQuarter);
  
  const imageGroups = [
    {
      label: 'Ngoại thất',
      images: [
        { src: car.images.exterior.frontThreeQuarter, alt: 'Góc chéo trước', hint: 'car 3/4 front' },
        { src: car.images.exterior.rearThreeQuarter, alt: 'Góc chéo sau', hint: 'car 3/4 rear' },
        { src: car.images.exterior.front, alt: 'Chính diện trước', hint: 'car front' },
        { src: car.images.exterior.rear, alt: 'Chính diện sau', hint: 'car rear' },
        { src: car.images.exterior.side, alt: 'Góc ngang', hint: 'car side' },
        { src: car.images.exterior.topDown, alt: 'Góc từ trên cao', hint: 'car top down' },
        { src: car.images.exterior.wheel, alt: 'Mâm xe', hint: 'car wheel' },
      ],
    },
    {
      label: 'Nội thất',
      images: [
        { src: car.images.interior.dashboard, alt: 'Khoang lái tổng thể', hint: 'car dashboard' },
        { src: car.images.interior.dashboardCloseUp, alt: 'Vô lăng & màn hình', hint: 'car cockpit' },
        { src: car.images.interior.centerConsole, alt: 'Bảng điều khiển trung tâm', hint: 'car console' },
        { src: car.images.interior.seats, alt: 'Ghế ngồi', hint: 'car seats' },
        { src: car.images.interior.trunk, alt: 'Khoang hành lý', hint: 'car trunk' },
      ],
    },
    {
      label: 'Chi tiết',
      images: [
        { src: car.images.details.headlight, alt: 'Đèn trước', hint: 'car headlight' },
        { src: car.images.details.taillight, alt: 'Đèn sau', hint: 'car taillight' },
        { src: car.images.details.logo, alt: 'Logo', hint: 'car logo' },
        { src: car.images.details.exhaust, alt: 'Ống xả', hint: 'car exhaust' },
        { src: car.images.details.doorHandle, alt: 'Tay nắm cửa', hint: 'car door handle' },
        { src: car.images.details.sunroof, alt: 'Cửa sổ trời', hint: 'car sunroof' },
        { src: car.images.details.key, alt: 'Chìa khóa', hint: 'car key' },
      ],
    },
  ];

  const fuelTypeTranslations: {[key: string]: string} = {
    'Xăng': 'Xăng', 'Dầu': 'Dầu', 'Điện': 'Điện', 'Hybrid': 'Hybrid'
  };
  const transmissionTranslations: {[key: string]: string} = {
    'Số tự động': 'Số tự động', 'Số tay': 'Số tay'
  };
  const drivetrainTranslations: {[key:string]: string} = {
    'FWD': 'Cầu trước', 'RWD': 'Cầu sau', 'AWD': 'AWD', '4WD': '4x4'
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
  const fuelTypeIcons: { [key: string]: React.ElementType } = {
    'Xăng': Fuel, 'Dầu': Truck, 'Điện': Zap, 'Hybrid': Leaf,
  };
  const transmissionIcons: { [key: string]: React.ElementType } = {
    'Số tự động': Cog, 'Số tay': ManualGearboxIcon,
  };
  const FuelIcon = fuelTypeIcons[car.fuelType] || Fuel;
  const TransmissionIcon = transmissionIcons[car.transmission];


  return (
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
            <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden mb-4 bg-muted shadow-lg">
                <Image
                  src={currentImage}
                  alt={car.model}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-300"
                  data-ai-hint="car detail view"
                />
                 {car.status === 'Đã bán' && (
                    <Badge
                        variant="destructive"
                        className="absolute top-4 right-4 z-10 text-lg py-2 px-4 rotate-12"
                    >
                        Đã Bán
                    </Badge>
                  )}
            </div>
            <Tabs defaultValue={imageGroups[0].label} className="w-full">
              <TabsList>
                {imageGroups.map(group => (
                  <TabsTrigger key={group.label} value={group.label}>{group.label}</TabsTrigger>
                ))}
              </TabsList>
              {imageGroups.map(group => (
                <TabsContent key={group.label} value={group.label}>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {group.images.map((img) => (
                      <button
                        key={img.src}
                        onClick={() => setCurrentImage(img.src)}
                        className={cn(
                          'relative aspect-[3/2] rounded-md overflow-hidden ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring',
                          currentImage === img.src && 'ring-2 ring-primary'
                        )}
                      >
                        <Image src={img.src} alt={img.alt} fill className="object-cover" data-ai-hint={img.hint} />
                      </button>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">{car.brand} {car.model}</h1>
            <p className="text-lg text-muted-foreground mb-4">{car.year}</p>
            
            <div className="flex items-center gap-4 mb-6">
                <p className="font-bold text-3xl text-primary">{car.price.toLocaleString('vi-VN')} VNĐ</p>
                {car.status === 'Đã bán' && <Badge variant="destructive" className="text-lg">Đã Bán</Badge>}
            </div>
            
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
                <Link href="/contact" className={cn("w-full", car.status === 'Đã bán' && "pointer-events-none")}>
                    <Button size="lg" className="w-full text-lg" disabled={car.status === 'Đã bán'}>
                        <Phone className="mr-2 h-5 w-5" />
                        {car.status === 'Đã bán' ? 'Xe đã có chủ' : 'Liên Hệ Tư Vấn'}
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
                    <TabsTrigger value="description">Giới thiệu</TabsTrigger>
                </TabsList>
                <TabsContent value="specs" className="mt-6">
                    <Card>
                        <CardContent className="p-6 grid grid-cols-1 gap-y-8">
                            <div className="space-y-4">
                                <CardTitle className="font-headline border-b pb-2">Động cơ & Hiệu suất</CardTitle>
                                <ul className="space-y-4">
                                    <SpecRow icon={Cpu} label="Loại động cơ" value={car.specs.engineType} />
                                    <SpecRow icon={Maximize} label="Dung tích" value={car.specs.engineDisplacement} />
                                    <SpecRow icon={Zap} label="Công suất" value={car.specs.enginePower} />
                                    <SpecRow icon={CircleArrowRight} label="Mô-men xoắn" value={car.specs.engineTorque} />
                                    <SpecRow icon={Gauge} label="Tăng tốc 0-100km/h" value={car.specs.acceleration} />
                                    {car.specs.topSpeed && <SpecRow icon={Wind} label="Tốc độ tối đa" value={`${car.specs.topSpeed} km/h`} />}
                                    <SpecRow icon={Fuel} label="Mức tiêu thụ" value={car.specs.fuelConsumption} />
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <CardTitle className="font-headline border-b pb-2">Kích thước & Trọng lượng</CardTitle>
                                <ul className="space-y-4">
                                    <SpecRow icon={Ruler} label="Dài x Rộng x Cao" value={`${car.specs.dimensions} (mm)`} />
                                    <SpecRow icon={GitCommitHorizontal} label="Chiều dài cơ sở" value={`${car.specs.wheelbase} mm`} />
                                    {car.specs.groundClearance && <SpecRow icon={ArrowUp} label="Khoảng sáng gầm" value={`${car.specs.groundClearance} mm`} />}
                                    <SpecRow icon={Weight} label="Trọng lượng" value={car.specs.weight} />
                                    <SpecRow icon={BarChart} label="Dung tích cốp" value={car.specs.trunkCapacity ? `${car.specs.trunkCapacity} L` : 'N/A'} />
                                </ul>
                            </div>
                             <div className="space-y-4">
                                <CardTitle className="font-headline border-b pb-2">Hệ thống truyền động</CardTitle>
                                <ul className="space-y-4">
                                    <SpecRow icon={Cog} label="Hộp số" value={car.specs.transmissionDetail} />
                                    <SpecRow icon={GitCommitHorizontal} label="Dẫn động" value={drivetrainTranslations[car.drivetrain]} />
                                    <SpecRow icon={HardDrive} label="Hệ thống treo" value={car.specs.suspension} />
                                    <SpecRow icon={Shield} label="Hệ thống phanh" value={car.specs.brakes} />
                                </ul>
                            </div>
                             <div className="space-y-4">
                                <CardTitle className="font-headline border-b pb-2">Trang bị & An toàn</CardTitle>
                                <ul className="space-y-4">
                                    <SpecRow icon={Palette} label="Màu ngoại thất" value={colorTranslations[car.exteriorColor] || car.exteriorColor} />
                                    <SpecRow icon={Armchair} label="Màu nội thất" value={colorTranslations[car.interiorColor] || car.interiorColor} />
                                    <SpecRow icon={Users} label="Số chỗ ngồi" value={`${car.seatingCapacity} chỗ`} />
                                    <SpecRow icon={Star} label="An toàn" value={car.specs.safetyFeatures} />
                                </ul>
                            </div>
                            {car.fuelType === 'Điện' && (
                                <div className="space-y-4">
                                    <CardTitle className="font-headline border-b pb-2">Thông số xe điện</CardTitle>
                                    <ul className="space-y-4">
                                        {car.specs.batteryCapacity && <SpecRow icon={Battery} label="Dung lượng pin" value={car.specs.batteryCapacity} />}
                                        {car.specs.electricRange && <SpecRow icon={Route} label="Quãng đường/lần sạc" value={`${car.specs.electricRange} km`} />}
                                        {car.specs.chargingTime && <SpecRow icon={BatteryCharging} label="Thời gian sạc" value={car.specs.chargingTime} />}
                                    </ul>
                                </div>
                            )}
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
                <TabsContent value="description" className="mt-6">
                    <Card>
                        <CardContent className="p-6">
                            <div className="text-foreground/90 space-y-4 text-lg">
                                <p>
                                    <strong>{car.brand} {car.model} {car.year}</strong> là một mẫu xe <strong>{car.type}</strong> nổi bật, đại diện cho sự kết hợp hoàn hảo giữa 
                                    {car.type === 'SUV' ? ' sự đa dụng, ' : car.type === 'Coupe' || car.type === 'Sedan' ? ' sự sang trọng, ' : ' sự nhỏ gọn, '} 
                                    hiệu suất và công nghệ tiên tiến.
                                </p>
                                <p>
                                    Với động cơ <strong>{car.specs.engineType}</strong> mạnh mẽ và hộp số <strong>{car.specs.transmissionDetail}</strong>, chiếc xe mang lại khả năng vận hành {car.drivetrain === 'RWD' || car.drivetrain === 'AWD' || car.drivetrain === '4WD' ? 'phấn khích và ổn định' : 'êm ái và tiết kiệm'}. Hệ thống dẫn động <strong>{drivetrainTranslations[car.drivetrain]}</strong> đảm bảo độ bám đường và an toàn trong nhiều điều kiện khác nhau.
                                </p>
                                <p>
                                    Không gian nội thất được chăm chút tỉ mỉ với các vật liệu cao cấp, cùng các tính năng tiện nghi như {car.features.slice(0, 3).join(', ')}. Đây là lựa chọn lý tưởng cho những ai tìm kiếm một chiếc xe vừa thể hiện phong cách, vừa đáp ứng tốt các nhu cầu sử dụng hàng ngày và những chuyến đi xa.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
      </main>
  );
}
