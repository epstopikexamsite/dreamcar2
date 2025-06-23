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
  image: string;
  logo: string;
  fuelType: string;
  transmission: 'Automatic' | 'Manual';
  type: 'Compact' | 'Coupe' | 'Sedan' | 'SUV';
  exteriorColor: string;
  interiorColor: string;
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD';
  mileage: number;
  specs: {
    engine: string;
    horsepower: number;
    fuelEfficiency: string;
    safetyRating: number;
  };
  features: string[];
  reviews: Review[];
}
