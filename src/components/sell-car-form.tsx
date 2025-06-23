'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Car } from 'lucide-react';

const sellCarFormSchema = z.object({
  name: z.string().min(2, { message: "Họ và tên phải có ít nhất 2 ký tự." }),
  phone: z.string()
    .min(9, { message: "Số điện thoại phải có ít nhất 9 chữ số." })
    .regex(/^[0-9\s+()-]*$/, { message: "Số điện thoại không hợp lệ." }),
  carBrand: z.string().min(2, { message: "Vui lòng nhập hãng xe." }),
  carModel: z.string().min(1, { message: "Vui lòng nhập dòng xe." }),
  carYear: z.coerce.number()
    .min(1980, { message: "Năm sản xuất phải sau 1980." })
    .max(new Date().getFullYear() + 1, { message: "Năm sản xuất không hợp lệ." }),
  mileage: z.coerce.number().min(0, { message: "Số km không được là số âm." }),
  askingPrice: z.coerce.number().min(0, { message: "Giá mong muốn không được là số âm." }).optional(),
  description: z.string().max(500, {message: "Mô tả không quá 500 ký tự."}).optional(),
});

export default function SellCarForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof sellCarFormSchema>>({
    resolver: zodResolver(sellCarFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      carBrand: '',
      carModel: '',
      carYear: undefined,
      mileage: undefined,
      askingPrice: undefined,
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof sellCarFormSchema>) {
    console.log('Yêu cầu báo giá bán xe:', values);
    // In a real app, you would send this to your backend
    setIsSubmitted(true);
  }
  
  if (isSubmitted) {
      return (
          <div className="text-center p-8 bg-card rounded-lg max-w-lg mx-auto border-2 border-green-500/50 shadow-lg">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="mt-4 text-2xl font-bold font-headline text-foreground">Yêu Cầu Đã Được Gửi!</h3>
            <p className="mt-2 text-muted-foreground">
              Cảm ơn bạn đã gửi thông tin. Chuyên viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để thẩm định và báo giá.
            </p>
            <Button onClick={() => { form.reset(); setIsSubmitted(false); }} className="mt-6">Gửi một yêu cầu khác</Button>
          </div>
      )
  }

  return (
    <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-lg">
        <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center gap-2">
                <Car className="h-6 w-6 text-primary" />
                Thông Tin Xe Cần Bán
            </CardTitle>
            <CardDescription>
                Vui lòng cung cấp thông tin chi tiết về chiếc xe của bạn. Chúng tôi sẽ liên hệ lại sớm nhất.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Họ và tên</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nguyễn Văn A" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số điện thoại</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="09xxxxxxxx" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="carBrand"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Hãng xe</FormLabel>
                                    <FormControl>
                                        <Input placeholder="VD: Toyota" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="carModel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dòng xe</FormLabel>
                                    <FormControl>
                                        <Input placeholder="VD: Camry" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="carYear"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Năm sản xuất</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="VD: 2021" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mileage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số km đã đi</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="VD: 30000" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                     <FormField
                        control={form.control}
                        name="askingPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giá bán mong muốn (VNĐ) <span className="text-muted-foreground">(tùy chọn)</span></FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="VD: 750000000" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mô tả thêm <span className="text-muted-foreground">(tùy chọn)</span></FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Mô tả về tình trạng xe, các tùy chọn, lịch sử bảo dưỡng..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Định Giá'}
                    </Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
