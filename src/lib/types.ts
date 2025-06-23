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
  specs: {
    engine: string;
    horsepower: number;
    fuelEfficiency: string;
    safetyRating: number;
  };
  features: string[];
  reviews: Review[];
}
