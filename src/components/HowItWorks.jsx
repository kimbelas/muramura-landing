import { motion } from 'framer-motion';
import { HiCamera, HiSearchCircle, HiCash } from 'react-icons/hi';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <HiCamera className="text-4xl" />,
      title: 'Upload or Snap',
      description: 'Take a photo of any product or search by name. Our AI instantly recognizes what you\'re looking for.',
      image: '/step1.png',
    },
    {
      number: '02',
      icon: <HiSearchCircle className="text-4xl" />,
      title: 'We Compare',
      description: 'We search across Shopee, Lazada, Carousell and more to find you the best prices in real-time.',
      image: '/step2.png',
    },
    {
      number: '03',
      icon: <HiCash className="text-4xl" />,
      title: 'You Save',
      description: 'Choose the best deal and save money! We\'ll even show you available vouchers and discounts.',
      image: '/step3.png',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Three Simple Steps to{' '}
            <span className="text-gradient">Save Money</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Start saving in less than 30 seconds. It's that easy!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-emerald-300 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 text-center">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mx-auto w-20 h-20 mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse-slow"></div>
                    <div className="relative w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-green-600 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>

                  {/* Mock Phone Screen */}
                  <div className="mx-auto w-48 h-80 bg-gray-100 rounded-2xl p-2 shadow-lg">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      {/* Mock Screen Content */}
                      <div className="p-3">
                        <div className="bg-green-100 h-3 rounded-full mb-2"></div>
                        <div className="bg-gray-100 h-2 rounded-full mb-2"></div>
                        <div className="bg-gray-100 h-2 rounded-full w-3/4 mb-4"></div>
                        
                        {index === 0 && (
                          <>
                            <div className="bg-gradient-to-r from-green-200 to-emerald-200 h-32 rounded-lg mb-2 flex items-center justify-center">
                              <HiCamera className="text-4xl text-green-500" />
                            </div>
                            <div className="text-xs text-gray-500 text-center">Take a photo</div>
                          </>
                        )}
                        
                        {index === 1 && (
                          <>
                            <div className="space-y-2">
                              <div className="bg-red-50 h-12 rounded-lg animate-pulse"></div>
                              <div className="bg-blue-50 h-12 rounded-lg animate-pulse animation-delay-200"></div>
                              <div className="bg-red-50 h-12 rounded-lg animate-pulse animation-delay-400"></div>
                            </div>
                            <div className="text-xs text-gray-500 text-center mt-2">Searching...</div>
                          </>
                        )}
                        
                        {index === 2 && (
                          <>
                            <div className="bg-green-100 rounded-lg p-3 mb-2">
                              <div className="text-green-800 font-bold text-sm mb-1">Best Deal!</div>
                              <div className="text-2xl font-bold text-gray-900">₱1,299</div>
                              <div className="text-xs text-green-600">Save ₱500</div>
                            </div>
                            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs py-2 rounded-lg">
                              Buy Now
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-green-400"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <span className="text-green-600 font-medium">
              🎉 It takes less than 30 seconds!
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Saving?
          </h3>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;