interface UserV {
  v: string;
  n: string;
}

export interface Products {
  id: number;
  name: string;
  title: string;
  authorAvatar: string;
  author: string;
  date: string;
  description: string;
  image: string;
}

export const userV: UserV[] = [
  {
    v: "1",
    n: "User 1",
  },
  {
    v: "2",
    n: "User 2",
  },
  {
    v: "3",
    n: "User 3",
  },
  {
    v: "4",
    n: "User 4",
  },
  {
    v: "5",
    n: "User 5",
  },
  {
    v: "6",
    n: "User 6",
  },
  {
    v: "7",
    n: "User 7",
  },
  {
    v: "8",
    n: "User 8",
  },
  {
    v: "9",
    n: "User 9",
  },
  {
    v: "10",
    n: "User 10",
  },
];

const products: Products[] = [
  {
    id: 1,
    name: "Sản phẩm công nghệ",
    title: "Laptop Cao Cấp 2024",
    authorAvatar: "https://ui-avatars.com/api/?name=Anh+Minh&background=random",
    author: "Anh Minh",
    date: "2024-01-15",
    description:
      "Laptop mạnh mẽ với Vi xử lý Intel Core i9, RAM 32GB, SSD 1TB. Hiệu suất vượt trội cho công việc và gaming.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "Điện thoại thông minh",
    title: "Smartphone flagship 2024",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Thu+Trang&background=random",
    author: "Thu Trang",
    date: "2024-01-20",
    description:
      "Điện thoại với màn hình AMOLED 120Hz, camera 200MP, pin 5000mAh, hỗ trợ sạc nhanh 120W.",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "Tai nghe không dây",
    title: "TWS earbuds Premium",
    authorAvatar: "https://ui-avatars.com/api/?name=Duc+Anh&background=random",
    author: "Đức Anh",
    date: "2024-01-25",
    description:
      "Tai nghe true wireless với chất âm cân bằng, khử tiếng ồn chủ động, thời lượng pin 8 giờ.",
    image: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    name: "Đồng hồ thông minh",
    title: "SmartWatch Pro Series",
    authorAvatar: "https://ui-avatars.com/api/?name=Lan+Anh&background=random",
    author: "Lan Anh",
    date: "2024-02-01",
    description:
      "Đồng hồ thông minh với timon AMOLED, theo dõi sức khỏe, GPS tích hợp, chống nước IP68.",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    name: "Máy ảnh kỹ thuật số",
    title: "Camera mirrorless 50MP",
    authorAvatar: "https://ui-avatars.com/api/?name=Hoang+Vu&background=random",
    author: "Hoàng Vũ",
    date: "2024-02-05",
    description:
      "Máy ảnh mirrorless chuyên nghiệp với cảm biến 50MP, quay video 8K, lấy tiêu điểm AI.",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    name: "Loa bluetooth di động",
    title: "Portable Speaker Waterproof",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Nhat+Long&background=random",
    author: "Nhật Long",
    date: "2024-02-10",
    description:
      "Loa di động với công suất 360W, chống nước IP67, pin 24 giờ, kết nối Bluetooth 5.3.",
    image: "https://picsum.photos/400/300?random=6",
  },
  {
    id: 7,
    name: "Bàn phím cơ gaming",
    title: "Mechanical Keyboard RGB",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Khanh+Linh&background=random",
    author: "Khánh Linh",
    date: "2024-02-15",
    description:
      "Bàn phím cơ với switch RGB, có dây/không dây, macro keys, đèn nền RGB custom.",
    image: "https://picsum.photos/400/300?random=7",
  },
  {
    id: 8,
    name: "Chuột gaming chuyên dụng",
    title: "Gaming Mouse Pro",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Minh+Tuan&background=random",
    author: "Minh Tuấn",
    date: "2024-02-20",
    description:
      "Chuột gaming với cảm biến 8000 DPI, trọng lượng 69g, pin 70 giờ, tuỳ chỉnh DPI nhanh.",
    image: "https://picsum.photos/400/300?random=8",
  },
  {
    id: 9,
    name: "Màn hình máy tính",
    title: "4K UHD Monitor 144Hz",
    authorAvatar: "https://ui-avatars.com/api/?name=Hang+Nga&background=random",
    author: "Hằng Nga",
    date: "2024-02-25",
    description:
      "Màn hình 4K 32 inch, 144Hz, 1ms response time, HDR1000, full array dimming.",
    image: "https://picsum.photos/400/300?random=9",
  },
  {
    id: 10,
    name: "Bộ nguồn máy tính",
    title: "Modular Power Supply 1200W",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Phong+Duc&background=random",
    author: "Phong Đức",
    date: "2024-03-01",
    description:
      "Nguồn điện modular 1200W, hiệu suất 80+ Gold, công nghệ PFC chủ động.",
    image: "https://picsum.photos/400/300?random=10",
  },
  {
    id: 11,
    name: "Ổ cứng SSD NVMe",
    title: "NVMe SSD 2TB Gen4",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Linh+Phong&background=random",
    author: "Linh Phong",
    date: "2024-03-05",
    description:
      "Ổ cứng SSD NVMe M.2 2TB, tốc độ 7000MB/s, nhiệt độ thấp, tuổi thọ cao.",
    image: "https://picsum.photos/400/300?random=11",
  },
  {
    id: 12,
    name: "Bộ nhớ RAM DDR5",
    title: "RAM Memory 64GB DDR5",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Ngan+Huong&background=random",
    author: "Ngân Hương",
    date: "2024-03-10",
    description:
      "Bộ nhớ RAM DDR5 64GB (2x32GB), tốc độ 6000MHz, latency thấp 30ns.",
    image: "https://picsum.photos/400/300?random=12",
  },
  {
    id: 13,
    name: "Card đồ họa NVIDIA",
    title: "Graphics Card RTX 4090",
    authorAvatar: "https://ui-avatars.com/api/?name=Tuan+Anh&background=random",
    author: "Tuấn Anh",
    date: "2024-03-15",
    description:
      "Card đồ họa NVIDIA RTX 4090, 24GB VRAM, hiệu suất cao nhất cho gaming và AI.",
    image: "https://picsum.photos/400/300?random=13",
  },
  {
    id: 14,
    name: "Tản nhiệt CPU",
    title: "Liquid CPU Cooler 360mm",
    authorAvatar: "https://ui-avatars.com/api/?name=Vu+Thang&background=random",
    author: "Vũ Thắng",
    date: "2024-03-20",
    description:
      "Tản nhiệt nước 360mm, tương thích nhiều socket, LED RGB, âm thanh yên tĩnh.",
    image: "https://picsum.photos/400/300?random=14",
  },
  {
    id: 15,
    name: "Vỏ máy tính",
    title: "Gaming Case Tempered Glass",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Khoa+Linh&background=random",
    author: "Khoa Linh",
    date: "2024-03-25",
    description:
      "Vỏ máy tính gaming với cảm binh kính cường lực, hỗ trợ tản nhiệt chất lượng.",
    image: "https://picsum.photos/400/300?random=15",
  },
  {
    id: 16,
    name: "Pin dự phòng",
    title: "Power Bank 30000mAh",
    authorAvatar: "https://ui-avatars.com/api/?name=Minh+Duc&background=random",
    author: "Minh Đức",
    date: "2024-04-01",
    description:
      "Pin dự phòng 30000mAh, sạc nhanh 65W, hỗ trợ sạc 3 thiết bị cùng lúc.",
    image: "https://picsum.photos/400/300?random=16",
  },
  {
    id: 17,
    name: "Cáp Type-C nhanh",
    title: "USB-C Cable 5A Fast Charge",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Hang+Minh&background=random",
    author: "Hằng Minh",
    date: "2024-04-05",
    description:
      "Cáp USB-C 5A, hỗ trợ sạc nhanh PD, dây dù bền chắc, độ dài 2m.",
    image: "https://picsum.photos/400/300?random=17",
  },
  {
    id: 18,
    name: "Sạc nhanh USB-C",
    title: "Fast Charger 130W",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Khanh+Duc&background=random",
    author: "Khánh Đức",
    date: "2024-04-10",
    description:
      "Sạc nhanh 130W với chuẩn PD, tương thích iPhone, Android, laptop.",
    image: "https://picsum.photos/400/300?random=18",
  },
  {
    id: 19,
    name: "Đế đỡ laptop",
    title: "Laptop Stand Aluminum",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Trang+Linh&background=random",
    author: "Trắng Linh",
    date: "2024-04-15",
    description:
      "Đế đỡ laptop nhôm, độ cao tuỳ chỉnh, hỗ trợ 15-17 inch, chân chống trượt.",
    image: "https://picsum.photos/400/300?random=19",
  },
  {
    id: 20,
    name: "Webcam 4K",
    title: "4K USB Webcam",
    authorAvatar: "https://ui-avatars.com/api/?name=Long+Duc&background=random",
    author: "Long Đức",
    date: "2024-04-20",
    description:
      "Webcam 4K, auto focus, khử tiếng ồn, góc nhìn 120 độ, tương thích mọi nền tảng.",
    image: "https://picsum.photos/400/300?random=20",
  },
  {
    id: 21,
    name: "Microphone USB",
    title: "Condenser USB Microphone",
    authorAvatar: "https://ui-avatars.com/api/?name=Anh+Tuan&background=random",
    author: "Anh Tuấn",
    date: "2024-04-25",
    description:
      "Microphone condenser, setup đơn giản plug & play, chất lượng âm thanh cao.",
    image: "https://picsum.photos/400/300?random=21",
  },
  {
    id: 22,
    name: "Bộ lọc không khí",
    title: "Air Purifier HEPA",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Huong+Linh&background=random",
    author: "Hương Linh",
    date: "2024-05-01",
    description:
      "Máy lọc không khí với bộ lọc HEPA, hỗ trợ IoT, lắp điều khiển từ xa.",
    image: "https://picsum.photos/400/300?random=22",
  },
  {
    id: 23,
    name: "Bàn làm việc smart",
    title: "Smart Standing Desk",
    authorAvatar: "https://ui-avatars.com/api/?name=Duc+Nam&background=random",
    author: "Đức Nam",
    date: "2024-05-05",
    description:
      "Bàn làm việc tự động điều chỉnh độ cao, motor yên tĩnh, hỗ trợ ghi nhớ.",
    image: "https://picsum.photos/400/300?random=23",
  },
  {
    id: 24,
    name: "Ghế gaming ergonomic",
    title: "Gaming Chair with lumbar",
    authorAvatar: "https://ui-avatars.com/api/?name=Nam+Anh&background=random",
    author: "Nam Anh",
    date: "2024-05-10",
    description:
      "Ghế gaming ergonomic, hỗ trợ lưng, tựa cổ, điều chỉnh độ cao 360 độ.",
    image: "https://picsum.photos/400/300?random=24",
  },
  {
    id: 25,
    name: "Bộ đèn RGB",
    title: "RGB LED Light Strip",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Linh+Tuan&background=random",
    author: "Linh Tuấn",
    date: "2024-05-15",
    description:
      "Đèn LED RGB 16 triệu màu, điều khiển qua app, tương thích Alexa/Google Home.",
    image: "https://picsum.photos/400/300?random=25",
  },
  {
    id: 26,
    name: "Bộ loa 2.1 thùng gỗ",
    title: "Wooden Bluetooth Speaker",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Tuan+Long&background=random",
    author: "Tuấn Long",
    date: "2024-05-20",
    description:
      "Loa 2.1 thùng gỗ, âm bass mạnh, Bluetooth kết nối ổn định, kiểu dáng cổ điển.",
    image: "https://picsum.photos/400/300?random=26",
  },
  {
    id: 27,
    name: "Thiết bị router WiFi 6",
    title: "WiFi 6 Router AX6000",
    authorAvatar: "https://ui-avatars.com/api/?name=Hang+Duc&background=random",
    author: "Hằng Đức",
    date: "2024-05-25",
    description:
      "Router WiFi 6 AX6000, sóng OFDMA, hỗ trợ 200+ thiết bị, tốc độ siêu nhanh.",
    image: "https://picsum.photos/400/300?random=27",
  },
  {
    id: 28,
    name: "Cáp mạng CAT6A",
    title: "Ethernet CAT6A Cable",
    authorAvatar: "https://ui-avatars.com/api/?name=Phuc+Anh&background=random",
    author: "Phúc Anh",
    date: "2024-06-01",
    description:
      "Cáp mạng CAT6A, hỗ trợ 10Gbps, dây dù PVC, kết nối ổn định dài lâu.",
    image: "https://picsum.photos/400/300?random=28",
  },
  {
    id: 29,
    name: "Bộ chia cổng USB",
    title: "USB 3.0 Hub 7-Port",
    authorAvatar: "https://ui-avatars.com/api/?name=Linh+Nam&background=random",
    author: "Linh Nam",
    date: "2024-06-05",
    description:
      "Hub USB 3.0 7 cổng, hỗ trợ sạc, tốc độ 5Gbps, tương thích mọi thiết bị.",
    image: "https://picsum.photos/400/300?random=29",
  },
  {
    id: 30,
    name: "Đầu chuyển đổi HDMI",
    title: "HDMI to DisplayPort Adapter",
    authorAvatar: "https://ui-avatars.com/api/?name=Tran+Duc&background=random",
    author: "Trần Đức",
    date: "2024-06-10",
    description:
      "Bộ chuyển đổi HDMI sang DisplayPort, hỗ trợ 4K@60Hz, plug & play.",
    image: "https://picsum.photos/400/300?random=30",
  },
];

// Thêm 70 sản phẩm nữa để có tổng cộng 100
for (let i = 31; i <= 100; i++) {
  const authors = [
    "Anh Minh",
    "Thu Trang",
    "Đức Anh",
    "Lan Anh",
    "Hoàng Vũ",
    "Nhật Long",
    "Khánh Linh",
    "Minh Tuấn",
    "Hằng Nga",
    "Phong Đức",
    "Linh Phong",
    "Ngân Hương",
    "Tuấn Anh",
    "Vũ Thắng",
    "Khoa Linh",
  ];
  const categories = [
    "Làm việc",
    "Gaming",
    "Vận động",
    "Công nghệ",
    "Giải trí",
    "Học tập",
    "Gia đình",
    "Du lịch",
    "Thể thao",
    "Phát triển",
  ];
  const names = [
    "Sản phẩm công nghệ",
    "Thiết bị điện tử",
    "Phụ kiện máy tính",
    "Sản phẩm thông minh",
    "Sản phẩm chất lượng cao",
    "Sản phẩm bán chạy",
    "Sản phẩm mới nhất",
    "Sản phẩm giảm giá",
    "Sản phẩm độc quyền",
    "Sản phẩm được tìm kiếm",
  ];

  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomYear = 2024 + Math.floor(Math.random() * 2);
  const randomMonth = Math.floor(Math.random() * 12) + 1;
  const randomDay = Math.floor(Math.random() * 28) + 1;
  const dateStr = `${randomYear}-${String(randomMonth).padStart(2, "0")}-${String(randomDay).padStart(2, "0")}`;

  products.push({
    id: i,
    name: randomName,
    title: `${randomCategory} - Sản phẩm ${i}`,
    authorAvatar: `https://ui-avatars.com/api/?name=${randomAuthor.replace(/\s+/g, "+")}&background=random`,
    author: randomAuthor,
    date: dateStr,
    description: `Sản phẩm số ${i} với chất lượng tuyệt vời, hiệu năng cao, thiết kế hiện đại và thời thượng cho ${randomCategory.toLowerCase()}.`,
    image: `https://picsum.photos/400/300?random=${i}`,
  });
}

export const productsData = products;
