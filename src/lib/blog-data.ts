import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
    {
    slug: 'suv-so-sanh',
    title: 'SUV – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Sedan, Coupe, Compact',
    author: 'Chuyên gia TIME CARS',
    date: '23/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'suv family car',
    excerpt: 'SUV (Sport Utility Vehicle) là dòng xe đa dụng phổ biến nhờ thiết kế cao ráo, rộng rãi, phù hợp gia đình và di chuyển đa địa hình.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>SUV (Sport Utility Vehicle) là dòng xe đa dụng phổ biến nhờ thiết kế cao ráo, rộng rãi, phù hợp gia đình và di chuyển đa địa hình.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không gian rộng, chở được nhiều người và hàng.</li>
  <li>Gầm cao dễ đi đường xấu.</li>
  <li>Thường tích hợp dẫn động AWD hoặc 4x4.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Tiêu hao nhiên liệu cao.</li>
  <li>Khó xoay trở trong phố.</li>
  <li>Giá cao hơn các dòng cùng phân khúc.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Chiều cao gầm:</strong> 180–220mm</li>
  <li><strong>Loại dẫn động:</strong> AWD, 4WD, FWD</li>
  <li><strong>Kích thước:</strong> Lớn, từ 5–7 chỗ</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">SUV</th>
        <th class="p-3 border-b font-semibold">Sedan</th>
        <th class="p-3 border-b font-semibold">Coupe</th>
        <th class="p-3 border-b font-semibold">Compact</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Không gian</td><td class="p-3 border-r">Rất rộng</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Hẹp</td><td class="p-3">Hẹp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Gầm xe</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Thấp</td><td class="p-3 border-r">Thấp</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Khả năng địa hình</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Kém</td><td class="p-3 border-r">Kém</td><td class="p-3">Kém</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Thời trang</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Rất cao</td><td class="p-3">Trung bình</td></tr>
      <tr><td class="p-3 border-r font-medium">Tiêu hao nhiên liệu</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Thấp</td><td class="p-3">Thấp</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> SUV phù hợp với gia đình và người hay đi xa hoặc địa hình phức tạp, trong khi sedan/coupe phù hợp với thành thị hoặc nhu cầu cá nhân năng động.</p>
`
  },
  {
    slug: 'dan-dong-4x4-so-sanh',
    title: 'Dẫn Động 4x4 – Ưu điểm, Nhược điểm & So sánh với AWD, FWD, RWD',
    author: 'Chuyên gia TIME CARS',
    date: '22/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: '4x4 drivetrain offroad',
    excerpt: 'Hệ thống dẫn động 4x4 được thiết kế cho khả năng vượt địa hình, thường xuất hiện trên xe bán tải, SUV off-road.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Hệ thống dẫn động 4x4 được thiết kế cho khả năng vượt địa hình, thường xuất hiện trên xe bán tải, SUV off-road.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Vượt địa hình tốt:</strong> Phân phối lực kéo 4 bánh.</li>
  <li><strong>Độ bám đường cao</strong> trong điều kiện trơn trượt.</li>
  <li><strong>Chịu tải tốt</strong> khi off-road hoặc đường đèo.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Tiêu hao nhiên liệu nhiều hơn.</li>
  <li>Trọng lượng xe nặng hơn.</li>
  <li>Không cần thiết trong điều kiện đường phố.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Cơ chế:</strong> Chuyển đổi giữa 2WD và 4WD, có chế độ gài cầu.</li>
  <li><strong>Ứng dụng:</strong> Off-road, đường đá, tuyết, dốc cao.</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">4x4</th>
        <th class="p-3 border-b font-semibold">AWD</th>
        <th class="p-3 border-b font-semibold">Cầu trước (FWD)</th>
        <th class="p-3 border-b font-semibold">Cầu sau (RWD)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Địa hình khó</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Kém</td><td class="p-3">Kém</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Đường phố</td><td class="p-3 border-r">Tốt nếu gài 2WD</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Rất tốt</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiêu hao nhiên liệu</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Thấp nhất</td><td class="p-3">Trung bình</td></tr>
      <tr><td class="p-3 border-r font-medium">Cảm giác lái</td><td class="p-3 border-r">Cứng chắc</td><td class="p-3 border-r">Mượt</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Thể thao</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> 4x4 là lựa chọn cho người thường xuyên đi đường khó, trong khi AWD, FWD, RWD phù hợp hơn cho môi trường đô thị hoặc lái thể thao.</p>
`
  },
  {
    slug: 'hop-so-tu-dong-so-sanh',
    title: 'Hộp Số Tự Động – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Số Tay',
    author: 'Chuyên gia TIME CARS',
    date: '21/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'automatic transmission gear',
    excerpt: 'Hộp số tự động (Automatic Transmission) ngày càng phổ biến nhờ vào sự tiện lợi và dễ sử dụng, đặc biệt ở môi trường đô thị đông đúc.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Hộp số tự động (Automatic Transmission) ngày càng phổ biến nhờ vào sự tiện lợi và dễ sử dụng, đặc biệt ở môi trường đô thị đông đúc.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Dễ lái, không cần côn:</strong> Phù hợp cho người mới.</li>
  <li><strong>Giảm mệt mỏi</strong> khi lái xe đường dài hoặc kẹt xe.</li>
  <li>Khả năng <strong>sang số mượt mà.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Tiêu hao nhiên liệu nhiều hơn (đời cũ).</li>
  <li>Chi phí bảo trì, sửa chữa cao hơn.</li>
  <li>Giá xe cao hơn bản số tay.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Loại hộp số:</strong> AT, CVT, DCT…</li>
  <li><strong>Cơ chế hoạt động:</strong> Dựa vào áp suất dầu và điện tử để tự động chuyển số.</li>
  <li><strong>Bảo trì định kỳ:</strong> Thay dầu hộp số sau 40.000–80.000km</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Số tự động</th>
        <th class="p-3 border-b font-semibold">Số tay</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Dễ sử dụng</td><td class="p-3 border-r">Rất tốt</td><td class="p-3">Cần kỹ năng</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Kém hơn (cũ)</td><td class="p-3">Tốt hơn</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bảo trì</td><td class="p-3 border-r">Cao</td><td class="p-3">Thấp hơn</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Chi phí</td><td class="p-3 border-r">Cao hơn</td><td class="p-3">Rẻ hơn</td></tr>
      <tr><td class="p-3 border-r font-medium">Vận hành linh hoạt</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Cao hơn</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Xe số tự động là lựa chọn lý tưởng cho người mới và môi trường đô thị, trong khi xe số tay phù hợp với người thích cảm giác lái và kiểm soát.</p>
`
  },
    {
    slug: 'xe-dien-so-sanh',
    title: 'Xe Điện – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Xăng, Diesel, Hybrid',
    author: 'Chuyên gia TIME CARS',
    date: '20/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'electric car charging',
    excerpt: 'Xe điện là xu hướng tương lai nhờ khả năng vận hành êm ái, không phát thải và chi phí sử dụng thấp.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Xe điện là xu hướng tương lai nhờ khả năng vận hành êm ái, không phát thải và chi phí sử dụng thấp.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Không khí thải</strong> – thân thiện môi trường.</li>
  <li><strong>Chi phí vận hành thấp:</strong> Không cần xăng, bảo trì đơn giản.</li>
  <li><strong>Vận hành êm ái</strong>, tăng tốc tốt ở tốc độ thấp.</li>
  <li>Không cần bảo dưỡng động cơ truyền thống.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Giá thành cao.</li>
  <li>Thời gian sạc lâu.</li>
  <li>Cần trạm sạc – không phù hợp ở khu vực thiếu hạ tầng.</li>
  <li>Phạm vi di chuyển hạn chế.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Điện (sạc từ nguồn AC/DC)</li>
  <li><strong>Pin:</strong> Lithium-ion hoặc tương đương</li>
  <li><strong>Cơ chế hoạt động:</strong> Hoàn toàn bằng mô-tơ điện</li>
  <li><strong>Tiêu hao năng lượng:</strong> ~15-20 kWh/100km</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Điện</th>
        <th class="p-3 border-b font-semibold">Xăng</th>
        <th class="p-3 border-b font-semibold">Diesel</th>
        <th class="p-3 border-b font-semibold">Hybrid</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Tốt nhất</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Tốt</td><td class="p-3">Tốt</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bảo trì</td><td class="p-3 border-r">Thấp nhất</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Cao</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Môi trường</td><td class="p-3 border-r">Sạch nhất</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Rất tốt</td></tr>
      <tr><td class="p-3 border-r font-medium">Giá xe</td><td class="p-3 border-r">Rất cao</td><td class="p-3 border-r">Thấp nhất</td><td class="p-3 border-r">Cao</td><td class="p-3">Cao</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Xe điện là tương lai của ngành ô tô, tuy nhiên vẫn cần cải thiện về cơ sở hạ tầng và chi phí để phổ cập rộng rãi hơn.</p>
`
  },
  {
    slug: 'xe-hybrid-so-sanh',
    title: 'Hybrid – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Xăng, Diesel, Điện',
    author: 'Chuyên gia TIME CARS',
    date: '19/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'hybrid car engine',
    excerpt: 'Xe Hybrid là sự kết hợp giữa động cơ xăng và mô-tơ điện, giúp tối ưu hiệu suất sử dụng nhiên liệu và giảm thiểu khí thải.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Xe Hybrid là sự kết hợp giữa động cơ xăng và mô-tơ điện, giúp tối ưu hiệu suất sử dụng nhiên liệu và giảm thiểu khí thải.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiết kiệm nhiên liệu</strong> vượt trội: Nhờ sử dụng điện ở tốc độ thấp.</li>
  <li><strong>Giảm khí thải CO2:</strong> Thân thiện với môi trường.</li>
  <li>Chuyển đổi linh hoạt giữa động cơ điện và xăng.</li>
  <li>Không cần sạc ngoài (với hybrid thường).</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Giá thành cao hơn xe xăng/diesel.</li>
  <li>Chi phí sửa chữa và linh kiện cao.</li>
  <li>Hiệu suất tải nặng không bằng Diesel.</li>
  <li>Phụ thuộc vào công nghệ – khó sửa tại gara nhỏ.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Xăng + điện</li>
  <li><strong>Hệ thống:</strong> Động cơ đốt trong + mô-tơ điện + pin</li>
  <li><strong>Cơ chế hoạt động:</strong> Luân phiên sử dụng điện và xăng tùy điều kiện</li>
  <li><strong>Tiêu hao nhiên liệu:</strong> ~3-5L/100km</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Hybrid</th>
        <th class="p-3 border-b font-semibold">Xăng</th>
        <th class="p-3 border-b font-semibold">Diesel</th>
        <th class="p-3 border-b font-semibold">Điện</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Tốt</td><td class="p-3">Tốt nhất</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bảo trì</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Thấp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Môi trường</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Sạch nhất</td></tr>
      <tr><td class="p-3 border-r font-medium">Giá xe</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Thấp</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Rất cao</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Xe hybrid là bước đệm lý tưởng giữa xe truyền thống và xe điện, phù hợp với nhu cầu tiết kiệm nhiên liệu nhưng chưa sẵn sàng cho chuyển đổi hoàn toàn sang điện.</p>
`
  },
  {
    slug: 'dong-co-xang-so-sanh',
    title: 'Xăng – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Diesel, Điện, Hybrid',
    author: 'Chuyên gia TIME CARS',
    date: '18/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'gasoline engine car',
    excerpt: 'Động cơ xăng là loại phổ biến nhất trên toàn cầu, được sử dụng rộng rãi trong các dòng xe phổ thông và xe cá nhân nhờ khả năng vận hành êm ái và giá thành hợp lý.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Động cơ xăng là loại phổ biến nhất trên toàn cầu, được sử dụng rộng rãi trong các dòng xe phổ thông và xe cá nhân nhờ khả năng vận hành êm ái và giá thành hợp lý.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Vận hành êm ái:</strong> Ít rung và ồn hơn so với máy dầu.</li>
  <li><strong>Chi phí đầu tư thấp:</strong> Xe xăng thường rẻ hơn các loại khác.</li>
  <li><strong>Dễ sửa chữa, bảo trì:</strong> Phổ biến nên dễ tiếp cận linh kiện và dịch vụ.</li>
  <li>Tăng tốc nhanh hơn trong dải tua máy cao.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Tiêu hao nhiên liệu cao hơn Diesel.</li>
  <li>Thải ra nhiều khí CO2 hơn.</li>
  <li>Hiệu suất tải nặng kém hơn Diesel.</li>
  <li>Tuổi thọ máy thấp hơn máy dầu.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Xăng (RON 92/95)</li>
  <li><strong>Tỷ số nén:</strong> Thấp hơn Diesel, thường từ 8:1 – 12:1</li>
  <li><strong>Cơ chế đánh lửa:</strong> Đánh lửa bằng bugi</li>
  <li><strong>Tiêu hao nhiên liệu trung bình:</strong> ~6-10L/100km tùy loại xe</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Xăng</th>
        <th class="p-3 border-b font-semibold">Diesel</th>
        <th class="p-3 border-b font-semibold">Hybrid</th>
        <th class="p-3 border-b font-semibold">Điện</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Tốt</td><td class="p-3">Tốt nhất</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bảo trì</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Cao</td><td class="p-3">Thấp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Môi trường</td><td class="p-3 border-r">CO2 cao</td><td class="p-3 border-r">NOx cao</td><td class="p-3 border-r">Ít ô nhiễm</td><td class="p-3">Sạch sẽ</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Hiệu suất tải nặng</td><td class="p-3 border-r">Kém</td><td class="p-3 border-r">Tốt nhất</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Kém</td></tr>
      <tr><td class="p-3 border-r font-medium">Giá xe</td><td class="p-3 border-r">Thấp nhất</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Cao</td><td class="p-3">Rất cao</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Xe chạy xăng vẫn là lựa chọn phổ biến và hợp lý cho người dùng phổ thông. Tuy nhiên, về lâu dài nên cân nhắc các dòng xe tiết kiệm và thân thiện môi trường hơn như hybrid hoặc xe điện.</p>
`
  },
  {
    slug: 'dau-diesel-so-sanh',
    title: 'Dầu Diesel – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Xăng, Điện, Hybrid',
    author: 'Chuyên gia TIME CARS',
    date: '17/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'diesel engine pump',
    excerpt: 'Dầu Diesel là một trong những loại nhiên liệu phổ biến trong ngành công nghiệp ô tô, đặc biệt với các xe tải, SUV, và xe thương mại.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Dầu Diesel là một trong những loại nhiên liệu phổ biến trong ngành công nghiệp ô tô, đặc biệt với các xe tải, SUV, và xe thương mại nhờ hiệu suất cao và khả năng vận hành mạnh mẽ.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiết kiệm nhiên liệu:</strong> Động cơ Diesel có hiệu suất nhiệt cao hơn so với xăng, do đó tiết kiệm nhiên liệu hơn.</li>
  <li><strong>Mô-men xoắn cao:</strong> Rất lý tưởng cho xe tải, SUV và xe cần tải nặng.</li>
  <li><strong>Độ bền cao:</strong> Máy dầu thường có tuổi thọ cao hơn máy xăng.</li>
  <li><strong>Ít tiêu hao nhiên liệu khi chạy xa:</strong> Phù hợp cho xe chạy đường trường.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Chi phí bảo trì cao hơn:</strong> Cấu tạo phức tạp hơn máy xăng.</li>
  <li><strong>Tiếng ồn và độ rung:</strong> Động cơ Diesel thường ồn và rung hơn.</li>
  <li><strong>Khí thải NOx và bụi mịn:</strong> Gây ảnh hưởng đến môi trường nếu không có bộ xử lý khí thải.</li>
  <li>Giá thành ban đầu của xe cao hơn.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Diesel (DO)</li>
  <li><strong>Tỷ số nén:</strong> Cao, khoảng 14:1 – 25:1</li>
  <li><strong>Cơ chế đánh lửa:</strong> Tự đánh lửa bằng áp suất nén</li>
  <li><strong>Tiêu hao nhiên liệu trung bình:</strong> ~5-7L/100km với xe du lịch</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Diesel</th>
        <th class="p-3 border-b font-semibold">Xăng</th>
        <th class="p-3 border-b font-semibold">Hybrid</th>
        <th class="p-3 border-b font-semibold">Điện</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Tốt</td><td class="p-3">Tốt nhất</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bảo trì</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Thấp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Môi trường</td><td class="p-3 border-r">Ô nhiễm khí NOx</td><td class="p-3 border-r">CO2 cao</td><td class="p-3 border-r">Ít ô nhiễm</td><td class="p-3">Sạch sẽ</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Hiệu suất tải nặng</td><td class="p-3 border-r">Tốt nhất</td><td class="p-3 border-r">Kém</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Kém</td></tr>
      <tr><td class="p-3 border-r font-medium">Giá xe</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Rất cao</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Xe Diesel phù hợp với người dùng di chuyển xa, chở nặng hoặc sử dụng xe trong điều kiện công nghiệp. Tuy nhiên, với xu hướng xanh hoá, xe điện và hybrid đang là xu hướng thay thế trong tương lai.</p>
`
  },
  {
    slug: '5-mau-suv-dang-mua-nhat-2024',
    title: 'Top 5 Mẫu SUV Đáng Mua Nhất Năm 2024',
    author: 'Chuyên gia TIME CARS',
    date: '15/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'suv lineup',
    excerpt: 'Khám phá những mẫu SUV hàng đầu với thiết kế ấn tượng, công nghệ vượt trội và khả năng vận hành mạnh mẽ đang được săn đón nhất trên thị trường.',
    content: `
<p>Năm 2024 chứng kiến sự bùng nổ của phân khúc SUV với hàng loạt mẫu xe mới được ra mắt. Để giúp bạn đưa ra lựa chọn sáng suốt, TIME CARS AUTO đã tổng hợp danh sách 5 mẫu SUV đáng mua nhất, dựa trên các tiêu chí về thiết kế, hiệu suất, công nghệ và giá trị.</p>
<h3 class="font-bold text-xl my-4">1. Ford Explorer</h3>
<p>Với không gian nội thất rộng rãi, khả năng vận hành mạnh mẽ và hàng loạt công nghệ an toàn tiên tiến, Ford Explorer là lựa chọn hoàn hảo cho các gia đình yêu thích sự phiêu lưu.</p>
<h3 class="font-bold text-xl my-4">2. Toyota RAV4</h3>
<p>Nổi tiếng về độ bền bỉ và khả năng tiết kiệm nhiên liệu, Toyota RAV4 tiếp tục là một trong những mẫu xe bán chạy nhất. Phiên bản Hybrid mang đến hiệu suất ấn tượng mà vẫn thân thiện với môi trường.</p>
<h3 class="font-bold text-xl my-4">3. Hyundai Santa Fe</h3>
<p>Hyundai Santa Fe gây ấn tượng mạnh với thiết kế tương lai, nội thất sang trọng và danh sách dài các trang bị tiện nghi. Đây là mẫu xe mang lại giá trị vượt trội trong tầm giá.</p>
<h3 class="font-bold text-xl my-4">4. Mazda CX-5</h3>
<p>Nếu bạn tìm kiếm một chiếc SUV với cảm giác lái thể thao và thiết kế KODO tinh tế, Mazda CX-5 là câu trả lời. Nội thất cao cấp và khả năng xử lý linh hoạt là những điểm cộng lớn.</p>
<h3 class="font-bold text-xl my-4">5. Kia Sorento</h3>
<p>Kia Sorento là sự kết hợp hoàn hảo giữa tính thực dụng của một chiếc xe 7 chỗ và phong cách của một chiếc SUV hiện đại. Xe được trang bị nhiều tính năng thông minh và không gian thoải mái cho cả gia đình.</p>
`,
  },
  {
    slug: 'huong-dan-bao-duong-xe-cho-nguoi-moi',
    title: 'Hướng Dẫn Bảo Dưỡng Xe Hơi Cho Người Mới Bắt Đầu',
    author: 'Kỹ thuật viên TIME CARS',
    date: '10/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'car engine maintenance',
    excerpt: 'Sở hữu một chiếc ô tô là một trải nghiệm tuyệt vời, nhưng việc bảo dưỡng đúng cách là chìa khóa để xe luôn vận hành êm ái và bền bỉ. Dưới đây là những mẹo cơ bản.',
    content: `
<p>Việc bảo dưỡng xe định kỳ không chỉ giúp kéo dài tuổi thọ của xe mà còn đảm bảo an toàn cho bạn trên mọi hành trình. Dưới đây là những hạng mục cơ bản mà bất kỳ chủ xe nào cũng nên biết:</p>
<h3 class="font-bold text-xl my-4">1. Kiểm Tra Dầu Động Cơ</h3>
<p>Dầu động cơ là "máu" của chiếc xe. Hãy kiểm tra mức dầu thường xuyên và thay dầu theo đúng lịch trình của nhà sản xuất (thường là sau mỗi 5.000 - 10.000 km).</p>
<h3 class="font-bold text-xl my-4">2. Kiểm Tra Áp Suất Lốp</h3>
<p>Lốp non hơi không chỉ gây nguy hiểm mà còn làm tăng mức tiêu thụ nhiên liệu. Hãy kiểm tra áp suất lốp ít nhất mỗi tháng một lần và trước mỗi chuyến đi dài.</p>
<h3 class="font-bold text-xl my-4">3. Vệ Sinh Nội Thất Và Ngoại Thất</h3>
<p>Rửa xe thường xuyên giúp bảo vệ lớp sơn khỏi các yếu tố gây hại. Dọn dẹp nội thất không chỉ giúp không gian trong xe trong lành mà còn bảo vệ các chi tiết nhựa và da.</p>
<h3 class="font-bold text-xl my-4">4. Kiểm Tra Hệ Thống Phanh</h3>
<p>Lắng nghe những tiếng động lạ khi phanh và kiểm tra độ mòn của má phanh định kỳ. Đừng bao giờ xem nhẹ sự an toàn của hệ thống phanh.</p>
`,
  },
  {
    slug: 'meo-chon-xe-da-qua-su-dung',
    title: 'Mẹo Chọn Mua Xe Ô Tô Đã Qua Sử Dụng Như Chuyên Gia',
    author: 'Trần Mạnh Tuấn',
    date: '05/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'used car inspection',
    excerpt: 'Mua xe đã qua sử dụng có thể giúp bạn tiết kiệm một khoản chi phí đáng kể, nhưng cũng tiềm ẩn nhiều rủi ro. Hãy trang bị những kiến thức sau để tự tin hơn khi lựa chọn.',
    content: `
<p>Việc chọn một chiếc xe đã qua sử dụng ưng ý đòi hỏi sự cẩn thận và một chút kinh nghiệm. TIME CARS AUTO chia sẻ một vài bí quyết giúp bạn đưa ra quyết định đúng đắn.</p>
<h3 class="font-bold text-xl my-4">1. Xác Định Ngân Sách Rõ Ràng</h3>
<p>Ngoài giá xe, hãy tính thêm các chi phí khác như phí sang tên, bảo hiểm, và chi phí bảo dưỡng ban đầu.</p>
<h3 class="font-bold text-xl my-4">2. Kiểm Tra Lịch Sử Xe</h3>
<p>Yêu cầu xem lịch sử bảo dưỡng và kiểm tra xem xe có từng bị tai nạn hay ngập nước hay không. Tại TIME CARS, chúng tôi cam kết pháp lý rõ ràng cho mọi chiếc xe bán ra.</p>
<h3 class="font-bold text-xl my-4">3. Kiểm Tra Kỹ Thuật Toàn Diện</h3>
<p>Kiểm tra động cơ, hộp số, khung gầm, hệ thống treo, và các chi tiết điện. Nếu không tự tin, hãy nhờ một thợ máy hoặc một địa chỉ uy tín như TIME CARS AUTO để kiểm tra giúp bạn.</p>
<h3 class="font-bold text-xl my-4">4. Lái Thử Xe</h3>
<p>Lái thử trên nhiều loại địa hình khác nhau để cảm nhận khả năng vận hành, độ êm ái, và phát hiện các tiếng động bất thường.</p>
`,
  },
  {
    slug: 'sedan-uu-diem-nhuoc-diem-va-so-sanh',
    title: 'Sedan – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với SUV, Coupe, Compact',
    author: 'Chuyên gia TIME CARS',
    date: '01/07/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'sedan car elegant',
    excerpt: 'Sedan là kiểu xe 4 cửa truyền thống, phổ biến nhất trên thị trường nhờ thiết kế cân đối, gầm thấp, tiết kiệm nhiên liệu và phù hợp nhiều mục đích sử dụng.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Sedan là kiểu xe 4 cửa truyền thống, phổ biến nhất trên thị trường nhờ thiết kế cân đối, gầm thấp, tiết kiệm nhiên liệu và phù hợp nhiều mục đích sử dụng.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Vận hành êm ái và ổn định trên đường bằng.</li>
  <li>Thiết kế sang trọng, phù hợp cá nhân và gia đình.</li>
  <li>Tiết kiệm nhiên liệu hơn SUV.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không phù hợp đường địa hình xấu.</li>
  <li>Không gian chứa đồ hạn chế hơn SUV.</li>
  <li>Tầm nhìn thấp hơn các dòng xe gầm cao.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Kiểu dáng:</strong> 4 cửa, 5 chỗ ngồi</li>
  <li><strong>Chiều cao gầm:</strong> 130–160mm</li>
  <li><strong>Dẫn động:</strong> FWD hoặc RWD</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Sedan</th>
        <th class="p-3 border-b font-semibold">SUV</th>
        <th class="p-3 border-b font-semibold">Coupe</th>
        <th class="p-3 border-b font-semibold">Compact</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Không gian</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Rất rộng</td><td class="p-3 border-r">Hẹp</td><td class="p-3">Hẹp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Thiết kế sang trọng</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Khả năng địa hình</td><td class="p-3 border-r">Kém</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Kém</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Dễ lái trong phố</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Tốt</td><td class="p-3">Rất tốt</td></tr>
      <tr><td class="p-3 border-r font-medium">Tiêu hao nhiên liệu</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Thấp</td><td class="p-3">Rất thấp</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Sedan phù hợp cho người ưu tiên sự ổn định, tiết kiệm và thiết kế tinh tế trong môi trường đô thị hoặc di chuyển đường bằng.</p>
`,
  },
  {
    slug: 'coupe-uu-diem-nhuoc-diem-va-so-sanh',
    title: 'Coupe – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Sedan, SUV, Compact',
    author: 'Chuyên gia TIME CARS',
    date: '28/06/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'coupe car sporty',
    excerpt: 'Coupe là dòng xe 2 cửa, thiên về thiết kế thể thao, trẻ trung và cá tính. Phù hợp cho cá nhân hoặc cặp đôi yêu thích tốc độ và phong cách.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Coupe là dòng xe 2 cửa, thiên về thiết kế thể thao, trẻ trung và cá tính. Phù hợp cho cá nhân hoặc cặp đôi yêu thích tốc độ và phong cách.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Thiết kế đẹp, thể thao, thu hút ánh nhìn.</li>
  <li>Thường có hiệu suất động cơ cao.</li>
  <li>Tăng tốc tốt và cảm giác lái hứng khởi.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không gian ghế sau và khoang hành lý hạn chế.</li>
  <li>Không phù hợp cho gia đình.</li>
  <li>Giá cao hơn sedan cùng cấu hình.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Kiểu dáng:</strong> 2 cửa, 2–4 chỗ ngồi</li>
  <li><strong>Thiết kế:</strong> Thấp, trọng tâm xe thấp</li>
  <li>Thường đi kèm động cơ công suất lớn</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Coupe</th>
        <th class="p-3 border-b font-semibold">Sedan</th>
        <th class="p-3 border-b font-semibold">SUV</th>
        <th class="p-3 border-b font-semibold">Compact</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Phong cách</td><td class="p-3 border-r">Rất cao</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Không gian</td><td class="p-3 border-r">Hạn chế</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Rộng rãi</td><td class="p-3">Hẹp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tính thể thao</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Thấp</td><td class="p-3">Thấp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Thực dụng</td><td class="p-3 border-r">Thấp</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Cao</td><td class="p-3">Trung bình</td></tr>
      <tr><td class="p-3 border-r font-medium">Giá xe</td><td class="p-3 border-r">Cao</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Thấp</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Coupe thích hợp cho người trẻ, yêu tốc độ và phong cách, không ưu tiên tính thực dụng hay không gian rộng.</p>
`,
  },
    {
    slug: 'compact-car-uu-diem-nhuoc-diem-va-so-sanh',
    title: 'Xe Compact – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Sedan, SUV, Coupe',
    author: 'Chuyên gia TIME CARS',
    date: '25/06/2024',
    image: 'https://placehold.co/800x450.png',
    aiHint: 'compact car city',
    excerpt: 'Xe Compact là dòng xe cỡ nhỏ, gọn gàng, thích hợp đi trong thành phố và thường có giá thành rẻ.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Xe Compact là dòng xe cỡ nhỏ, gọn gàng, thích hợp đi trong thành phố và thường có giá thành rẻ.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Kích thước nhỏ, dễ quay đầu, đậu xe.</li>
  <li>Tiết kiệm nhiên liệu.</li>
  <li>Giá thành hợp lý.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không gian hạn chế cho hành khách và hành lý.</li>
  <li>Thiếu tiện nghi cao cấp ở các dòng giá rẻ.</li>
  <li>Không phù hợp đi xa hoặc chở nhiều người.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Kích thước:</strong> Nhỏ, 4–5 chỗ</li>
  <li><strong>Gầm xe:</strong> Trung bình (150–170mm)</li>
  <li>Thường dùng dẫn động cầu trước</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Compact</th>
        <th class="p-3 border-b font-semibold">Sedan</th>
        <th class="p-3 border-b font-semibold">SUV</th>
        <th class="p-3 border-b font-semibold">Coupe</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Kích thước</td><td class="p-3 border-r">Nhỏ gọn</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Lớn</td><td class="p-3">Nhỏ</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiêu hao nhiên liệu</td><td class="p-3 border-r">Rất thấp</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Thấp</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Giá thành</td><td class="p-3 border-r">Rẻ nhất</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Cao</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Dễ sử dụng</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Tốt</td></tr>
      <tr><td class="p-3 border-r font-medium">Không gian</td><td class="p-3 border-r">Hẹp</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Rộng</td><td class="p-3">Hẹp</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Xe compact là lựa chọn phù hợp cho người sống ở đô thị, có ngân sách vừa phải và ưu tiên sự linh hoạt, tiết kiệm chi phí.</p>
`,
  },
];
