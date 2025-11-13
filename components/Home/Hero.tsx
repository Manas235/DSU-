import React from 'react';
import Button from '../UI/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=99" 
          alt="DSU Campus" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dsu-blue/90 via-dsu-blue/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block bg-dsu-gold/90 text-dsu-blue px-4 py-1 font-bold text-sm tracking-wider mb-4 rounded-r-full">
            ADMISSIONS OPEN 2026
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Empowering Futures Through <span className="text-dsu-gold">Innovation</span>.
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed font-light">
            Join a legacy of academic excellence at Dayananda Sagar University. Discover world-class infrastructure, expert faculty, and boundless opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="group">
              Apply Now 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dsu-blue">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Curve decoration (optional, adds style) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[40px] lg:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;