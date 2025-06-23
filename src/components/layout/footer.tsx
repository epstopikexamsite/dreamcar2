'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Facebook, Youtube } from 'lucide-react';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 7.4c-1.3-1.3-3-2-4.8-2h-2.4c-.8 0-1.5.3-2.1.9s-.9 1.3-.9 2.1v6.2c0 .8.3 1.5.9 2.1s1.3.9 2.1.9h2.4c1.8 0 3.5-.7 4.8-2 .5-.5.9-1.1 1.2-1.8"/>
        <path d="M9.1 12.3V5.4c0-1.7-1.4-3.1-3.1-3.1h-.2c-1.7 0-3.1 1.4-3.1 3.1v1.9"/>
        <path d="m9.1 12.3 8.3-4.2"/>
    </svg>
);

const socialLinks = [
    { href: 'https://www.facebook.com/timecarsauto', icon: Facebook, label: 'Facebook' },
    { href: 'https://www.youtube.com/@timecarsauto', icon: Youtube, label: 'YouTube' },
    { href: 'https://www.tiktok.com/@timecarsauto', icon: TiktokIcon, label: 'TikTok' },
];

const quickLinks = [
    { href: "/", label: "Cửa hàng" },
    { href: "/sell-car", label: "Thu Mua Xe" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/gallery", label: "Hoạt động" },
    { href: "/blog", label: "Kiến thức" },
    { href: "/contact", label: "Liên hệ" },
];

const legalLinks = [
    { href: "#", label: "Terms & Privacy" },
    { href: "#", label: "Careers" },
];

export default function Footer() {
    return (
        <footer className="bg-primary/5 border-t border-primary/10 mt-auto">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    <div className="space-y-4">
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt="TIME CARS AUTO"
                                width={200}
                                height={45}
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            TIME CARS AUTO - Nơi Uy Tín Tạo Nên Thương Hiệu. Chuyên cung cấp các dòng xe sang đã qua sử dụng với chất lượng và dịch vụ hàng đầu.
                        </p>
                    </div>

                    
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-bold text-foreground">Truy Cập Nhanh</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-bold text-foreground">Thông Tin Liên Hệ</h3>
                        <address className="space-y-3 text-sm not-italic">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <p className="text-muted-foreground">
                                    <span className="font-semibold text-foreground">Địa chỉ:</span> 79 Nguyễn Chánh, Trung Hòa, Cầu Giấy, Hà Nội
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <p className="text-muted-foreground">
                                    <span className="font-semibold text-foreground">Hotline:</span> 098.150.2222 (Mr. Tuấn)
                                </p>
                            </div>
                        </address>
                        <h3 className="font-headline text-lg font-bold text-foreground pt-4">Mạng Xã Hội</h3>
                         <div className="flex items-center gap-4">
                            {socialLinks.map(social => (
                                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={social.label}>
                                    <social.icon className="w-6 h-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-bold text-foreground">Chính Sách & Cơ Hội</h3>
                         <ul className="space-y-2">
                            {legalLinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} TIME CARS AUTO. Đã đăng ký bản quyền.</p>
                </div>
            </div>
        </footer>
    );
}
