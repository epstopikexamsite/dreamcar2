import Image from 'next/image';
import Header from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, HeartHandshake, Phone, ShieldCheck, Users, MapPin, BookOpen, Car, Globe, Gem, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
                    TIME CARS AUTO
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Nơi Uy Tín Tạo Nên Thương Hiệu - Mang Những Chiếc Xe Chất Lượng Đến Mọi Nhà.
                </p>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden shadow-lg min-h-[350px]">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Không gian showroom TIME CARS AUTO"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{objectFit: 'cover'}}
                            data-ai-hint="dealership interior"
                        />
                    </div>
                    <div>
                        <h2 className="font-headline text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <BookOpen className="text-accent h-8 w-8" /> Câu Chuyện Của Chúng Tôi
                        </h2>
                        <div className="text-foreground/80 space-y-4 text-lg">
                            <p>
                                Được thành lập vào ngày <strong>08/11/2021</strong> bởi nhà sáng lập tâm huyết <strong>Trần Mạnh Tuấn</strong>, TIME CARS AUTO đã nhanh chóng khẳng định vị thế của mình trên thị trường ô tô đã qua sử dụng.
                            </p>
                            <p>
                                Với sứ mệnh <strong>"Mang xe đẹp tới mọi nhà"</strong>, chúng tôi không chỉ cung cấp những chiếc xe chất lượng vượt trội mà còn xây dựng một dịch vụ khách hàng tận tâm, chuyên nghiệp, đặt sự hài lòng của quý khách làm kim chỉ nam cho mọi hoạt động.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-card py-12 border-y">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Car className="h-10 w-10 text-primary"/>
                        <p className="text-4xl font-bold">1.028+</p>
                        <p className="text-muted-foreground font-semibold">Xe Đã Giao</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ShieldCheck className="h-10 w-10 text-primary"/>
                        <p className="text-4xl font-bold">176</p>
                        <p className="text-muted-foreground font-semibold">Hạng Mục Kiểm Định</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Users className="h-10 w-10 text-primary"/>
                        <p className="text-4xl font-bold">48</p>
                        <p className="text-muted-foreground font-semibold">Nhân Viên Tâm Huyết</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Globe className="h-10 w-10 text-primary"/>
                        <p className="text-4xl font-bold">50+</p>
                        <p className="text-muted-foreground font-semibold">Xe Sẵn Sàng</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl font-bold text-foreground mb-2">Giá Trị Cốt Lõi</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Chúng tôi cam kết mang đến sự an tâm tuyệt đối qua những giá trị nền tảng đã làm nên thương hiệu TIME CARS AUTO.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center flex flex-col items-center p-6">
                        <Gem className="text-accent h-10 w-10 mb-4" />
                        <CardHeader className="p-0">
                            <CardTitle>Chất Lượng Đảm Bảo</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow">
                            <p>Kinh doanh xe lướt giá trị dưới 3 tỷ, mỗi chiếc xe đều trải qua quy trình 176 hạng mục kiểm định nghiêm ngặt nhất.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center flex flex-col items-center p-6">
                        <HeartHandshake className="text-accent h-10 w-10 mb-4" />
                        <CardHeader className="p-0">
                            <CardTitle>Dịch Vụ Tận Tâm</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow">
                            <p>Chế độ bảo hành tuyệt đối và dịch vụ hậu mãi chu đáo, nhiệt tình, luôn sẵn sàng hỗ trợ quý khách trên mọi nẻo đường.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center flex flex-col items-center p-6">
                        <Truck className="text-accent h-10 w-10 mb-4" />
                        <CardHeader className="p-0">
                          <CardTitle>Mạng Lưới Toàn Quốc</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow">
                            <p>Hoạt động mua bán trên phạm vi toàn quốc, duy trì số lượng lớn xe đa dạng để đáp ứng mọi nhu cầu của khách hàng.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <Card className="border-2 border-primary/50 shadow-lg text-center">
                    <CardHeader className="p-6">
                        <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4">
                            <ShieldCheck className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="font-headline text-3xl text-primary">Cam Kết Vàng</CardTitle>
                        <p className="text-muted-foreground text-lg pt-2">Sự an tâm của bạn là ưu tiên hàng đầu của chúng tôi.</p>
                    </CardHeader>
                    <CardContent className="text-lg space-y-4 px-6 sm:px-8 pb-6">
                        <p className="text-foreground/90">
                           Showroom chúng tôi cam kết toàn bộ xe bán ra động cơ hộp số nguyên bản, xe không tai nạn ảnh hưởng tới kết cấu khung gầm của xe, xe không thủy kích, không ngập nước, pháp lý rõ ràng.
                        </p>
                        <div className="border-t border-dashed my-4"></div>
                        <p className="font-semibold text-foreground">
                            Quý khách hàng được bảo hành xe trong <strong>01 năm</strong>. Nếu phát hiện xe không đúng cam kết nói trên, showroom chúng tôi sẽ nhận lại xe và hoàn lại tiền cho quý khách hàng.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl font-bold text-primary mb-2">Hệ Thống Showroom</h2>
                    <p className="text-muted-foreground text-lg">Ghé thăm chúng tôi tại các địa chỉ uy tín trên khắp Hà Nội.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6 flex items-start gap-4">
                                <MapPin className="h-8 w-8 text-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Cơ sở 1</h3>
                                    <p className="text-muted-foreground">79 Nguyễn Chánh, Trung Hòa, Cầu Giấy, Hà Nội</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 flex items-start gap-4">
                                <MapPin className="h-8 w-8 text-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Cơ sở 2</h3>
                                    <p className="text-muted-foreground">158 Việt Hưng, Long Biên, Hà Nội</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 flex items-start gap-4">
                                <MapPin className="h-8 w-8 text-accent shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Cơ sở 3</h3>
                                    <p className="text-muted-foreground">68 Đinh Núp, Cầu Giấy, Hà Nội</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="relative w-full overflow-hidden rounded-lg shadow-lg border min-h-[450px]">
                        <iframe
                            src="https://maps.google.com/maps?q=79%20Nguyen%20Chanh%2C%20Trung%20Hoa%2C%20Cau%20Giay%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bản đồ vị trí TIME CARS AUTO - Cơ sở 1"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center bg-card border-2 border-dashed border-accent rounded-lg p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-headline font-bold text-accent mb-4">🔥 Thu Mua Ô Tô Đã Qua Sử Dụng Giá Cao 🔥</h2>
                <p className="text-muted-foreground mb-4 text-lg">Chỉ còn <strong>55 ngày</strong> nữa là đến Tết Nguyên Đán, TIME CARS AUTO cần mua số lượng lớn ô tô đã qua sử dụng với chính sách hoa hồng hấp dẫn cho người giới thiệu!</p>
            </div>
          </div>
        </section>

        <section className="text-center pb-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-headline font-bold mb-4">Liên Hệ Ngay Với Chúng Tôi</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Sẵn sàng tư vấn chính xác nhất về nhu cầu và tài chính của bạn. Đừng ngần ngại, hãy gọi cho chúng tôi!</p>
                <Button asChild size="lg" variant="default" className="text-lg">
                  <a href="tel:0812201201">
                    <Phone className="mr-3" /> Mr. Tuấn: 0812 201 201
                  </a>
                </Button>
            </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-primary/10 mt-auto">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DREAMCAR. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </div>
  );
}
