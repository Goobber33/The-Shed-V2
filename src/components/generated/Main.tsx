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
      <SortableContainer dndKitId="846877fd-777f-4ed4-a642-ff9128bc1835" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="0c435901-f4ab-4962-9f70-6712e4077435" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="b5c139f6-9b8b-4905-a41c-524b10fc1073" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <img src="/shed logo.png" className="h-12 sm:h-16 md:h-20 lg:h-28 transition-all duration-300" alt="The Shed Logo" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
          </SortableContainer>

          {/* Desktop Menu */}
          <SortableContainer dndKitId="fb9a0a72-0985-4b93-937f-1e5e7871996f" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-6 lg:space-x-8" data-magicpath-id="9" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-semibold tracking-wide relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Toggle - Hamburger Icon */}
          <SortableContainer dndKitId="e8f2e4a4-7474-4b38-8707-ac63ad38692c" containerType="regular" prevTag="button" className="md:hidden text-white p-2 hover:text-yellow-300 transition-colors relative z-[70]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="12" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="9f5f8881-763d-4fa9-b9a3-7c99fe556916" containerType="regular" prevTag="div" className="w-7 h-6 flex flex-col justify-between items-center" data-magicpath-id="13" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? 'rotate-45 translate-y-[11px]' : '')} data-magicpath-id="14" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="15" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? '-rotate-45 -translate-y-[11px]' : '')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu - Full Screen Overlay */}
        <SortableContainer dndKitId="ff331dcb-ee2b-4620-aafa-c2400f6907a9" containerType="regular" prevTag="div" className={cn('fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-out', isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none')} data-magicpath-id="17" data-magicpath-path="Main.tsx">
          {/* Animated Background */}
          <div className={cn('absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-opacity duration-500', isMenuOpen ? 'opacity-100' : 'opacity-0')} data-magicpath-id="18" data-magicpath-path="Main.tsx" />
          
          {/* Decorative animated gradients */}
          <div className={cn('absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl transition-all duration-700', isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20')} data-magicpath-id="19" data-magicpath-path="Main.tsx" />
          <div className={cn('absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl transition-all duration-700 delay-100', isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20')} data-magicpath-id="20" data-magicpath-path="Main.tsx" />

          {/* Menu Content */}
          <SortableContainer dndKitId="404838e9-309c-4f59-b47f-231af7c93b8d" containerType="regular" prevTag="div" className="relative h-full w-full flex flex-col items-center justify-center px-8 py-20" data-magicpath-id="21" data-magicpath-path="Main.tsx">
            {/* Logo at top */}
            <SortableContainer dndKitId="c6d9873d-d5a9-44c2-bcc9-b3571d573c38" containerType="regular" prevTag="div" className={cn('absolute top-8 left-1/2 -translate-x-1/2 transition-all duration-500', isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4')} data-magicpath-id="22" data-magicpath-path="Main.tsx">
              <img src="/shed logo.png" className="h-16 opacity-90" alt="The Shed" data-magicpath-id="23" data-magicpath-path="Main.tsx" />
            </SortableContainer>

            {/* Menu Items - Center aligned with staggered animation */}
            <SortableContainer dndKitId="b82cb8ff-84cf-4e93-bd72-31c423d6a933" containerType="collection" prevTag="nav" className="flex flex-col items-center justify-center space-y-1 w-full max-w-sm" data-magicpath-id="24" data-magicpath-path="Main.tsx">
              {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className={cn('w-full text-center py-4 px-6 rounded-lg font-bold text-2xl tracking-wider', 'text-white transition-all duration-300', 'hover:bg-gradient-to-r hover:from-yellow-300 hover:to-green-500 hover:text-black', 'hover:scale-105 hover:shadow-lg', 'transform', isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{
              transitionDelay: isMenuOpen ? `${100 + index * 60}ms` : '0ms'
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="Main.tsx">
                  {item}
                </button>)}
            </SortableContainer>

            {/* Bottom decorative element */}
            <SortableContainer dndKitId="158234ef-824b-4063-a479-f98c84afe2f1" containerType="regular" prevTag="div" className={cn('absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 transition-all duration-700 delay-300', isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} data-magicpath-id="26" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="730ee087-c880-4d41-87a2-1b1c5f128c0b" containerType="regular" prevTag="div" className="flex items-center justify-center space-x-4" data-magicpath-id="27" data-magicpath-path="Main.tsx">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-300/50" data-magicpath-id="28" data-magicpath-path="Main.tsx" />
                <Dumbbell className="w-6 h-6 text-yellow-300" data-magicpath-id="29" data-magicpath-path="Main.tsx" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/50" data-magicpath-id="30" data-magicpath-path="Main.tsx" />
              </SortableContainer>
              <p className="text-gray-400 text-sm font-medium" data-magicpath-id="31" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  return <SortableContainer dndKitId="2febcdf4-1a0f-4545-846c-537810a9a6e0" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="32" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="33" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="e9adbd8f-9db1-4ba7-95cd-da5d9bc15364" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="34" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="9a9e1d16-a532-4d18-9cca-799c197b2ea7" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="35" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="552e1b3a-a2fd-4364-ae97-41da6a6f18bf" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="36" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="37" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="38" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="39" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="40" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="41" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="4cd1f722-3997-4773-ac1c-4fcae4e4a673" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="42" data-magicpath-path="Main.tsx">
              <Button onClick={() => {
              const section = document.querySelector('#contact');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="bg-gradient-to-r from-yellow-300 to-green-500 text-black font-bold text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300" data-magicpath-id="43" data-magicpath-path="Main.tsx">
                Get Started
              </Button>
              <Button onClick={() => {
              const section = document.querySelector('#programs');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300" data-magicpath-id="44" data-magicpath-path="Main.tsx">
                View Programs
              </Button>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="273bdd36-c5a3-4844-b5b5-444cd5e714cc" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="45" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="e9b204a3-4e3a-40ab-b9dd-e2795f839cab" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="46" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="47" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="48" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="bd5c4a69-70d7-406f-85b5-11ffd78414da" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="49" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="513ed84e-12b5-46ed-a205-e91dab6f6fa3" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="50" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "eabdced8-ecf5-437c-8d7c-582220932179"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "d62dc581-187d-4183-a3d4-851deb2f584b"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "50cf7b8b-00e4-46a7-898c-e636ce9be653"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "5f390fb3-0e08-4f62-b521-57021c57caeb"
        }].map((stat, index) => <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="Main.tsx">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="52" data-magicpath-path="Main.tsx" />
              <div className="text-white font-bold text-lg mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="53" data-magicpath-path="Main.tsx">{stat.value}</div>
              <div className="text-gray-400 text-sm" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="54" data-magicpath-path="Main.tsx">{stat.label}</div>
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
  return <SortableContainer dndKitId="d040a114-1a18-4c55-b77d-4cf5b6225df7" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="55" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="456756d6-db69-4c95-bd03-f9e0d7a1038f" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="56" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="0825d851-ea1b-45be-938b-8af96a6946dd" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="57" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="b3e82b78-2a2a-4224-b8d4-01471dfe7869" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="58" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="59" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="60" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="61" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="62" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="bdbe4a69-cabd-4fa7-ae6b-d676528e5567" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="63" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="64" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="e89b3dce-13cc-484e-846e-4214e2cf4cc1" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="65" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="66" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="67" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="6bf82f5a-76e0-4a8d-ab68-f563c82664c7" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="68" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="69" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="57190fa2-a968-4d3f-a4c2-8139a382261e" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="70" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="ed3e1c16-bfb0-4c89-894b-043b06c19f76" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="71" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="72" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="09ed2182-0f2e-430c-adc1-870d4c3be755" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="73" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="f724ab41-ac43-43bb-a00e-9c5e6c76faa4" containerType="collection" prevTag="div" className="flex" data-magicpath-id="74" data-magicpath-path="Main.tsx">
                  {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="75" data-magicpath-path="Main.tsx">
                      <img src={src} alt={`Training session ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="76" data-magicpath-path="Main.tsx" />
                    </div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <div className="flex items-center justify-center gap-2 mt-6" data-magicpath-id="77" data-magicpath-path="Main.tsx">
              {imageSources.map((_, index) => <div key={index} className={cn('h-2 rounded-full transition-all duration-300', current === index + 1 ? 'w-8 bg-gradient-to-r from-yellow-300 to-green-500' : 'w-2 bg-gray-600')} data-magicpath-id="78" data-magicpath-path="Main.tsx" />)}
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-8 text-center lg:text-left leading-relaxed" data-magicpath-id="79" data-magicpath-path="Main.tsx">
              The concept and program was created by Jen Barden, Lead Trainer and Owner, from years of working in different fields of health and fitness and also from her own athletic achievements. The Shed in Sandpoint, Idaho cannot be duplicated and the program itself has been tested with proven results.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Trainers = () => {
  return <SortableContainer dndKitId="eebc71d4-7ee5-4ad9-aad1-17d4ef2a04a7" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="80" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="0c882813-cf86-4dc4-b438-f83ed09d9263" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="81" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="941d41b2-6be5-45e1-8161-61e1571d59e7" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="82" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="83" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="84" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="85" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="cae92dad-aa64-4d71-9274-46b3d3997570" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="86" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="2c021679-b74b-47e1-8abc-715d89963c84" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="87" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="7e6333a1-a3ea-43c5-8e0f-f9aa242b13fa" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="88" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="89" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="90" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="5d563535-1d90-4b25-b932-cba17910768d" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="91" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="65db22f4-c8fe-419b-9fc7-666a6c4fcdee" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="92" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="93" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="94" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="b1fce228-b171-48ea-addd-9776b9528c78" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="95" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-id="96" data-magicpath-path="Main.tsx">
                "After working 20 plus years in the fitness and health industry and being a competitive runner, triathlete, and tennis player, I knew the benefits of strength training. By adding cross training to my workouts, I was less prone to injury, stronger overall and more successful racing. In 2012, I decided to share my knowledge and experience and opened The Shed, in Sandpoint, Idaho. It was my goal to create an affordable gym for people of all ages, where they could improve their fitness level, receive personal training, workouts designed for their bodies and goals, and be encouraged and supported. Where everyone gets individual attention and is listened to. We don't compete with each other at The Shed, but rather, build each other up. That's what being a ShedHead is all about! As the gym has grown, I've even expanded into online training. Helping people live healthier lives has been and continues to be my mission!"
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Programs = () => {
  return <SortableContainer dndKitId="8ea7c86f-9633-4746-8620-4a06907cc245" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="97" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="442db237-babe-4392-8d40-f526d45da8c0" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="98" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="4fc02764-45db-4096-aec3-978ce1391675" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="99" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="100" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="101" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="102" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="2b26f6b9-f633-481f-a45d-602a9da2af17" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="103" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "674f9f0c-cde5-4a2b-b75c-a5ec4a8f5ae8"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "1021e1f1-ca70-4bc8-a86e-9fe62e3cd875"
        }].map((program, index) => <div key={index} className="flex-1 group" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="104" data-magicpath-path="Main.tsx">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="Main.tsx">
                <div className="relative w-full aspect-[4/3] overflow-hidden" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="106" data-magicpath-path="Main.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="107" data-magicpath-path="Main.tsx" />
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="108" data-magicpath-path="Main.tsx" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-300 to-green-500 p-3 rounded-full z-20" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="Main.tsx">
                    <program.icon className="w-6 h-6 text-black" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="Main.tsx" />
                  </div>
                </div>
                <div className="p-8 space-y-4" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="Main.tsx">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="112" data-magicpath-path="Main.tsx">
                    {program.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="113" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="c95746b6-013f-4de5-8add-5d7de7323f89" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="114" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="f7dd4da3-e4c6-4da5-8bc9-6b6bc7351c2d" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="115" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="2c281d0a-d582-497a-8f0c-75f384a0cafc" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="116" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="117" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="118" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="119" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="f21ee7c1-d93a-482b-8c94-eb1ff64f62bc" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="120" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="4a96c696-4ef9-4240-9a92-347cb4158ea2" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="121" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="a29a384f-ca77-4f2e-a7c7-f4878b1a09eb" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="122" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "9f3fd17e-da08-4908-957c-cc24e9f2d265"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "745859e5-fa22-4fad-b0a9-5ef183855650"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "54afcd01-a95c-4e80-9d9c-1132d16dabf6"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "6568ed48-7d5a-409f-a3e7-ee53c5aeefec"
            }].map((rate, index) => <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 group" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4 flex-1" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="Main.tsx">
                    <div className="bg-gradient-to-r from-yellow-300 to-green-500 p-2 rounded-lg" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="Main.tsx">
                      <rate.icon className="w-5 h-5 text-black" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="Main.tsx" />
                    </div>
                    <span className="text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="127" data-magicpath-path="Main.tsx">{rate.label}</span>
                  </div>
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="128" data-magicpath-path="Main.tsx">
                    {rate.price}
                  </span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="8e613bb2-9ea0-41c9-bd27-900ea645ff96" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="129" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-400 text-center leading-relaxed" data-magicpath-id="130" data-magicpath-path="Main.tsx">
                All memberships include <span className="text-yellow-300 font-semibold" data-magicpath-id="131" data-magicpath-path="Main.tsx">24/7 lockbox access</span> to the gym. <span className="text-green-500 font-semibold" data-magicpath-id="132" data-magicpath-path="Main.tsx">Family discounts</span> available. There is <span className="text-white font-semibold" data-magicpath-id="133" data-magicpath-path="Main.tsx">no contract or sign-up fee</span>.
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
    mpid: "32f7949a-4a21-495e-9e00-88ecac12bc98"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "9118c795-a64f-462e-b79a-9ac9914af444"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "956188dc-178a-4ed9-8138-b5f7cfd76c7b"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "0895f9f7-beb4-49f9-ae2b-ccff61cd8dfa"
  }] as any[];
  return <SortableContainer dndKitId="bb86e9dd-692b-47f3-9466-25ff4d9a07e0" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="134" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="b3cd08ac-0b2f-48e6-ac8a-fba1851cfbd3" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="135" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="10f2c018-5ab6-4660-ba08-f39ac90849c5" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="136" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="137" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="138" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="139" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="58619e93-1675-4469-bce1-665c83ce7ab0" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="140" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="76ea1c6f-07eb-4d28-9739-7c8a0934851a" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="141" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="7c445ee8-c856-4b21-b88b-d77c09137135" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="142" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="143" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="146" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="147" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="049e32b4-509f-4d08-9ce9-d3438141deef" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="148" data-magicpath-path="Main.tsx">
              <p className="text-gray-400 text-base" data-magicpath-id="149" data-magicpath-path="Main.tsx">
                <Clock className="w-5 h-5 inline mr-2 text-yellow-300" data-magicpath-id="150" data-magicpath-path="Main.tsx" />
                Remember: Members have <span className="text-yellow-300 font-semibold" data-magicpath-id="151" data-magicpath-path="Main.tsx">24/7 access</span> to the gym
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
  return <SortableContainer dndKitId="08307020-d2e8-4004-ad92-f9c2e91db5ec" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="152" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="153" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="82145656-10d8-4089-a4a2-05fcad1def8a" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="154" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="18066341-3962-4118-8e68-5bcaf7c12eae" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="155" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="47888324-83ae-42fe-b340-735a5f696193" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="156" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="81c075d3-5c90-4db6-80c5-43536e04d8c9" containerType="regular" prevTag="div" data-magicpath-id="157" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="158" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="159" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="160" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="161" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="4ad04b12-27ca-4b46-b167-b00ebca40f07" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="163" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="164" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="165" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="55668bb1-fd4c-4931-a6de-689b6153e9ca" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="166" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="167" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="53f1f426-6650-4a05-972f-7d446994cd79" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="168" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="1df3ec08-238e-426c-a37d-1f99fe9966c0" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="169" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="0db3db19-a986-40e5-8c39-87b5d3c229a3" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="170" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="171" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="2f7aacd3-f32d-4c44-92ef-50b3f26ad6eb" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="172" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="173" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="174" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="175" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="176" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="177" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="178" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="c87185c4-5b77-4bb3-a1a2-d5406a97741e" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="179" data-magicpath-path="Main.tsx">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="180" data-magicpath-path="Main.tsx" />
            <p className="text-gray-400 text-sm" data-magicpath-id="181" data-magicpath-path="Main.tsx">
              &copy; {new Date().getFullYear()} The Shed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs" data-magicpath-id="182" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};

// @component: Main
export const Main = () => {
  return <SortableContainer dndKitId="fc085557-e324-4759-9382-23e73e532e64" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="183" data-magicpath-path="Main.tsx">
      <NavbarComponent data-magicpath-id="184" data-magicpath-path="Main.tsx" />
      <MainHero data-magicpath-id="185" data-magicpath-path="Main.tsx" />
      <CarouselPlugin data-magicpath-id="186" data-magicpath-path="Main.tsx" />
      <Trainers data-magicpath-id="187" data-magicpath-path="Main.tsx" />
      <Programs data-magicpath-id="188" data-magicpath-path="Main.tsx" />
      <Rates data-magicpath-id="189" data-magicpath-path="Main.tsx" />
      <TrainingHours data-magicpath-id="190" data-magicpath-path="Main.tsx" />
      <Contact data-magicpath-id="191" data-magicpath-path="Main.tsx" />
      <Footer data-magicpath-id="192" data-magicpath-path="Main.tsx" />
    </SortableContainer>;
};