import Image from 'next/image';
import Header from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, HeartHandshake, Phone, ShieldCheck, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">
              Về TIME CARS AUTO
            </h1>
            <div className="inline-block text-left text-lg text-muted-foreground space-y-3">
                <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <span><strong>Cơ sở 1:</strong> 79 Nguyễn Chánh, Trung Hòa, Cầu Giấy, Hà Nội</span>
                </p>
                <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <span><strong>Cơ sở 2:</strong> 158 Việt Hưng, Long Biên, Hà Nội</span>
                </p>
                <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                    <span><strong>Cơ sở 3:</strong> 68 Đinh Núp, Cầu Giấy, Hà Nội</span>
                </p>
            </div>
          </section>

          <section className="mb-12">
             <div className="relative w-full overflow-hidden rounded-lg shadow-lg border" style={{ height: '450px' }}>
                <iframe
                    src="https://maps.google.com/maps?q=79%20Nguyen%20Chanh%2C%20Trung%20Hoa%2C%20Cau%20Giay%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ vị trí TIME CARS AUTO - Cơ sở 1"
                ></iframe>
            </div>
          </section>

          <section className="mb-12">
            <Card className="overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl font-headline flex items-center gap-2"><Building className="text-accent h-6 w-6" /> Giới thiệu chung</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 text-base text-foreground/80 space-y-4">
                            <p>
                                <strong>TIME CARS AUTO</strong> được thành lập từ <strong>08/11/2021</strong>. Dưới sự dẫn dắt của ông <strong>Trần Mạnh Tuấn</strong>, chúng tôi đã không ngừng phát triển và vươn xa.
                            </p>
                            <p>
                                Tính đến nay, chúng tôi tự hào đã giao tới tay khách hàng <strong>1.028 chiếc xe</strong> sau hơn 2 năm hoạt động, một minh chứng cho sự tin tưởng của quý khách.
                            </p>
                        </CardContent>
                    </div>
                     <div className="relative h-64 md:h-full w-full min-h-[300px]">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Showroom TIME CARS AUTO"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{objectFit: 'cover'}}
                            data-ai-hint="car dealership office"
                        />
                    </div>
                </div>
            </Card>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3 text-xl"><HeartHandshake className="text-accent h-6 w-6" /> Sứ mệnh</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 flex-grow">
                <p>Với sứ mệnh <strong>"Mang xe đẹp tới mọi nhà"</strong>, chúng tôi luôn cố gắng và nỗ lực mang những chiếc xe chất lượng tới quý khách hàng kèm theo chế độ bảo hành tuyệt đối và dịch vụ hậu mãi chu đáo, nhiệt tình, tâm huyết.</p>
              </CardContent>
            </Card>
             <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3 text-xl"><ShieldCheck className="text-accent h-6 w-6" /> Chất lượng & An tâm</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 flex-grow">
                 <p>Showroom kinh doanh các dòng xe lướt đã qua sử dụng giá trị từ 3 tỷ trở xuống. Chúng tôi sở hữu quy trình kiểm định chất lượng nghiêm ngặt bao gồm <strong>176 hạng mục</strong>, mang đến sự an tâm tuyệt đối cho quý khách hàng.</p>
              </CardContent>
            </Card>
          </section>

           <section className="mb-12">
             <Card className="bg-primary/5">
                <div className="grid md:grid-cols-2 items-center gap-8 p-8">
                    <div className="text-center md:text-left">
                        <h3 className="font-headline text-2xl flex items-center justify-center md:justify-start gap-3 text-primary mb-4"><Users className="text-accent h-7 w-7" /> Quy mô hoạt động</h3>
                        <p className="text-foreground/80">Hiện tại, showroom hoạt động mua bán trên phạm vi toàn quốc với số lượng xe đang duy trì trên dưới <strong>50 đầu xe</strong> và <strong>48 cán bộ nhân viên</strong> thường trực để đáp ứng mọi nhu cầu của khách hàng.</p>
                    </div>
                    <div className="relative h-48 w-full rounded-lg overflow-hidden">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Đội ngũ TIME CARS AUTO"
                            fill
                            style={{objectFit: 'cover'}}
                            data-ai-hint="team portrait"
                        />
                    </div>
                </div>
             </Card>
          </section>

          <section className="text-center bg-card border border-dashed rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-headline font-bold text-accent mb-4">🔥 Cần Mua Số Lượng Lớn Ô Tô Đã Qua Sử Dụng 🔥</h2>
            <p className="text-muted-foreground mb-2">Chỉ còn <strong>55 ngày</strong> nữa là đến Tết Nguyên Đán!</p>
            <p className="mb-4">TIME CARS AUTO cần mua số lượng lớn ô tô đã qua sử dụng và có chính sách cảm ơn mạnh tay cho người giới thiệu!</p>
          </section>

           <section className="text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-muted-foreground mb-6">Hãy liên hệ để được tư vấn chính xác nhất về nhu cầu và tài chính của bạn.</p>
            <Button asChild size="lg" variant="default">
              <a href="tel:0812201201" className="text-lg">
                <Phone className="mr-3" /> Mr. Tuấn: 0812 201 201
              </a>
            </Button>
          </section>
        </div>
      </main>
      <footer className="w-full py-6 bg-primary/10 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DREAMCAR. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </div>
  );
}
