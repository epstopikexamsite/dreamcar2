export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  aiHint: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Dịch vụ ở TimeCar thực sự tuyệt vời. Các bạn tư vấn rất nhiệt tình, xe thì chất lượng không chê vào đâu được. Tôi đã tìm được chiếc xe ưng ý cho gia đình mình.",
    name: "Anh Hoàng Minh",
    role: "Khách hàng mua xe Toyota Camry",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "happy man portrait",
    rating: 5,
  },
  {
    quote: "Tôi đã bán lại chiếc xe cũ của mình tại đây và được định giá rất cao, thủ tục lại nhanh gọn. Chắc chắn sẽ giới thiệu cho bạn bè và người thân.",
    name: "Chị Thu Trang",
    role: "Khách hàng bán xe Mazda CX-5",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "professional woman portrait",
    rating: 5,
  },
  {
    quote: "Chất lượng xe lướt ở đây đúng như cam kết. Xe gần như mới, mọi thứ đều được kiểm tra kỹ lưỡng. Rất an tâm khi mua xe tại TimeCar.",
    name: "Anh Quốc Bảo",
    role: "Khách hàng mua xe Mercedes-Benz E-Class",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "man business portrait",
    rating: 5,
  },
  {
    quote: "Đội ngũ nhân viên chuyên nghiệp, am hiểu về xe. Tôi rất ấn tượng với quy trình kiểm định 176 hạng mục, tạo sự an tâm tuyệt đối.",
    name: "Anh Minh Quân",
    role: "Khách hàng mua xe BMW X5",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "satisfied customer portrait",
    rating: 5,
  },
  {
    quote: "Thủ tục mua bán xe nhanh gọn, minh bạch. TimeCar đã hỗ trợ tôi rất nhiều từ khâu chọn xe đến lúc hoàn tất giấy tờ. Sẽ quay lại trong tương lai.",
    name: "Chị Phương Anh",
    role: "Khách hàng bán xe Ford Explorer",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "smiling woman portrait",
    rating: 5,
  },
  {
    quote: "Mức giá TimeCar đưa ra rất cạnh tranh so với thị trường. Tôi cảm thấy mình đã có một món hời lớn với chất lượng xe nhận được. Rất khuyến khích!",
    name: "Anh Tuấn Kiệt",
    role: "Khách hàng mua xe Audi Q7",
    avatar: "https://placehold.co/100x100.png?text=Avatar",
    aiHint: "man giving thumbs up",
    rating: 5,
  },
];
