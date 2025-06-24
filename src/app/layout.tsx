
import type {Metadata} from 'next';
import { PT_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const ptSans = PT_Sans({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '700'],
});

const siteUrl = 'https://timecarsauto.com'; 
const ogImageUrl = 'https://placehold.co/1200x630.png?text=TimeCarsAuto';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TimeCarsAuto - Uy Tín Tạo Nên Thương Hiệu',
    template: `%s | TimeCarsAuto`,
  },
  description: 'TimeCarsAuto chuyên mua bán, trao đổi xe ô tô lướt và đã qua sử dụng. Cam kết chất lượng với quy trình 176 hạng mục, bảo hành 1 năm và giá tốt nhất.',
  keywords: [
    "mua bán ô tô",
    "xe lướt",
    "xe đã qua sử dụng",
    "showroom ô tô",
    "TimeCarsAuto",
    "ô tô cũ hà nội",
    "xe sang lướt",
    "định giá xe",
  ],
  authors: [{ name: "TimeCarsAuto", url: siteUrl }],
  creator: "TimeCarsAuto",
  
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    title: 'TimeCarsAuto - Uy Tín Tạo Nên Thương Hiệu',
    description: 'Khám phá những chiếc xe sang lướt chất lượng hàng đầu tại TimeCarsAuto. Dịch vụ chuyên nghiệp, giá cả cạnh tranh.',
    siteName: 'TimeCarsAuto',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Showroom của TimeCarsAuto với nhiều xe sang',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'TimeCarsAuto - Uy Tín Tạo Nên Thương Hiệu',
    description: 'Khám phá những chiếc xe sang lướt chất lượng hàng đầu tại TimeCarsAuto. Dịch vụ chuyên nghiệp, giá cả cạnh tranh.',
    images: [ogImageUrl],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${ptSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
