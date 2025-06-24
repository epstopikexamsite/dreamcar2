
export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface CarImages {
  exterior: {
    frontThreeQuarter: string;
    rearThreeQuarter: string;
    front: string;
    rear: string;
    side: string;
    topDown: string;
    wheel: string;
  };
  interior: {
    dashboard: string;
    dashboardCloseUp: string;
    centerConsole: string;
    seats: string;
    trunk: string;
  };
  details: {
    headlight: string;
    taillight: string;
    logo: string;
    exhaust: string;
    doorHandle: string;
    mirror: string;
    sensors: string;
    sunroof: string;
    key: string;
  };
  dynamic: {
    rollingShot: string;
    nightShot: string;
  };
}

export interface CarSpec {
  // Động cơ
  engineDisplacement: string; // "1.5L"
  enginePower: string; // "180 hp"
  engineTorque: string; // "240 Nm"
  engineType: string; // "4-cylinder, Turbocharged"

  // Hộp số & Dẫn động
  transmissionDetail: string; // "8-speed Automatic"
  
  // Kích thước & Trọng lượng
  dimensions: string; // "4,788 x 1,915 x 1,379" (D x R x C mm)
  wheelbase: number; // 2870 mm
  groundClearance?: number; // 135 mm
  weight: string; // "1,750 kg"

  // Hiệu suất & Tiêu thụ
  acceleration: string; // "4.5s (0-100 km/h)"
  topSpeed?: number; // 250 km/h
  fuelConsumption: string; // "8.5L/100km (combined)"

  // Lốp & Treo
  tireSize: string; // "19-inch"
  suspension: string; // "Front: MacPherson, Rear: Multi-link"

  // Phanh & An toàn
  brakes: string; // "Front/Rear Disc Brakes (ABS, EBD)"
  safetyFeatures: string; // "6 Airbags, ESP, Blind Spot Warning"

  // Tiện nghi
  infotainment: string; // "12.3-inch screen, Apple CarPlay"
  seats: string; // "Leather, Power-adjustable, Heated"

  // Khoang hành lý & Chỗ ngồi
  trunkCapacity?: number; // 480 liters

  // Thông số điện
  electricRange?: number; // km
  batteryCapacity?: string; // "82 kWh"
  chargingTime?: string; // "DC Fast Charge: 30 min (10-80%)"
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: CarImages;
  logo: string;
  fuelType: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
  type: 'Compact' | 'Coupe' | 'Sedan' | 'SUV' | 'Truck';
  exteriorColor: string;
  interiorColor: string;
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD';
  mileage: number;
  seatingCapacity: number;
  status: 'Available' | 'Sold';
  specs: CarSpec;
  features: string[];
  reviews: Review[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  aiHint: string;
  excerpt: string;
  content: string;
  category: 'Loại nhiên liệu' | 'Hộp số' | 'Dẫn động' | 'Loại xe' | 'Tính năng';
}
