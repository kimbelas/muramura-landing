import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Quezon City',
      text: 'Nakatipid ako ng ₱3,000 sa phone ko! Hindi na ako nahihirapan mag-compare ng prices. Super convenient!',
      rating: 5,
      avatar: '👩',
      savedAmount: '₱3,000',
      product: 'iPhone 14',
    },
    {
      name: 'Juan Dela Cruz',
      location: 'Makati',
      text: 'Sobrang useful! Laging nakakuha ng best deals. Recommended sa lahat ng online shoppers!',
      rating: 5,
      avatar: '👨',
      savedAmount: '₱1,500',
      product: 'Gaming Laptop',
    },
    {
      name: 'Ana Reyes',
      location: 'Cebu',
      text: 'Must-have app for online shoppers! Nakakatipid talaga. Thank you MuraMura!',
      rating: 5,
      avatar: '👩‍💼',
      savedAmount: '₱2,100',
      product: 'Air Fryer',
    },
    {
      name: 'Carlos Mendoza',
      location: 'Davao',
      text: 'Game changer! Hindi na ako nagsasayang ng oras mag-check sa iba-ibang apps.',
      rating: 5,
      avatar: '👨‍💼',
      savedAmount: '₱5,000',
      product: 'Smart TV',
    },
    {
      name: 'Sofia Garcia',
      location: 'Pasig',
      text: 'Love the price alerts feature! Nabili ko dream shoes ko on sale. Super saya!',
      rating: 5,
      avatar: '👩‍🎨',
      savedAmount: '₱800',
      product: 'Nike Shoes',
    },
    {
      name: 'Miguel Torres',
      location: 'BGC',
      text: 'Professional and reliable. Trusted ko na talaga for all my purchases!',
      rating: 5,
      avatar: '👨‍💻',
      savedAmount: '₱4,200',
      product: 'iPad Pro',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
            Trusted by{' '}
            <span className="text-gradient">Filipino Shoppers</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of happy users who save money every day with MuraMura
          </p>

          {/* Stats */}
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">₱15M+</div>
              <div className="text-sm text-gray-600">Total Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-emerald-500 text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Saved Amount Badge */}
              <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Saved {testimonial.savedAmount} on {testimonial.product}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured & Trusted By
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-gray-400 hover:text-shopee transition-colors">
              <div className="text-2xl font-bold">Shopee</div>
              <div className="text-xs">Partner</div>
            </div>
            <div className="text-gray-400 hover:text-lazada transition-colors">
              <div className="text-2xl font-bold">Lazada</div>
              <div className="text-xs">Partner</div>
            </div>
            <div className="text-gray-400 hover:text-carousell transition-colors">
              <div className="text-2xl font-bold">Carousell</div>
              <div className="text-xs">Partner</div>
            </div>
            <div className="text-gray-400 hover:text-blue-600 transition-colors">
              <div className="text-2xl font-bold">Facebook</div>
              <div className="text-xs">Marketplace</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;