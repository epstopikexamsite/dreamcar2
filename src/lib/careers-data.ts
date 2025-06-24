
export interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time';
  description: string;
  requirements: string[];
  contact?: {
    name: string;
    phone: string;
  }
}

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Nhân viên Kinh doanh Ô tô',
    location: 'Hà Nội',
    type: 'Full-time',
    description: `Lương cứng: 10.000.000 VNĐ/tháng
Hoa hồng hấp dẫn: từ 5 – 10 triệu VNĐ/xe bán ra
Thưởng thêm theo doanh số và hiệu quả công việc`,
    requirements: [
      'Có kinh nghiệm tư vấn bán hàng ô tô từ 2 năm trở lên.',
      'Giao tiếp tốt, nhanh nhẹn, chăm chỉ, trung thực.',
      'Biết sử dụng TikTok/Facebook để khai thác khách hàng online là một lợi thế lớn.',
      'Ưu tiên ứng viên có kỹ năng tư vấn, chốt sale, và chăm sóc khách hàng sau bán.',
      'Phỏng vấn là đi làm ngay nếu phù hợp.',
    ],
    contact: {
        name: 'Mr. Tuấn',
        phone: '0812 201 201'
    }
  },
  {
    id: 2,
    title: 'Chuyên viên Digital Marketing',
    location: 'Hà Nội (Hybrid)',
    type: 'Full-time',
    description: 'Lập kế hoạch và triển khai các chiến dịch marketing trên các kênh kỹ thuật số (Facebook, Google, TikTok). Quản lý và phát triển nội dung cho website và mạng xã hội.',
    requirements: [
      'Kinh nghiệm 2 năm trở lên ở vị trí tương đương.',
      'Am hiểu về SEO, SEM, Social Media Marketing.',
      'Kỹ năng phân tích dữ liệu và đo lường hiệu quả chiến dịch.',
      'Sáng tạo, năng động và bắt kịp xu hướng.',
    ],
  },
  {
    id: 3,
    title: 'Kỹ thuật viên Sửa chữa Ô tô',
    location: 'Hà Nội & Long Biên',
    type: 'Full-time',
    description: 'Thực hiện kiểm tra, bảo dưỡng và sửa chữa các dòng xe ô tô theo quy trình 176 hạng mục của TimeCarsAuto. Đảm bảo chất lượng xe trước khi bàn giao cho khách.',
    requirements: [
      'Có chứng chỉ nghề hoặc kinh nghiệm thực tế từ 2 năm.',
      'Am hiểu về cơ điện tử ô tô đời mới.',
      'Cẩn thận, tỉ mỉ và có tinh thần đồng đội.',
      'Sẵn sàng học hỏi công nghệ mới.',
    ],
  },
];
