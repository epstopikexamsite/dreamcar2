'use client';

import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeartHandshake, Users, MapPin, BookOpen, Car, Globe, Gem, Truck, Crown, Award, UserCheck, Briefcase, User } from 'lucide-react';
import { employees, Employee } from '@/lib/employees';
import { cn } from '@/lib/utils';

const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0] ? name[0].toUpperCase() : '';
};

const RoleIcon = ({ role }: { role: string }) => {
    switch (role) {
        case 'Chủ tịch HĐQT':
            return <Crown className="w-4 h-4 text-primary" />;
        case 'Giám đốc':
            return <Award className="w-4 h-4 text-primary" />;
        case 'Phó Giám đốc':
            return <UserCheck className="w-4 h-4 text-accent" />;
        case 'Trưởng phòng':
        case 'Trưởng phòng HC':
            return <Briefcase className="w-4 h-4 text-accent" />;
        default:
            return <User className="w-4 h-4 text-accent" />;
    }
};

const TeamSection = ({ title, members, tier, centerSingle = false }: { title: string, members: Employee[], tier: 'chairman' | 'director' | 'leadership' | 'management' | 'staff', centerSingle?: boolean }) => {
    if (members.length === 0) return null;

    const containerClasses = (members.length === 1 && centerSingle) 
        ? "flex justify-center"
        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8";

    return (
        <div className="mb-16">
            <h3 className="text-3xl font-headline font-bold text-primary mb-8 text-center">{title}</h3>
            <div className={containerClasses}>
                {members.map((employee) => (
                    <Card key={employee.id} className={cn(
                        "text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card",
                        (members.length === 1 && centerSingle) ? 'sm:w-80' : '',
                        {
                            'border-2 border-primary shadow-primary/20 shadow-lg': tier === 'chairman',
                            'border-2 border-primary/80 shadow-primary/10 shadow-md': tier === 'director',
                            'border-2 border-primary/60': tier === 'leadership',
                            'border-2 border-accent/60': tier === 'management',
                        }
                    )}>
                        <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                            <AvatarImage src={employee.avatar} alt={employee.name} data-ai-hint={employee.roleHint} />
                            <AvatarFallback className="text-3xl bg-muted">{getInitials(employee.name)}</AvatarFallback>
                        </Avatar>
                        <CardHeader className="p-0 text-center">
                            <CardTitle className="text-lg">{employee.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2 text-muted-foreground flex-grow space-y-2 flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center gap-2">
                                <RoleIcon role={employee.role} />
                                <p>{employee.role}</p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <MapPin className="w-4 h-4 text-accent" />
                                <p>{employee.hometown}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
};

export default function AboutPage() {
    const chairman = employees.filter(e => e.role === 'Chủ tịch HĐQT');
    const director = employees.filter(e => e.role === 'Giám đốc');
    const viceDirectors = employees.filter(e => e.role === 'Phó Giám đốc');
    const managers = employees.filter(e => e.role === 'Trưởng phòng' || e.role === 'Trưởng phòng HC');
    const staff = employees.filter(e => !['Chủ tịch HĐQT', 'Giám đốc', 'Phó Giám đốc', 'Trưởng phòng', 'Trưởng phòng HC'].includes(e.role));


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        <section className="bg-primary/5 py-16 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
                    TimeCar
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
                            alt="Không gian showroom TimeCar"
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
                                Được thành lập vào ngày <strong>08/11/2021</strong> bởi nhà sáng lập tâm huyết <strong>Trần Mạnh Tuấn</strong>, TimeCar đã nhanh chóng khẳng định vị thế của mình trên thị trường ô tô đã qua sử dụng.
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
                        <Users className="h-10 w-10 text-primary"/>
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
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Chúng tôi cam kết mang đến sự an tâm tuyệt đối qua những giá trị nền tảng đã làm nên thương hiệu TimeCar.</p>
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
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                        Gặp Gỡ Đội Ngũ Của Chúng Tôi
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Những con người tận tâm đứng sau thành công của TimeCar, luôn sẵn sàng phục vụ và mang đến cho bạn những trải nghiệm tốt nhất.
                    </p>
                </div>

                <TeamSection title="Chủ Tịch Hội Đồng Quản Trị" members={chairman} tier="chairman" centerSingle={true} />
                <TeamSection title="Giám Đốc" members={director} tier="director" centerSingle={true} />
                <TeamSection title="Ban Phó Giám Đốc" members={viceDirectors} tier="leadership" />
                <TeamSection title="Quản Lý" members={managers} tier="management" />
                <TeamSection title="Đội Ngũ Nhân Viên" members={staff} tier="staff" />
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
