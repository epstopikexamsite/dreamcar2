'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CarFilters from '@/components/car-filters';
import CarCard from '@/components/car-card';
import { cars as allCars } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Award, Tag, Trophy, ShieldCheck, Star, MessageSquare, Filter, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';


const NO_PRICE_LIMIT = Number.MAX_SAFE_INTEGER;

const testimonials = [
  {
    quote: "Dịch vụ ở TimeCar thực sự tuyệt vời. Các bạn tư vấn rất nhiệt tình, xe thì chất lượng không chê vào đâu được. Tôi đã tìm được chiếc xe ưng ý cho gia đình mình.",
    name: "Anh Hoàng Minh",
    role: "Khách hàng mua xe Toyota Camry",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "happy man portrait",
    rating: 5,
  },
  {
    quote: "Tôi đã bán lại chiếc xe cũ của mình tại đây và được định giá rất cao, thủ tục lại nhanh gọn. Chắc chắn sẽ giới thiệu cho bạn bè và người thân.",
    name: "Chị Thu Trang",
    role: "Khách hàng bán xe Mazda CX-5",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "professional woman portrait",
    rating: 5,
  },
  {
    quote: "Chất lượng xe lướt ở đây đúng như cam kết. Xe gần như mới, mọi thứ đều được kiểm tra kỹ lưỡng. Rất an tâm khi mua xe tại TimeCar.",
    name: "Anh Quốc Bảo",
    role: "Khách hàng mua xe Mercedes-Benz E-Class",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "man business portrait",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
);


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
  });
  const [showAll, setShowAll] = useState(false);

  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      const brandMatch = filters.brand.length === 0 || filters.brand.includes(car.brand);
      const priceMatch = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      const yearMatch = filters.year.length === 0 || filters.year.includes(car.year.toString());
      const fuelMatch = filters.fuelType.length === 0 || filters.fuelType.includes(car.fuelType);
      const transmissionMatch = filters.transmission.length === 0 || filters.transmission.includes(car.transmission);
      const typeMatch = filters.type.length === 0 || filters.type.includes(car.type);
      const exteriorColorMatch = filters.exteriorColor.length === 0 || filters.exteriorColor.includes(car.exteriorColor);
      const interiorColorMatch = filters.interiorColor.length === 0 || filters.interiorColor.includes(car.interiorColor);
      const drivetrainMatch = filters.drivetrain.length === 0 || filters.drivetrain.includes(car.drivetrain);
      return brandMatch && priceMatch && yearMatch && fuelMatch && transmissionMatch && typeMatch && exteriorColorMatch && interiorColorMatch && drivetrainMatch;
    });
  }, [filters]);

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

  const visibleCars = showAll ? filteredCars : filteredCars.slice(0, 6);

  const handleRemoveFilter = (filterKey: keyof typeof filters, value: string) => {
    const currentValues = filters[filterKey];
    if (Array.isArray(currentValues)) {
        const newValues = currentValues.filter((v: string) => v !== value);
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
    });
  };

  const isPriceFiltered = filters.priceRange[0] !== 0 || filters.priceRange[1] !== NO_PRICE_LIMIT;
  const activeFiltersList = Object.entries(filters)
    .filter(([key]) => key !== 'priceRange')
    .flatMap(([key, values]) => {
        if (Array.isArray(values) && values.length > 0) {
            return values.map(value => ({ key, value }));
        }
        return [];
    });
  const activeFiltersCount = activeFiltersList.length + (isPriceFiltered ? 1 : 0);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6 sticky top-[73px] bg-background/95 backdrop-blur-sm z-30 border-b">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                         <div className="lg:hidden">
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
                </div>
                 {activeFiltersCount > 0 && (
                    <div className="flex items-center flex-wrap gap-2">
                        <span className="text-sm font-medium">Đang lọc:</span>
                        {activeFiltersList.map(({ key, value }) => (
                            <Badge key={`${key}-${value}`} variant="secondary" className="pl-2 pr-1 py-1">
                                {value}
                                <button onClick={() => handleRemoveFilter(key as any, value)} className="ml-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"><X className="h-3 w-3"/></button>
                            </Badge>
                        ))}
                         {isPriceFiltered && (
                            <Badge variant="secondary" className="pl-2 pr-1 py-1">
                                Giá: {filters.priceRange[0].toLocaleString('vi-VN')} - {filters.priceRange[1] === NO_PRICE_LIMIT ? 'Không giới hạn' : filters.priceRange[1].toLocaleString('vi-VN')} VNĐ
                                <button onClick={handlePriceRemove} className="ml-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"><X className="h-3 w-3"/></button>
                            </Badge>
                        )}
                        <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto px-2 py-1 text-xs text-primary hover:bg-primary/10">Xóa tất cả</Button>
                    </div>
                )}
            </div>
        </div>

        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-[200px]">
                  <CarFilters 
                    brands={brands} 
                    years={years}
                    fuelTypes={fuelTypes}
                    transmissionTypes={transmissionTypes}
                    carTypes={carTypes}
                    exteriorColors={exteriorColors}
                    interiorColors={interiorColors}
                    drivetrains={drivetrains}
                    filters={filters} 
                    onFilterChange={setFilters} 
                  />
                </div>
              </aside>
            
            <section className="lg:col-span-3">
                {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                {filteredCars.length > 6 && !showAll && (
                <div className="text-center mt-8">
                    <Button onClick={() => setShowAll(true)} size="lg">Hiển thị tất cả</Button>
                </div>
                )}
            </section>
            </div>
        </div>

        <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
                Tại sao bạn nên chọn mua xe tại TimeCar?
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
                            <p>TimeCar là một trong những thương hiệu bán xe sang lướt hàng đầu tại Việt Nam.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="border-2 border-primary/50 shadow-lg text-center">
                    <CardHeader className="p-6">
                        <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4">
                            <ShieldCheck className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="font-headline text-3xl text-primary">Cam Kết Vàng</CardTitle>
                        <p className="text-muted-foreground text-lg pt-2">Sự an tâm của bạn là ưu tiên hàng đầu của chúng tôi.</p>
                    </CardHeader>
                    <CardContent className="text-lg space-y-4 px-6 sm:px-8 pb-6">
                        <p className="text-foreground/90">
                           Showroom chúng tôi cam kết toàn bộ xe bán ra động cơ hộp số nguyên bản, xe không tai nạn ảnh hưởng tới kết cấu khung gầm của xe, xe không thủy kích, không ngập nước, pháp lý rõ ràng.
                        </p>
                        <div className="border-t border-dashed my-4"></div>
                        <p className="font-semibold text-foreground">
                            Quý khách hàng được bảo hành xe trong <strong>01 năm</strong>. Nếu phát hiện xe không đúng cam kết nói trên, showroom chúng tôi sẽ nhận lại xe và hoàn lại tiền cho quý khách hàng.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-center text-foreground mb-12">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col p-6 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0 pb-6 text-muted-foreground flex-grow">
                    <MessageSquare className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="p-0 mt-auto flex flex-col items-start gap-4 border-t pt-4">
                    <StarRating rating={testimonial.rating} />
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                            <AvatarFallback>{testimonial.name.split(' ').pop()?.[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
