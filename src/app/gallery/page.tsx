
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { galleryImages } from '@/lib/gallery-data';
import { Camera, Calendar } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Khoảnh Khắc Đáng Nhớ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cùng nhìn lại những hình ảnh hoạt động của chúng tôi và những khách hàng đã tin tưởng lựa chọn TimeCar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item) => (
            <Card key={item.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-video w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={item.aiHint}
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <CardDescription className="flex items-start gap-2 text-base">
                  <Camera className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <span>{item.caption}</span>
                </CardDescription>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
