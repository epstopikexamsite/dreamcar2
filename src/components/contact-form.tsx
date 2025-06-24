
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  phone: z.string()
    .min(9, { message: "Số điện thoại phải có ít nhất 9 chữ số." })
    .regex(/^[0-9\s+()-]*$/, { message: "Số điện thoại không hợp lệ." }),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Yêu cầu gọi lại cho số:', values.phone);
    // Trong ứng dụng thực tế, bạn sẽ gửi thông tin này đến backend
    setIsSubmitted(true);
  }
  
  if (isSubmitted) {
      return (
          <div className="text-center p-8 bg-card rounded-lg max-w-md mx-auto border-2 border-green-500/50 shadow-lg">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="mt-4 text-2xl font-bold font-headline text-foreground">Yêu Cầu Đã Được Gửi!</h3>
            <p className="mt-2 text-muted-foreground">
              Cảm ơn bạn đã quan tâm. Nhân viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
            <Button onClick={() => { form.reset(); setIsSubmitted(false); }} className="mt-6">Gửi yêu cầu khác</Button>
          </div>
      )
  }

  return (
    <Card className="max-w-md mx-auto border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline flex items-center justify-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                Để Lại Thông Tin, Chúng Tôi Sẽ Gọi Lại
            </CardTitle>
            <CardDescription>
                Chỉ cần nhập số điện thoại, chuyên viên của TimeCarsAuto sẽ chủ động liên hệ tư vấn miễn phí cho bạn.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Số điện thoại</FormLabel>
                                <FormControl>
                                    <Input 
                                        type="tel" 
                                        placeholder="Nhập số điện thoại của bạn..." 
                                        {...field} 
                                        className="text-center text-lg h-12"
                                    />
                                </FormControl>
                                <FormMessage className="text-center" />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full text-lg" size="lg" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Đang gửi...' : 'Yêu Cầu Gọi Lại Ngay'}
                    </Button>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
