import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone', count: 45 },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', count: 128 },
  { id: 'home', name: 'Home & Garden', icon: 'Home', count: 76 },
  { id: 'sports', name: 'Sports', icon: 'Dumbbell', count: 52 },
  { id: 'beauty', name: 'Beauty', icon: 'Sparkles', count: 34 },
  { id: 'books', name: 'Books', icon: 'Book', count: 89 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-Hour Battery', 'Quick Charge', 'Bluetooth 5.0'],
    inStock: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 149.99,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'fashion',
    description: 'Elegant minimalist watch with leather strap and Swiss movement.',
    features: ['Swiss Movement', 'Leather Strap', 'Water Resistant', '2-Year Warranty'],
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: '3',
    name: 'Smart Home Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/4790583/pexels-photo-4790583.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4790583/pexels-photo-4790583.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    description: 'Voice-controlled smart speaker with premium sound quality.',
    features: ['Voice Assistant', '360° Sound', 'Smart Home Control', 'Multi-Room Audio'],
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: '4',
    name: 'Yoga Mat Premium',
    price: 45.99,
    image: 'https://images.pexels.com/photos/3984343/pexels-photo-3984343.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3984343/pexels-photo-3984343.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    description: 'Non-slip premium yoga mat with carrying strap and excellent cushioning.',
    features: ['Non-Slip Surface', 'Extra Thick', 'Carrying Strap', 'Eco-Friendly'],
    inStock: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: '5',
    name: 'Coffee Maker Deluxe',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/4226990/pexels-photo-4226990.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4226990/pexels-photo-4226990.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'home',
    description: 'Professional-grade coffee maker with programmable brewing and thermal carafe.',
    features: ['Programmable', 'Thermal Carafe', '12-Cup Capacity', 'Auto Shut-off'],
    inStock: true,
    rating: 4.7,
    reviews: 198
  },
  {
    id: '6',
    name: 'Skincare Set',
    price: 69.99,
    image: 'https://images.pexels.com/photos/7513555/pexels-photo-7513555.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/7513555/pexels-photo-7513555.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beauty',
    description: 'Complete skincare routine set with cleanser, toner, and moisturizer.',
    features: ['Natural Ingredients', 'All Skin Types', '3-Step Routine', 'Dermatologist Tested'],
    inStock: true,
    rating: 4.4,
    reviews: 267
  }
];