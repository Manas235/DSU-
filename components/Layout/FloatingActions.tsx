import React from 'react';
import { MessageCircle, Phone, Navigation, FileText, HelpCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const actions = [
    { icon: FileText, label: 'Apply', color: 'bg-dsu-gold text-dsu-blue' },
    { icon: HelpCircle, label: 'Enquire', color: 'bg-dsu-blue text-white' },
    { icon: MessageCircle, label: 'WhatsApp', color: 'bg-green-600 text-white' },
    { icon: Phone, label: 'Call', color: 'bg-blue-600 text-white' },
    { icon: Navigation, label: 'Directions', color: 'bg-red-600 text-white' },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col shadow-2xl rounded-l-xl overflow-hidden isolate">
      {actions.map((action, index) => (
        <a 
          key={index}
          href="#" 
          className={`${action.color} p-3 flex items-center justify-center group relative w-12 hover:w-32 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] h-12 border-b border-black/5 last:border-0`}
        >
          <action.icon size={20} className="shrink-0 relative z-10" />
          <span className="absolute left-12 opacity-0 group-hover:opacity-100 whitespace-nowrap font-bold text-sm transition-all duration-300 delay-75 ml-2 z-0">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingActions;