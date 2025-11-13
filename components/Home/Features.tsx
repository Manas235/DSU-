import React from 'react';
import { FEATURES } from '../../constants';
import { ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-dsu-blue mb-4">Why Choose DSU?</h2>
           <div className="w-16 h-1 bg-dsu-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md text-dsu-blue">
                   <feature.icon size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dsu-blue mb-3 group-hover:text-dsu-lightBlue transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <a href="#" className="inline-flex items-center text-dsu-gold font-semibold text-sm hover:underline">
                  Learn More <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;