'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Facebook, Youtube } from 'lucide-react';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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

const legalLinks = [
    { href: "#", label: "Terms & Privacy" },
    { href: "#", label: "Careers" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    {/* Left Side: Logo & Slogan */}
                    <div className="space-y-2 text-center sm:text-left">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.svg"
                                alt="TIME CARS AUTO"
                                width={160}
                                height={36}
                            />
                        </Link>
                        <p className="text-sm text-primary-foreground/80">
                           Nơi Uy Tín Tạo Nên Thương Hiệu.
                        </p>
                    </div>
                    
                    {/* Right Side: Contact & Socials */}
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                         <div className="flex items-center gap-2 text-sm font-semibold">
                            <Phone className="w-4 h-4 shrink-0" />
                            <span>098.150.2222 (Hotline)</span>
                        </div>
                        <div className="flex items-center gap-4">
                            {socialLinks.map(social => (
                                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label={social.label}>
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="border-t border-primary-foreground/20 pt-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
                    <p>
                        &copy; {new Date().getFullYear()} TIME CARS AUTO
                    </p>
                     <div className="flex items-center gap-x-4">
                        {legalLinks.map(link => (
                            <Link key={link.label} href={link.href} className="hover:text-primary-foreground transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}