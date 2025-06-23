export interface Employee {
  id: number;
  name: string;
  role: string;
  hometown: string;
  avatar: string;
}

const roleMap: { [key: string]: string } = {
  'CT HĐQT': 'Chủ tịch HĐQT',
  'PGĐ': 'Phó Giám đốc',
  'Trưởng phòng': 'Trưởng phòng',
  'TP HC': 'Trưởng phòng HC'
}

const rawData = [
  { id: 1, name: 'Trần Mạnh Tuấn', roleRaw: 'CT HĐQT', hometown: 'Hà Nội' },
  { id: 2, name: 'Nguyễn Thị Hằng', roleRaw: '', hometown: 'Nghệ An' },
  { id: 4, name: 'Nguyễn Quốc Khánh', roleRaw: 'PGĐ', hometown: 'Hà Nội' },
  { id: 5, name: 'Lê Duyên Giang', roleRaw: 'Trưởng phòng', hometown: 'Thanh Hóa' },
  { id: 6, name: 'Phan Xuân Nam', roleRaw: '', hometown: 'Hà Nội' },
  { id: 7, name: 'Phạm Bá Dũng', roleRaw: '', hometown: 'Thái Bình' },
  { id: 8, name: 'Nguyễn Đình Hà', roleRaw: '', hometown: 'Hà Nội' },
  { id: 9, name: 'Bùi Đình Thông', roleRaw: '', hometown: 'Hà Tĩnh' },
  { id: 10, name: 'Dương Quang Long', roleRaw: '', hometown: 'Hà Nội' },
  { id: 11, name: 'Nguyễn Hoàng Quân', roleRaw: '', hometown: 'Hòa Bình' },
  { id: 12, name: 'Lê Tiến Phúc', roleRaw: '', hometown: 'Nghệ An' },
  { id: 13, name: 'Vũ Công Hùng', roleRaw: 'PGĐ', hometown: 'Thanh Hóa' },
  { id: 14, name: 'Trần Xuân Lâm', roleRaw: '', hometown: 'Thái Bình' },
  { id: 15, name: 'Hoàng Văn Duy', roleRaw: '', hometown: 'Nghệ An' },
  { id: 16, name: 'Nguyễn Trường Anh', roleRaw: '', hometown: 'Hà Nội' },
  { id: 17, name: 'Lê Minh Hiếu', roleRaw: 'TP HC', hometown: 'Hà Nội' },
  { id: 18, name: 'Phạm Văn Tuyền', roleRaw: '', hometown: 'Thái Bình' },
  { id: 19, name: 'Nguyễn Tuấn Linh', roleRaw: 'PGĐ', hometown: 'Hà Nội' },
  { id: 20, name: 'Đỗ Việt Tuấn', roleRaw: '', hometown: 'Hà Nội' },
  { id: 21, name: 'Nguyễn Thái Bảo', roleRaw: '', hometown: 'Hà Nội' },
  { id: 22, name: 'Đinh Văn Khải', roleRaw: 'Trưởng phòng', hometown: 'Hải Dương' },
  { id: 23, name: 'Dương Tiến Đạt', roleRaw: '', hometown: 'Hà Nội' },
  { id: 24, name: 'Trần Ngọc Thúy', roleRaw: '', hometown: 'Hà Nội' },
  { id: 25, name: 'Dương Đức Tiến', roleRaw: '', hometown: 'Bắc Giang' },
  { id: 26, name: 'Phạm Tùng Dương', roleRaw: '', hometown: 'Thái Bình' },
  { id: 27, name: 'An Dương', roleRaw: '', hometown: 'Hải Phòng' },
  { id: 28, name: 'Nguyễn Đức Trọng', roleRaw: '', hometown: 'Phú Thọ' },
  { id: 29, name: 'Đặng Hữu Huân', roleRaw: 'PGĐ', hometown: 'Hà Nội' },
  { id: 30, name: 'Kiều Văn Phức', roleRaw: '', hometown: 'Hà Nội' },
  { id: 31, name: 'Đoàn Minh Đức', roleRaw: '', hometown: 'Hà Nam' },
  { id: 32, name: 'Nguyễn Văn Dũng', roleRaw: '', hometown: 'Bắc Ninh' },
  { id: 33, name: 'Trương Thế Phong', roleRaw: '', hometown: 'Hải Dương' },
  { id: 34, name: 'Trần Anh Tuấn', roleRaw: '', hometown: 'Vĩnh Phúc' },
  { id: 35, name: 'Nguyễn Thị Hà Giang', roleRaw: '', hometown: 'Nghệ An' },
  { id: 36, name: 'Nguyễn Nhật Tâm', roleRaw: '', hometown: 'Nghệ An' },
  { id: 37, name: 'Trần Anh Thắng', roleRaw: '', hometown: 'Ninh Bình' },
  { id: 38, name: 'Chu Văn Tuấn', roleRaw: '', hometown: 'Hà Nội' },
  { id: 39, name: 'Vũ Huy Thành', roleRaw: '', hometown: 'Hà Nội' },
  { id: 40, name: 'Phạm Anh Tuấn', roleRaw: '', hometown: 'Hà Nội' },
  { id: 41, name: 'Nguyễn Minh Dự', roleRaw: '', hometown: 'Hà Nội' },
  { id: 42, name: 'Nguyễn Quang Huy', roleRaw: '', hometown: 'Nam Định' },
  { id: 43, name: 'Phạm Thị Thanh Tâm', roleRaw: '', hometown: 'Hòa Bình' },
  { id: 44, name: 'Phan Văn Hiếu', roleRaw: '', hometown: 'Hà Nội' },
  { id: 45, name: 'Bùi Huy Linh', roleRaw: '', hometown: 'Hưng Yên' },
  { id: 46, name: 'Đồng Vương Hoàng', roleRaw: '', hometown: 'Thanh Hóa' },
  { id: 47, name: 'Nguyễn Văn Lâm', roleRaw: '', hometown: 'Hà Nội' },
  { id: 48, name: 'Phạm Thành Luân', roleRaw: '', hometown: 'Hà Nội' },
];

export const employees: Employee[] = rawData.map(e => ({
  id: e.id,
  name: e.name.trim(),
  role: roleMap[e.roleRaw] || 'Nhân viên',
  hometown: e.hometown.trim(),
  avatar: `https://placehold.co/128x128.png`
}));
