'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const locations = [
    {
        name: 'Cơ sở 1',
        address: '79 Nguyễn Chánh, Trung Hòa, Cầu Giấy, Hà Nội',
        mapSrc: 'https://maps.google.com/maps?q=79%20Nguyen%20Chanh%2C%20Trung%20Hoa%2C%20Cau%20Giay%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed',
        mapTitle: 'Bản đồ vị trí TIME CARS AUTO - Cơ sở 1'
    },
    {
        name: 'Cơ sở 2',
        address: '158 Việt Hưng, Long Biên, Hà Nội',
        mapSrc: 'https://maps.google.com/maps?q=158%20Viet%20Hung%2C%20Long%20Bien%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed',
        mapTitle: 'Bản đồ vị trí TIME CARS AUTO - Cơ sở 2'
    },
    {
        name: 'Cơ sở 3',
        address: '68 Đinh Núp, Cầu Giấy, Hà Nội',
        mapSrc: 'https://maps.google.com/maps?q=68%20Dinh%20Nup%2C%20Cau%20Giay%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed',
        mapTitle: 'Bản đồ vị trí TIME CARS AUTO - Cơ sở 3'
    }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                    Liên Hệ Với Chúng Tôi
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Chúng tôi luôn sẵn sàng lắng nghe bạn. Hãy để lại thông tin hoặc ghé thăm showroom của chúng tôi.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Thông Tin Liên Hệ</h2>
                             <Card>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">Hotline</h3>
                                        <p className="text-muted-foreground">098.150.2222 (Hotline)</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Hệ Thống Showroom</h2>
                            <div className="space-y-4">
                                {locations.map((loc) => (
                                    <Card key={loc.name}>
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <MapPin className="h-8 w-8 text-accent shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-bold text-lg">{loc.name}</h3>
                                                <p className="text-muted-foreground">{loc.address}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                     <div>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>

        <section className="pb-16 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl font-bold text-primary mb-8 text-center">Tìm Chúng Tôi Trên Bản Đồ</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {locations.map((loc) => (
                    <Card key={loc.name} className="overflow-hidden shadow-lg">
                        <CardHeader>
                            <CardTitle>{loc.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="relative w-full aspect-video">
                                <iframe
                                    src={loc.mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={loc.mapTitle}
                                ></iframe>
                            </div>
                        </CardContent>
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
