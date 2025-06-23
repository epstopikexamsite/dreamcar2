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
        <footer className="bg-primary text-primary-foreground mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.svg"
                                alt="TIME CARS AUTO"
                                width={180}
                                height={41}
                            />
                        </Link>
                        <p className="text-sm text-primary-foreground/80">
                           Nơi Uy Tín Tạo Nên Thương Hiệu.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            {socialLinks.map(social => (
                                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label={social.label}>
                                    <social.icon className="w-6 h-6" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-bold text-primary-foreground">Truy Cập Nhanh</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    
                    <div className="space-y-4">
                        <h3 className="font-headline text-lg font-bold text-primary-foreground">Thông Tin Liên Hệ</h3>
                        <address className="space-y-3 text-sm not-italic text-primary-foreground/80">
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                                <p>
                                    79 Nguyễn Chánh, Cầu Giấy, Hà Nội
                                </p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-5 h-5 shrink-0 mt-1" />
                                <p>
                                    098.150.2222 (Hotline)
                                </p>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="mt-8 border-t border-primary-foreground/20 pt-6 flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-4">
                    <p className="text-xs text-primary-foreground/60">&copy; {new Date().getFullYear()} TIME CARS AUTO. Đã đăng ký bản quyền.</p>
                     <div className="flex items-center gap-x-6 gap-y-2">
                        {legalLinks.map(link => (
                            <Link key={link.label} href={link.href} className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
