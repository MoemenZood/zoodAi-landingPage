import React from 'react';
import { Menu, X } from 'lucide-react';
import ZoodIcon from './ZoodIcon'; 
 export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
   <div className='size-8'> 
  <ZoodIcon />
  </div>
            <span className="ml-2 text-xl font-bold text-gray-900">Zood AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#hero" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Products</a>
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}