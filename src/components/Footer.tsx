  import ZoodIcon from './ZoodIcon';
  import { Link } from 'react-router-dom';
export function Footer() { 
  

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
      
          <div className='size-8'> 
  <ZoodIcon />
  </div>
            {/* <Cpu className="h-8 w-8 text-blue-400" /> */}
            <span className="ml-2 text-xl font-bold text-white">Zood AI</span>
          </div>
          <div className="flex space-x-6">
            <Link  to="/privacy-policy" className="text-gray-400 underline hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-gray-300 underline">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Zood AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}