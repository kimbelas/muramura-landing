import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: 'features' },
      { name: 'How It Works', href: 'how-it-works' },
      { name: 'Screenshots', href: 'screenshots' },
      { name: 'Download', href: 'cta' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Status', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🛍️</div>
              <span className="text-2xl font-bold text-gradient">MuraMura</span>
            </div>
            <p className="text-gray-600 mb-4">
              The #1 price comparison app in the Philippines. Save money on every purchase!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 hover:text-green-600 transition-colors text-xl p-2 rounded-full hover:bg-green-100"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4 text-green-500">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-green-500">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-green-500">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-green-500">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm">
                Get the latest deals and updates straight to your inbox
              </p>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-text"
                />
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-indigo-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-indigo-600 transition-all cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-4">Our Trusted Partners</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-shopee font-bold text-lg">Shopee</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-lazada font-bold text-lg">Lazada</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-carousell font-bold text-lg">Carousell</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-blue-600 font-bold text-lg">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center mb-2 md:mb-0">
              <span>© {currentYear} MuraMura. All rights reserved.</span>
            </div>
            <div className="flex items-center">
              <span>Made with</span>
              <HiHeart className="text-red-500 mx-1" />
              <span>in the Philippines 🇵🇭</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;