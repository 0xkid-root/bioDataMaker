import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Company Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-rose-500 fill-rose-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 cursor-pointer"><Link to="/">BiodataForWedding</Link></span>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="#"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/about"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="text-gray-600 hover:text-rose-600 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};