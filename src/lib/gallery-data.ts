export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    caption: string;
    aiHint: string;
}

export const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: 'https://placehold.co/600x400.png',
        alt: 'Khách hàng nhận xe tại showroom',
        caption: 'Bàn giao xe cho khách hàng thân thiết.',
        aiHint: 'customer handshake dealership'
    },
    {
        id: 2,
        src: 'https://placehold.co/600x400.png',
        alt: 'Đội ngũ nhân viên TIME CARS AUTO',
        caption: 'Buổi họp đầu tuần của đội ngũ.',
        aiHint: 'team meeting office'
    },
    {
        id: 3,
        src: 'https://placehold.co/600x400.png',
        alt: 'Sự kiện tri ân khách hàng',
        caption: 'Tổ chức sự kiện tri ân cuối năm.',
        aiHint: 'corporate event award'
    },
    {
        id: 4,
        src: 'https://placehold.co/600x400.png',
        alt: 'Một khách hàng vui vẻ bên chiếc xe mới',
        caption: 'Nụ cười hài lòng của vị khách hàng.',
        aiHint: 'happy person new car'
    },
    {
        id: 5,
        src: 'https://placehold.co/600x400.png',
        alt: 'Xe được kiểm tra kỹ thuật',
        caption: 'Quy trình kiểm định 176 hạng mục.',
        aiHint: 'mechanic car check'
    },
    {
        id: 6,
        src: 'https://placehold.co/600x400.png',
        alt: 'Toàn cảnh showroom TIME CARS AUTO',
        caption: 'Không gian trưng bày xe chuyên nghiệp.',
        aiHint: 'car dealership showroom'
    },
    {
        id: 7,
        src: 'https://placehold.co/600x400.png',
        alt: 'Khách hàng được tư vấn tận tình',
        caption: 'Chuyên viên tư vấn hỗ trợ khách hàng.',
        aiHint: 'salesman client talking'
    },
    {
        id: 8,
        src: 'https://placehold.co/600x400.png',
        alt: 'Hoạt động team building của công ty',
        caption: 'Chuyến đi team building gắn kết toàn đội.',
        aiHint: 'company team building'
    },
    {
        id: 9,
        src: 'https://placehold.co/600x400.png',
        alt: 'Lễ ký kết hợp đồng với đối tác',
        caption: 'Hợp tác cùng phát triển với đối tác lớn.',
        aiHint: 'business partnership handshake'
    }
];
