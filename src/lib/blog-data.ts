
import type { BlogPost } from './types';

const features: { title: string; excerpt: string; content: string, aiHint: string }[] = [
  {
    title: '3 hàng ghế',
    excerpt: 'Khám phá sự tiện nghi và rộng rãi của những chiếc xe được trang bị 3 hàng ghế, lựa chọn lý tưởng cho các gia đình đông thành viên.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Tính năng 3 hàng ghế mang đến không gian ngồi linh hoạt và rộng rãi, có khả năng chở đến 7 hoặc 8 hành khách. Đây là một trong những trang bị quan trọng nhất đối với các dòng xe SUV và MPV dành cho gia đình.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Tối đa hóa không gian:</strong> Dễ dàng chở thêm thành viên gia đình, bạn bè trong những chuyến đi.</li>
        <li><strong>Linh hoạt:</strong> Hàng ghế thứ ba thường có thể gập phẳng, tạo ra không gian chứa đồ cực lớn khi không sử dụng.</li>
        <li><strong>Tăng tính thực dụng:</strong> Giúp chiếc xe của bạn trở nên đa năng hơn, sẵn sàng cho mọi nhu cầu từ đi lại hàng ngày đến những kỳ nghỉ dài.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Với khả năng chở nhiều người và sự linh hoạt trong việc sắp xếp không gian, những chiếc xe có 3 hàng ghế là giải pháp hoàn hảo cho các gia đình hiện đại.</p>
    `,
    aiHint: 'car third row'
  },
  {
    title: '7 chỗ ngồi rộng rãi',
    excerpt: 'Trải nghiệm không gian nội thất thoải mái và rộng rãi với xe 7 chỗ, đảm bảo mọi hành trình đều là những kỷ niệm đáng nhớ.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Những chiếc xe 7 chỗ ngồi rộng rãi được thiết kế để mang lại sự thoải mái tối đa cho tất cả hành khách, ngay cả trong những chuyến đi dài. Không gian được tối ưu hóa từ khoảng để chân đến khoảng không trên đầu.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Thoải mái cho mọi người:</strong> Cung cấp đủ không gian cho 7 người lớn ngồi một cách thoải mái.</li>
        <li><strong>Lý tưởng cho gia đình:</strong> Hoàn hảo cho các gia đình có trẻ em, với không gian để lắp ghế trẻ em và vẫn còn chỗ cho người lớn.</li>
        <li><strong>Hành lý thoải mái:</strong> Ngay cả khi sử dụng cả 7 ghế, vẫn có không gian cho hành lý, phù hợp cho các kỳ nghỉ của gia đình.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Một chiếc xe 7 chỗ rộng rãi là sự đầu tư thông minh cho những ai đặt sự thoải mái và tính thực dụng của gia đình lên hàng đầu.</p>
    `,
    aiHint: 'spacious car interior'
  },
  {
    title: 'Buồng lái ảo Virtual Cockpit',
    excerpt: 'Đắm mình vào công nghệ tương lai với Buồng lái ảo Virtual Cockpit, nơi mọi thông tin hiển thị sắc nét và tùy biến theo ý muốn.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Buồng lái ảo (Virtual Cockpit) là một màn hình kỹ thuật số hoàn toàn thay thế cho cụm đồng hồ cơ truyền thống. Nó cho phép hiển thị đa dạng thông tin từ tốc độ, vòng tua máy, đến bản đồ điều hướng và thông tin giải trí.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Hiển thị tùy biến:</strong> Người lái có thể chọn các chế độ hiển thị khác nhau, ưu tiên thông tin quan trọng với họ.</li>
        <li><strong>Tích hợp bản đồ:</strong> Hiển thị bản đồ định vị ngay trước tầm mắt, giúp lái xe an toàn và tiện lợi hơn.</li>
        <li><strong>Hiện đại và sang trọng:</strong> Mang lại vẻ ngoài công nghệ cao và đẳng cấp cho khoang nội thất.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Virtual Cockpit không chỉ là một nâng cấp về mặt thẩm mỹ mà còn là một công cụ mạnh mẽ giúp người lái kiểm soát thông tin và tập trung hơn trên đường.</p>
    `,
    aiHint: 'virtual cockpit dashboard'
  },
  {
    title: 'Bơm nhiệt hiệu quả',
    excerpt: 'Tối ưu hóa phạm vi hoạt động của xe điện ngay cả trong mùa đông khắc nghiệt nhờ công nghệ Bơm nhiệt hiệu quả.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Hệ thống bơm nhiệt trên xe điện là một giải pháp thông minh để sưởi ấm cabin mà không tiêu tốn quá nhiều năng lượng từ pin. Nó hoạt động bằng cách tái sử dụng nhiệt lượng từ môi trường và các bộ phận của xe.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Tăng phạm vi di chuyển:</strong> Giảm đáng kể lượng điện năng tiêu thụ cho việc sưởi ấm, giúp xe đi được xa hơn trong thời tiết lạnh.</li>
        <li><strong>Tiết kiệm năng lượng:</strong> Hiệu quả hơn nhiều so với hệ thống sưởi điện trở truyền thống.</li>
        <li><strong>Thân thiện với môi trường:</strong> Giảm gánh nặng cho hệ thống pin và tối ưu hóa hiệu suất tổng thể của xe.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Đối với xe điện, hệ thống bơm nhiệt là một tính năng cực kỳ giá trị, giúp giải quyết bài toán về phạm vi hoạt động trong điều kiện thời tiết không thuận lợi.</p>
    `,
    aiHint: 'electric car winter'
  },
  {
    title: 'Bảng đồng hồ kỹ thuật số',
    excerpt: 'Trải nghiệm sự rõ ràng và hiện đại với Bảng đồng hồ kỹ thuật số, mang đến một giao diện trực quan và dễ dàng theo dõi.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Bảng đồng hồ kỹ thuật số là một màn hình LCD hoặc LED thay thế cho các đồng hồ analog truyền thống, cung cấp thông tin về tốc độ, quãng đường, và các chỉ số khác của xe một cách sinh động.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Rõ ràng và sắc nét:</strong> Thông tin được hiển thị với độ phân giải cao, dễ đọc trong mọi điều kiện ánh sáng.</li>
        <li><strong>Giao diện hiện đại:</strong> Nâng cao tính thẩm mỹ và công nghệ cho khoang lái.</li>
        <li><strong>Hiển thị đa thông tin:</strong> Có thể tích hợp các cảnh báo, thông tin về chuyến đi, và các dữ liệu quan trọng khác.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Bảng đồng hồ kỹ thuật số là một bước tiến so với đồng hồ cơ, mang lại trải nghiệm lái xe thông minh và hiện đại hơn.</p>
    `,
    aiHint: 'digital car dashboard'
  },
  {
    title: 'Cánh gió sau thích ứng',
    excerpt: 'Tối ưu hóa lực ép và tính khí động học ở mọi tốc độ với công nghệ Cánh gió sau thích ứng, một biểu tượng của xe hiệu suất cao.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Cánh gió sau thích ứng là một bộ phận khí động học có khả năng tự động thay đổi góc nghiêng hoặc vị trí tùy thuộc vào tốc độ của xe và chế độ lái được chọn.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Tăng lực ép xuống mặt đường (Downforce):</strong> Khi xe chạy ở tốc độ cao, cánh gió sẽ nâng lên để tăng độ bám đường và sự ổn định.</li>
        <li><strong>Giảm lực cản:</strong> Ở tốc độ thấp hoặc khi không cần thiết, cánh gió sẽ thu lại để giảm lực cản không khí, giúp tiết kiệm nhiên liệu.</li>
        <li><strong>Tăng hiệu quả phanh:</strong> Một số hệ thống có thể điều chỉnh cánh gió để hoạt động như một phanh không khí, hỗ trợ giảm tốc.</li>
        <li><strong>Thẩm mỹ và công nghệ:</strong> Là một điểm nhấn thiết kế, thể hiện đẳng cấp công nghệ của chiếc xe.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Cánh gió sau thích ứng là một minh chứng cho sự kết hợp hoàn hảo giữa kỹ thuật và thiết kế, mang lại cả hiệu suất lẫn phong cách cho những chiếc xe thể thao hàng đầu.</p>
    `,
    aiHint: 'car active spoiler'
  },
  {
    title: 'Cảnh báo điểm mù',
    excerpt: 'An toàn hơn trên mọi hành trình với hệ thống Cảnh báo điểm mù, người trợ lý đáng tin cậy giúp bạn phát hiện các phương tiện khuất tầm nhìn.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Hệ thống Cảnh báo điểm mù (Blind Spot Monitoring - BSM) sử dụng các cảm biến radar hoặc camera để phát hiện các phương tiện đang di chuyển trong khu vực điểm mù của người lái, thường là ở hai bên hông và phía sau xe.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Tăng cường an toàn khi chuyển làn:</strong> Hệ thống sẽ cảnh báo bằng đèn báo trên gương chiếu hậu hoặc âm thanh nếu có xe trong điểm mù khi bạn bật xi-nhan.</li>
        <li><strong>Giảm căng thẳng cho người lái:</strong> Giúp người lái tự tin hơn khi di chuyển trên đường cao tốc đông đúc.</li>
        <li><strong>Phòng tránh va chạm:</strong> Là một trong những tính năng an toàn chủ động quan trọng giúp ngăn ngừa các tai nạn do không quan sát được.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Cảnh báo điểm mù là một tính năng an toàn không thể thiếu trên các mẫu xe hiện đại, giúp bảo vệ bạn và những người xung quanh.</p>
    `,
    aiHint: 'blind spot monitoring'
  },
  {
    title: 'Dẫn động 4 bánh toàn thời gian',
    excerpt: 'Trải nghiệm sự ổn định và khả năng bám đường vượt trội trong mọi điều kiện thời tiết với hệ thống Dẫn động 4 bánh toàn thời gian (AWD).',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Hệ thống dẫn động 4 bánh toàn thời gian (All-Wheel Drive - AWD) tự động phân bổ lực kéo đến cả bốn bánh xe. Khác với hệ thống 4x4 gài cầu, AWD hoạt động liên tục và thông minh để tối ưu hóa độ bám đường.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>An toàn trên đường trơn trượt:</strong> Cải thiện đáng kể khả năng kiểm soát trên đường mưa, tuyết hoặc bùn lầy.</li>
        <li><strong>Tăng tốc tốt hơn:</strong> Lực kéo được phân bổ đều giúp xe tăng tốc nhanh và ổn định hơn từ vị trí đứng yên.</li>
        <li><strong>Vào cua ổn định:</strong> Giúp xe bám cua tốt hơn ở tốc độ cao.</li>
        <li><strong>Hoạt động tự động:</strong> Người lái không cần can thiệp, hệ thống sẽ tự điều chỉnh để phù hợp với điều kiện vận hành.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> AWD là một trang bị đắt giá, mang lại sự tự tin và an toàn vượt trội cho người lái, đặc biệt là trên các dòng xe SUV, Crossover và sedan cao cấp.</p>
    `,
    aiHint: 'awd car system'
  },
  {
    title: 'Hệ thống treo khí nén',
    excerpt: 'Tận hưởng sự êm ái tối đa và khả năng tùy chỉnh độ cao gầm xe linh hoạt với công nghệ Hệ thống treo khí nén cao cấp.',
    content: `
      <h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
      <p>Hệ thống treo khí nén (Air Suspension) sử dụng các túi khí có thể bơm phồng hoặc xả hơi thay cho lò xo kim loại truyền thống. Hệ thống này được điều khiển bằng máy tính, cho phép điều chỉnh độ cứng và độ cao của hệ thống treo.</p>
      <h3 class="font-bold text-xl my-4">2. Lợi ích chính</h3>
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li><strong>Êm ái vượt trội:</strong> Có khả năng hấp thụ các chấn động từ mặt đường một cách mượt mà, mang lại sự thoải mái tối đa cho hành khách.</li>
        <li><strong>Tùy chỉnh độ cao gầm:</strong> Người lái có thể nâng cao gầm xe để vượt địa hình hoặc hạ thấp gầm xe để tăng tính khí động học và ổn định ở tốc độ cao.</li>
        <li><strong>Tự động cân bằng tải trọng:</strong> Hệ thống có thể tự điều chỉnh để giữ cho xe luôn ở trạng thái cân bằng, ngay cả khi chở nặng hoặc kéo rơ-moóc.</li>
      </ul>
      <p class="mt-4"><strong>Kết luận:</strong> Hệ thống treo khí nén là một trang bị tiêu chuẩn trên các dòng xe sang và SUV cao cấp, mang đến một trải nghiệm vận hành đẳng cấp, kết hợp hoàn hảo giữa sự thoải mái và tính linh hoạt.</p>
    `,
    aiHint: 'air suspension car'
  }
];

const featureBlogPosts: BlogPost[] = features.map(feature => ({
  slug: feature.title.toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/đ/g, "d")
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-'),
  title: feature.title,
  author: 'Chuyên gia TimeCarsAuto',
  date: '25/07/2024',
  image: `https://placehold.co/800x450.png?text=${encodeURIComponent(feature.title)}`,
  aiHint: feature.aiHint,
  excerpt: feature.excerpt,
  content: feature.content,
  category: 'Tính năng',
}));


export const blogPosts: BlogPost[] = [
  ...featureBlogPosts,
  {
    slug: 'dau-diesel-so-sanh',
    title: 'Dầu Diesel – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Xăng, Điện, Hybrid',
    author: 'Chuyên gia TimeCar',
    date: '17/07/2024',
    image: 'https://placehold.co/800x450.png?text=Dau+Diesel',
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
`,
    category: 'Loại nhiên liệu',
  },
  {
    slug: 'dong-co-xang-so-sanh',
    title: 'Xăng – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Diesel, Điện, Hybrid',
    author: 'Chuyên gia TimeCar',
    date: '18/07/2024',
    image: 'https://placehold.co/800x450.png?text=Dong+co+xang',
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
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiêu hao nhiên liệu cao hơn Diesel.</strong></li>
  <li><strong>Thải ra nhiều khí CO2 hơn.</strong></li>
  <li><strong>Hiệu suất tải nặng kém hơn Diesel.</strong></li>
  <li><strong>Tuổi thọ máy thấp hơn máy dầu.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
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
`,
    category: 'Loại nhiên liệu',
  },
  {
    slug: 'xe-hybrid-so-sanh',
    title: 'Hybrid – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Xăng, Diesel, Điện',
    author: 'Chuyên gia TimeCar',
    date: '19/07/2024',
    image: 'https://placehold.co/800x450.png?text=Xe+Hybrid',
    aiHint: 'hybrid car engine',
    excerpt: 'Xe Hybrid là sự kết hợp giữa động cơ xăng và mô-tơ điện, giúp tối ưu hiệu suất sử dụng nhiên liệu và giảm thiểu khí thải.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Xe Hybrid là sự kết hợp giữa động cơ xăng và mô-tơ điện, giúp tối ưu hiệu suất sử dụng nhiên liệu và giảm thiểu khí thải.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiết kiệm nhiên liệu vượt trội:</strong> Nhờ sử dụng điện ở tốc độ thấp.</li>
  <li><strong>Giảm khí thải CO2:</strong> Thân thiện với môi trường.</li>
  <li><strong>Chuyển đổi linh hoạt</strong> giữa động cơ điện và xăng.</li>
  <li><strong>Không cần sạc ngoài</strong> (với hybrid thường).</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Giá thành cao hơn xe xăng/diesel.</strong></li>
  <li><strong>Chi phí sửa chữa và linh kiện cao.</strong></li>
  <li><strong>Hiệu suất tải nặng không bằng Diesel.</strong></li>
  <li><strong>Phụ thuộc vào công nghệ</strong> – khó sửa tại gara nhỏ.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Xăng + điện</li>
  <li><strong>Hệ thống:</strong> Động cơ đốt trong + mô-tơ điện + pin</li>
  <li><strong>Cơ chế hoạt động:</strong> Luân phiên sử dụng điện và xăng tùy điều kiện</li>
  <li><strong>Tiêu hao nhiên liệu:</strong> ~3-5L/100km</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
`,
    category: 'Loại nhiên liệu',
  },
  {
    slug: 'xe-dien-so-sanh',
    title: 'Xe Điện – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Xăng, Diesel, Hybrid',
    author: 'Chuyên gia TimeCar',
    date: '20/07/2024',
    image: 'https://placehold.co/800x450.png?text=Xe+Dien',
    aiHint: 'electric car charging',
    excerpt: 'Xe điện là xu hướng tương lai nhờ khả năng vận hành êm ái, không phát thải và chi phí sử dụng thấp.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Xe điện là xu hướng tương lai nhờ khả năng vận hành êm ái, không phát thải và chi phí sử dụng thấp.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Không khí thải</strong> – thân thiện môi trường.</li>
  <li><strong>Chi phí vận hành thấp:</strong> Không cần xăng, bảo trì đơn giản.</li>
  <li><strong>Vận hành êm ái</strong>, tăng tốc tốt ở tốc độ thấp.</li>
  <li><strong>Không cần bảo dưỡng động cơ truyền thống.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Giá thành cao.</strong></li>
  <li><strong>Thời gian sạc lâu.</strong></li>
  <li><strong>Cần trạm sạc</strong> – không phù hợp ở khu vực thiếu hạ tầng.</li>
  <li><strong>Phạm vi di chuyển hạn chế.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Nhiên liệu:</strong> Điện (sạc từ nguồn AC/DC)</li>
  <li><strong>Pin:</strong> Lithium-ion hoặc tương đương</li>
  <li><strong>Cơ chế hoạt động:</strong> Hoàn toàn bằng mô-tơ điện</li>
  <li><strong>Tiêu hao năng lượng:</strong> ~15-20 kWh/100km</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
`,
    category: 'Loại nhiên liệu',
  },
  {
    slug: 'hop-so-tu-dong-so-sanh',
    title: 'Hộp Số Tự Động – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Số Tay',
    author: 'Chuyên gia TimeCar',
    date: '21/07/2024',
    image: 'https://placehold.co/800x450.png?text=Hop+so+tu+dong',
    aiHint: 'automatic transmission gear',
    excerpt: 'Hộp số tự động (Automatic Transmission) ngày càng phổ biến nhờ vào sự tiện lợi và dễ sử dụng, đặc biệt ở môi trường đô thị đông đúc.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Hộp số tự động (Automatic Transmission) ngày càng phổ biến nhờ vào sự tiện lợi và dễ sử dụng, đặc biệt ở môi trường đô thị đông đúc.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Dễ lái, không cần côn:</strong> Phù hợp cho người mới.</li>
  <li><strong>Giảm mệt mỏi</strong> khi lái xe đường dài hoặc kẹt xe.</li>
  <li>Khả năng <strong>sang số mượt mà.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiêu hao nhiên liệu nhiều hơn (đời cũ).</strong></li>
  <li><strong>Chi phí bảo trì, sửa chữa cao hơn.</strong></li>
  <li><strong>Giá xe cao hơn bản số tay.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Loại hộp số:</strong> AT, CVT, DCT…</li>
  <li><strong>Cơ chế hoạt động:</strong> Dựa vào áp suất dầu và điện tử để tự động chuyển số.</li>
  <li><strong>Bảo trì định kỳ:</strong> Thay dầu hộp số sau 40.000–80.000km</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
`,
    category: 'Hộp số',
  },
  {
    slug: 'hop-so-tay-so-sanh',
    title: 'Hộp Số Tay – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Số Tự Động',
    author: 'Chuyên gia TimeCar',
    date: '27/07/2024',
    image: 'https://placehold.co/800x450.png?text=Hop+so+tay',
    aiHint: 'manual transmission stick',
    excerpt: 'Hộp số tay (Manual Transmission) là loại truyền thống, yêu cầu người lái thao tác côn và cần số, được ưa chuộng bởi những người thích cảm giác lái chân thực.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Hộp số tay (Manual Transmission) là loại truyền thống, yêu cầu người lái thao tác côn và cần số. Tuy không còn phổ biến như trước, nhưng hộp số tay vẫn được ưa chuộng ở một số nhóm người dùng thích cảm giác lái chân thực hoặc để tiết kiệm chi phí.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Chi phí thấp: Xe số tay thường rẻ hơn số tự động.</li>
  <li>Bảo trì đơn giản, ít hỏng vặt.</li>
  <li>Tiết kiệm nhiên liệu hơn (ở các mẫu cũ).</li>
  <li>Kiểm soát tốt hơn trong một số tình huống (leo dốc, chở nặng).</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Đòi hỏi kỹ năng lái xe tốt hơn.</li>
  <li>Gây mệt mỏi khi lái trong thành phố, kẹt xe.</li>
  <li>Khó bán lại hơn do nhu cầu thị trường thấp.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Loại hộp số: 5 cấp hoặc 6 cấp (tùy xe)</li>
  <li>Cơ chế: Lái xe điều khiển ly hợp (côn) và sang số bằng tay</li>
  <li>Không có hệ thống điều khiển điện tử hộp số</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">Số Tay</th>
        <th class="p-3 border-b font-semibold">Số Tự Động</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Dễ sử dụng</td><td class="p-3 border-r">Kém hơn</td><td class="p-3">Rất tốt</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Kiểm soát khi lái</td><td class="p-3 border-r">Cao</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Tốt hơn (đời cũ)</td><td class="p-3">Tốt hơn (đời mới CVT)</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bảo trì</td><td class="p-3 border-r">Rẻ, đơn giản</td><td class="p-3">Đắt, cần kỹ thuật viên</td></tr>
      <tr><td class="p-3 border-r font-medium">Giá thành xe</td><td class="p-3 border-r">Thấp hơn</td><td class="p-3">Cao hơn</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> Hộp số tay phù hợp với người yêu thích trải nghiệm lái, hoặc muốn tiết kiệm chi phí. Tuy nhiên, với điều kiện giao thông đô thị hiện nay, số tự động ngày càng chiếm ưu thế nhờ tính tiện lợi.</p>
`,
    category: 'Hộp số',
  },
  {
    slug: 'dan-dong-4x4-so-sanh',
    title: 'Dẫn Động 4x4 – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với AWD, Cầu Trước, Cầu Sau',
    author: 'Chuyên gia TimeCar',
    date: '22/07/2024',
    image: 'https://placehold.co/800x450.png?text=Dan+dong+4x4',
    aiHint: '4x4 drivetrain offroad',
    excerpt: 'Hệ thống dẫn động 4x4 được thiết kế cho khả năng vượt địa hình, thường xuất hiện trên xe bán tải, SUV off-road.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Hệ thống dẫn động 4x4 được thiết kế cho khả năng vượt địa hình, thường xuất hiện trên xe bán tải, SUV off-road.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Vượt địa hình tốt:</strong> Phân phối lực kéo 4 bánh.</li>
  <li><strong>Độ bám đường cao</strong> trong điều kiện trơn trượt.</li>
  <li><strong>Chịu tải tốt</strong> khi off-road hoặc đường đèo.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiêu hao nhiên liệu nhiều hơn.</strong></li>
  <li><strong>Trọng lượng xe nặng hơn.</strong></li>
  <li><strong>Không cần thiết</strong> trong điều kiện đường phố.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Cơ chế:</strong> Chuyển đổi giữa 2WD và 4WD, có chế độ gài cầu.</li>
  <li><strong>Ứng dụng:</strong> Off-road, đường đá, tuyết, dốc cao.</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
`,
    category: 'Dẫn động',
  },
   {
    slug: 'dan-dong-awd-so-sanh',
    title: 'Dẫn Động AWD – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với 4x4, Cầu Trước, Cầu Sau',
    author: 'Chuyên gia TimeCar',
    date: '28/07/2024',
    image: 'https://placehold.co/800x450.png?text=Dan+dong+AWD',
    aiHint: 'awd system car',
    excerpt: 'AWD (All-Wheel Drive) là hệ dẫn động toàn thời gian, phân bổ lực kéo tới cả bốn bánh tự động tùy điều kiện vận hành. Phổ biến trên SUV và crossover hiện đại.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>AWD (All-Wheel Drive) là hệ dẫn động toàn thời gian, phân bổ lực kéo tới cả bốn bánh tự động tùy điều kiện vận hành. Phổ biến trên SUV và crossover hiện đại.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Bám đường tốt hơn, đặc biệt trong điều kiện trơn trượt.</strong></li>
  <li><strong>Tự động điều chỉnh mà không cần can thiệp từ người lái.</strong></li>
  <li><strong>Vận hành êm và ổn định.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Tiêu hao nhiên liệu hơn FWD.</strong></li>
  <li><strong>Chi phí bảo trì, sửa chữa cao.</strong></li>
  <li><strong>Trọng lượng xe nặng hơn.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
    <li><strong>Hệ thống truyền động:</strong> Phân bổ lực kéo 4 bánh qua vi sai trung tâm hoặc điện tử.</li>
    <li><strong>Tự động điều chỉnh theo điều kiện mặt đường.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">AWD</th>
        <th class="p-3 border-b font-semibold">4x4</th>
        <th class="p-3 border-b font-semibold">FWD (Cầu trước)</th>
        <th class="p-3 border-b font-semibold">RWD (Cầu sau)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tự động</td><td class="p-3 border-r">Có</td><td class="p-3 border-r">Không (phải gài cầu)</td><td class="p-3 border-r">Có</td><td class="p-3">Có</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bám đường</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Địa hình</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Kém</td><td class="p-3">Kém</td></tr>
      <tr><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Kém</td><td class="p-3 border-r">Tốt nhất</td><td class="p-3">Trung bình</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> AWD là lựa chọn lý tưởng cho người cần sự an toàn, ổn định và tiện lợi khi di chuyển ở mọi điều kiện đường sá, nhưng không cần khả năng off-road mạnh như 4x4.</p>
`,
    category: 'Dẫn động',
  },
  {
    slug: 'dan-dong-fwd-so-sanh',
    title: 'Dẫn Động Cầu Trước (FWD) – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với AWD, RWD',
    author: 'Chuyên gia TimeCar',
    date: '29/07/2024',
    image: 'https://placehold.co/800x450.png?text=Dan+dong+FWD',
    aiHint: 'fwd car drivetrain',
    excerpt: 'FWD (Front-Wheel Drive) là hệ dẫn động phổ biến nhất ở xe du lịch hiện đại. Lực kéo truyền đến 2 bánh trước.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>FWD (Front-Wheel Drive) là hệ dẫn động phổ biến nhất ở xe du lịch hiện đại. Lực kéo truyền đến 2 bánh trước.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Chi phí sản xuất và bảo trì thấp.</strong></li>
  <li><strong>Tiết kiệm nhiên liệu.</strong></li>
  <li><strong>Thiết kế nhỏ gọn, tiết kiệm không gian.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Khả năng điều khiển kém hơn khi tải nặng hoặc tăng tốc mạnh.</strong></li>
  <li><strong>Dễ mất lái trong các tình huống cực đoan.</strong></li>
  <li><strong>Không phù hợp với xe thể thao hoặc xe hiệu suất cao.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Lực kéo:</strong> Truyền đến 2 bánh trước</li>
  <li><strong>Bố trí động cơ:</strong> Thường đặt ngang</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">FWD</th>
        <th class="p-3 border-b font-semibold">AWD</th>
        <th class="p-3 border-b font-semibold">RWD</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Tiết kiệm nhiên liệu</td><td class="p-3 border-r">Tốt nhất</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Bám đường</td><td class="p-3 border-r">Tốt (đường khô)</td><td class="p-3 border-r">Rất tốt</td><td class="p-3">Kém (trơn trượt)</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Chi phí bảo trì</td><td class="p-3 border-r">Thấp</td><td class="p-3 border-r">Cao</td><td class="p-3">Trung bình</td></tr>
      <tr><td class="p-3 border-r font-medium">Khả năng vận hành</td><td class="p-3 border-r">Trung bình</td><td class="p-3 border-r">Cao</td><td class="p-3">Cao (tốc độ cao)</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> FWD phù hợp với xe đô thị, xe phổ thông, nơi tiết kiệm chi phí và nhiên liệu là ưu tiên hàng đầu.</p>
`,
    category: 'Dẫn động',
  },
  {
    slug: 'dan-dong-rwd-so-sanh',
    title: 'Dẫn Động Cầu Sau (RWD) – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với AWD, FWD',
    author: 'Chuyên gia TimeCar',
    date: '30/07/2024',
    image: 'https://placehold.co/800x450.png?text=Dan+dong+RWD',
    aiHint: 'rwd car drifting',
    excerpt: 'RWD (Rear-Wheel Drive) là hệ dẫn động truyền thống, được ưa chuộng trong các dòng xe thể thao và xe sang nhờ phân bổ trọng lượng tối ưu.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>RWD (Rear-Wheel Drive) là hệ dẫn động truyền thống, được ưa chuộng trong các dòng xe thể thao và xe sang nhờ phân bổ trọng lượng tối ưu.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Phân bổ trọng lượng tốt hơn – cân bằng xe khi vào cua.</strong></li>
  <li><strong>Tăng tốc mượt mà hơn.</strong></li>
  <li><strong>Thích hợp cho xe hiệu suất cao.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Kém bám đường khi trời mưa hoặc trơn trượt.</strong></li>
  <li><strong>Dễ mất kiểm soát nếu không có hệ thống hỗ trợ điện tử.</strong></li>
  <li><strong>Không phù hợp đường tuyết, dốc, địa hình khó.</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li><strong>Lực kéo:</strong> Truyền đến 2 bánh sau</li>
  <li><strong>Thường đi với hệ thống treo sau độc lập</strong></li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
<div class="overflow-x-auto rounded-lg border">
  <table class="w-full text-left border-collapse">
    <thead>
      <tr class="bg-muted">
        <th class="p-3 border-b font-semibold">Tiêu chí</th>
        <th class="p-3 border-b font-semibold">RWD</th>
        <th class="p-3 border-b font-semibold">AWD</th>
        <th class="p-3 border-b font-semibold">FWD</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b"><td class="p-3 border-r font-medium">Cảm giác lái</td><td class="p-3 border-r">Rất tốt</td><td class="p-3 border-r">Tốt</td><td class="p-3">Trung bình</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Địa hình khó</td><td class="p-3 border-r">Kém</td><td class="p-3 border-r">Tốt</td><td class="p-3">Kém</td></tr>
      <tr class="border-b"><td class="p-3 border-r font-medium">Khả năng kiểm soát</td><td class="p-3 border-r">Tốt (đường khô)</td><td class="p-3 border-r">Rất tốt</td><td class="p-3">Trung bình</td></tr>
      <tr><td class="p-3 border-r font-medium">Tăng tốc</td><td class="p-3 border-r">Tốt</td><td class="p-3 border-r">Trung bình</td><td class="p-3">Trung bình</td></tr>
    </tbody>
  </table>
</div>
<p class="mt-4"><strong>Kết luận:</strong> RWD là lựa chọn cho người thích cảm giác lái thể thao, tuy nhiên cần kỹ năng điều khiển tốt và hạn chế sử dụng trên đường trơn trượt.</p>
`,
    category: 'Dẫn động',
  },
  {
    slug: 'suv-so-sanh',
    title: 'SUV – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Sedan, Coupe, Compact',
    author: 'Chuyên gia TimeCar',
    date: '23/07/2024',
    image: 'https://placehold.co/800x450.png?text=Xe+SUV',
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
`,
    category: 'Loại xe',
  },
  {
    slug: 'sedan-so-sanh',
    title: 'Sedan – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với SUV, Coupe, Compact',
    author: 'Chuyên gia TimeCar',
    date: '24/07/2024',
    image: 'https://placehold.co/800x450.png?text=Xe+Sedan',
    aiHint: 'sedan car street',
    excerpt: 'Sedan là kiểu xe 4 cửa truyền thống, phổ biến nhất trên thị trường nhờ thiết kế cân đối, gầm thấp, và phù hợp nhiều mục đích.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Sedan là kiểu xe 4 cửa truyền thống, phổ biến nhất trên thị trường nhờ thiết kế cân đối, gầm thấp, tiết kiệm nhiên liệu và phù hợp nhiều mục đích sử dụng.</p>

<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Vận hành êm ái và ổn định trên đường bằng.</li>
  <li>Thiết kế sang trọng, phù hợp cá nhân và gia đình.</li>
  <li>Tiết kiệm nhiên liệu hơn SUV.</li>
</ul>

<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không phù hợp đường địa hình xấu.</li>
  <li>Không gian chứa đồ hạn chế hơn SUV.</li>
  <li>Tầm nhìn thấp hơn các dòng xe gầm cao.</li>
</ul>

<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Kiểu dáng: 4 cửa, 5 chỗ ngồi</li>
  <li>Chiều cao gầm: 130–160mm</li>
  <li>Dẫn động: FWD hoặc RWD</li>
</ul>

<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
    category: 'Loại xe',
  },
  {
    slug: 'coupe-so-sanh',
    title: 'Coupe – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Sedan, SUV, Compact',
    author: 'Chuyên gia TimeCar',
    date: '25/07/2024',
    image: 'https://placehold.co/800x450.png?text=Xe+Coupe',
    aiHint: 'sports coupe sunset',
    excerpt: 'Coupe là dòng xe 2 cửa, thiên về thiết kế thể thao, trẻ trung và cá tính, phù hợp cho cá nhân hoặc cặp đôi.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Coupe là dòng xe 2 cửa, thiên về thiết kế thể thao, trẻ trung và cá tính. Phù hợp cho cá nhân hoặc cặp đôi yêu thích tốc độ và phong cách.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Thiết kế đẹp, thể thao, thu hút ánh nhìn.</li>
  <li>Thường có hiệu suất động cơ cao.</li>
  <li>Tăng tốc tốt và cảm giác lái hứng khởi.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không gian ghế sau và khoang hành lý hạn chế.</li>
  <li>Không phù hợp cho gia đình.</li>
  <li>Giá cao hơn sedan cùng cấu hình.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Kiểu dáng: 2 cửa, 2–4 chỗ ngồi</li>
  <li>Thiết kế: Thấp, trọng tâm xe thấp</li>
  <li>Thường đi kèm động cơ công suất lớn</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
    category: 'Loại xe',
  },
  {
    slug: 'xe-compact-so-sanh',
    title: 'Xe Compact – Ưu điểm, Nhược điểm, Chi tiết Kỹ thuật & So sánh với Sedan, SUV, Coupe',
    author: 'Chuyên gia TimeCar',
    date: '26/07/2024',
    image: 'https://placehold.co/800x450.png?text=Xe+Compact',
    aiHint: 'compact car city',
    excerpt: 'Xe Compact là dòng xe cỡ nhỏ, gọn gàng, thích hợp đi trong thành phố và thường có giá thành rẻ.',
    content: `
<h3 class="font-bold text-xl my-4">1. Giới thiệu</h3>
<p>Xe Compact là dòng xe cỡ nhỏ, gọn gàng, thích hợp đi trong thành phố và thường có giá thành rẻ.</p>
<h3 class="font-bold text-xl my-4">2. Ưu điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Kích thước nhỏ, dễ quay đầu, đậu xe.</li>
  <li>Tiết kiệm nhiên liệu.</li>
  <li>Giá thành hợp lý.</li>
</ul>
<h3 class="font-bold text-xl my-4">3. Nhược điểm:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Không gian hạn chế cho hành khách và hành lý.</li>
  <li>Thiếu tiện nghi cao cấp ở các dòng giá rẻ.</li>
  <li>Không phù hợp đi xa hoặc chở nhiều người.</li>
</ul>
<h3 class="font-bold text-xl my-4">4. Chi tiết kỹ thuật:</h3>
<ul class="list-disc list-inside space-y-2 pl-4">
  <li>Kích thước: Nhỏ, 4–5 chỗ</li>
  <li>Gầm xe: Trung bình (150–170mm)</li>
  <li>Thường dùng dẫn động cầu trước</li>
</ul>
<h3 class="font-bold text-xl my-4">5. So sánh:</h3>
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
    category: 'Loại xe',
  },
];
