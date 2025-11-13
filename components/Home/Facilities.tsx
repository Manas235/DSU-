import React from 'react';
import { Bus, BedDouble, Wifi, Utensils, ShieldCheck, MapPin, Clock } from 'lucide-react';
import Button from '../UI/Button';

const Facilities: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dsu-blue mb-4">Campus Facilities</h2>
          <div className="w-16 h-1 bg-dsu-gold mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience a comfortable and convenient campus life with our world-class residential and transport facilities designed for student success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hostel Section - S Residences */}
          <div className="bg-blue-50 rounded-3xl overflow-hidden shadow-lg border border-blue-100 flex flex-col group">
            <div className="h-72 overflow-hidden relative">
               <img 
                 src="https://images.uhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fsresidences.online%2F&psig=AOvVaw224NV5KaZvLm8Xci_sbhHe&ust=1763090949389000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDo0N6X7pADFQAAAAAdAAAAABAThttps://www.google.com/url?sa=i&url=https%3A%2F%2Fsresidences.online%2F&psig=AOvVaw224NV5KaZvLm8Xci_sbhHe&ust=1763090949389000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDo0N6X7pADFQAAAAAdAAAAABATnsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800" 
                 alt="S Residences - DSU Hostel" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
               <div className="absolute bottom-6 left-6 text-white flex flex-col">
                 <div className="bg-dsu-gold text-dsu-blue text-xs font-bold px-3 py-1 rounded-full uppercase inline-flex self-start mb-3 items-center">
                    <BedDouble className="mr-1.5" size={14} /> On-Campus
                 </div>
                 <h3 className="text-3xl font-bold tracking-tight mb-1">S Residences</h3>
                 <p className="text-gray-200 font-medium">Hostel @ Harohalli</p>
               </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>S Residences</strong> offers premium, secure, and comfortable accommodation for students. Designed with modern architecture, it provides a perfect home away from home environment conducive to academic focus and personal growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <Wifi size={18} className="text-dsu-gold mr-2 shrink-0" /> High-Speed Wi-Fi
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Utensils size={18} className="text-dsu-gold mr-2 shrink-0" /> Hygienic Veg/Non-Veg Mess
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <ShieldCheck size={18} className="text-dsu-gold mr-2 shrink-0" /> 24/7 Security & CCTV
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <BedDouble size={18} className="text-dsu-gold mr-2 shrink-0" /> Modern Furnished Rooms
                </div>
              </div>
              <Button variant="outline" className="mt-auto self-start hover:bg-dsu-blue hover:text-white hover:border-dsu-blue">View Hostel Fees & Rules</Button>
            </div>
          </div>

          {/* Transport Section */}
          <div className="bg-blue-50 rounded-3xl overflow-hidden shadow-lg border border-blue-100 flex flex-col group">
            <div className="h-72 overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1570125909232-eb2be79a1c74?auto=format&fit=crop&q=80&w=800" 
                 alt="DSU Transport" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
               <div className="absolute bottom-6 left-6 text-white flex flex-col">
                 <div className="bg-dsu-gold text-dsu-blue text-xs font-bold px-3 py-1 rounded-full uppercase inline-flex self-start mb-3 items-center">
                    <Bus className="mr-1.5" size={14} /> Mobility
                 </div>
                 <h3 className="text-3xl font-bold tracking-tight mb-1">Transport Services</h3>
                 <p className="text-gray-200 font-medium">Connecting Bengaluru to Campus</p>
               </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <p className="text-gray-600 mb-6 leading-relaxed">
                DSU operates a comprehensive fleet of buses connecting all major parts of Bengaluru city to the Harohalli campus, ensuring a safe, timely, and hassle-free commute for students and faculty.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-8">
                 <div className="flex items-center text-sm text-gray-700">
                   <Bus size={18} className="text-dsu-gold mr-2 shrink-0" /> Fleet of 50+ Buses
                 </div>
                 <div className="flex items-center text-sm text-gray-700">
                   <MapPin size={18} className="text-dsu-gold mr-2 shrink-0" /> Covers Major City Routes
                 </div>
                 <div className="flex items-center text-sm text-gray-700">
                   <ShieldCheck size={18} className="text-dsu-gold mr-2 shrink-0" /> GPS Tracking System
                 </div>
                 <div className="flex items-center text-sm text-gray-700">
                   <Clock size={18} className="text-dsu-gold mr-2 shrink-0" /> Timely Schedule
                 </div>
              </div>
              <Button variant="outline" className="mt-auto self-start hover:bg-dsu-blue hover:text-white hover:border-dsu-blue">Download Bus Routes</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Facilities;