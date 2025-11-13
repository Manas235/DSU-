import React from 'react';
import { STATS } from '../../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-dsu-blue text-white relative overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-dsu-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-blue-800/50">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4 group">
              <div className="mb-4 p-3 bg-blue-800/50 rounded-full group-hover:bg-dsu-gold group-hover:text-dsu-blue transition-colors duration-300">
                 <stat.icon size={32} />
              </div>
              <span className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm lg:text-base text-gray-300 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;