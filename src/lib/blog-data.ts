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
  <li><strong>Không gian rộng, chở được nhiều người và hàng.</strong></li>
  <li><strong>Gầm cao dễ đi đường xấu.</strong></li>
  <li><strong>Thường tích hợp dẫn động AWD hoặc 4x4.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiêu hao nhiên liệu cao.</strong></li>
  <li><strong>Khó xoay trở trong phố.</strong></li>
  <li><strong>Giá cao hơn các dòng cùng phân khúc.</strong></li>
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
    title: 'Dẫn Động 4x4 – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với AWD, Cầu Trước, Cầu Sau',
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
  <li><strong>Tiêu hao nhiên liệu nhiều hơn.</strong></li>
  <li><strong>Trọng lượng xe nặng hơn.</strong></li>
  <li><strong>Không cần thiết</strong> trong điều kiện đường phố.</li>
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
  <li><strong>Tiêu hao nhiên liệu nhiều hơn (đời cũ).</strong></li>
  <li><strong>Chi phí bảo trì, sửa chữa cao hơn.</strong></li>
  <li><strong>Giá xe cao hơn bản số tay.</strong></li>
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
  <li><strong>Không cần bảo dưỡng động cơ truyền thống.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Giá thành cao.</strong></li>
  <li><strong>Thời gian sạc lâu.</strong></li>
  <li><strong>Cần trạm sạc</strong> – không phù hợp ở khu vực thiếu hạ tầng.</li>
  <li><strong>Phạm vi di chuyển hạn chế.</strong></li>
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
  <li><strong>Tiết kiệm nhiên liệu vượt trội:</strong> Nhờ sử dụng điện ở tốc độ thấp.</li>
  <li><strong>Giảm khí thải CO2:</strong> Thân thiện với môi trường.</li>
  <li><strong>Chuyển đổi linh hoạt</strong> giữa động cơ điện và xăng.</li>
  <li><strong>Không cần sạc ngoài</strong> (với hybrid thường).</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Giá thành cao hơn xe xăng/diesel.</strong></li>
  <li><strong>Chi phí sửa chữa và linh kiện cao.</strong></li>
  <li><strong>Hiệu suất tải nặng không bằng Diesel.</strong></li>
  <li><strong>Phụ thuộc vào công nghệ</strong> – khó sửa tại gara nhỏ.</li>
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
<h3 class="font-bold text-xl my-4">2. Ưu điểm của động cơ Xăng:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Vận hành êm ái:</strong> Ít rung và ồn hơn so với máy dầu.</li>
  <li><strong>Chi phí đầu tư thấp:</strong> Xe xăng thường rẻ hơn các loại khác.</li>
  <li><strong>Dễ sửa chữa, bảo trì:</strong> Phổ biến nên dễ tiếp cận linh kiện và dịch vụ.</li>
  <li><strong>Tăng tốc nhanh hơn</strong> trong dải tua máy cao.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiêu hao nhiên liệu cao hơn Diesel.</strong></li>
  <li><strong>Thải ra nhiều khí CO2 hơn.</strong></li>
  <li><strong>Hiệu suất tải nặng kém hơn Diesel.</strong></li>
  <li><strong>Tuổi thọ máy thấp hơn máy dầu.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Xăng (RON 92/95)</li>
  <li><strong>Tỷ số nén:</strong> Thấp hơn Diesel, thường từ 8:1 – 12:1</li>
  <li><strong>Cơ chế đánh lửa:</strong> Đánh lửa bằng bugi</li>
  <li><strong>Tiêu hao nhiên liệu trung bình:</strong> ~6-10L/100km tùy loại xe</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh với các loại nhiên liệu khác:</h3>
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
<h3 class="font-bold text-xl my-4">2. Ưu điểm của động cơ Diesel:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiết kiệm nhiên liệu:</strong> Động cơ Diesel có hiệu suất nhiệt cao hơn so với xăng, do đó tiết kiệm nhiên liệu hơn.</li>
  <li><strong>Mô-men xoắn cao:</strong> Rất lý tưởng cho xe tải, SUV và xe cần tải nặng.</li>
  <li><strong>Độ bền cao:</strong> Máy dầu thường có tuổi thọ cao hơn máy xăng.</li>
  <li><strong>Ít tiêu hao nhiên liệu khi chạy xa:</strong> Phù hợp cho xe chạy đường trường.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Chi phí bảo trì cao hơn:</strong> Cấu tạo phức tạp hơn máy xăng.</li>
  <li><strong>Tiếng ồn và độ rung:</strong> Động cơ Diesel thường ồn và rung hơn.</li>
  <li><strong>Khí thải NOx và bụi mịn:</strong> Gây ảnh hưởng đến môi trường nếu không có bộ xử lý khí thải.</li>
  <li><strong>Giá thành ban đầu của xe cao hơn.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Diesel (DO)</li>
  <li><strong>Tỷ số nén:</strong> Cao, khoảng 14:1 – 25:1</li>
  <li><strong>Cơ chế đánh lửa:</strong> Tự đánh lửa bằng áp suất nén</li>
  <li><strong>Tiêu hao nhiên liệu trung bình:</strong> ~5-7L/100km với xe du lịch</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh với các loại nhiên liệu khác:</h3>
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
];
