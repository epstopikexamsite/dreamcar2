
import Link from 'next/link';
import { cars } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CarDetailPageContent from '@/components/car-detail-page-content';

export async function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id.toString(),
  }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const car = cars.find(c => c.id.toString() === id);

  if (!car) {
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <CarDetailPageContent car={car} />
      <Footer />
    </div>
  );
}
