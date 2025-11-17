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
    mpid: "7dfae98d-88dc-478c-9b5d-dfa9c9a7b12d"
  }, {
    label: 'About',
    id: 'about',
    mpid: "f1decdd8-509e-4575-bcc7-86b5c68b0032"
  }, {
    label: 'Trainers',
    id: 'trainers',
    mpid: "dc237589-12b9-4b71-9099-81186f05bfd6"
  }, {
    label: 'Programs',
    id: 'programs',
    mpid: "990345a4-f99c-49df-a82d-6894a4d4ad56"
  }, {
    label: 'Rates',
    id: 'rates',
    mpid: "a45708c9-4d7c-45ef-924b-b3d698dcc146"
  }, {
    label: 'Hours',
    id: 'hours',
    mpid: "1a3f4fa4-2e44-4600-aa07-f2c5be50b43a"
  }, {
    label: 'Contact',
    id: 'contact',
    mpid: "368245f4-9722-445a-8179-b53e891e75ab"
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
      <SortableContainer dndKitId="7e9c17de-5bf1-41e2-8cc6-717203b3fe52" containerType="regular" prevTag="div" className="container mx-auto px-4 sm:px-6" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="5dbf2307-f663-4f00-b102-118540049121" containerType="regular" prevTag="div" className="flex items-center justify-between h-16 sm:h-20" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          {/* Logo */}
          <SortableContainer dndKitId="c21a9f05-d8ef-460a-aa21-0b6b0fc8b154" containerType="regular" prevTag="button" onClick={() => scrollToSection('home')} className="flex items-center space-x-2 group" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-300 group-hover:rotate-45 transition-transform duration-300" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
            <span className="text-xl sm:text-2xl font-bold text-white" data-magicpath-id="9" data-magicpath-path="Main.tsx">
              THE <span className="text-green-500" data-magicpath-id="10" data-magicpath-path="Main.tsx">SHED</span>
            </span>
          </SortableContainer>

          {/* Desktop Menu */}
          <SortableContainer dndKitId="c388536d-6152-44df-a76c-dd59e4146730" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-1 lg:space-x-2" data-magicpath-id="11" data-magicpath-path="Main.tsx">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="12" data-magicpath-path="Main.tsx">
                {item.label}
              </button>)}
          </SortableContainer>

          {/* Mobile Menu Button */}
          <SortableContainer dndKitId="d041e1dd-2fba-4bb3-bd46-f1d8f4f16ea5" containerType="regular" prevTag="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="13" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="cf23a7b4-8b07-47d9-84e7-75c1cc3ed1af" containerType="regular" prevTag="div" className="w-6 h-5 flex flex-col justify-between" data-magicpath-id="14" data-magicpath-path="Main.tsx">
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'rotate-45 translate-y-2' : '')} data-magicpath-id="15" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? 'opacity-0' : 'opacity-100')} data-magicpath-id="16" data-magicpath-path="Main.tsx" />
              <span className={cn('w-full h-0.5 bg-white transition-all duration-300 ease-in-out', isMenuOpen ? '-rotate-45 -translate-y-2' : '')} data-magicpath-id="17" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {/* Mobile Menu Dropdown */}
        <SortableContainer dndKitId="dd9b0b9c-0773-46da-89dd-d4a304b86d72" containerType="regular" prevTag="div" className={cn('md:hidden fixed left-0 right-0 top-16 sm:top-20 bg-black/98 backdrop-blur-lg border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out z-40', isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden')} data-magicpath-id="18" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="a5fc03e8-7523-484a-ace0-9ef433bc567e" containerType="collection" prevTag="div" className="py-4 space-y-1 container mx-auto px-4" data-magicpath-id="19" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={item.id} onClick={() => scrollToSection(item.id)} className={cn('w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200', 'transform', isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0')} style={{
            transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
          }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="20" data-magicpath-path="Main.tsx">
                {item.label}
              </button>)}
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  return <SortableContainer dndKitId="53a96e76-7a50-4314-ac50-19c2d53d6421" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="21" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="22" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="3eadbf18-ca88-4b77-b667-fd3ae8b31683" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="23" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="13e32a06-98fa-4a07-bd7f-8f1bf599f4c7" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="24" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="82e21f4c-4ccd-48b4-b069-4c4471f6acb1" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="25" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="26" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="27" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="28" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="29" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="30" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="adb20dce-9363-441e-92f0-a7e070cbdcce" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="31" data-magicpath-path="Main.tsx">
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
          <SortableContainer dndKitId="de2364b9-aee1-485f-8bb0-2cf9e59d92b8" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="34" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="31f33fc3-6836-41a1-b24e-ae8ccadbc7ad" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="35" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="36" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="37" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="d1a934ca-bf62-4123-b259-624fe6d76962" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="38" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="039d4614-3758-4bb4-9c59-5a06d1294df1" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="39" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "34e8f44d-4881-4d4c-94ae-7cc868f87465"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "2a480373-fa76-49be-9629-37598d443d2f"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "0c5a06dc-7f42-432a-af19-de758acba385"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "71568f0c-057c-4f60-85fb-d3229615518f"
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
  return <SortableContainer dndKitId="5d850344-990a-498a-b60c-d02bf5fe0d59" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="44" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="31dd6571-c074-46ad-9323-67ca47cf3d8a" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="45" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="4c2323ec-4c89-4857-9041-038e407c4f14" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="46" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="2861e775-3ca6-4dac-a0b9-178279550c91" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="47" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="48" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="49" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="50" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="51" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="5cb8dfab-a308-4370-97f6-aecd716b4cc1" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="52" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="53" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="965d35d3-6756-4f30-b2dc-e31e5743f7f9" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="54" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="55" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="56" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="b417487c-d3a8-4a0e-a1cd-46920e445590" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="57" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="58" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="abcdc3cd-b3d0-4489-a981-b056f56c3435" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="59" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="12c4933e-fab5-4a50-bbe0-b3e4d152b1b2" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="60" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="61" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="2bcb6c6d-4475-440b-b712-b55262668cd1" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="62" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="bb068fe7-317a-405a-97b2-f4e744e36bdd" containerType="collection" prevTag="div" className="flex" data-magicpath-id="63" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="57a75fca-c5d5-4c76-b916-2a18b9df7662" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="69" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="475de6ee-a84f-492d-a548-671a0feca4dc" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="70" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="af8328d8-5258-4884-8685-0601135e3089" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="71" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="72" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="73" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="74" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="f3f23bb7-ad86-4696-aca8-c05003a3c028" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="75" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="abef51da-ef7a-41e5-8ecb-410fba697906" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="76" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="a521a946-9dfe-4ce8-b6fc-cf4a055f3722" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="77" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="78" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="79" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="01ad90ad-957c-469a-b82b-7e9f2a312399" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="80" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="f9043c58-9670-4efc-baf3-e4140a159e77" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="81" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="82" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="83" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="39c1bd6d-e5dd-4a59-bc17-534f70a12ffd" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="84" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="59c03279-f658-4b0b-8493-85450a9e28d1" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="86" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="46aa74c7-e97b-4a71-b3fd-3a2978cc1c61" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="87" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f9aa7c80-352c-4dbf-a699-931fc041d6dc" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="88" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="89" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="90" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="91" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="5f8b5fc6-2e29-4f7b-a9c0-531cfaffaef1" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="92" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "96dbd761-eb0b-4a06-be76-2a804f11c221"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "4b8764e0-d401-48ea-9a85-cd54b7d46ea4"
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
  return <SortableContainer dndKitId="e94635cb-f7a6-44ac-b1b2-fee82314b7e4" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="103" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="c35b71d6-b03f-4b0e-bf84-8765888b107c" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="104" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="04990190-c2e8-468a-89fa-050588d0d643" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="105" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="106" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="107" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="108" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="0db20d5b-85b7-47fc-9f3b-483ac1e5352f" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="109" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="5e50c408-9942-44b2-8a1d-072a8c6f5ec9" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="110" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="6996de36-9fae-48e9-abcf-0e32e8c4058d" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="111" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "5675de6b-37ec-4183-925f-45c3b4a3e4ac"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "18205fbf-6fc0-4453-84b3-0cc6d0addb63"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "63859096-b6ef-4d8b-ad51-3a6006452a8d"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "2f950c70-90df-4a3a-9d94-b0681d8b7609"
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
            <SortableContainer dndKitId="8c8c2684-af33-4bb8-9407-91de305262e6" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="118" data-magicpath-path="Main.tsx">
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
    mpid: "2fcbfc05-133e-4785-9a79-9744e10fd10d"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "28f795fa-bf5c-4563-9557-73f4a403046a"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "1da5d566-5556-4342-949f-8b2b2a76a0bb"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "02cbcd06-d6b1-4dd2-86cb-e062348eab7b"
  }] as any[];
  return <SortableContainer dndKitId="e40be186-7144-412f-b3e7-d0a577ec55b1" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="123" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="727a7790-91eb-4f6d-9783-cec5744d4741" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="124" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="9248ea2a-f4b8-44e9-a4c1-a22e760eaf1a" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="125" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="126" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="127" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="128" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="f08557a6-0988-43b7-8d62-9d813376ea0e" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="129" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="e7d1676b-a492-420b-ba68-5845a19f22f9" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="130" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="0d03f7fa-b2a6-4565-bac0-62ca54f89298" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="131" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="132" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="133" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:unknown" data-magicpath-id="135" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="136" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="85ffa151-348f-4060-8fcf-32bf255e99a9" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="137" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="13cadc7d-a37a-4b77-a99a-0b37350abd3e" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="141" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="142" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="e901d5b5-0ca4-4df9-8ef9-44990cee28a4" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="143" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="292dfa1e-9f6b-40bf-bcf1-569667e907cb" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="144" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="e10e6256-d499-47dd-8e91-263df3a9a248" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="145" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="0c7878b1-2dec-49d4-adcd-37265af43d13" containerType="regular" prevTag="div" data-magicpath-id="146" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="147" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="148" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="149" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="150" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="151" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="64367998-5673-42eb-a8d5-b204e679f5fa" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="152" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="153" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="154" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="ba97dff0-bf2b-4931-bad4-c7f31c4ee983" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="155" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="156" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="e788db3c-48c4-49f2-99e5-c893f70af741" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="157" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="4519e963-1dd0-4e63-8200-fc7e52e8686f" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="158" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f2e245cf-1315-433a-82f2-a984b717a94c" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="159" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="160" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="079cdc0b-f068-4a78-8046-d26600bf8d54" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="161" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="163" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="164" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="165" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="166" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="167" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="4c7e6223-4e0a-4217-bb07-6b9390190448" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="168" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="b8cc1658-26cb-43ea-9322-d718f37e883b" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="172" data-magicpath-path="Main.tsx">
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