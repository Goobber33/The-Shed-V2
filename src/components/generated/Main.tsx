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
  return <nav className={cn('w-full bg-black backdrop-blur-md z-50 border-b border-white/5', position === 'sticky' && 'sticky top-0', position === 'fixed' && 'fixed top-0', className)} data-magicpath-id="3" data-magicpath-path="Main.tsx">
      {children}
    </nav>;
};
const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{
    label: 'Home',
    id: 'home',
    mpid: "5f9b4ec9-fcd3-4009-a523-d27c4799f394"
  }, {
    label: 'About',
    id: 'about',
    mpid: "902ed025-7961-48c0-b134-b1c4aee4cdb1"
  }, {
    label: 'Trainers',
    id: 'trainers',
    mpid: "77224db2-0ae5-4c65-b0a9-a1b2cb2f43b2"
  }, {
    label: 'Programs',
    id: 'programs',
    mpid: "9d42a137-2b6d-4fcc-9bf3-55ea850b90bc"
  }, {
    label: 'Rates',
    id: 'rates',
    mpid: "7ecbf0b6-10a5-44dc-9eb1-b40ed65ccc44"
  }, {
    label: 'Hours',
    id: 'hours',
    mpid: "ebc28e78-7c63-430d-8953-27a963760904"
  }, {
    label: 'Contact',
    id: 'contact',
    mpid: "6abb0a2f-dc5e-420f-9c28-4864484d2c49"
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
  return <Navbar position="sticky" className="bg-black/95 backdrop-blur-md border-b border-white/10" data-magicpath-id="4" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="acc9a66f-b72b-4397-b70c-eb0b92d1c49a" containerType="regular" prevTag="div" className="container mx-auto px-4 sm:px-6" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="9f3ad566-f204-459e-aa73-0c92e500bd3a" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          {/* Logo */}
          <SortableContainer dndKitId="6ce1d6af-ea08-4b2b-80a4-2124f64bd24d" containerType="regular" prevTag="button" onClick={() => scrollToSection('home')} className="flex items-center space-x-2 group" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-300 group-hover:rotate-45 transition-transform duration-300" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
            <span className="text-xl sm:text-2xl font-bold text-white" data-magicpath-id="9" data-magicpath-path="Main.tsx">
              THE <span className="text-green-500" data-magicpath-id="10" data-magicpath-path="Main.tsx">SHED</span>
            </span>
          </SortableContainer>

          {/* Desktop Menu */}
          <SortableContainer dndKitId="665ddf88-95fc-4aa0-9b24-49d94cff783d" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-1 lg:space-x-2" data-magicpath-id="11" data-magicpath-path="Main.tsx">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="12" data-magicpath-path="Main.tsx">
                {item.label}
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Button */}
          <SortableContainer dndKitId="bfaa5996-0715-4825-8378-671eec2601e6" containerType="regular" prevTag="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="13" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="8e9e6f31-c126-4961-8791-15ce717f41ee" containerType="regular" prevTag="div" className="w-6 h-5 flex flex-col justify-between" data-magicpath-id="14" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 translate-y-2' : '')} data-magicpath-id="15" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 -translate-y-2' : '')} data-magicpath-id="17" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu Dropdown */}
        <SortableContainer dndKitId="7fb4e4df-51a9-476a-840e-37c31d1a13e4" containerType="regular" prevTag="div" className={cn('md:hidden overflow-hidden transition-all duration-300 ease-in-out', isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')} data-magicpath-id="18" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="f1f5d86f-6bbc-420e-914e-c187bbf1fd27" containerType="collection" prevTag="div" className="py-4 space-y-1 border-t border-white/10" data-magicpath-id="19" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={item.id} onClick={() => scrollToSection(item.id)} className={cn('w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200', 'transform', isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0')} style={{
            transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
          }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:string" data-magicpath-id="20" data-magicpath-path="Main.tsx">
                {item.label}
              </button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  return <SortableContainer dndKitId="830f6303-a89e-4368-9816-404292ae58c8" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="21" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="22" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="aa8e2e15-ee43-4852-ad57-f23c327a6ed1" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="23" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="2bff243f-d9c9-4217-bf32-5013571e8775" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="24" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="27568f3e-e065-4c09-9fb6-0466cf32dda5" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="25" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="26" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="27" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="28" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="29" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="30" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="cf971626-6210-4678-bf6e-943a2939ac52" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="31" data-magicpath-path="Main.tsx">
              <Button onClick={() => {
              const section = document.querySelector('#contact');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="bg-gradient-to-r from-yellow-300 to-green-500 text-black font-bold text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300" data-magicpath-id="32" data-magicpath-path="Main.tsx">
                Get Started
              </Button>
              <Button onClick={() => {
              const section = document.querySelector('#programs');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300" data-magicpath-id="33" data-magicpath-path="Main.tsx">
                View Programs
              </Button>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="dd426e89-9bc1-4b3d-973d-b86b06f9fed6" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="34" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="d66e305e-b3e3-4016-b694-3b6da9dac6d7" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="35" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="36" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="37" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="5c112c06-0b09-431d-ae81-6f68634d1d36" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="38" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="10e7c584-d8bc-4a28-93a2-e2aac4d73a6c" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="39" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "ee79534f-5a87-467c-880e-67a236273803"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "b8c8f823-3efa-44ee-8140-ca1fa9bf9607"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "bfe06b16-351e-4b64-baab-85748a6eadca"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "e71dfb31-149e-4ede-8617-0ca2db9064fb"
        }].map((stat, index) => <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="Main.tsx">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="Main.tsx" />
              <div className="text-white font-bold text-lg mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="42" data-magicpath-path="Main.tsx">{stat.value}</div>
              <div className="text-gray-400 text-sm" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="43" data-magicpath-path="Main.tsx">{stat.label}</div>
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
  return <SortableContainer dndKitId="eee35d10-4df6-4669-b9c8-bdd88c8fe787" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="44" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="5100364f-72f6-47be-b9c9-2fec239268a0" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="45" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="73950dfd-2029-4586-af38-d8dd1dcb1a12" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="ad8ae7d0-8037-45a6-863f-5560915638e2" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="47" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="48" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="49" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="50" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="51" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="4ff1878e-92a2-4fb9-b9f3-c485f27ab695" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="52" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="53" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="0df00ede-61cb-48ed-8c4b-a6817f4c91ac" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="54" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="55" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="56" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="11c66b3f-69b6-4d71-b5b9-88e0611166c2" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="57" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="58" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="6e2f97b3-bdc6-4ad0-95e1-588c176f9320" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="59" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="86d5e30e-8bb6-4a5b-9310-73a65dda1f50" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="60" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="61" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="56c61397-bf67-463e-813b-534eb1534d43" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="62" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="c3611ee2-42f1-4f11-87d5-3f4266e2e632" containerType="collection" prevTag="div" className="flex" data-magicpath-id="63" data-magicpath-path="Main.tsx">
                  {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="64" data-magicpath-path="Main.tsx">
                      <img src={src} alt={`Training session ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="65" data-magicpath-path="Main.tsx" />
                    </div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <div className="flex items-center justify-center gap-2 mt-6" data-magicpath-id="66" data-magicpath-path="Main.tsx">
              {imageSources.map((_, index) => <div key={index} className={cn('h-2 rounded-full transition-all duration-300', current === index + 1 ? 'w-8 bg-gradient-to-r from-yellow-300 to-green-500' : 'w-2 bg-gray-600')} data-magicpath-id="67" data-magicpath-path="Main.tsx" />)}
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-8 text-center lg:text-left leading-relaxed" data-magicpath-id="68" data-magicpath-path="Main.tsx">
              The concept and program was created by Jen Barden, Lead Trainer and Owner, from years of working in different fields of health and fitness and also from her own athletic achievements. The Shed in Sandpoint, Idaho cannot be duplicated and the program itself has been tested with proven results.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Trainers = () => {
  return <SortableContainer dndKitId="f71b16e1-c50c-4428-af6d-1b9701fcc547" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="69" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="a82cc3f3-1c02-4111-a704-c03e61419b61" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="70" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="98a12e98-e95f-4f97-b671-f2f60d7ec535" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="71" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="72" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="73" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="74" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="5ea7d8e0-ff0f-4b83-9e8a-767b0c92c6ef" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="75" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="ca66bfca-0391-4d14-b23d-d78cd353ab6d" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="76" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="253d1044-b4e4-449f-b43d-f6d6000483f2" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="77" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="78" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="79" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="673f05b6-b4b7-498f-a314-29c42717eefe" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="80" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="00ae5034-de74-4823-a775-c39b126a91e3" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="81" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="82" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="83" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="8cc73864-0d03-40dd-83c6-3801f05d211d" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="84" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-id="85" data-magicpath-path="Main.tsx">
                "After working 20 plus years in the fitness and health industry and being a competitive runner, triathlete, and tennis player, I knew the benefits of strength training. By adding cross training to my workouts, I was less prone to injury, stronger overall and more successful racing. In 2012, I decided to share my knowledge and experience and opened The Shed, in Sandpoint, Idaho. It was my goal to create an affordable gym for people of all ages, where they could improve their fitness level, receive personal training, workouts designed for their bodies and goals, and be encouraged and supported. Where everyone gets individual attention and is listened to. We don't compete with each other at The Shed, but rather, build each other up. That's what being a ShedHead is all about! As the gym has grown, I've even expanded into online training. Helping people live healthier lives has been and continues to be my mission!"
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Programs = () => {
  return <SortableContainer dndKitId="f3103cca-256e-4e61-afad-0b0e6a782b02" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="86" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="26a264f5-54ab-460b-af82-34ebbae10cb6" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="87" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="3bc87170-0b4f-42fe-92c4-aa85b5b3f487" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="88" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="89" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="90" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="91" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="d79880c5-9466-4246-97c3-a5eccefbbc0b" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="92" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "3a1a5352-b1a4-44ad-8183-88c4fcec864e"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "1eacc172-8c63-4a4f-a844-cb3c096f8e8d"
        }].map((program, index) => <div key={index} className="flex-1 group" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="Main.tsx">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="Main.tsx">
                <div className="relative w-full aspect-[4/3] overflow-hidden" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="Main.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="Main.tsx" />
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="97" data-magicpath-path="Main.tsx" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-300 to-green-500 p-3 rounded-full z-20" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="98" data-magicpath-path="Main.tsx">
                    <program.icon className="w-6 h-6 text-black" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="Main.tsx" />
                  </div>
                </div>
                <div className="p-8 space-y-4" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="Main.tsx">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="101" data-magicpath-path="Main.tsx">
                    {program.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="102" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="82d95f06-3ae0-451f-a8d5-c4a66693e960" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="103" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="0f3420d6-4743-40ee-a868-e736168ebc34" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="104" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="a3c8b07b-3008-4124-a969-27356ca65bb2" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="105" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="106" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="107" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="108" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="3e1c0deb-cf1c-4ee5-baa6-8db1a976c096" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="109" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="11837a3d-3019-4cdd-8734-0420f20099c0" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="110" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="7faaf496-e70a-4c4d-9c77-356656b7666e" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="111" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "c5f2f8ca-0611-4329-bc4f-95ee10a3c602"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "a86985ef-42c3-4243-abb4-eb01b4bc25d6"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "7eebbf2e-ca59-4622-ac2a-c26e46616578"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "9fdd4580-236d-45e8-b3c5-f6affbbff5ee"
            }].map((rate, index) => <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 group" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4 flex-1" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="113" data-magicpath-path="Main.tsx">
                    <div className="bg-gradient-to-r from-yellow-300 to-green-500 p-2 rounded-lg" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="114" data-magicpath-path="Main.tsx">
                      <rate.icon className="w-5 h-5 text-black" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="115" data-magicpath-path="Main.tsx" />
                    </div>
                    <span className="text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="116" data-magicpath-path="Main.tsx">{rate.label}</span>
                  </div>
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="117" data-magicpath-path="Main.tsx">
                    {rate.price}
                  </span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="0ab30390-376e-4956-a158-c2618fab5e1c" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="118" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-400 text-center leading-relaxed" data-magicpath-id="119" data-magicpath-path="Main.tsx">
                All memberships include <span className="text-yellow-300 font-semibold" data-magicpath-id="120" data-magicpath-path="Main.tsx">24/7 lockbox access</span> to the gym. <span className="text-green-500 font-semibold" data-magicpath-id="121" data-magicpath-path="Main.tsx">Family discounts</span> available. There is <span className="text-white font-semibold" data-magicpath-id="122" data-magicpath-path="Main.tsx">no contract or sign-up fee</span>.
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
    mpid: "ccfbc625-d5b0-461b-8eb0-6cbf455356de"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "425f227f-1d75-4447-9bc7-c9ef0d32bb6d"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "f5b956ba-3d21-4886-92b2-e08735bbe70c"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "369a0376-d425-4755-9fc9-d73730bd7937"
  }] as any[];
  return <SortableContainer dndKitId="6be4a551-0e68-4325-87e3-49abaeceb4fa" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="123" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="a6e9d931-8438-4f84-bbd2-d654d0721e47" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="124" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="53d22aa2-24e5-47e0-956e-229cbc06fe41" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="125" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="126" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="127" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="128" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="5eb97396-4fd1-42a8-a3f5-dc794d380f51" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="129" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="e53c4390-6123-4999-8d0f-0f3da6810884" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="130" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="b4be0205-8b05-48d1-b2d9-a7dd73c554da" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="131" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="132" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="135" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="136" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="09a9c44e-ef5a-4e60-88f7-2e038bf9e553" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="137" data-magicpath-path="Main.tsx">
              <p className="text-gray-400 text-base" data-magicpath-id="138" data-magicpath-path="Main.tsx">
                <Clock className="w-5 h-5 inline mr-2 text-yellow-300" data-magicpath-id="139" data-magicpath-path="Main.tsx" />
                Remember: Members have <span className="text-yellow-300 font-semibold" data-magicpath-id="140" data-magicpath-path="Main.tsx">24/7 access</span> to the gym
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
  return <SortableContainer dndKitId="70920574-10a9-4eb0-8ffe-e39291d8fdff" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="141" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="142" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="e76a38b3-aea7-4453-9147-964b0186281c" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="143" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="c3f664f9-9910-444c-a541-e7db6a42e251" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="144" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="40fa0b3b-8b95-448f-8faf-440e15c58810" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="145" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="a5f96e22-301b-4eb3-be96-172977b5fdd5" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="147" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="148" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="149" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="150" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="151" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="f468f042-7b73-4ec2-bdea-944a2d5f59bf" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="152" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="153" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="154" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="9d84eb2a-b542-470a-b318-0f17b023d802" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="155" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="156" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="6024e28b-39c8-4f71-a6d9-975086248b5a" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="157" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="d980ebd0-c2ec-4ce8-b0ee-534ad701672b" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="158" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="81d76b79-166f-4d35-92a4-a4b860759eae" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="159" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="160" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="0f34524b-f8f6-4ee2-b6d4-4cf129f60a98" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="161" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="163" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="164" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="165" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="166" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="167" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="07e9ed34-96d2-4150-9d74-bdfdf7e3b812" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="168" data-magicpath-path="Main.tsx">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="169" data-magicpath-path="Main.tsx" />
            <p className="text-gray-400 text-sm" data-magicpath-id="170" data-magicpath-path="Main.tsx">
              &copy; {new Date().getFullYear()} The Shed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs" data-magicpath-id="171" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};

// @component: Main
export const Main = () => {
  return <SortableContainer dndKitId="06c5fc83-402c-4c24-a410-b037fc92ade3" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="172" data-magicpath-path="Main.tsx">
      <NavbarComponent data-magicpath-id="173" data-magicpath-path="Main.tsx" />
      <MainHero data-magicpath-id="174" data-magicpath-path="Main.tsx" />
      <CarouselPlugin data-magicpath-id="175" data-magicpath-path="Main.tsx" />
      <Trainers data-magicpath-id="176" data-magicpath-path="Main.tsx" />
      <Programs data-magicpath-id="177" data-magicpath-path="Main.tsx" />
      <Rates data-magicpath-id="178" data-magicpath-path="Main.tsx" />
      <TrainingHours data-magicpath-id="179" data-magicpath-path="Main.tsx" />
      <Contact data-magicpath-id="180" data-magicpath-path="Main.tsx" />
      <Footer data-magicpath-id="181" data-magicpath-path="Main.tsx" />
    </SortableContainer>;
};