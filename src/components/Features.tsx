import { BarChart3, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    name: 'Advanced Analytics',
    description: 'Get real-time insights and predictive analytics to make data-driven decisions.',
    icon: BarChart3,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your sensitive business data.',
    icon: Shield,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized performance for smooth operations across your organization.',
    icon: Zap,
  },
  {
    name: 'Team Collaboration',
    description: 'Enhanced tools for seamless communication and workflow management.',
    icon: Users,
  },
];

export function Features() {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive ERP solution comes packed with powerful features designed to transform your business operations.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}