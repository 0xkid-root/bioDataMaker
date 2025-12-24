import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500 fill-rose-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">BiodataForWedding</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              A free and simple wedding biodata maker trusted by families across India. 
              Create beautiful, professional biodata in minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Policies</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Refund Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Shipping Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-rose-600 transition-colors duration-200">Pricing Details</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} BiodataForWedding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};