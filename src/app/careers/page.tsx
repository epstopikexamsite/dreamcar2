'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { jobOpenings } from '@/lib/careers-data';
import { Briefcase, MapPin, Clock, Rocket, Users, Award, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const benefits = [
    { icon: Rocket, title: 'Môi trường năng động', description: 'Làm việc trong môi trường chuyên nghiệp, trẻ trung và đầy nhiệt huyết.' },
    { icon: Award, title: 'Chế độ đãi ngộ hấp dẫn', description: 'Lương, thưởng cạnh tranh theo năng lực và hiệu quả công việc.' },
    { icon: Users, title: 'Cơ hội phát triển', description: 'Được đào tạo và có lộ trình thăng tiến rõ ràng.' },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <Briefcase className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                    Cơ Hội Nghề Nghiệp Tại TimeCar
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Gia nhập đội ngũ TimeCar để cùng chúng tôi kiến tạo những giá trị bền vững và chinh phục những đỉnh cao mới.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="font-headline text-4xl font-bold text-foreground text-center mb-12">Tại Sao Chọn TimeCar?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="p-6 flex flex-col items-center border-0 shadow-none bg-transparent">
                            <benefit.icon className="h-12 w-12 text-primary mb-4" />
                            <CardHeader className="p-0">
                                <CardTitle>{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2 text-muted-foreground">
                                <p>{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="positions" className="py-16 bg-card border-y">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="font-headline text-4xl font-bold text-foreground text-center mb-12">Vị Trí Đang Tuyển Dụng</h2>
                {jobOpenings.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {jobOpenings.map(job => (
                            <AccordionItem value={`item-${job.id}`} key={job.id} className="bg-background rounded-lg border px-4">
                                <AccordionTrigger className="hover:no-underline py-4 text-left">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 flex-wrap">
                                            <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> {job.location}</div>
                                            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {job.type}</div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 pb-6">
                                    <p className="text-base text-foreground/80 mb-4 whitespace-pre-line">{job.description}</p>
                                    <h4 className="font-semibold text-foreground mb-2">Yêu cầu công việc:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-foreground/80 pl-4 mb-6">
                                        {job.requirements.map((req, index) => (
                                            <li key={index}>{req}</li>
                                        ))}
                                    </ul>
                                    
                                    {job.contact ? (
                                        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-2">Thông tin ứng tuyển:</h4>
                                            <p className="text-foreground/90">
                                                Liên hệ trực tiếp: <strong>{job.contact.name} - {job.contact.phone}</strong>
                                            </p>
                                            <Button asChild className="mt-4">
                                                <a href={`tel:${job.contact.phone.replace(/[\s.-]/g, '')}`}>
                                                    <Phone className="mr-2 h-4 w-4" /> Gọi ngay
                                                </a>
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button asChild className="mt-6">
                                            <Link href="/contact">
                                                <Mail className="mr-2 h-4 w-4" /> Ứng tuyển ngay
                                            </Link>
                                        </Button>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <p className="text-center text-muted-foreground">Hiện tại chúng tôi chưa có vị trí tuyển dụng nào. Vui lòng quay lại sau.</p>
                )}
            </div>
        </section>
        
        <section className="py-16 text-center">
             <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="font-headline text-3xl font-bold text-foreground mb-4">Chưa tìm thấy vị trí phù hợp?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Đừng ngần ngại gửi CV của bạn cho chúng tôi. TimeCar luôn chào đón những nhân tài có cùng đam mê và định hướng.
                </p>
                <Button size="lg" asChild>
                    <Link href="/contact">
                       Gửi Hồ Sơ
                    </Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
