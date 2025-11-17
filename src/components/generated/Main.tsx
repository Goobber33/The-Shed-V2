import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Instagram, Facebook, Mail, MapPin, Phone, Dumbbell, Users, Clock, Award, Target, Zap } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
const buttonVariants = (variant: string = 'default', size: string = 'default', className?: string) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variantClasses: Record<string, string> = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  };
  const sizeClasses: Record<string, string> = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };
  return cn(baseClasses, variantClasses[variant] || variantClasses.default, sizeClasses[size] || sizeClasses.default, className);
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
  mpid?: string;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'default',
  size = 'default',
  ...props
}, ref) => {
  return <button className={buttonVariants(variant, size, className)} ref={ref} {...props} data-magicpath-id="0" data-magicpath-path="Main.tsx" />;
});
Button.displayName = 'Button';
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => {
  return <div ref={ref} className={cn('rounded-lg', className)} {...props} data-magicpath-id="1" data-magicpath-path="Main.tsx" />;
});
Card.displayName = 'Card';
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => {
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} data-magicpath-id="2" data-magicpath-path="Main.tsx" />;
});
CardContent.displayName = 'CardContent';
type NavbarProps = {
  position?: 'static' | 'sticky' | 'fixed';
  className?: string;
  onMenuOpenChange?: (isOpen: boolean) => void;
  children: React.ReactNode;
};
const Navbar = ({
  position = 'static',
  className,
  children
}: NavbarProps) => {
  return <nav className={cn('w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/5', position === 'sticky' && 'sticky top-0', position === 'fixed' && 'fixed top-0', className)} data-magicpath-id="3" data-magicpath-path="Main.tsx">
      {children}
    </nav>;
};
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ['HOME', 'ABOUT', 'TRAINERS', 'PROGRAMS', 'RATES', 'HOURS', 'CONTACT'];
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
  return <Navbar position="sticky" className="py-3 sm:py-4 md:py-6 text-white" onMenuOpenChange={setIsMenuOpen} data-magicpath-id="4" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="2a5d7df7-8f86-45c5-9ae2-4b747ab82263" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="2908324f-25a0-420c-96ba-b19903e90b3d" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="31585c67-9616-4ab6-bfd4-2c0bb6a934f1" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <img src="/shed logo.png" className="h-12 sm:h-16 md:h-20 lg:h-28 transition-all duration-300" alt="The Shed Logo" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
          </SortableContainer>

          {/* Desktop Menu */}
          <SortableContainer dndKitId="65c76cac-79d7-4c58-816f-c0105dd6e67f" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-6 lg:space-x-8" data-magicpath-id="9" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-semibold tracking-wide relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Toggle - Better positioning */}
          <SortableContainer dndKitId="3d93fd56-4605-42b2-aab0-4d1900f2fa7e" containerType="regular" prevTag="button" className="md:hidden text-white p-2 hover:text-yellow-300 transition-colors relative z-[60]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="12" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="0d9dea16-8433-4d62-bcde-3b1c38d6a22e" containerType="regular" prevTag="div" className="w-7 h-6 flex flex-col justify-between items-center" data-magicpath-id="13" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? 'rotate-45 translate-y-[11px]' : '')} data-magicpath-id="14" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="15" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? '-rotate-45 -translate-y-[11px]' : '')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu Overlay */}
        <div className={cn('fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden transition-opacity duration-300', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={() => setIsMenuOpen(false)} data-magicpath-id="17" data-magicpath-path="Main.tsx" />

        {/* Mobile Menu Panel - Full screen with proper padding */}
        <SortableContainer dndKitId="197dc876-08aa-4bdb-8381-915352c47cee" containerType="regular" prevTag="div" className={cn('fixed top-0 right-0 h-full w-[85vw] max-w-[340px] bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl border-l border-yellow-300/30', isMenuOpen ? 'translate-x-0' : 'translate-x-full')} data-magicpath-id="18" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="6739040a-3e1a-406d-8d84-b7cbc532f649" containerType="regular" prevTag="div" className="flex flex-col h-full pt-24 pb-8 px-6" data-magicpath-id="19" data-magicpath-path="Main.tsx">
            {/* Menu Items */}
            <SortableContainer dndKitId="9b6b92f0-d6b5-4d01-9396-184a06bbdff9" containerType="collection" prevTag="nav" className="flex-1 space-y-3 overflow-y-auto" data-magicpath-id="20" data-magicpath-path="Main.tsx">
              {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className={cn('w-full text-left px-6 py-4 rounded-xl font-bold text-lg tracking-wide', 'text-white hover:text-black transition-all duration-300', 'hover:bg-gradient-to-r hover:from-yellow-300 hover:to-green-500', 'border border-transparent hover:border-yellow-300/50', 'transform hover:translate-x-2 hover:shadow-lg', 'backdrop-blur-sm')} style={{
              transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="Main.tsx">
                  {item}
                </button>)}
            </SortableContainer>

            {/* Bottom Decorative Element */}
            <SortableContainer dndKitId="6ef04c90-56d6-4b9b-a670-48fb73b19ce5" containerType="regular" prevTag="div" className="pt-6 border-t border-white/10 space-y-4" data-magicpath-id="22" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="f45bd436-1d40-49fa-80bc-56db14d37aba" containerType="regular" prevTag="div" className="flex items-center justify-center space-x-4 opacity-60" data-magicpath-id="23" data-magicpath-path="Main.tsx">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-300/50" data-magicpath-id="24" data-magicpath-path="Main.tsx" />
                <Dumbbell className="w-5 h-5 text-yellow-300" data-magicpath-id="25" data-magicpath-path="Main.tsx" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-500/50" data-magicpath-id="26" data-magicpath-path="Main.tsx" />
              </SortableContainer>
              <p className="text-center text-gray-400 text-sm" data-magicpath-id="27" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  return <SortableContainer dndKitId="4cbce7bc-f30b-40d1-86c3-430125ad0e23" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="28" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="29" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="ce1a5958-555c-40aa-b911-584a8635aae0" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="30" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="cd4c82a9-21e3-45e5-984e-777a22971085" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="747870f2-ec6b-44d8-a20a-da398e7f9edf" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="32" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="33" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="34" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="35" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="36" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="37" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="c462646e-2c0f-431a-9984-47ea8b3c872f" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="38" data-magicpath-path="Main.tsx">
              <Button onClick={() => {
              const section = document.querySelector('#contact');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="bg-gradient-to-r from-yellow-300 to-green-500 text-black font-bold text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300" data-magicpath-id="39" data-magicpath-path="Main.tsx">
                Get Started
              </Button>
              <Button onClick={() => {
              const section = document.querySelector('#programs');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300" data-magicpath-id="40" data-magicpath-path="Main.tsx">
                View Programs
              </Button>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="3272231b-07af-461c-a336-267ea9a364f4" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="41" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="35f5aafc-4a8e-492a-b022-7443e74ca6b9" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="42" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="43" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="44" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="812efcfe-dbfb-403a-91d4-cb1a8a9e2c93" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="45" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="01a24c78-cd73-4415-9f3e-ecbf5e2b4086" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "9ce403fc-89d9-4d7f-ad94-957da9598296"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "202d353e-5e00-4245-8a0f-5f799224cdd1"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "ca93b737-dacb-4624-9266-41f175f87b6a"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "717c77a2-2edf-4705-9f4e-c137298328df"
        }].map((stat, index) => <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="47" data-magicpath-path="Main.tsx">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="48" data-magicpath-path="Main.tsx" />
              <div className="text-white font-bold text-lg mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="49" data-magicpath-path="Main.tsx">{stat.value}</div>
              <div className="text-gray-400 text-sm" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="50" data-magicpath-path="Main.tsx">{stat.label}</div>
            </div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const CarouselPlugin = () => {
  const imageSources = ['group.png', 'group1.png', 'group2.png'];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap() + 1);
    emblaApi.on('select', () => {
      setCurrent(emblaApi.selectedScrollSnap() + 1);
    });
    const intervalId = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3500);
    return () => clearInterval(intervalId);
  }, [emblaApi]);
  return <SortableContainer dndKitId="60c54803-d459-46c4-9ed3-2c6b05e4be93" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="51" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="1e57f3d8-1932-44d4-9c0c-9746983774a9" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="52" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="190dbb70-7c75-4462-bb7c-333ef11271fa" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="53" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="ae327690-60a4-4259-b08c-790120471f30" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="54" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="55" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="56" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="57" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="58" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="4182cb64-7f22-429d-b336-703f96160814" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="59" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="60" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="55cc7c59-de31-408a-90ec-5ebd85f20554" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="61" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="62" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="63" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="29e8ffd9-6f17-4a1f-ac86-6be4435ab093" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="64" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="65" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="aff3cad8-d40b-4c32-b2c7-8a724d349632" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="66" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="61c571ec-7400-4a5d-a150-2834926f0098" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="67" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="68" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="bcfd06b4-2771-4171-8444-0b662a98e22a" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="69" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="d37ec27e-375a-47a1-bab6-6ea2494a53b4" containerType="collection" prevTag="div" className="flex" data-magicpath-id="70" data-magicpath-path="Main.tsx">
                  {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="Main.tsx">
                      <img src={src} alt={`Training session ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="72" data-magicpath-path="Main.tsx" />
                    </div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <div className="flex items-center justify-center gap-2 mt-6" data-magicpath-id="73" data-magicpath-path="Main.tsx">
              {imageSources.map((_, index) => <div key={index} className={cn('h-2 rounded-full transition-all duration-300', current === index + 1 ? 'w-8 bg-gradient-to-r from-yellow-300 to-green-500' : 'w-2 bg-gray-600')} data-magicpath-id="74" data-magicpath-path="Main.tsx" />)}
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-8 text-center lg:text-left leading-relaxed" data-magicpath-id="75" data-magicpath-path="Main.tsx">
              The concept and program was created by Jen Barden, Lead Trainer and Owner, from years of working in different fields of health and fitness and also from her own athletic achievements. The Shed in Sandpoint, Idaho cannot be duplicated and the program itself has been tested with proven results.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Trainers = () => {
  return <SortableContainer dndKitId="cd72bf1e-187c-444c-9abe-28d9e5d3ccf8" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="76" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="8e744495-0134-4c84-a0a0-45da3781da25" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="77" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="c3b6a97d-16d1-44ce-b0de-9686fc555da2" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="78" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="79" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="80" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="81" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="dfe9cb5b-399f-4242-a532-6d2c21d2546b" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="82" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="bfd980b0-8a61-44df-b6ee-6febe5ffb592" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="83" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="67a453f9-c0e6-4f90-b47a-18f7431bf3b0" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="84" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="85" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="86" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="5d3c34da-40e3-4657-9274-0ad89926c394" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="87" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="c7b4326e-305c-468c-871c-218d8b5efbcd" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="88" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="89" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="90" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="585eeab9-e145-4b0b-83f5-6e75c7c39018" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="91" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-id="92" data-magicpath-path="Main.tsx">
                "After working 20 plus years in the fitness and health industry and being a competitive runner, triathlete, and tennis player, I knew the benefits of strength training. By adding cross training to my workouts, I was less prone to injury, stronger overall and more successful racing. In 2012, I decided to share my knowledge and experience and opened The Shed, in Sandpoint, Idaho. It was my goal to create an affordable gym for people of all ages, where they could improve their fitness level, receive personal training, workouts designed for their bodies and goals, and be encouraged and supported. Where everyone gets individual attention and is listened to. We don't compete with each other at The Shed, but rather, build each other up. That's what being a ShedHead is all about! As the gym has grown, I've even expanded into online training. Helping people live healthier lives has been and continues to be my mission!"
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Programs = () => {
  return <SortableContainer dndKitId="7482e46c-ef8e-4dc7-afc7-e4872a84b521" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="93" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="62d6d59f-ffd6-4845-a1c6-24928d44ebe4" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="94" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="c360727b-e8db-4844-bd00-1bb5ac143e16" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="95" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="96" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="97" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="98" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="8b4e9a35-6009-4e84-971a-8e51ad0327cd" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="99" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "01e94cf9-be58-4df0-86c5-30d9637864c6"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "2493b125-6757-4b12-833a-15163e685109"
        }].map((program, index) => <div key={index} className="flex-1 group" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="Main.tsx">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="101" data-magicpath-path="Main.tsx">
                <div className="relative w-full aspect-[4/3] overflow-hidden" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="102" data-magicpath-path="Main.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="Main.tsx" />
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="104" data-magicpath-path="Main.tsx" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-300 to-green-500 p-3 rounded-full z-20" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="Main.tsx">
                    <program.icon className="w-6 h-6 text-black" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="Main.tsx" />
                  </div>
                </div>
                <div className="p-8 space-y-4" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="Main.tsx">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="108" data-magicpath-path="Main.tsx">
                    {program.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="109" data-magicpath-path="Main.tsx">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>)}
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Rates = () => {
  return <SortableContainer dndKitId="a9380a22-a2fb-4243-b059-3f89bd180a7f" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="110" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="75de2204-04a6-43c9-a9e5-ae7fd317c43f" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="111" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="40d5b122-6c86-4d50-acf8-28d1c2e5c7d3" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="112" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="113" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="114" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="115" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="a5085d60-8141-4db7-a26f-92892e86aa4b" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="116" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="9eaa3946-0b24-4675-ae7b-cccda57dd5f9" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="117" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="06a04373-e5da-4a1b-a304-d314e0b83ceb" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="118" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "3ba66104-9bf3-489e-86cd-ef302ae692ea"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "edba0595-6634-4369-9db4-b22b58549074"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "a6836764-e755-4abb-80e8-234cfb9d812c"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "b20a98e0-6371-484b-b3f7-3d00e511062e"
            }].map((rate, index) => <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 group" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="119" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4 flex-1" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="120" data-magicpath-path="Main.tsx">
                    <div className="bg-gradient-to-r from-yellow-300 to-green-500 p-2 rounded-lg" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="121" data-magicpath-path="Main.tsx">
                      <rate.icon className="w-5 h-5 text-black" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="Main.tsx" />
                    </div>
                    <span className="text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="123" data-magicpath-path="Main.tsx">{rate.label}</span>
                  </div>
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="124" data-magicpath-path="Main.tsx">
                    {rate.price}
                  </span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="ec0bba18-4e4e-4d93-a65e-75b4dad5cd1e" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="125" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-400 text-center leading-relaxed" data-magicpath-id="126" data-magicpath-path="Main.tsx">
                All memberships include <span className="text-yellow-300 font-semibold" data-magicpath-id="127" data-magicpath-path="Main.tsx">24/7 lockbox access</span> to the gym. <span className="text-green-500 font-semibold" data-magicpath-id="128" data-magicpath-path="Main.tsx">Family discounts</span> available. There is <span className="text-white font-semibold" data-magicpath-id="129" data-magicpath-path="Main.tsx">no contract or sign-up fee</span>.
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const TrainingHours = () => {
  const hours = [{
    day: 'Monday',
    time: '7am - 12pm',
    mpid: "d402b0a0-e3ed-4242-a407-b4ac1ea1c7cd"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "2b3b5abd-9dde-4905-8ab6-a7d07ac1f41b"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "4de9d36d-4873-4057-95d1-97c516607da3"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "c0c64035-011f-4f03-9b31-9a6ffcdf0fa8"
  }] as any[];
  return <SortableContainer dndKitId="a8ffd55b-fde4-4745-afc8-dd7bc97c6129" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="130" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="d6f12dad-01e2-4883-afef-823216a2f650" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="131" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="79ca1ab9-2e3f-44c1-bd0e-f68529266935" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="132" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="133" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="134" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="135" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="e21aa110-7630-4337-bc07-5cef81ea63ea" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="136" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="36056fdb-3989-476b-92c9-acbd9df5efb1" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="137" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="aae836c4-5cfa-4b66-a815-0fae20502da2" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="138" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="142" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="143" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="4cde6b96-d4af-4366-b433-2ea004fe4251" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="144" data-magicpath-path="Main.tsx">
              <p className="text-gray-400 text-base" data-magicpath-id="145" data-magicpath-path="Main.tsx">
                <Clock className="w-5 h-5 inline mr-2 text-yellow-300" data-magicpath-id="146" data-magicpath-path="Main.tsx" />
                Remember: Members have <span className="text-yellow-300 font-semibold" data-magicpath-id="147" data-magicpath-path="Main.tsx">24/7 access</span> to the gym
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleContactClick = () => {
    window.location.href = 'mailto:jenattheshed@gmail.com';
  };
  return <SortableContainer dndKitId="0c40d7f6-1320-4a54-a7fe-e6c8c39298cd" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="148" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="149" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="23fc3e78-1eb0-404f-8f81-b9b27d00e1a2" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="150" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="87de1cc8-5a6a-4b27-8ca0-3ec8f2515fd9" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="151" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="fd5398c8-a817-4c0b-a09a-d4b23c1ecfa0" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="152" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="8d7cb2b5-b669-4649-8fac-a24484b29ffd" containerType="regular" prevTag="div" data-magicpath-id="153" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="154" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="155" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="156" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="157" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="158" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="60a0484f-ca68-4bb4-b704-c919edcb5432" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="159" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="160" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="161" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="1f84bc3c-ec7c-4a61-bca1-defc63aba613" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="163" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="cdc35515-d650-4749-b8f4-f58f3648f5f2" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="164" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="c19cf163-343d-4567-b5e4-2f13e6df4a05" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="165" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="d4728901-3471-4af8-a55b-db60df59ef66" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="166" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="167" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="4f57eabc-89cb-4e01-b9b5-769fb92db448" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="168" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="169" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="170" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="171" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="172" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="173" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="174" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="856473a3-bf5b-46f5-9682-d6ea70c049bc" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="175" data-magicpath-path="Main.tsx">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="176" data-magicpath-path="Main.tsx" />
            <p className="text-gray-400 text-sm" data-magicpath-id="177" data-magicpath-path="Main.tsx">
              &copy; {new Date().getFullYear()} The Shed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs" data-magicpath-id="178" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};

// @component: Main
export const Main = () => {
  return <SortableContainer dndKitId="113fc9c9-1cb5-4d85-a788-7b95e58b713e" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="179" data-magicpath-path="Main.tsx">
      <NavbarComponent data-magicpath-id="180" data-magicpath-path="Main.tsx" />
      <MainHero data-magicpath-id="181" data-magicpath-path="Main.tsx" />
      <CarouselPlugin data-magicpath-id="182" data-magicpath-path="Main.tsx" />
      <Trainers data-magicpath-id="183" data-magicpath-path="Main.tsx" />
      <Programs data-magicpath-id="184" data-magicpath-path="Main.tsx" />
      <Rates data-magicpath-id="185" data-magicpath-path="Main.tsx" />
      <TrainingHours data-magicpath-id="186" data-magicpath-path="Main.tsx" />
      <Contact data-magicpath-id="187" data-magicpath-path="Main.tsx" />
      <Footer data-magicpath-id="188" data-magicpath-path="Main.tsx" />
    </SortableContainer>;
};