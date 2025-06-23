'use client';

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  images: {
    front: string;
    rear: string;
    left: string;
    right: string;
    interiorFront: string;
    interiorRear: string;
  };
  logo: string;
  fuelType: 'Gasoline' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
  type: 'Compact' | 'Coupe' | 'Sedan' | 'SUV';
  exteriorColor: string;
  interiorColor: string;
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD';
  mileage: number;
  seatingCapacity: number;
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
  category: 'Loại nhiên liệu' | 'Hộp số' | 'Dẫn động' | 'Loại xe';
}
