
'use client';

import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CarFilters from '@/components/car-filters';
import CarCard from '@/components/car-card';
import { cars as allCars } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, Tag, Trophy, ShieldCheck, Filter, X, List, LayoutGrid, Grid2x2, Grid3x3, Car, Armchair, Cog, Wrench, BatteryCharging, Shield, Droplets, FileText } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';


const NO_PRICE_LIMIT = Number.MAX_SAFE_INTEGER;
const CARS_PER_PAGE = 6;

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

const inspectionCategories = [
    {
      icon: Car,
      title: '1. Ngoại thất (30–40 mục)',
      items: [
        'Thân vỏ: trầy xước, móp méo, sơn lại',
        'Kính: nứt, thay mới, mã số kính (có đồng bộ không)',
        'Đèn: trước, sau, sương mù – còn sáng, bị vỡ, ố màu',
        'Gương chiếu hậu: chỉnh điện, gập điện, nứt vỡ',
        'Tay nắm cửa, khóa cửa',
        'Cản trước/sau, hốc bánh, khe cửa',
        'Dấu hiệu tai nạn: vết hàn, sơn dặm, sai khe hở',
        'Nắp capo, cửa xe, cốp – đóng mở trơn tru không',
      ],
    },
    {
      icon: Armchair,
      title: '2. Nội thất (30–40 mục)',
      items: [
        'Ghế: chất liệu, độ mòn, chỉnh điện/cơ',
        'Trần xe, sàn xe, thảm lót',
        'Điều hòa: lạnh sâu, thổi đều, lọc bụi',
        'Taplo, bảng điều khiển, màn hình',
        'Vô lăng, cần số: mòn, rung lắc, hoạt động',
        'Các nút bấm: kính, gương, đèn, còi...',
        'Hệ thống giải trí: âm thanh, kết nối bluetooth',
        'Túi khí: đèn báo, đã bung hay chưa (xem ECU)',
      ],
    },
    {
      icon: Cog,
      title: '3. Động cơ & hộp số (20–30 mục)',
      items: [
        'Máy nổ êm, không rung giật',
        'Không rò rỉ nhớt, nước',
        'Kiểm tra que nhớt, màu nhớt',
        'Dây curoa, dây điện, cổ hút – nứt, mục',
        'Kiểm tra ECU: lỗi động cơ (qua máy đọc lỗi)',
        'Hộp số chuyển số mượt không giật',
        'Tiếng ồn bất thường khi chạy',
      ],
    },
    {
      icon: Wrench,
      title: '4. Gầm xe & khung sườn (15–20 mục)',
      items: [
        'Sàn xe: dấu hiệu mục, gỉ, vá hàn',
        'Ống xả: rò rỉ, gỉ sét',
        'Hệ thống treo: phuộc, thanh ổn định',
        'Trục các đăng, láp, cao su chân máy',
        'Đánh lái – có tiếng động bất thường?',
      ],
    },
    {
      icon: BatteryCharging,
      title: '5. Điện – điện tử (20–25 mục)',
      items: [
        'Ắc quy: dung lượng, tuổi thọ',
        'Hệ thống đèn: pha, cốt, sương mù, lùi',
        'Gạt mưa, rửa kính, đèn báo táp lô',
        'Màn hình trung tâm, cảm biến',
        'Hệ thống cảnh báo, hỗ trợ lái (ADAS)',
        'Camera lùi, 360, cảm biến lùi',
      ],
    },
    {
      icon: Shield,
      title: '6. Lốp, phanh & an toàn (15–20 mục)',
      items: [
        'Lốp: mòn đều không, có nứt không',
        'Mâm: trầy xước, cong vênh',
        'Hệ thống phanh: má phanh, đĩa, phanh ABS',
        'Dầu phanh, tay phanh, đèn phanh',
        'Hệ thống cân bằng điện tử, hỗ trợ xuống dốc',
      ],
    },
    {
      icon: Droplets,
      title: '7. Kiểm tra dấu hiệu thủy kích/tai nạn (10+ mục)',
      items: [
        'Gầm xe có bùn tích tụ bất thường?',
        'Dây điện bị oxy hóa, mục?',
        'Ốc vít bị rỉ trong khoang nội thất?',
        'Có thay thế ECU, túi khí, cụm đèn không?',
        'Phần sơn mới – có lệch màu?',
      ],
    },
    {
      icon: FileText,
      title: '8. Giấy tờ & pháp lý (5–10 mục)',
      items: [
        'Giấy đăng ký xe',
        'Số khung, số máy trùng giấy tờ',
        'Kiểm tra phạt nguội',
        'Có đang thế chấp ngân hàng không?',
        'Lịch sử bảo dưỡng (nếu có)',
      ],
    },
  ];

export default function Home() {
  const [filters, setFilters] = useState({
    brand: [] as string[],
    priceRange: [0, NO_PRICE_LIMIT],
    year: [] as string[],
    fuelType: [] as string[],
    transmission: [] as string[],
    type: [] as string[],
    exteriorColor: [] as string[],
    interiorColor: [] as string[],
    drivetrain: [] as string[],
    seatingCapacity: [] as number[],
    features: [] as string[],
    engineCategory: [] as string[],
    status: 'Còn hàng',
  });
  
  const [visibleCount, setVisibleCount] = useState(CARS_PER_PAGE);
  const [columns, setColumns] = useState(2);
  const loadMoreTriggerRef = useRef(null);

  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      const brandMatch = filters.brand.length === 0 || filters.brand.includes(car.brand);
      const priceMatch = car.price <= filters.priceRange[1];
      const yearMatch = filters.year.length === 0 || filters.year.includes(car.year.toString());
      const fuelMatch = filters.fuelType.length === 0 || filters.fuelType.includes(car.fuelType);
      const transmissionMatch = filters.transmission.length === 0 || filters.transmission.includes(car.transmission);
      const typeMatch = filters.type.length === 0 || filters.type.includes(car.type);
      const exteriorColorMatch = filters.exteriorColor.length === 0 || filters.exteriorColor.includes(car.exteriorColor);
      const interiorColorMatch = filters.interiorColor.length === 0 || filters.interiorColor.includes(car.interiorColor);
      const drivetrainMatch = filters.drivetrain.length === 0 || filters.drivetrain.includes(car.drivetrain);
      const seatingMatch = filters.seatingCapacity.length === 0 || filters.seatingCapacity.includes(car.seatingCapacity);
      const featuresMatch = filters.features.length === 0 || filters.features.every(feature => car.features.includes(feature));
      const engineCategoryMatch = filters.engineCategory.length === 0 || filters.engineCategory.includes(car.engineCategory);
      const statusMatch = car.status === filters.status;
      return brandMatch && priceMatch && yearMatch && fuelMatch && transmissionMatch && typeMatch && exteriorColorMatch && interiorColorMatch && drivetrainMatch && seatingMatch && featuresMatch && statusMatch && engineCategoryMatch;
    });
  }, [filters]);

  // Reset visible count when filters change.
  useEffect(() => {
      setVisibleCount(CARS_PER_PAGE);
  }, [filters]);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
          setVisibleCount((prev) => prev + CARS_PER_PAGE);
      }
  }, []);

  useEffect(() => {
      const option = {
          root: null,
          rootMargin: '200px',
          threshold: 0
      };
      const observer = new IntersectionObserver(handleObserver, option);
      const currentTrigger = loadMoreTriggerRef.current;
      if (currentTrigger) {
          observer.observe(currentTrigger);
      }

      return () => {
          if (currentTrigger) {
              observer.unobserve(currentTrigger);
          }
      }
  }, [handleObserver]);

  const brands = useMemo(() => {
    const uniqueBrands = allCars.reduce((acc, car) => {
      if (!acc.some(b => b.name === car.brand)) {
        acc.push({ name: car.brand, logo: car.logo });
      }
      return acc;
    }, [] as { name: string; logo: string }[]);
    return uniqueBrands;
  }, []);
  const years = useMemo(() => [...Array.from(new Set(allCars.map(car => car.year.toString())))].sort((a, b) => Number(b) - Number(a)), []);
  const fuelTypes = useMemo(() => [...Array.from(new Set(allCars.map(car => car.fuelType)))].sort(), []);
  const transmissionTypes = useMemo(() => [...Array.from(new Set(allCars.map(car => car.transmission)))].sort(), []);
  const carTypes = useMemo(() => [...Array.from(new Set(allCars.map(car => car.type)))].sort(), []);
  const exteriorColors = useMemo(() => [...Array.from(new Set(allCars.map(car => car.exteriorColor)))].sort(), []);
  const interiorColors = useMemo(() => [...Array.from(new Set(allCars.map(car => car.interiorColor)))].sort(), []);
  const drivetrains = useMemo(() => [...Array.from(new Set(allCars.map(car => car.drivetrain)))].sort(), []);
  const seatingCapacities = useMemo(() => [...new Set(allCars.map(car => car.seatingCapacity))].sort((a, b) => a - b), []);
  const features = useMemo(() => [...new Set(allCars.flatMap(car => car.features))].sort(), []);
  const engineCategories = useMemo(() => [...new Set(allCars.map(car => car.engineCategory))].sort(), []);


  const visibleCars = filteredCars.slice(0, visibleCount);

  const handleRemoveFilter = (filterKey: keyof typeof filters, value: string | number) => {
    const currentValues = filters[filterKey as keyof Omit<typeof filters, 'priceRange' | 'status'>];
    if (Array.isArray(currentValues)) {
        const newValues = currentValues.filter((v: string | number) => v !== value);
        setFilters({ ...filters, [filterKey]: newValues });
    }
  };

  const handlePriceRemove = () => {
    setFilters({ ...filters, priceRange: [0, NO_PRICE_LIMIT] });
  }

  const clearFilters = () => {
    setFilters({
      brand: [],
      priceRange: [0, NO_PRICE_LIMIT],
      year: [],
      fuelType: [],
      transmission: [],
      type: [],
      exteriorColor: [],
      interiorColor: [],
      drivetrain: [],
      seatingCapacity: [],
      features: [],
      engineCategory: [],
      status: 'Còn hàng',
    });
  };

  const isPriceFiltered = filters.priceRange[1] !== NO_PRICE_LIMIT;
  const activeFiltersList = Object.entries(filters)
    .filter(([key]) => !['priceRange', 'status'].includes(key) && Array.isArray(filters[key as keyof typeof filters]) && (filters[key as keyof typeof filters] as any[]).length > 0)
    .flatMap(([key, values]) => {
        if (Array.isArray(values)) {
            return values.map(value => ({ key: key as keyof typeof filters, value }));
        }
        return [];
    });
  const activeFiltersCount = activeFiltersList.length + (isPriceFiltered ? 1 : 0);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="w-full py-6 sticky top-[73px] bg-background/95 backdrop-blur-sm z-30 border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                          <div>
                              <Sheet>
                                  <SheetTrigger asChild>
                                      <Button variant="outline">
                                          <Filter className="mr-2 h-4 w-4" />
                                          Bộ lọc ({activeFiltersCount})
                                      </Button>
                                  </SheetTrigger>
                                  <SheetContent side="left" className="p-0">
                                      <SheetHeader className="p-4 border-b">
                                          <SheetTitle className="sr-only">Menu chính</SheetTitle>
                                      </SheetHeader>
                                      <ScrollArea className="h-[calc(100%-4rem)]">
                                          <div className="p-4">
                                          <CarFilters 
                                              brands={brands} 
                                              years={years}
                                              fuelTypes={fuelTypes}
                                              transmissionTypes={transmissionTypes}
                                              carTypes={carTypes}
                                              exteriorColors={exteriorColors}
                                              interiorColors={interiorColors}
                                              drivetrains={drivetrains}
                                              seatingCapacities={seatingCapacities}
                                              features={features}
                                              engineCategories={engineCategories}
                                              filters={filters} 
                                              onFilterChange={setFilters}
                                              showTitle={false}
                                          />
                                          </div>
                                      </ScrollArea>
                                  </SheetContent>
                              </Sheet>
                          </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="text-sm text-muted-foreground">
                              Hiển thị <span className="font-bold text-foreground">{filteredCars.length}</span> trên tổng số <span className="font-bold text-foreground">{allCars.length}</span> xe
                          </div>
                          <div className="hidden sm:flex items-center gap-1 border p-1 rounded-md">
                              <TooltipProvider>
                                  <Tooltip>
                                      <TooltipTrigger asChild>
                                          <Button
                                              variant={columns === 1 ? 'secondary' : 'ghost'}
                                              size="icon"
                                              className="h-7 w-7"
                                              onClick={() => setColumns(1)}
                                              aria-label="Hiển thị 1 cột"
                                          >
                                              <List className="h-4 w-4" />
                                          </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                          <p>1 Cột</p>
                                      </TooltipContent>
                                  </Tooltip>
                              </TooltipProvider>
                              <TooltipProvider>
                                  <Tooltip>
                                      <TooltipTrigger asChild>
                                          <Button
                                              variant={columns === 2 ? 'secondary' : 'ghost'}
                                              size="icon"
                                              className="h-7 w-7"
                                              onClick={() => setColumns(2)}
                                              aria-label="Hiển thị 2 cột"
                                          >
                                              <Grid2x2 className="h-4 w-4" />
                                          </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                          <p>2 Cột</p>
                                      </TooltipContent>
                                  </Tooltip>
                              </TooltipProvider>
                              <TooltipProvider>
                                  <Tooltip>
                                      <TooltipTrigger asChild>
                                          <Button
                                              variant={columns === 3 ? 'secondary' : 'ghost'}
                                              size="icon"
                                              className="h-7 w-7"
                                              onClick={() => setColumns(3)}
                                              aria-label="Hiển thị 3 cột"
                                          >
                                              <Grid3x3 className="h-4 w-4" />
                                          </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                          <p>3 Cột</p>
                                      </TooltipContent>
                                  </Tooltip>
                              </TooltipProvider>
                              <TooltipProvider>
                                  <Tooltip>
                                      <TooltipTrigger asChild>
                                          <Button
                                              variant={columns === 4 ? 'secondary' : 'ghost'}
                                              size="icon"
                                              className="h-7 w-7"
                                              onClick={() => setColumns(4)}
                                              aria-label="Hiển thị 4 cột"
                                          >
                                              <LayoutGrid className="h-4 w-4" />
                                          </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                          <p>4 Cột</p>
                                      </TooltipContent>
                                  </Tooltip>
                              </TooltipProvider>
                          </div>
                      </div>
                  </div>
                  {activeFiltersCount > 0 && (
                      <div className="flex items-center flex-wrap gap-2">
                          <span className="text-sm font-medium">Đang lọc:</span>
                          {activeFiltersList.map(({ key, value }) => {
                              const isColor = key === 'exteriorColor' || key === 'interiorColor';
                              let label = value.toString();

                              if (key === 'drivetrain') {
                                label = drivetrainTranslations[value as keyof typeof drivetrainTranslations] || value.toString();
                              } else if (isColor) {
                                label = colorTranslations[value as keyof typeof colorTranslations] || value.toString();
                              } else if (key === 'seatingCapacity') {
                                label = `${value} chỗ`;
                              }

                              return (
                                <Badge key={`${key}-${value}`} variant="secondary" className="pl-2 pr-1 py-1 flex items-center">
                                  {isColor && (
                                    <span
                                      className={cn(
                                        'h-3 w-3 rounded-full border border-black/20 mr-1.5',
                                        colorMap[value as keyof typeof colorMap] || 'bg-gray-200'
                                      )}
                                    />
                                  )}
                                  {label}
                                  <button onClick={() => handleRemoveFilter(key as keyof typeof filters, value)} className="ml-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10">
                                    <X className="h-3 w-3" />
                                  </button>
                                </Badge>
                              );
                          })}
                          {isPriceFiltered && (
                              <Badge variant="secondary" className="pl-2 pr-1 py-1">
                                  Giá tối đa: {filters.priceRange[1].toLocaleString('vi-VN')} VNĐ
                                  <button onClick={handlePriceRemove} className="ml-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"><X className="h-3 w-3"/></button>
                              </Badge>
                          )}
                          <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto px-2 py-1 text-xs text-primary hover:bg-primary/10">Xóa tất cả</Button>
                      </div>
                  )}
              </div>
            </div>
        </div>

        <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="border-2 border-primary/50 shadow-lg">
                    <CardHeader className="p-6 text-center">
                        <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4">
                            <ShieldCheck className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="font-headline text-3xl text-primary">Cam Kết Vàng</CardTitle>
                        <p className="text-muted-foreground text-lg pt-2">Sự an tâm của bạn là ưu tiên hàng đầu của chúng tôi.</p>
                    </CardHeader>
                    <CardContent className="text-lg space-y-6 px-4 sm:px-6 pb-6 text-left">
                        <div className="space-y-4 text-center">
                            <p className="text-foreground/90">
                                Showroom chúng tôi cam kết toàn bộ xe bán ra động cơ hộp số nguyên bản, xe không tai nạn ảnh hưởng tới kết cấu khung gầm của xe, xe không thủy kích, không ngập nước, pháp lý rõ ràng.
                            </p>
                            <div className="border-t border-dashed my-4"></div>
                            <p className="font-semibold text-foreground">
                                Quý khách hàng được bảo hành xe trong <strong>01 năm</strong>. Nếu phát hiện xe không đúng cam kết nói trên, showroom chúng tôi sẽ nhận lại xe và hoàn lại tiền cho quý khách hàng.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-headline text-2xl text-center mb-4 text-primary font-bold">176 Hạng mục kiểm định chất lượng</h4>
                            <Accordion type="single" collapsible className="w-full bg-primary/5 p-4 rounded-lg">
                                {inspectionCategories.map((category, index) => (
                                    <AccordionItem value={`item-${index}`} key={index} className="border-b last:border-b-0">
                                        <AccordionTrigger className="hover:no-underline text-base font-semibold py-3">
                                            <div className="flex items-center gap-3">
                                                <category.icon className="h-5 w-5 text-accent" />
                                                <span>{category.title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="list-disc list-inside space-y-2 pt-2 pl-6 text-base text-muted-foreground">
                                                {category.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        <div className="container mx-auto px-4 py-8">
            <section>
                {filteredCars.length > 0 ? (
                <div className={cn(
                    'grid gap-6',
                    columns === 1 && 'grid-cols-1',
                    columns === 2 && 'grid-cols-1 md:grid-cols-2',
                    columns === 3 && 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
                    columns === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                  )}>
                    {visibleCars.map(car => (
                    <CarCard key={car.id} car={car} />
                    ))}
                </div>
                ) : (
                <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">Không có xe nào phù hợp với tiêu chí của bạn.</p>
                    <p className="text-sm text-muted-foreground">Hãy thử điều chỉnh bộ lọc.</p>
                </div>
                )}
                {visibleCount < filteredCars.length && (
                    <div ref={loadMoreTriggerRef} className="flex justify-center items-center h-20">
                        <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="ml-3 text-muted-foreground">Đang tải thêm...</span>
                    </div>
                )}
            </section>
        </div>

        <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
                Tại sao bạn nên chọn mua xe tại TimeCarsAuto?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <Tag className="h-12 w-12 text-primary mb-4" />
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl">Giá tốt nhất</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow">
                            <p>Chúng tôi luôn tìm kiếm các sản phẩm có giá trị tốt nhất để đưa đến với khách hàng.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <Award className="h-12 w-12 text-primary mb-4" />
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl">Chất lượng đã được khẳng định</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow">
                            <p>Với hơn 7 năm kinh nghiệm trong việc mua bán xe đã qua sử dụng.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <Trophy className="h-12 w-12 text-primary mb-4" />
                        <CardHeader className="p-0">
                            <CardTitle className="text-xl">Thương hiệu showroom TOP đầu</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow">
                            <p>TimeCarsAuto là một trong những thương hiệu bán xe sang lướt hàng đầu tại Việt Nam.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
