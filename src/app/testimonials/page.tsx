import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/testimonials-data';
import TestimonialCard from '@/components/testimonial-card';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <Star className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                    Khách Hàng Nói Gì Về Chúng Tôi
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Sự hài lòng của bạn là thước đo thành công của TimeCar. Cùng xem những chia sẻ chân thực từ những khách hàng đã tin tưởng chúng tôi.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
