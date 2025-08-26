import { motion } from 'framer-motion';
import { HiCamera, HiLightningBolt, HiCurrencyDollar, HiChartBar, HiBell, HiShieldCheck } from 'react-icons/hi';

const Features = () => {
  const features = [
    {
      icon: <HiCamera className="text-3xl" />,
      title: 'Snap & Search',
      description: 'Take a photo of any product and instantly find the best prices online. Our AI recognizes products in seconds.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <HiLightningBolt className="text-3xl" />,
      title: 'Real-Time Prices',
      description: 'Get live, updated prices from Shopee, Lazada, and Carousell. No more switching between apps!',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: <HiCurrencyDollar className="text-3xl" />,
      title: 'Maximum Savings',
      description: 'Save ₱500-2000 on average per purchase. We automatically find vouchers and discounts for you.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: <HiChartBar className="text-3xl" />,
      title: 'Price History',
      description: 'Track price trends and know the best time to buy. See if prices are dropping or rising.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: <HiBell className="text-3xl" />,
      title: 'Price Alerts',
      description: 'Set your target price and get notified when products go on sale. Never miss a deal again!',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: <HiShieldCheck className="text-3xl" />,
      title: 'Safe & Secure',
      description: 'Shop with confidence. We only show prices from verified sellers and official stores.',
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
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
            Why Choose MuraMura
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need to{' '}
            <span className="text-gradient">Save Money</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stop overpaying! Our powerful features help you find the best deals 
            across all major Philippine e-commerce platforms.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-green-500 transition-all duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Join thousands of Filipinos who are already saving money!
          </p>
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Saving Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;