import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiCheckCircle, HiExclamation } from 'react-icons/hi';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setMessage(`Thanks! We'll notify you at ${email} when we launch!`);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-indigo-500 to-emerald-500"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6"
          >
            <span className="animate-pulse mr-2">🔥</span>
            <span className="font-semibold">Limited Time: Get Early Access!</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Saving Today!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join <span className="font-bold">10,000+ smart Filipino shoppers</span> who 
            save an average of ₱2,000 per month. Be the first to know when we launch!
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setStatus('');
                      setMessage('');
                    }}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 cursor-text"
                    disabled={status === 'loading'}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={status === 'loading'}
                  className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Get Early Access'
                  )}
                </motion.button>
              </div>
            </div>

            {/* Status Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg flex items-center justify-center ${
                  status === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {status === 'success' ? (
                  <HiCheckCircle className="mr-2 text-xl" />
                ) : (
                  <HiExclamation className="mr-2 text-xl" />
                )}
                {message}
              </motion.div>
            )}
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center">
              ✓ No Credit Card Required
            </span>
            <span className="flex items-center">
              ✓ Instant Access
            </span>
            <span className="flex items-center">
              ✓ Unsubscribe Anytime
            </span>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-90">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold">₱15M</div>
                <div className="text-sm opacity-90">Total Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm opacity-90">App Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-90">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-white/70 text-sm"
          >
            <p>🚀 Currently in development. Expected launch Q1 2025</p>
            <p className="mt-2">Be among the first 1,000 users and get exclusive perks!</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;