
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ.' }),
  password: z.string().min(1, { message: 'Vui lòng nhập mật khẩu.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log('Login attempt:', data);
        // Trong một ứng dụng thực tế, chúng ta sẽ xử lý xác thực tại đây
        alert(`Đang đăng nhập với:\nEmail: ${data.email}\n(Chức năng đang được phát triển)`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-muted/40 p-4">
             <div className="mb-8 text-center">
                 <Link href="/" className="inline-block">
                    <Image
                        src="/time-car-red.svg"
                        alt="TimeCarsAuto"
                        width={240}
                        height={55}
                    />
                 </Link>
            </div>
            <Card className="w-full max-w-sm shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">Trang Quản Trị</CardTitle>
                    <CardDescription>Đăng nhập để tiếp tục</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="admin@timecarsauto.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mật khẩu</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="••••••••"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full !mt-6" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting ? 'Đang xử lý...' : 'Đăng Nhập'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
