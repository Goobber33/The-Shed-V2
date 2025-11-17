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
  return <Navbar position="sticky" className="py-6 sm:py-8 md:py-10 text-white" onMenuOpenChange={setIsMenuOpen} data-magicpath-id="4" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="ea6d455c-ace9-466c-9664-497154d719ed" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="8ddc45a5-0eec-4392-b0c7-69f646651910" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          {/* Desktop Menu */}
          <SortableContainer dndKitId="6d2df979-6cad-4937-b7e9-a9287db05c53" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-6 lg:space-x-8 w-full justify-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-300 text-xs lg:text-sm font-semibold tracking-wide relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Toggle - Hamburger Icon */}
          <SortableContainer dndKitId="daa38723-c92e-4ec2-8e49-ca1fddc52b09" containerType="regular" prevTag="button" className="md:hidden text-white p-2 hover:text-yellow-300 transition-colors relative z-[70] ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="10" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="5f122bea-af6a-4253-b513-5212aa575c00" containerType="regular" prevTag="div" className="w-7 h-6 flex flex-col justify-between items-center" data-magicpath-id="11" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? 'rotate-45 translate-y-[11px]' : '')} data-magicpath-id="12" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="13" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-current transform transition-all duration-300 ease-in-out origin-center', isMenuOpen ? '-rotate-45 -translate-y-[11px]' : '')} data-magicpath-id="14" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu - Full Screen Overlay */}
        <SortableContainer dndKitId="0ffdaefa-4e79-4ad7-9521-7e56f4ba5cb6" containerType="regular" prevTag="div" className={cn('fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-out', isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none')} data-magicpath-id="15" data-magicpath-path="Main.tsx">
          {/* Animated Background */}
          <div className={cn('absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black transition-opacity duration-500', isMenuOpen ? 'opacity-100' : 'opacity-0')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
          
          {/* Decorative animated gradients */}
          <div className={cn('absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl transition-all duration-700', isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20')} data-magicpath-id="17" data-magicpath-path="Main.tsx" />
          <div className={cn('absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl transition-all duration-700 delay-100', isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20')} data-magicpath-id="18" data-magicpath-path="Main.tsx" />

          {/* Menu Content */}
          <SortableContainer dndKitId="1e2ed530-8aa2-40e0-b15b-125588874c75" containerType="regular" prevTag="div" className="relative h-full w-full flex flex-col items-center justify-center px-8 py-20" data-magicpath-id="19" data-magicpath-path="Main.tsx">
            {/* Menu Items - Center aligned with staggered animation */}
            <SortableContainer dndKitId="0cf93d13-12ff-4d12-a7e0-597fc8b7874e" containerType="collection" prevTag="nav" className="flex flex-col items-center justify-center space-y-1 w-full max-w-sm mt-12" data-magicpath-id="20" data-magicpath-path="Main.tsx">
              {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className={cn('w-full text-center py-3 px-6 rounded-lg font-bold text-lg tracking-wider', 'text-white transition-all duration-300', 'hover:bg-gradient-to-r hover:from-yellow-300 hover:to-green-500 hover:text-black', 'hover:scale-105 hover:shadow-lg', 'transform', isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{
              transitionDelay: isMenuOpen ? `${100 + index * 60}ms` : '0ms'
            }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="Main.tsx">
                  {item}
                </button>)}
            </SortableContainer>

            {/* Bottom decorative element */}
            <SortableContainer dndKitId="0bfabd99-da4d-4b3b-83eb-0bcb49449938" containerType="regular" prevTag="div" className={cn('absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 transition-all duration-700 delay-300', isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} data-magicpath-id="22" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="c7ff7f16-79e9-4dd3-9d6c-0543aee043c2" containerType="regular" prevTag="div" className="flex items-center justify-center space-x-4" data-magicpath-id="23" data-magicpath-path="Main.tsx">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-300/50" data-magicpath-id="24" data-magicpath-path="Main.tsx" />
                <Dumbbell className="w-6 h-6 text-yellow-300" data-magicpath-id="25" data-magicpath-path="Main.tsx" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-500/50" data-magicpath-id="26" data-magicpath-path="Main.tsx" />
              </SortableContainer>
              <p className="text-gray-400 text-sm font-medium" data-magicpath-id="27" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  return <SortableContainer dndKitId="3362fe7f-f560-4a82-9c75-8bfa54ad4b3c" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="28" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="29" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="c1c9ce34-4ab9-4662-a34f-e7e2e19cbb04" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="30" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f0b94304-469b-473c-b43b-9c332f8cb74d" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="7fa644f3-1dfb-4bef-9641-a33ec0350b70" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="32" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="33" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="34" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="35" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="36" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="37" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="f2bbd1d8-3a4a-404c-88ad-74b12a1c6072" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="38" data-magicpath-path="Main.tsx">
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
          <SortableContainer dndKitId="a72aed05-0889-42de-8760-6f3e9977f321" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="41" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="0574bc83-f8a1-4d60-aab8-bec4c61e1126" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="42" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="43" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="44" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="e66a5b16-635c-4739-89c0-1b6e6356c952" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="45" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="d511280a-2555-4cb1-9cf3-6fc886cd995b" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "819ff55d-6409-46b2-a6b9-82137f1f21cc"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "dbe907e3-2c87-46a7-a561-030b95c3808a"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "8f760c9b-ad0f-48f1-85a0-1aba608aa7d5"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "030541f5-b329-4d72-b80c-3bb6cb253485"
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
  return <SortableContainer dndKitId="0c24b123-6591-4b3f-b81c-e69a35883820" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="51" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="4c15b195-1893-4bed-a933-29e811dea42a" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="52" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="850f468f-cbbc-4efe-b43d-617ba18e55bb" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="53" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="9eac4273-21d2-44e2-8411-f427cd99cd6e" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="54" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="55" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="56" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="57" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="58" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="e93feae0-0da5-477e-b3c7-91c431d835a1" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="59" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="60" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="21fba756-0401-4670-84c4-f1cd923d0830" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="61" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="62" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="63" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="53ba8af5-469e-43ac-ad2d-0116df14932c" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="64" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="65" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="6ef5c775-64ca-4bb5-b020-1c35ffeb9e20" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="66" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="e341e558-0dd1-40fd-a2a9-51e1ce375837" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="67" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="68" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="069dafeb-c68d-4602-8c72-c5e04b1cb69f" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="69" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="453e349f-f58f-4bf4-b18f-c023db4dfb04" containerType="collection" prevTag="div" className="flex" data-magicpath-id="70" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="dba34589-c024-490e-ab7c-4ca6b9b6627f" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="76" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="5d1b420b-7cb3-45c0-99e2-56fa587faa9b" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="77" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="ef29daa0-edc1-4252-a6b5-0262e1cf2078" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="78" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="79" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="80" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="81" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="90e517c3-af8a-41c1-9619-c014270d801e" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="82" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="ddef752b-a236-48e7-9edc-0ca8a8d6900b" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="83" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="b9c2b938-3c18-4ffa-82c7-28f24afb0d25" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="84" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="85" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="86" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="9ef1ff81-4f4b-4a7f-b424-0dc5ff9b047e" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="87" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="92d0bea7-eb51-424a-9637-eea64c45b13b" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="88" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="89" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="90" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="597b516d-8538-4816-bc31-0cfaa74b71eb" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="91" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="0e4d6b60-7453-4df0-93c7-db77df241d63" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="93" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="32f7b6a1-58b5-4cbe-bc4c-9f99d0a65470" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="94" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="16a8d635-c66f-4b8a-a638-78f1b2a0aa32" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="95" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="96" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="97" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="98" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="8883a326-eaa6-43d2-b222-a4f487a1fe7d" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="99" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "cfe92621-2aa1-4653-bb4c-e9bf0f03f8e7"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "d9144674-d717-41ee-a5b7-3d3d74c883f2"
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
  return <SortableContainer dndKitId="31420387-cebf-482d-9db8-175e49a0d4ab" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="110" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="d856a33e-29cf-48eb-ba1d-910f8638f2af" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="111" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="eb7d8b9a-1ecc-4d32-8d34-724d1f76106d" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="112" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="113" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="114" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="115" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="39a0eec5-df98-49bf-a2e2-192429ff8650" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="116" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="b4419561-9b02-41b9-97ed-ee9773bdfcf4" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="117" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="b01adc8f-15ef-47bc-a106-d92d533238c4" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="118" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "068eaff1-6bd8-4d66-abd6-1f8fe29927a1"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "d0e522b4-e375-4ae5-9263-84ed21888fd4"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "9ef7f506-8c8a-4099-befc-a3e11e5843e7"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "18ed9195-981a-463e-bacb-5774a49936ba"
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
            <SortableContainer dndKitId="955ccf0a-e848-4211-9780-864e73e7174e" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="125" data-magicpath-path="Main.tsx">
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
    mpid: "a71bee86-e3d5-4c9c-8d7c-83768a719d4c"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "b25bfa08-3e21-4dd5-bc5f-fa11ab3bcf59"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "4c64870b-f9c3-4a35-b283-2e883fbea37d"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "287210d6-5ad0-4b72-b21a-6fdbf548592d"
  }] as any[];
  return <SortableContainer dndKitId="a577fe76-0e1c-4a42-88af-657b732026ee" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="130" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="c385b956-44ee-4965-8643-d58e71d84810" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="131" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="89b0e217-8777-4c57-88c0-9cb794bd66fd" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="132" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="133" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="134" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="135" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="0d0658db-36f1-478b-99f2-6837bfe1b85f" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="136" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="b91625c6-0d13-4067-8316-8fc3c39d21bf" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="137" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="5e1d490f-36c0-493e-bb66-505dab04af4c" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="138" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="140" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="141" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="142" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="143" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="7a6b61db-338b-46b2-b165-a827c728f11e" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="144" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="9760e66d-07b2-4438-bded-e3275defad4f" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="148" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="149" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="34262621-9940-4fbd-8058-054bbb6629ea" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="150" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="dd7f3ad9-069b-4d27-a5f7-ac26842e60d6" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="151" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="65d41404-9981-4988-81d1-1ed03274efed" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="152" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="2e668325-7bd0-4f8c-8c3c-3af84cc86d4f" containerType="regular" prevTag="div" data-magicpath-id="153" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="154" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="155" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="156" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="157" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="158" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="f402b522-5efd-48a1-a3ba-0cac26c78983" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="159" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="160" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="161" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="912c00af-9461-4efe-a4da-184359117687" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="163" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="2c7179dc-5cce-400c-a61e-ecd1da6f1062" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="164" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="e10035a4-1582-4bcf-8121-5001efaaa634" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="165" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="a56a5d02-fc9c-4438-be43-8d06d25f910a" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="166" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="167" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="3fc01d1d-4169-4320-b92f-4a401de32582" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="168" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="169" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="170" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="171" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="172" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="173" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="174" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="5fd90c1f-8632-4935-a266-208ed7a5a6ff" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="175" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="c0ceaab7-73f0-4d9f-b81b-ea8e95cffd82" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="179" data-magicpath-path="Main.tsx">
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