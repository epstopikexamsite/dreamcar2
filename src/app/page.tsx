'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/header';
import CarFilters from '@/components/car-filters';
import CarCard from '@/components/car-card';
import { cars as allCars } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Tag, Trophy, ShieldCheck } from 'lucide-react';

const NO_PRICE_LIMIT = Number.MAX_SAFE_INTEGER;

export default function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header 
        isFilterVisible={isFilterVisible}
        onToggleFilter={() => setIsFilterVisible(!isFilterVisible)}
      />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {isFilterVisible && (
                <aside className="lg:col-span-1">
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
                </aside>
            )}
            <section className={isFilterVisible ? "lg:col-span-3" : "lg:col-span-4"}>
                <h1 className="text-3xl font-headline font-bold text-foreground mb-6">Xe Nổi Bật</h1>
                
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
                Tại sao bạn nên chọn mua xe tại TIME CARS AUTO?
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
                            <p>TIME CARS AUTO là một trong những thương hiệu bán xe sang lướt hàng đầu tại Việt Nam.</p>
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
      </main>
      <footer className="w-full py-6 bg-primary/10 mt-auto">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TIME CARS AUTO. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </div>
  );
}
