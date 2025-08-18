export interface Ride {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  category: 'land' | 'water' | 'kids';
}

export interface Category {
  key: 'land' | 'water' | 'kids';
  name: string;
  count: number;
}

export interface RidesData {
  land: Ride[];
  water: Ride[];
  kids: Ride[];
}
