 import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id='#hero' className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Business with</span>
                <span className="block text-blue-600">Intelligent ERP Solutions</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Streamline operations, boost productivity, and drive growth with our cutting-edge ERP system powered by artificial intelligence.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="https://zood-light-front-end-two.vercel.app/zood-login
" target='_blank'  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}