import React from 'react';
import { NEWS_ITEMS } from '../../constants';
import Button from '../UI/Button';
import { Calendar } from 'lucide-react';

const NewsEvents: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-dsu-blue mb-2">News & Events</h2>
            <div className="w-16 h-1 bg-dsu-gold"></div>
          </div>
          <Button variant="outline" className="hidden md:flex">View All News</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((news) => (
            <div key={news.id} className="group flex flex-col h-full bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden rounded-t-xl relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-dsu-gold text-dsu-blue text-xs font-bold px-2 py-1 rounded uppercase">
                  {news.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={12} className="mr-1" />
                  {news.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug group-hover:text-dsu-lightBlue transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {news.excerpt}
                </p>
                <a href="#" className="text-dsu-blue font-semibold text-sm hover:text-dsu-gold transition-colors mt-auto">
                  Read Full Story &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Button variant="outline">View All News</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;