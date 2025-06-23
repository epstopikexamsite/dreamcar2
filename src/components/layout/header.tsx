'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Handshake, Users, Camera, Rss, Mail, Menu, Briefcase } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: "/", label: "Cửa hàng", icon: LayoutGrid },
    { href: "/sell-car", label: "Thu Mua Xe", icon: Handshake },
    { href: "/about", label: "Giới thiệu", icon: Users },
    { href: "/gallery", label: "Hoạt động", icon: Camera },
    { href: "/blog", label: "Kiến thức", icon: Rss },
    { href: "/careers", label: "Tuyển dụng", icon: Briefcase },
    { href: "/contact", label: "Liên hệ", icon: Mail },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-40">
      <div className="flex items-center justify-between p-4">
        <Link href="/" aria-label="Trang chủ TimeCar">
          <Image
              src="/logo.svg"
              alt="TimeCar"
              width={180}
              height={41}
          />
        </Link>
        
        <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map(link => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            className={`flex items-center gap-2 text-base font-medium transition-colors ${isActive ? 'text-primary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
                        >
                            <Icon className="h-5 w-5" />
                            {link.label}
                        </Link>
                    )
                })}
            </nav>
            <div className="lg:hidden">
                 <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Mở menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[280px] bg-card p-0 flex flex-col">
                        <div className="p-4 border-b">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/logo-dark.svg"
                                    alt="TimeCar"
                                    width={180}
                                    height={41}
                                />
                            </Link>
                        </div>
                        <nav className="flex flex-col p-4 space-y-1">
                             {navLinks.map(link => {
                                const Icon = link.icon;
                                const isActive = pathname === link.href;
                                return (
                                    <Link 
                                        key={link.href}
                                        href={link.href} 
                                        className={`flex items-center gap-4 px-3 py-3 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-muted'}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{link.label}</span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
