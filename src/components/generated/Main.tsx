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
      <SortableContainer dndKitId="115b7b3c-76b3-4443-93d6-76d3a05cbba8" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f59edc02-b384-44b8-8111-42d063f42fbc" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="0e7f4f11-40db-46e2-89df-a1663cbef96f" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <img src="/shed logo.png" className="h-12 sm:h-16 md:h-20 lg:h-28 transition-all duration-300" alt="The Shed Logo" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
          </SortableContainer>

          {/* Desktop Menu */}
          <SortableContainer dndKitId="2cb3fdc6-bfcb-489e-8465-014acb0d3631" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-6 lg:space-x-8" data-magicpath-id="9" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-semibold tracking-wide relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Toggle - Fixed positioning */}
          <SortableContainer dndKitId="bbbe6d7b-6193-426e-b252-d61456a2fcad" containerType="regular" prevTag="button" className="md:hidden text-white p-3 hover:text-yellow-300 transition-colors relative z-[60]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="12" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="3738c85c-1da8-42c8-bd59-c05d7b50719c" containerType="regular" prevTag="div" className="w-6 h-5 flex flex-col justify-between" data-magicpath-id="13" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 translate-y-2' : '')} data-magicpath-id="14" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="15" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 -translate-y-2' : '')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu Overlay */}
        <div className={cn('fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden transition-opacity duration-300', isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')} onClick={() => setIsMenuOpen(false)} data-magicpath-id="17" data-magicpath-path="Main.tsx" />

        {/* Mobile Menu Panel - Fixed with proper background and spacing */}
        <SortableContainer dndKitId="e24b0291-fbb7-43a3-a0e5-f8b187a545cf" containerType="regular" prevTag="div" className={cn('fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-gradient-to-br from-black via-gray-900 to-black z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl border-l border-yellow-300/20', isMenuOpen ? 'translate-x-0' : 'translate-x-full')} data-magicpath-id="18" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="5b0e1e12-e2b3-4197-9428-ec7fb8a9c8d8" containerType="regular" prevTag="div" className="flex flex-col h-full pt-20 pb-8 px-6" data-magicpath-id="19" data-magicpath-path="Main.tsx">
            {/* Menu Items */}
            <SortableContainer dndKitId="47b1f61d-80b2-4e89-991c-6a895c8314ea" containerType="collection" prevTag="nav" className="flex-1 space-y-2 overflow-y-auto" data-magicpath-id="20" data-magicpath-path="Main.tsx">
              {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className={cn('w-full text-left px-6 py-4 rounded-xl font-bold text-lg tracking-wide', 'text-white hover:text-black transition-all duration-300', 'hover:bg-gradient-to-r hover:from-yellow-300 hover:to-green-500', 'border border-transparent hover:border-yellow-300/50', 'transform hover:translate-x-2 hover:shadow-lg', 'backdrop-blur-sm')} style={{
              transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="Main.tsx">
                  {item}
                </button>)}
            </SortableContainer>

            {/* Bottom Decorative Element */}
            <SortableContainer dndKitId="fea65942-df33-44ac-bbeb-d7d3c1b3a031" containerType="regular" prevTag="div" className="pt-6 border-t border-white/10 space-y-4" data-magicpath-id="22" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="b67da0d6-decd-419a-83df-94afde3e77f4" containerType="regular" prevTag="div" className="flex items-center justify-center space-x-4 opacity-60" data-magicpath-id="23" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="845f97ab-e0fb-4703-abb7-4357809e4809" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="28" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="29" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="77a81463-aa5c-4886-8d8c-c5a70762d120" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="30" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="3520a15b-f815-403f-ba70-56f5545bfde7" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="2eda881f-148c-45d0-b2c7-33b97052ced0" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="32" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="33" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="34" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="35" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="36" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="37" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="b11ef7d1-37f2-421b-ac79-1a531ab61159" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="38" data-magicpath-path="Main.tsx">
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
          <SortableContainer dndKitId="972d5e2c-0791-43a3-8570-f964f6665da0" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="41" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="359f9f85-6ba8-4e47-baa3-1e2bd5709287" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="42" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="43" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="44" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="04694b74-3e66-4308-8274-dc919eb0f6ec" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="45" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="0fd8a7be-923f-4157-9492-ed9bf474285d" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "549fd879-48a2-45e8-abd3-6a6a3c6d76ee"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "c8d4697d-28f5-4b89-b01a-3a6cb6321877"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "bacb5b63-67d4-48e0-9300-eb073f7404fd"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "c8533486-4e72-499b-be2e-210677981928"
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
  return <SortableContainer dndKitId="c15234cd-9ff7-4f73-bc0d-b40d50da9af4" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="51" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="fb60065a-7180-4f69-9d4b-b95d1d5ab2b0" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="52" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="03350c5c-b056-42f3-8eb4-e673db2c05d6" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="53" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="5e4b9de5-8a5f-425b-ac31-6ddcad4f5c97" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="54" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="55" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="56" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="57" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="58" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="370e1d08-5ebe-4aa0-8425-e47d5c61fe4a" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="59" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="60" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="842bbb69-3c25-4e50-a124-17825020fb2a" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="61" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="62" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="63" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="728bce41-9134-424c-8ffd-d0ded303ee8e" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="64" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="65" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="473f52be-449d-41fb-988c-7cb74dc2bb1a" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="66" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="0bdf91f5-fdc1-42ee-98de-893aec1d222f" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="67" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="68" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="5a0b02d2-1295-4a39-96d5-71409e4bf66a" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="69" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="c6b8cf2b-6a16-44a5-b22c-1098cba6836a" containerType="collection" prevTag="div" className="flex" data-magicpath-id="70" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="04f3df1a-c7d1-4de6-967b-a6cfc67e2f83" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="76" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="1bd6e4f1-cb08-448d-9c4d-3cc488cf8116" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="77" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f6038e32-83d3-4979-8785-8b5bb888ede5" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="78" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="79" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="80" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="81" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="c8999f6f-faf0-4afb-bb0b-763fc66591cd" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="82" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="ebd3efd4-6bce-457f-b6ce-3b02c7eda850" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="83" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="bced406f-7822-4f8a-a9a0-23375a39a926" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="84" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="85" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="86" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="d72fcbec-7a6e-408b-8020-c8281e016b57" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="87" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="c5ca3794-0dfb-4ba5-ac7d-e4d034702afc" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="88" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="89" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="90" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="a250f5f8-26a3-41d0-882e-b6d29436c285" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="91" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="9e78626f-4867-4a1c-a011-1fe93e63097d" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="93" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="f6036071-d4e2-49c1-a799-a4f4aee42af4" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="94" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="156ca38c-6b2a-4371-bd77-dfd5a500f66f" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="95" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="96" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="97" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="98" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="3ad93c60-d094-4706-9ce3-56c5e77a9158" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="99" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "08a92635-2ead-4633-bfb4-cb3eb25c4664"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "b6056903-f75a-4644-9ef4-86ec9da3117f"
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
  return <SortableContainer dndKitId="196189fa-2d95-4e17-9ae5-b826aad4ada7" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="110" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="25b98e9a-e875-4064-8806-562e7872e053" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="111" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="ce0be9e6-81ef-4da4-a3b3-31663ee16095" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="112" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="113" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="114" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="115" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="d4d979f2-ebd5-44c1-a9d5-c4a2616e2a49" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="116" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="18769175-1071-4c61-a941-a8753e005ef1" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="117" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="04637342-7df5-4290-a5e4-e11db20bda20" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="118" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "9fb48d75-cb49-4ab8-88f1-e502c7cd4c88"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "780d862c-f57b-473e-9c0f-6edd91c2fe13"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "7a28491c-1267-408c-838a-c54b255e114b"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "7bab0bd6-84cc-44e8-9de2-6bf47a563199"
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
            <SortableContainer dndKitId="7b3ac0d5-3980-4bbb-b955-d08b61a38c02" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="125" data-magicpath-path="Main.tsx">
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
    mpid: "43cb0d8d-de00-4224-b9e7-30814ee0ba67"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "40e4e48b-977f-4466-a1e8-ab3587c1beea"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "9b46615c-9e81-4d87-aa32-6f80bb3cb328"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "34429ad4-1a51-4e1d-91db-c09f4d85c60e"
  }] as any[];
  return <SortableContainer dndKitId="4db8f90b-e28f-44ae-82bb-e699d03620b6" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="130" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="3324243b-5ad5-4c34-a171-249678a67e48" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="131" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="199089ce-5c3c-482e-917b-14bb02543c2c" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="132" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="133" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="134" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="135" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="bcb7fd3e-1d14-4eab-bec6-88541a61d3f8" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="136" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="4ac86b6a-6d87-4a37-8b0a-a120941f4daa" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="137" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="2b33dddb-4d19-48ca-a4dd-a06c6b4634e8" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="138" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="142" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="143" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="611eab49-880d-4ac0-884e-7943de1421a0" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="144" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="ba09aec0-a74e-4919-b05b-e70f566530df" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="148" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="149" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="2120dfae-fc32-4027-bde8-f572af2e150d" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="150" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="78206f61-033e-48fd-93c1-ec33c0c218f5" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="151" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="89c3b3c1-649c-4b08-b153-811869ccc091" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="152" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="b896bbbe-32e4-473b-ab45-fc77705002e9" containerType="regular" prevTag="div" data-magicpath-id="153" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="154" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="155" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="156" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="157" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="158" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="32564aa7-e03a-409b-bf31-3dfae9692761" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="159" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="160" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="161" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="f82e0ba0-a268-441f-babf-7303f2e3d377" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="163" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="830a0ce7-f3e6-4e76-a7a4-76a646972f75" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="164" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="f5d307a5-39be-4726-8162-3a4a5fd5796e" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="165" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="13a51ab1-0c1a-438c-8a1b-ef1cb5748482" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="166" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="167" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="8aa2fb16-3bbf-4b1e-8da5-00f5adc41ccb" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="168" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="169" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="170" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="171" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="172" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="173" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="174" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="e4dd58d2-9a1d-4d46-bcd4-869867522fa8" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="175" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="bcb38ec3-e7c0-4ad1-98a4-f9554eb2d591" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="179" data-magicpath-path="Main.tsx">
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