import React, { useState, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Navbar } from '../ui/Navbar';

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{
    label: 'Home',
    id: 'home'
  }, {
    label: 'About',
    id: 'about'
  }, {
    label: 'Trainers',
    id: 'trainers'
  }, {
    label: 'Programs',
    id: 'programs'
  }, {
    label: 'Rates',
    id: 'rates'
  }, {
    label: 'Hours',
    id: 'hours'
  }, {
    label: 'Contact',
    id: 'contact'
  }] as any[];

  const scrollToSection = (sectionId: string) => {
    const isDesktop = window.innerWidth >= 768;
    let offset = 0;
    if (isDesktop) {
      switch (sectionId) {
        case 'trainers':
          offset = -85;
          break;
        case 'programs':
          offset = 150;
          break;
        case 'rates':
          offset = 0;
          break;
        case 'hours':
          offset = 270;
          break;
        default:
          offset = 100;
          break;
      }
    } else {
      switch (sectionId) {
        case 'programs':
          offset = 100;
          break;
        default:
          offset = 0;
          break;
      }
    }
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return <Navbar position="sticky" className="bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 group cursor-pointer">
            <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-300 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xl sm:text-2xl font-bold text-white">
              THE <span className="text-green-500">SHED</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer">
                {item.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 translate-y-2' : '')} />
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} />
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 -translate-y-2' : '')} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={cn('md:hidden fixed left-0 right-0 top-16 sm:top-20 bg-black/98 backdrop-blur-lg border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out z-40', isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden')}>
          <div className="py-4 space-y-1 container mx-auto px-4">
            {menuItems.map((item, index) => <button key={item.id} onClick={() => scrollToSection(item.id)} className={cn('w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer', 'transform', isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0')} style={{
            transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
          }}>
                {item.label}
              </button>)}
          </div>
        </div>
      </div>
    </Navbar>;
};

