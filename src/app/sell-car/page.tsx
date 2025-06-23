'use client';

import Header from '@/components/layout/header';
import SellCarForm from '@/components/sell-car-form';
import { Handshake } from 'lucide-react';

export default function SellCarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <Handshake className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                    Bán Xe Của Bạn Cho Chúng Tôi
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    TIME CARS AUTO chuyên thu mua ô tô đã qua sử dụng giá cao, thủ tục nhanh gọn. Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn ngay.
                </p>
            </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SellCarForm />
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
