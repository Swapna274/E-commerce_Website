import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types';
import { categories } from '../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange('')}
          className={`px-4 py-2 rounded-full border transition-colors ${
            selectedCategory === ''
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          }`}
        >
          All Products
        </button>
        
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{category.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;