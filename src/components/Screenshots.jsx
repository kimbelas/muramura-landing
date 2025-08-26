import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const screenshots = [
    {
      title: 'Search Results',
      description: 'Compare prices instantly',
      mockup: 'search-results',
    },
    {
      title: 'Product Details',
      description: 'See all store prices',
      mockup: 'product-details',
    },
    {
      title: 'Price History',
      description: 'Track price trends',
      mockup: 'price-history',
    },
    {
      title: 'Categories',
      description: 'Browse by category',
      mockup: 'categories',
    },
    {
      title: 'Saved Items',
      description: 'Your wishlist',
      mockup: 'saved-items',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const MockPhone = ({ type }) => {
    const content = {
      'search-results': (
        <div className="p-4 h-full">
          <div className="bg-gray-100 rounded-lg p-2 mb-3">
            <div className="text-sm text-gray-600">iPhone 15 Pro Max</div>
          </div>
          <div className="space-y-2">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
              <div className="flex justify-between">
                <div>
                  <div className="text-shopee font-bold text-sm">Shopee</div>
                  <div className="text-xl font-bold">₱72,990</div>
                  <div className="text-xs text-green-600">Flash Sale!</div>
                </div>
                <div className="text-2xl">🏷️</div>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex justify-between">
                <div>
                  <div className="text-lazada font-bold text-sm">Lazada</div>
                  <div className="text-xl font-bold">₱74,500</div>
                </div>
                <div className="text-2xl">📦</div>
              </div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex justify-between">
                <div>
                  <div className="text-carousell font-bold text-sm">Carousell</div>
                  <div className="text-xl font-bold">₱73,000</div>
                </div>
                <div className="text-2xl">🛍️</div>
              </div>
            </div>
          </div>
        </div>
      ),
      'product-details': (
        <div className="p-4 h-full">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mb-3">
            <div className="text-sm font-bold mb-2">Samsung Galaxy S24 Ultra</div>
            <div className="text-2xl font-bold">₱67,990</div>
            <div className="text-xs text-green-600">Lowest Price Found!</div>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>Free Shipping</span>
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>Voucher Available</span>
              <span className="text-green-600">₱500 OFF</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span>Official Store</span>
              <span className="text-blue-600">Verified</span>
            </div>
          </div>
          <button className="w-full mt-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 rounded-lg text-sm">
            Go to Store
          </button>
        </div>
      ),
      'price-history': (
        <div className="p-4 h-full">
          <div className="text-sm font-bold mb-3">Price History - AirPods Pro 2</div>
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <div className="text-xs text-gray-600 mb-2">Last 30 Days</div>
            {/* Mock Chart */}
            <div className="h-32 flex items-end justify-between gap-1">
              <div className="w-full bg-green-300 rounded-t" style={{ height: '70%' }}></div>
              <div className="w-full bg-green-400 rounded-t" style={{ height: '85%' }}></div>
              <div className="w-full bg-emerald-300 rounded-t" style={{ height: '75%' }}></div>
              <div className="w-full bg-green-500 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-full bg-emerald-400 rounded-t" style={{ height: '65%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Nov - Dec 2024</div>
          </div>
          <div className="bg-green-100 p-2 rounded-lg">
            <div className="text-xs text-green-800">
              💡 Best time to buy! Price dropped by ₱2,000
            </div>
          </div>
        </div>
      ),
      'categories': (
        <div className="p-4 h-full">
          <div className="text-sm font-bold mb-3">Browse Categories</div>
          <div className="grid grid-cols-3 gap-2">
            {['📱 Phones', '💻 Laptops', '🎮 Gaming', '👗 Fashion', '⌚ Watches', '🎧 Audio'].map((cat, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg text-center">
                <div className="text-lg mb-1">{cat.split(' ')[0]}</div>
                <div className="text-xs">{cat.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      ),
      'saved-items': (
        <div className="p-4 h-full">
          <div className="text-sm font-bold mb-3">Your Saved Items</div>
          <div className="space-y-2">
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs font-medium">Nike Air Max</div>
                  <div className="text-sm font-bold">₱4,995</div>
                </div>
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -20%
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs font-medium">iPad Air</div>
                  <div className="text-sm font-bold">₱35,990</div>
                </div>
                <div className="text-green-500">❤️</div>
              </div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs font-medium">Sony WH-1000XM5</div>
                  <div className="text-sm font-bold">₱18,999</div>
                </div>
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New Low!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    };

    return content[type] || content['search-results'];
  };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            App Screenshots
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            See MuraMura in{' '}
            <span className="text-gradient">Action</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful, intuitive interface designed for Filipino shoppers
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Display */}
          <div className="flex justify-center items-center min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row items-center gap-8"
              >
                {/* Phone Mockup */}
                <div className="relative">
                  <div className="relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-full z-20"></div>
                    
                    {/* Screen */}
                    <div className="absolute top-3 left-2 right-2 bottom-3 bg-white rounded-[2.3rem] overflow-hidden">
                      <MockPhone type={screenshots[currentIndex].mockup} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-center lg:text-left max-w-xs">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {screenshots[currentIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {screenshots[currentIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <HiChevronLeft className="text-2xl text-green-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <HiChevronRight className="text-2xl text-green-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-green-500 to-emerald-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;