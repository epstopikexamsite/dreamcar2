'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Filter, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
    isFilterVisible?: boolean;
    onToggleFilter?: () => void;
}

const navLinks = [
    { href: "/", label: "Cửa hàng" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/team", label: "Đội ngũ" },
    { href: "/gallery", label: "Hoạt động" },
    { href: "/blog", label: "Kiến thức" },
];

export default function Header({ isFilterVisible, onToggleFilter }: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-8">
            <Link href="/" aria-label="Trang chủ TIME CARS AUTO">
            <Image
                src="/logo.svg"
                alt="TIME CARS AUTO"
                width={220}
                height={50}
                priority
            />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                {navLinks.map(link => (
                    <Link 
                        key={link.href}
                        href={link.href} 
                        className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-primary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
        <div className="flex items-center gap-2">
            {isHomePage && onToggleFilter && (
                <Button onClick={onToggleFilter} variant="destructive" className="hidden md:inline-flex">
                    <Filter className="mr-2 h-4 w-4" />
                    {isFilterVisible ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'}
                </Button>
            )}
            <div className="md:hidden">
                 <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Mở menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[280px] bg-card p-0">
                        <div className="p-4 border-b">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/logo.svg"
                                    alt="TIME CARS AUTO"
                                    width={200}
                                    height={45}
                                />
                            </Link>
                        </div>
                        <nav className="flex flex-col p-4 space-y-1">
                            {isHomePage && onToggleFilter && (
                                <Button 
                                  onClick={() => { onToggleFilter(); setIsMobileMenuOpen(false); }} 
                                  variant="destructive" 
                                  className="w-full justify-start mb-2"
                                >
                                    <Filter className="mr-2 h-4 w-4" />
                                    {isFilterVisible ? 'Ẩn bộ lọc' : 'Hiển thị bộ lọc'}
                                </Button>
                            )}
                             {navLinks.map(link => (
                                <Link 
                                    key={link.href}
                                    href={link.href} 
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === link.href ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground hover:bg-muted'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
