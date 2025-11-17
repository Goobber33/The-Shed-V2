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
      <SortableContainer dndKitId="791a99a7-8f30-4620-871d-77af1babe0e2" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="41edcf3d-d5c1-4c4b-acf9-1cbc3ff6e1a7" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="14020d29-441a-46ac-8110-56d0b961875f" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <img src="/shed logo.png" className="h-12 sm:h-16 md:h-20 lg:h-28 transition-all duration-300" alt="The Shed Logo" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
          </SortableContainer>

          {/* Desktop Menu */}
          <SortableContainer dndKitId="d161374d-4544-4691-b072-3c248bbf61c6" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-6 lg:space-x-8" data-magicpath-id="9" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-semibold tracking-wide relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Toggle - Better positioning */}
          <SortableContainer dndKitId="e1fe0ce4-3b35-426f-8d79-3a04c7858321" containerType="regular" prevTag="button" className="md:hidden text-white p-2 hover:text-yellow-300 transition-colors relative z-[60]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="12" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="e1ac9f45-5b90-4e08-900c-4ce890d3f889" containerType="regular" prevTag="div" className="w-7 h-6 flex flex-col justify-between items-center" data-magicpath-id="13" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? 'rotate-45 translate-y-[11px]' : '')} data-magicpath-id="14" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="15" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? '-rotate-45 -translate-y-[11px]' : '')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu Overlay */}
        <div className={cn('fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-opacity duration-300', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={() => setIsMenuOpen(false)} data-magicpath-id="17" data-magicpath-path="Main.tsx" />

        {/* Mobile Menu Panel - Full screen with proper padding */}
        <SortableContainer dndKitId="96e45e76-badf-4df5-8d04-64817cb431c9" containerType="regular" prevTag="div" className={cn('fixed top-0 right-0 h-full w-[85vw] max-w-[340px] bg-black z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl border-l border-yellow-300/30', isMenuOpen ? 'translate-x-0' : 'translate-x-full')} data-magicpath-id="18" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="d0a5f32d-0917-4c50-b6a0-b08147d0488c" containerType="regular" prevTag="div" className="flex flex-col h-full pt-24 pb-8 px-6" data-magicpath-id="19" data-magicpath-path="Main.tsx">
            {/* Menu Items */}
            <SortableContainer dndKitId="e19e845c-27d2-4c20-bda5-5f6c983d85f1" containerType="collection" prevTag="nav" className="flex-1 space-y-3 overflow-y-auto" data-magicpath-id="20" data-magicpath-path="Main.tsx">
              {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className={cn('w-full text-left px-6 py-4 rounded-xl font-bold text-lg tracking-wide', 'text-white hover:text-black transition-all duration-300', 'hover:bg-gradient-to-r hover:from-yellow-300 hover:to-green-500', 'border border-transparent hover:border-yellow-300/50', 'transform hover:translate-x-2 hover:shadow-lg', 'backdrop-blur-sm')} style={{
              transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="Main.tsx">
                  {item}
                </button>)}
            </SortableContainer>

            {/* Bottom Decorative Element */}
            <SortableContainer dndKitId="b0b82b35-e836-431b-ba0b-ea32a264c3af" containerType="regular" prevTag="div" className="pt-6 border-t border-white/10 space-y-4" data-magicpath-id="22" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="ed4cb7c6-5bff-4201-b1d0-0038e1998531" containerType="regular" prevTag="div" className="flex items-center justify-center space-x-4 opacity-60" data-magicpath-id="23" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="a1ba069d-c876-4473-a5b7-c91ef805506e" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="28" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="29" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="f3dde9be-0fce-421f-9339-b42875c14864" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="30" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="c070ac64-f13f-46f3-a61a-1d160b53e5c2" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="5cabad39-acb7-4b0d-b8e4-d517a610ecab" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="32" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="33" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="34" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="35" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="36" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="37" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="0c6db0d7-0404-42d5-8127-e580322c76d7" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="38" data-magicpath-path="Main.tsx">
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
          <SortableContainer dndKitId="34bd7a0c-4938-4ae9-ad91-738c7f84102b" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="41" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="c3e55868-985c-49d9-bebb-beed01610906" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="42" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="43" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="44" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="44bb41b1-ddfa-4fc9-80d2-0698a020e73c" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="45" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="802345fd-3fea-4c2f-8e98-2081a13ae23b" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "ea72564e-f128-471f-9fd2-c7d752168335"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "a7507090-345b-4ce7-8bf5-42ed348ed20d"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "bf5cfeb5-d7f4-4b16-9a47-6663d6891b87"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "04cc6502-ab13-4049-ba1e-063e1ec97af0"
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
  return <SortableContainer dndKitId="8d3ceed6-dcfd-470a-a56e-0a0a67f3993f" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="51" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="8e80f955-17d2-47a7-a553-7f75ec28cd05" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="52" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="6b8df9ae-5856-4037-86de-24fc84550b7b" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="53" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="32c509a2-955a-40e1-92b5-e120ba0f7639" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="54" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="55" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="56" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="57" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="58" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="f0f4b186-4efa-472f-a33a-f863ec54aac4" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="59" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="60" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="b72fe345-eca6-4a4f-89bd-af7db84f43ca" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="61" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="62" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="63" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="2b867bba-f625-41c9-965f-530732f99705" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="64" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="65" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="0b0102b7-b8c9-486e-847b-372a11d97437" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="66" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="ec1f6a29-499e-4420-848d-65a3c03e73fd" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="67" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="68" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="0dcf5574-f224-466e-a184-de9beaf39942" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="69" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="208b1e24-3893-4a80-af06-f7ca06815bde" containerType="collection" prevTag="div" className="flex" data-magicpath-id="70" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="4db72b8c-df6b-4e4a-be93-e70017940971" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="76" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="f18d1b4a-2f62-4b8f-bb02-f09498385fcb" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="77" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f530bf99-0209-4810-bad5-a8315056ece6" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="78" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="79" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="80" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="81" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="4b5fe618-dd37-4fd7-b1d2-346386d7fa09" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="82" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="cb879e79-b6f9-4223-a0ff-1cb1a7c24b1f" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="83" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="7470fc81-c02e-4e14-ba71-627adec8b9e9" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="84" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="85" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="86" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="85efc0b5-3804-4f3c-af33-7ee4f081ebcc" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="87" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="1eabc191-1182-49b2-b973-898564d0443b" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="88" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="89" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="90" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="4a2b56f9-5b5f-41c1-8e04-5e00f2bca94b" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="91" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="3a799abe-3e87-4c69-95de-d10dab6398be" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="93" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="1de4194e-6cf0-46de-b798-306455a9e229" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="94" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="93554837-826f-4c9b-a7e4-144ada97a026" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="95" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="96" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="97" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="98" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="fc007610-ebdf-4e49-9be9-178063aaaae2" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="99" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "84bab50f-c3a9-4da8-b2fc-04b882e322a2"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "640a38d0-82ab-4229-8a78-7a83c2fa18bf"
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
  return <SortableContainer dndKitId="3d876c75-c1b8-4d47-a2aa-6d3bdeae553c" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="110" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="1bd1ae50-e55e-4a66-abe7-37474d3fa43f" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="111" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="56dab724-a6bc-4942-97c2-a68d47d797e2" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="112" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="113" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="114" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="115" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="74a4d8a1-d692-4a2e-8296-a9f4ea83acd4" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="116" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="6e4219d5-dddd-43b7-870a-515c8d5dfb3e" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="117" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="74d6b00c-a0f6-4cbc-aca6-95ed1d22f8fe" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="118" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "d95343cc-e2d2-4f75-a24e-4400593a427a"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "19b03382-7334-4d71-8d42-e51ca717d1f9"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "cccf87cf-46c1-4946-b463-183665c14c10"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "38ef326f-7dad-470a-8762-74fa6b606dfd"
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
            <SortableContainer dndKitId="e7d3ef16-a124-4e86-b858-69a66b552b01" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="125" data-magicpath-path="Main.tsx">
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
    mpid: "3eb8cff1-bd0f-44aa-ad0c-08c1f2f3e29d"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "d5576c00-a7e7-4f1b-9673-3bacf9746af4"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "738b2195-a5a1-4ea3-80b8-bded427735a3"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "0ee20847-0dd5-4b7f-8447-cc17cd9a8c35"
  }] as any[];
  return <SortableContainer dndKitId="5a259398-9493-4079-be36-a4a9ed323ed3" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="130" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="b8e5591f-6999-43f3-bd83-d0a2c6ee57fc" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="131" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="d26dd5e1-c6f1-4e12-86c9-87122e10ba14" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="132" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="133" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="134" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="135" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="34d37bfe-1b3d-4b4a-9177-0f27b6383765" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="136" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="50d26ca0-6302-4f80-9c08-009ac67d9ca3" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="137" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="2fbf6e7b-2f86-4173-be96-8895242119af" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="138" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="142" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="143" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="d130231c-2e85-443b-9bbe-f7755a77838f" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="144" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="030f5ec4-f29b-46f4-96e6-d236464b4e57" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="148" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="149" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="17c44ebc-9753-4fd9-aafd-982f45c4cae2" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="150" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="294d0e4a-3c0f-4c75-b731-98ca432074a4" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="151" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="5fb22adf-ad35-4469-ab23-48a0181ba7e8" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="152" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="bad9b5bc-ec90-48cc-ba67-d2d1cef94935" containerType="regular" prevTag="div" data-magicpath-id="153" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="154" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="155" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="156" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="157" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="158" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="12660934-3ed5-4005-9eeb-39ac4d823c1b" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="159" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="160" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="161" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="2facfe88-676f-47c9-aaad-33ab747bc238" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="163" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="a46a7a2c-aa75-4281-9dbd-06e55285100e" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="164" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="b32384df-b035-4a8a-9ffa-c4c848c6c81b" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="165" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="781518ad-e7c5-4fc1-a16c-3c4e9986ce97" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="166" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="167" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="3b822b33-5957-45bb-8daa-ac83f9257612" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="168" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="169" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="170" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="171" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="172" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="173" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="174" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="2a769644-51d8-48ef-93ee-8612da0f5df5" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="175" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="13800840-6f44-423f-86a1-7521a4970143" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="179" data-magicpath-path="Main.tsx">
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