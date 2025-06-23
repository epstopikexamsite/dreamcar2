import type {Metadata} from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '700'],
});

const oswald = Oswald({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['700'],
});

// TODO: Replace with your actual production domain
const siteUrl = 'https://timecar.example.com'; 
const ogImageUrl = 'https://placehold.co/1200x630.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TimeCar - Uy Tín Tạo Nên Thương Hiệu',
    template: `%s | TimeCar`,
  },
  description: 'TimeCar chuyên mua bán, trao đổi xe ô tô lướt và đã qua sử dụng. Cam kết chất lượng với quy trình 176 hạng mục, bảo hành 1 năm và giá tốt nhất.',
  keywords: [
    "mua bán ô tô",
    "xe lướt",
    "xe đã qua sử dụng",
    "showroom ô tô",
    "TimeCar",
    "ô tô cũ hà nội",
    "xe sang lướt",
    "định giá xe",
  ],
  authors: [{ name: "TimeCar", url: siteUrl }],
  creator: "TimeCar",
  
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    title: 'TimeCar - Uy Tín Tạo Nên Thương Hiệu',
    description: 'Khám phá những chiếc xe sang lướt chất lượng hàng đầu tại TimeCar. Dịch vụ chuyên nghiệp, giá cả cạnh tranh.',
    siteName: 'TimeCar',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Showroom của TimeCar với nhiều xe sang',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'TimeCar - Uy Tín Tạo Nên Thương Hiệu',
    description: 'Khám phá những chiếc xe sang lướt chất lượng hàng đầu tại TimeCar. Dịch vụ chuyên nghiệp, giá cả cạnh tranh.',
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
    <html lang="vi" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
