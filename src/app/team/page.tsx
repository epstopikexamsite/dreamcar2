import Header from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { employees, Employee } from '@/lib/employees';
import { User, MapPin, Crown, UserCheck, Briefcase } from 'lucide-react';

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
            return <Crown className="w-4 h-4 text-accent" />;
        case 'Phó Giám đốc':
            return <UserCheck className="w-4 h-4 text-accent" />;
        case 'Trưởng phòng':
        case 'Trưởng phòng HC':
            return <Briefcase className="w-4 h-4 text-accent" />;
        default:
            return <User className="w-4 h-4 text-accent" />;
    }
};

const TeamSection = ({ title, members }: { title: string, members: Employee[] }) => {
    if (members.length === 0) return null;
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((employee) => (
                    <Card key={employee.id} className="text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
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
        </section>
    )
};


export default function TeamPage() {
    const leadership = employees.filter(e => ['Chủ tịch HĐQT', 'Phó Giám đốc'].includes(e.role));
    const managers = employees.filter(e => e.role === 'Trưởng phòng' || e.role === 'Trưởng phòng HC');
    const staff = employees.filter(e => !['Chủ tịch HĐQT', 'Phó Giám đốc', 'Trưởng phòng', 'Trưởng phòng HC'].includes(e.role));

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
                        Gặp Gỡ Đội Ngũ Của Chúng Tôi
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Những con người tận tâm đứng sau thành công của TIME CARS AUTO, luôn sẵn sàng phục vụ và mang đến cho bạn những trải nghiệm tốt nhất.
                    </p>
                </div>

                <TeamSection title="Ban Lãnh Đạo" members={leadership} />
                <TeamSection title="Quản Lý" members={managers} />
                <TeamSection title="Đội Ngũ Nhân Viên" members={staff} />

            </main>
            <footer className="w-full py-6 bg-primary/10 mt-auto">
                <div className="container mx-auto text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} DREAMCAR. Đã đăng ký bản quyền.</p>
                </div>
            </footer>
        </div>
    );
}
