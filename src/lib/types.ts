
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
  specs: {
    engine: string;
    horsepower: number;
    fuelConsumption: string;
    safetyRating: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  };
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
