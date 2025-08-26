import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  const handleGetStarted = () => {
    const element = document.getElementById('cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mixed opacity-10"></div>
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{ 
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-indigo-100 rounded-full mb-6 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiSparkles className="text-green-600 mr-2" />
              </motion.div>
              <span className="text-green-800 font-semibold">
                #1 Price Comparison App in PH
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Makatipid</span> sa{' '}
              <span className="relative">
                Every Purchase!
                <svg
                  className="absolute -bottom-2 w-full"
                  viewBox="0 0 300 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 150 0 300 5"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Compare prices from <span className="font-bold text-shopee">Shopee</span>,{' '}
              <span className="font-bold text-lazada">Lazada</span>, and{' '}
              <span className="font-bold text-carousell">Carousell</span> in seconds.
              Save ₱500-2000 on every purchase!
            </p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap gap-8 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, staggerChildren: 0.1 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">₱1.5M</div>
                <div className="text-sm text-gray-600">Total Savings</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent">4.9★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="flex items-center justify-center btn-primary group relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mr-3"
                >
                  <FaGooglePlay />
                </motion.div>
                Get for Android
                <motion.span 
                  className="ml-3 bg-gradient-to-r from-emerald-400 to-green-400 text-gray-900 text-xs px-3 py-1 rounded-full font-bold shadow-md"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  BETA
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="flex items-center justify-center btn-secondary group relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="mr-3"
                >
                  <FaApple />
                </motion.div>
                iOS Coming Soon
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="ml-3"
                >
                  <FaArrowRight />
                </motion.div>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 justify-center lg:justify-start">
              <span>✓ No Credit Card Required</span>
              <span>✓ 100% Free Forever</span>
              <span>✓ Safe & Secure</span>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-indigo-400 blur-3xl opacity-40"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.9, 1.1, 0.9] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Phone Frame */}
              <div className="relative mx-auto w-72 h-[600px]">
                {/* Phone Outer Frame */}
                <div className="relative w-full h-full bg-gray-900 rounded-[3rem] shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-20"></div>
                  
                  {/* Screen */}
                  <div className="absolute top-3 left-3 right-3 bottom-3 bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-8 bg-white flex items-center justify-between px-4 pt-2">
                      <div className="text-xs font-medium text-gray-900">9:41</div>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 border border-gray-400 rounded-sm">
                          <div className="w-3 h-1 bg-green-500 rounded-sm m-px"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="px-4 pt-2">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent font-bold text-lg">MuraMura</div>
                        <div className="flex gap-2">
                          <motion.div 
                            className="w-2 h-2 bg-green-500 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-indigo-400 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-emerald-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                          />
                        </div>
                      </div>
                    
                    {/* Search Bar */}
                    <div className="bg-gray-100 rounded-xl p-3 mb-4">
                      <div className="text-gray-500 text-sm">Search for "iPhone 15"</div>
                    </div>
                    
                    {/* Price Results */}
                    <div className="space-y-3">
                      <motion.div 
                        className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200 relative overflow-hidden"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="flex justify-between items-center relative z-10">
                          <div>
                            <div className="text-shopee font-bold">Shopee</div>
                            <div className="text-2xl font-bold">₱65,990</div>
                            <div className="text-xs text-green-600 font-semibold">Best Price!</div>
                          </div>
                          <motion.div 
                            className="text-4xl"
                            animate={{ rotate: [0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            🛍️
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      <div className="bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-lazada font-bold">Lazada</div>
                            <div className="text-2xl font-bold">₱67,500</div>
                          </div>
                          <div className="text-4xl">📦</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-carousell font-bold">Carousell</div>
                            <div className="text-2xl font-bold">₱68,000</div>
                          </div>
                          <div className="text-4xl">🏪</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Savings Banner */}
                    <motion.div 
                      className="mt-4 bg-gradient-to-r from-green-500 to-indigo-500 text-white p-3 rounded-xl relative overflow-hidden"
                      animate={{ 
                        scale: [1, 1.03, 1],
                        boxShadow: [
                          "0 4px 15px rgba(34, 197, 94, 0.3)",
                          "0 8px 25px rgba(34, 197, 94, 0.5)", 
                          "0 4px 15px rgba(34, 197, 94, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="text-center relative z-10">
                        <motion.div 
                          className="text-sm opacity-90"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          You save
                        </motion.div>
                        <motion.div 
                          className="text-2xl font-bold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ₱2,010!
                        </motion.div>
                      </div>
                    </motion.div>
                    </div> {/* Close App Content */}
                  </div> {/* Close Screen */}
                </div> {/* Close Phone Outer Frame */}
              </div> {/* Close Phone Frame container */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;