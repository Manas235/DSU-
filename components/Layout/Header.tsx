import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { TOP_BAR_LINKS, MAIN_NAV_LINKS } from '../../constants';
import Button from '../UI/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split links for desktop view to prevent overcrowding
  const visibleLinks = MAIN_NAV_LINKS.slice(0, 7);
  const hiddenLinks = MAIN_NAV_LINKS.slice(7);

  return (
    <header className="w-full z-50 relative font-sans">
      {/* Top Bar */}
      <div className="bg-dsu-blue text-white text-[11px] py-2 hidden lg:block border-b border-blue-900">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            {TOP_BAR_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-dsu-gold transition-colors font-medium tracking-wider uppercase">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-dsu-gold transition-colors">
              <Globe size={14} />
              <span className="font-medium">EN</span>
              <ChevronDown size={12} />
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-blue-900/50 text-white px-3 py-1 rounded-full text-xs border border-blue-700 focus:outline-none focus:border-dsu-gold w-32 focus:w-48 transition-all placeholder-blue-300"
              />
              <Search size={12} className="absolute right-3 top-1.5 text-blue-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-xl py-2' : 'relative shadow-lg py-3 lg:py-5'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img 
                src="https://images.collegedunia.com/public/college_data/images/logos/1559634550Logo.png" 
                alt="DSU Logo" 
                className="w-14 h-14 lg:w-20 lg:h-20 object-contain shrink-0 drop-shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-dsu-blue font-extrabold text-lg lg:text-2xl leading-none tracking-tight">
                  DAYANANDA SAGAR <br/> UNIVERSITY
                </span>
                <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] mt-1 hidden lg:block">
                  BENGALURU, INDIA
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center space-x-1">
              {visibleLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="px-3 py-2 text-[13px] font-bold text-dsu-blue hover:text-dsu-gold transition-colors uppercase tracking-wide whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              
              {/* More Dropdown */}
              {hiddenLinks.length > 0 && (
                <div className="relative group px-3 py-2">
                  <button className="flex items-center text-[13px] font-bold text-dsu-blue hover:text-dsu-gold transition-colors uppercase tracking-wide focus:outline-none">
                    More <ChevronDown size={14} className="ml-1" />
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                    {hiddenLinks.map((link) => (
                      <a 
                        key={link.label} 
                        href={link.href} 
                        className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-dsu-blue border-b border-gray-50 last:border-0 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="pl-4">
                 <Button variant="primary" size="md" className="uppercase text-xs tracking-wider font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                   Apply Now
                 </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center space-x-3">
               <Button variant="primary" size="sm" className="lg:hidden text-xs">Apply</Button>
               <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-dsu-blue p-2 focus:outline-none hover:bg-gray-100 rounded-md transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-2xl max-h-[80vh] overflow-y-auto z-50">
            <div className="flex flex-col p-6 space-y-4">
              {MAIN_NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-dsu-blue font-bold text-sm border-b border-gray-100 pb-3 hover:text-dsu-gold hover:pl-2 transition-all uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                 {TOP_BAR_LINKS.map(link => (
                    <a key={link.label} href={link.href} className="text-[11px] font-medium text-gray-500 hover:text-dsu-blue py-1">
                        {link.label}
                    </a>
                 ))}
              </div>
              <Button variant="primary" fullWidth className="mt-4">Apply Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;