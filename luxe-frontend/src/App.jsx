import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Star, TrendingUp, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FashionEcommerce() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const heroSlides = [
    { title: 'Summer Collection 2024', subtitle: 'Feel the Heat', color: 'from-orange-500 via-red-500 to-pink-500' },
    { title: 'Urban Elegance', subtitle: 'Street Style Refined', color: 'from-purple-500 via-indigo-500 to-blue-500' },
    { title: 'Minimal Chic', subtitle: 'Less is More', color: 'from-gray-700 via-gray-800 to-black' }
  ];

  const products = [
    { id: 1, name: 'Designer Jacket', price: 299, rating: 4.8, category: 'Outerwear', color: 'from-yellow-400 to-orange-500' },
    { id: 2, name: 'Silk Dress', price: 199, rating: 4.9, category: 'Dresses', color: 'from-pink-400 to-rose-500' },
    { id: 3, name: 'Leather Boots', price: 249, rating: 4.7, category: 'Footwear', color: 'from-amber-700 to-yellow-800' },
    { id: 4, name: 'Statement Bag', price: 349, rating: 5.0, category: 'Accessories', color: 'from-purple-400 to-pink-500' },
    { id: 5, name: 'Cashmere Sweater', price: 279, rating: 4.8, category: 'Knitwear', color: 'from-blue-400 to-cyan-500' },
    { id: 6, name: 'Wide Leg Pants', price: 159, rating: 4.6, category: 'Bottoms', color: 'from-green-400 to-emerald-500' }
  ];

  const categories = [
    { name: 'New Arrivals', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Trending', icon: TrendingUp, color: 'from-pink-400 to-rose-500' },
    { name: 'Best Sellers', icon: Award, color: 'from-purple-400 to-indigo-500' },
    { name: 'Sale', icon: Star, color: 'from-red-400 to-pink-500' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (productId) => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              LUXE
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['Shop', 'Collections', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="relative group text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-3 hover:bg-white/10 rounded-full transition-all hover:scale-110">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-white/10 rounded-full transition-all hover:scale-110 relative">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 hover:bg-white/10 rounded-full transition-all hover:scale-110 relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-3 hover:bg-white/10 rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative h-screen mt-16 overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ${
              i === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-300 mb-4 tracking-widest uppercase animate-pulse">
                  {slide.subtitle}
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
                  {slide.title}
                </h1>
                <button className="group px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center gap-3">
                  Shop Now
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 hover:scale-110 transition-all"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 hover:scale-110 transition-all"
        >
          <ChevronRight />
        </button>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button
                  key={i}
                  className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {cat.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-all duration-500">
                  {/* Product Image Area */}
                  <div className={`aspect-[3/4] bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
                    
                    {/* Quick Actions */}
                    <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
                      hoveredProduct === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                    }`}>
                      <button className="p-3 bg-white/90 backdrop-blur-xl rounded-full hover:bg-white hover:scale-110 transition-all text-black">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-xl rounded-full hover:bg-white hover:scale-110 transition-all text-black">
                        <Search className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full text-sm font-semibold">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">{product.rating}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        ${product.price}
                      </p>

                      <button
                        onClick={() => addToCart(product.id)}
                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-white/10 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-10" />
            
            <h2 className="text-4xl font-bold mb-4 relative z-10">Join Our Fashion Community</h2>
            <p className="text-gray-300 mb-8 relative z-10">Get exclusive access to new collections and special offers</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-gray-400"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            LUXE
          </div>
          <p className="text-gray-400">© 2024 LUXE Fashion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}