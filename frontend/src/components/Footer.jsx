import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 mb-8">
         
          <div className="mb-8 md:mb-0 md:col-span-2 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                ShopKart
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Your trusted destination for premium quality products at competitive prices. 
              Shop with confidence and enjoy a seamless shopping experience.
            </p>
          </div>

        
          <div className="w-full md:col-span-2">
            <div className="flex flex-row gap-8 w-full flex-wrap">
              {/* Quick Links */}
              <div className="mb-8 md:mb-0 min-w-[140px] flex-1">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">FAQs</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">Shipping</a>
                  </li>
                </ul>
              </div>
            
              <div className="mb-8 md:mb-0 min-w-[140px] flex-1">
                <h3 className="text-lg font-semibold mb-4 text-white">Policies</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">Return Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500 transition-colors">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

    
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} ShopKart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
