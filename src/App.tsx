import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CategoryFilter from './components/CategoryFilter';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);

  const { addToCart, isOpen, setIsOpen } = useCart();

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setIsOpen(false);
  };

  // Auto-open cart when items are added
  React.useEffect(() => {
    if (isOpen) {
      setShowCart(true);
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCartClick={handleCartClick}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to StoreHub
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Discover amazing products at unbeatable prices
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-white bg-opacity-5 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} results for "{searchQuery}"
            </p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onProductClick={setSelectedProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33C5.92 12.67 6 12.339 6 12c0-.339-.08-.67-.08-1.33C7.533 9.881 9.66 9 12 9s4.467.881 6.08 2.33C18.08 11.33 18 11.661 18 12c0 .339.08.67.08 1.33A7.962 7.962 0 0112 15z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart */}
      <Cart
        isOpen={showCart}
        onClose={() => setShowCart(false)}
      />
    </div>
  );
}

export default App;