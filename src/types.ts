export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
}

export interface Recipe {
  title: string;
  image: string;
  spices: string;
  description: string;
}

export interface Category {
  name: string;
  img: string;
}
