'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { getAuth, signOut } from 'firebase/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function AdminDashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  if (loading || !user) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="flex flex-row items-center gap-4">
                    <LayoutDashboard className="h-8 w-8 text-primary"/>
                    <div>
                        <CardTitle className="text-3xl font-headline">Trang Quản Trị</CardTitle>
                        <CardDescription>Chào mừng trở lại, {user.email}!</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p>Đây là trang quản trị của bạn. Từ đây, bạn có thể quản lý danh sách xe, xem thông tin liên hệ và các chức năng khác.</p>
                    <p>(Các tính năng quản lý xe sẽ được phát triển ở bước tiếp theo.)</p>
                    <Button onClick={handleLogout} variant="destructive">
                        Đăng xuất
                    </Button>
                </CardContent>
            </Card>
        </main>
        <Footer />
    </div>
  );
}
