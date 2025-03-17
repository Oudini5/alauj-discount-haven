
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  category: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export type User = {
  id: string;
  email: string;
  name: string;
  isMember: boolean;
};

export interface FAQItem {
  question: string;
  answer: string;
}
