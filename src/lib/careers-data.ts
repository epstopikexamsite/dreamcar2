export interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time';
  description: string;
  requirements: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: 'Chuyên viên Kinh doanh Ô tô',
    location: 'Hà Nội',
    type: 'Full-time',
    description: 'Tìm kiếm, tư vấn và hỗ trợ khách hàng trong quá trình mua bán xe. Xây dựng và duy trì mối quan hệ tốt với khách hàng tiềm năng và hiện tại.',
    requirements: [
      'Có ít nhất 1 năm kinh nghiệm trong lĩnh vực bán hàng ô tô.',
      'Kỹ năng giao tiếp, đàm phán và thuyết phục tốt.',
      'Đam mê ô tô và có kiến thức về các dòng xe.',
      'Chủ động, nhiệt tình và có trách nhiệm trong công việc.',
    ],
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
    description: 'Thực hiện kiểm tra, bảo dưỡng và sửa chữa các dòng xe ô tô theo quy trình 176 hạng mục của TimeCar. Đảm bảo chất lượng xe trước khi bàn giao cho khách.',
    requirements: [
      'Có chứng chỉ nghề hoặc kinh nghiệm thực tế từ 2 năm.',
      'Am hiểu về cơ điện tử ô tô đời mới.',
      'Cẩn thận, tỉ mỉ và có tinh thần đồng đội.',
      'Sẵn sàng học hỏi công nghệ mới.',
    ],
  },
];
