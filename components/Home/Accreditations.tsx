import React from 'react';
import { ACCREDITATIONS } from '../../constants';

const Accreditations: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm font-semibold mb-8">
          Recognized by Premier Institutions
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {ACCREDITATIONS.map((acc) => (
            <div key={acc.id} className="flex flex-col items-center group cursor-default">
              {/* Placeholder for Logo - using a styled text block for "high fidelity" feel without real assets */}
              <div className="h-16 w-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-dsu-blue/30 transition-all">
                 <span className="font-bold text-gray-700 text-lg group-hover:text-dsu-blue">{acc.name}</span>
              </div>
              <span className="text-[10px] text-gray-400 mt-2 uppercase font-medium tracking-wider">{acc.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;