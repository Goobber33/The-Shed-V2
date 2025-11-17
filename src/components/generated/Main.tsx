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
  return <Navbar position="sticky" className="py-2 sm:py-4 md:py-6 text-white" onMenuOpenChange={setIsMenuOpen} data-magicpath-id="4" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="1d679cac-7e45-46a0-8530-da3549c06e84" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="d481ea24-03ff-4e7f-8631-321561a5ffe9" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="3b077002-5087-47ba-b124-eba6f1497dc1" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <img src="/shed logo.png" className="h-12 sm:h-16 md:h-20 lg:h-28" alt="The Shed Logo" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
          </SortableContainer>

          <SortableContainer dndKitId="a7a78f55-0d35-4475-92ed-b8869b3f608f" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-6 lg:space-x-8" data-magicpath-id="9" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-300 text-sm lg:text-base font-semibold tracking-wide relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          <SortableContainer dndKitId="f7cafd5c-3422-4715-9bd1-f6b0ce4709be" containerType="regular" prevTag="button" className="md:hidden text-white p-2 hover:text-yellow-300 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="12" data-magicpath-path="Main.tsx">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-magicpath-id="13" data-magicpath-path="Main.tsx">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" data-magicpath-id="14" data-magicpath-path="Main.tsx" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" data-magicpath-id="15" data-magicpath-path="Main.tsx" />}
            </svg>
          </SortableContainer>
        </SortableContainer>

        {isMenuOpen && <SortableContainer dndKitId="550ef7a1-e460-4852-8c7d-b91d9164f99b" containerType="collection" prevTag="div" className="md:hidden py-8 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800 mt-4 rounded-lg" data-magicpath-id="16" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="w-full text-center text-white font-bold py-3 hover:text-yellow-300 hover:bg-white/5 transition-all duration-200" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="Main.tsx">
                {item}
              </button>)}
          </SortableContainer>}
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  return <SortableContainer dndKitId="b560b0df-f33c-4111-82c2-cb6731a15958" containerType="regular" prevTag="div" id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden" data-magicpath-id="18" data-magicpath-path="Main.tsx">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} data-magicpath-id="19" data-magicpath-path="Main.tsx" />
      
      <SortableContainer dndKitId="3e34036d-0ae8-457a-86f5-cd053c36ce80" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="20" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="a3e2fdb8-452d-4530-8f0a-1dd56fc5fc4d" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto" data-magicpath-id="21" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="3a64367f-e3ca-44b4-a136-3493287e7af9" containerType="regular" prevTag="div" className="flex-1 text-white space-y-8" data-magicpath-id="22" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight" data-magicpath-id="23" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="24" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300 drop-shadow-lg" data-magicpath-id="25" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500 drop-shadow-lg" data-magicpath-id="26" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl" data-magicpath-id="27" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <SortableContainer dndKitId="15857982-de16-4387-a24d-4ca48391d5b7" containerType="regular" prevTag="div" className="flex flex-wrap gap-4 pt-4" data-magicpath-id="28" data-magicpath-path="Main.tsx">
              <Button onClick={() => {
              const section = document.querySelector('#contact');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="bg-gradient-to-r from-yellow-300 to-green-500 text-black font-bold text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300" data-magicpath-id="29" data-magicpath-path="Main.tsx">
                Get Started
              </Button>
              <Button onClick={() => {
              const section = document.querySelector('#programs');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300" data-magicpath-id="30" data-magicpath-path="Main.tsx">
                View Programs
              </Button>
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="bd662a8b-b1c6-40a8-a442-888382248998" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="31" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="eef8dafa-4c4c-4dfa-85c4-563be728d066" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="32" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" data-magicpath-id="33" data-magicpath-path="Main.tsx" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="34" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>

      {/* Stats Section */}
      <SortableContainer dndKitId="6c3572e7-7338-49dc-8968-01ce80ce10f9" containerType="regular" prevTag="div" className="container mx-auto px-4 pb-16 relative z-10" data-magicpath-id="35" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="c235182f-3dc4-4c84-9335-7ed7e7ab8b51" containerType="collection" prevTag="div" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto" data-magicpath-id="36" data-magicpath-path="Main.tsx">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox',
          mpid: "9ecfbf53-dd66-4e2e-b8c3-60d852122dc0"
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo',
          mpid: "80aa4639-8e26-487f-b90d-9e6152e44f2f"
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years',
          mpid: "7d2731e4-7b78-4ca8-8cdc-bb87a863c3bc"
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals',
          mpid: "952c0eb3-8f1b-4bc6-a99a-0ace4c2c9997"
        }].map((stat, index) => <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="37" data-magicpath-path="Main.tsx">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="Main.tsx" />
              <div className="text-white font-bold text-lg mb-1" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="39" data-magicpath-path="Main.tsx">{stat.value}</div>
              <div className="text-gray-400 text-sm" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="40" data-magicpath-path="Main.tsx">{stat.label}</div>
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
  return <SortableContainer dndKitId="182c340a-8a41-423e-8019-736c3fb89c2e" containerType="regular" prevTag="div" id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="41" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="a2ecc29e-c957-4ee8-8402-0b4f043e89a6" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="42" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="6b9ed000-fc59-40ee-ab46-854ef4bdf83c" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="43" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="e23c1c75-ad60-4c71-9d60-3a184be9ba7f" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6" data-magicpath-id="44" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left" data-magicpath-id="45" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="46" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="47" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" data-magicpath-id="48" data-magicpath-path="Main.tsx" />
            <SortableContainer dndKitId="bb775fa9-3938-47fd-8b81-97a0b4db2151" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="49" data-magicpath-path="Main.tsx">
              <p className="leading-relaxed" data-magicpath-id="50" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <SortableContainer dndKitId="263d2e3b-148a-4ae9-81cc-2bd05cc2cbe1" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg" data-magicpath-id="51" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="52" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </SortableContainer>
              <p className="text-center text-xl font-bold text-yellow-300" data-magicpath-id="53" data-magicpath-path="Main.tsx">Or</p>
              <SortableContainer dndKitId="ec48e8e5-0822-4afd-aa4a-4ee51831d94c" containerType="regular" prevTag="div" className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg" data-magicpath-id="54" data-magicpath-path="Main.tsx">
                <p className="text-white font-semibold" data-magicpath-id="55" data-magicpath-path="Main.tsx">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="39b2b2fe-a9ef-457a-99d5-7c4c9816f8c8" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="56" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="d5b76c9f-c23c-4736-85d3-69c26cc5f177" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="57" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" data-magicpath-id="58" data-magicpath-path="Main.tsx" />
              <SortableContainer dndKitId="532c6701-833c-409a-a137-13cc2f5808e6" containerType="regular" prevTag="div" ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl" data-magicpath-id="59" data-magicpath-path="Main.tsx">
                <SortableContainer dndKitId="546beb10-760a-48f9-9dd6-b24bb3572026" containerType="collection" prevTag="div" className="flex" data-magicpath-id="60" data-magicpath-path="Main.tsx">
                  {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="Main.tsx">
                      <img src={src} alt={`Training session ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="Main.tsx" />
                    </div>)}
                </SortableContainer>
              </SortableContainer>
            </SortableContainer>
            <div className="flex items-center justify-center gap-2 mt-6" data-magicpath-id="63" data-magicpath-path="Main.tsx">
              {imageSources.map((_, index) => <div key={index} className={cn('h-2 rounded-full transition-all duration-300', current === index + 1 ? 'w-8 bg-gradient-to-r from-yellow-300 to-green-500' : 'w-2 bg-gray-600')} data-magicpath-id="64" data-magicpath-path="Main.tsx" />)}
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-8 text-center lg:text-left leading-relaxed" data-magicpath-id="65" data-magicpath-path="Main.tsx">
              The concept and program was created by Jen Barden, Lead Trainer and Owner, from years of working in different fields of health and fitness and also from her own athletic achievements. The Shed in Sandpoint, Idaho cannot be duplicated and the program itself has been tested with proven results.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Trainers = () => {
  return <SortableContainer dndKitId="5ef2874d-5dc6-4f4f-a27a-7573c49c9e53" containerType="regular" prevTag="div" id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="66" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="177c9438-152b-4581-a3e7-ccca40edfbc6" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="67" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="a886da94-4660-4332-a0a6-47d5ce48c842" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="68" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="69" data-magicpath-path="Main.tsx">
            LEAD <span className="text-yellow-300" data-magicpath-id="70" data-magicpath-path="Main.tsx">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="71" data-magicpath-path="Main.tsx" />
        </SortableContainer>

        <SortableContainer dndKitId="699dff89-aa57-4051-ac78-d558036b4d0c" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto" data-magicpath-id="72" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="f8a538d8-2c0b-4dc8-acf1-61f9eef019f5" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="73" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="706b6495-9dad-4755-9272-ca42ea7eb215" containerType="regular" prevTag="div" className="relative group" data-magicpath-id="74" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" data-magicpath-id="75" data-magicpath-path="Main.tsx" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" data-magicpath-id="76" data-magicpath-path="Main.tsx" />
            </SortableContainer>
          </SortableContainer>
          <SortableContainer dndKitId="ece724dc-34e8-4a7f-8bf8-606e18ed7e59" containerType="regular" prevTag="div" className="md:w-7/12 space-y-6" data-magicpath-id="77" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="c8694782-26dc-4dbc-b382-ebd7e3740bbe" containerType="regular" prevTag="div" className="flex items-center gap-4 mb-6" data-magicpath-id="78" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-4xl font-bold" data-magicpath-id="79" data-magicpath-path="Main.tsx">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" data-magicpath-id="80" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="fb20c7a5-b11d-4ddb-81d6-76a06a16c06b" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6" data-magicpath-id="81" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-id="82" data-magicpath-path="Main.tsx">
                "After working 20 plus years in the fitness and health industry and being a competitive runner, triathlete, and tennis player, I knew the benefits of strength training. By adding cross training to my workouts, I was less prone to injury, stronger overall and more successful racing. In 2012, I decided to share my knowledge and experience and opened The Shed, in Sandpoint, Idaho. It was my goal to create an affordable gym for people of all ages, where they could improve their fitness level, receive personal training, workouts designed for their bodies and goals, and be encouraged and supported. Where everyone gets individual attention and is listened to. We don't compete with each other at The Shed, but rather, build each other up. That's what being a ShedHead is all about! As the gym has grown, I've even expanded into online training. Helping people live healthier lives has been and continues to be my mission!"
              </p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Programs = () => {
  return <SortableContainer dndKitId="bf8812cf-9c6b-4b8e-afa3-f3e7a6f76590" containerType="regular" prevTag="div" id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="83" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="5a05f62f-6398-4d1a-856f-b671eb1688a0" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="84" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="a0270c4c-5195-4e9b-8716-ac6b25382ef1" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="85" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="86" data-magicpath-path="Main.tsx">
            OUR <span className="text-green-500" data-magicpath-id="87" data-magicpath-path="Main.tsx">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="88" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="d3d6922d-d7cc-4433-8432-d2e3acac59f9" containerType="collection" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto" data-magicpath-id="89" data-magicpath-path="Main.tsx">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell,
          mpid: "de8c879f-f94a-44a7-9e5b-dc1430815428"
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap,
          mpid: "57a90e2a-13a0-417d-bae4-8a976c29b6e0"
        }].map((program, index) => <div key={index} className="flex-1 group" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="90" data-magicpath-path="Main.tsx">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="91" data-magicpath-path="Main.tsx">
                <div className="relative w-full aspect-[4/3] overflow-hidden" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="92" data-magicpath-path="Main.tsx">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="93" data-magicpath-path="Main.tsx" />
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="94" data-magicpath-path="Main.tsx" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-300 to-green-500 p-3 rounded-full z-20" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="Main.tsx">
                    <program.icon className="w-6 h-6 text-black" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="Main.tsx" />
                  </div>
                </div>
                <div className="p-8 space-y-4" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-id="97" data-magicpath-path="Main.tsx">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="98" data-magicpath-path="Main.tsx">
                    {program.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-uuid={(program as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="99" data-magicpath-path="Main.tsx">
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
  return <SortableContainer dndKitId="fd037ee2-0f85-459e-bc0c-dfffc7379699" containerType="regular" prevTag="div" id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="100" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="5f5b6b0c-51fe-4266-881f-0bac9d911113" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="101" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="30c9dc75-2ef8-476d-9085-8e09b894e963" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="102" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="103" data-magicpath-path="Main.tsx">
            <span className="text-yellow-300" data-magicpath-id="104" data-magicpath-path="Main.tsx">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="105" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="be2f9b32-f36f-4d98-a11b-29d5c2fd6d1b" containerType="regular" prevTag="div" className="max-w-3xl mx-auto" data-magicpath-id="106" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="da5072dc-54d5-4eab-8855-0de91049cf28" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500" data-magicpath-id="107" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="874a2156-a1c8-4163-8496-a980e58e8990" containerType="collection" prevTag="div" className="grid gap-6" data-magicpath-id="108" data-magicpath-path="Main.tsx">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell,
              mpid: "bf83a7b0-fb36-4350-ba00-cf6d22bd8b26"
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users,
              mpid: "d1e7c977-a3be-40a9-b98a-637f4d018460"
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award,
              mpid: "9374d895-0e76-40c7-9097-803ceb0696a5"
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap,
              mpid: "6e47484d-d5f7-477c-8604-09be2a269b3c"
            }].map((rate, index) => <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 group" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4 flex-1" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="Main.tsx">
                    <div className="bg-gradient-to-r from-yellow-300 to-green-500 p-2 rounded-lg" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="Main.tsx">
                      <rate.icon className="w-5 h-5 text-black" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="Main.tsx" />
                    </div>
                    <span className="text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="113" data-magicpath-path="Main.tsx">{rate.label}</span>
                  </div>
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent" data-magicpath-uuid={(rate as any)["mpid"] ?? "unsafe"} data-magicpath-field="price:unknown" data-magicpath-id="114" data-magicpath-path="Main.tsx">
                    {rate.price}
                  </span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="1814d02f-506a-470a-8332-b9132342e716" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10" data-magicpath-id="115" data-magicpath-path="Main.tsx">
              <p className="text-base lg:text-lg text-gray-400 text-center leading-relaxed" data-magicpath-id="116" data-magicpath-path="Main.tsx">
                All memberships include <span className="text-yellow-300 font-semibold" data-magicpath-id="117" data-magicpath-path="Main.tsx">24/7 lockbox access</span> to the gym. <span className="text-green-500 font-semibold" data-magicpath-id="118" data-magicpath-path="Main.tsx">Family discounts</span> available. There is <span className="text-white font-semibold" data-magicpath-id="119" data-magicpath-path="Main.tsx">no contract or sign-up fee</span>.
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
    mpid: "37d60b8e-864f-4212-b8bd-720654013f8c"
  }, {
    day: 'Tuesday',
    time: '7am - 12pm',
    mpid: "01ed3759-c0a1-47ed-a704-2959e04a0f05"
  }, {
    day: 'Thursday',
    time: '7am - 12pm',
    mpid: "d7c0d284-3598-46a1-9a5e-a82cb9af1962"
  }, {
    day: 'Friday',
    time: '7am - 12pm',
    mpid: "ce5706da-aba5-4c5e-af10-93f5f3a1ae41"
  }] as any[];
  return <SortableContainer dndKitId="cc6182f5-81cd-4b2d-a56b-b19127eafe60" containerType="regular" prevTag="div" id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="120" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="12a4e6ca-cd65-4e42-b0f2-e8fbbf435264" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="121" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="b05953f9-6cdb-4838-bf01-803192d29eef" containerType="regular" prevTag="div" className="text-center mb-16" data-magicpath-id="122" data-magicpath-path="Main.tsx">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-magicpath-id="123" data-magicpath-path="Main.tsx">
            <span className="text-green-500" data-magicpath-id="124" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" data-magicpath-id="125" data-magicpath-path="Main.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="2aa55bd4-9b5a-4b3b-a23e-1d6b4c1b0829" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="126" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="d46099c6-e884-475c-923b-eb7fc40989a8" containerType="regular" prevTag="div" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl" data-magicpath-id="127" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="cb916636-c852-4c5b-891d-5affeea8b01c" containerType="collection" prevTag="div" className="space-y-4" data-magicpath-id="128" data-magicpath-path="Main.tsx">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="Main.tsx">
                  <div className="flex items-center gap-4" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="Main.tsx">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="Main.tsx" />
                    <span className="text-lg lg:text-xl font-semibold text-white" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="day:string" data-magicpath-id="132" data-magicpath-path="Main.tsx">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors" data-magicpath-uuid={(schedule as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:string" data-magicpath-id="133" data-magicpath-path="Main.tsx">{schedule.time}</span>
                </div>)}
            </SortableContainer>
            <SortableContainer dndKitId="cf8f034a-5d51-4863-b065-9aeed4e0fbb3" containerType="regular" prevTag="div" className="mt-8 pt-8 border-t border-white/10 text-center" data-magicpath-id="134" data-magicpath-path="Main.tsx">
              <p className="text-gray-400 text-base" data-magicpath-id="135" data-magicpath-path="Main.tsx">
                <Clock className="w-5 h-5 inline mr-2 text-yellow-300" data-magicpath-id="136" data-magicpath-path="Main.tsx" />
                Remember: Members have <span className="text-yellow-300 font-semibold" data-magicpath-id="137" data-magicpath-path="Main.tsx">24/7 access</span> to the gym
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
  return <SortableContainer dndKitId="369f1d96-4336-4865-8463-7153d57dcc51" containerType="regular" prevTag="div" id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="138" data-magicpath-path="Main.tsx">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" data-magicpath-id="139" data-magicpath-path="Main.tsx" />
      <SortableContainer dndKitId="639282b1-8bd9-4a1b-9695-9318014a720d" containerType="regular" prevTag="div" className="container mx-auto px-4 relative z-10" data-magicpath-id="140" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="628e95f9-f930-46e7-8871-7839d1c06981" containerType="regular" prevTag="div" className="max-w-4xl mx-auto" data-magicpath-id="141" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="692bcf4c-fb07-496a-aa25-d869c6b95b93" containerType="regular" prevTag="div" className="text-center space-y-8" data-magicpath-id="142" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="239f8b01-9757-4967-8999-bb659a7e0100" containerType="regular" prevTag="div" data-magicpath-id="143" data-magicpath-path="Main.tsx">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4" data-magicpath-id="144" data-magicpath-path="Main.tsx">
                Ready to Start Your <span className="text-yellow-300" data-magicpath-id="145" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="146" data-magicpath-path="Main.tsx">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" data-magicpath-id="147" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto" data-magicpath-id="148" data-magicpath-path="Main.tsx">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <SortableContainer dndKitId="b5acdb7a-7d3d-41be-97ed-c3d62b9f4161" containerType="regular" prevTag="div" className="pt-8" data-magicpath-id="149" data-magicpath-path="Main.tsx">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')} data-magicpath-id="150" data-magicpath-path="Main.tsx">
                <Mail className="mr-3 h-6 w-6" data-magicpath-id="151" data-magicpath-path="Main.tsx" />
                Contact Us Today
              </Button>
            </SortableContainer>
            <SortableContainer dndKitId="9eca28cc-4778-41dd-94dc-862e13899d96" containerType="regular" prevTag="div" className="pt-8 text-gray-400" data-magicpath-id="152" data-magicpath-path="Main.tsx">
              <p className="text-base" data-magicpath-id="153" data-magicpath-path="Main.tsx">jenattheshed@gmail.com</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  return <SortableContainer dndKitId="0a736d88-7242-431e-8126-609fb5be19ed" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-white/10" data-magicpath-id="154" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="8848dfbc-bab8-4a9b-b401-8c8ddf85b44a" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="155" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="d28e42ab-5a49-44c2-bf7f-46cdb0752a72" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-8" data-magicpath-id="156" data-magicpath-path="Main.tsx">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" data-magicpath-id="157" data-magicpath-path="Main.tsx" />
          
          <SortableContainer dndKitId="9d95cec2-42b8-4752-88bd-24fc9bfe4920" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="158" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram" data-magicpath-id="159" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="160" data-magicpath-path="Main.tsx" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="161" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook" data-magicpath-id="162" data-magicpath-path="Main.tsx">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" data-magicpath-id="163" data-magicpath-path="Main.tsx" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" data-magicpath-id="164" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>

          <SortableContainer dndKitId="aa136c97-6caf-440b-9fa6-6d6a4bbdb684" containerType="regular" prevTag="div" className="flex flex-col items-center space-y-2" data-magicpath-id="165" data-magicpath-path="Main.tsx">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" data-magicpath-id="166" data-magicpath-path="Main.tsx" />
            <p className="text-gray-400 text-sm" data-magicpath-id="167" data-magicpath-path="Main.tsx">
              &copy; {new Date().getFullYear()} The Shed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs" data-magicpath-id="168" data-magicpath-path="Main.tsx">Sandpoint, Idaho</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};

// @component: Main
export const Main = () => {
  return <SortableContainer dndKitId="d3dcbd83-39bf-4949-b995-4b8e0ae52afb" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="169" data-magicpath-path="Main.tsx">
      <NavbarComponent data-magicpath-id="170" data-magicpath-path="Main.tsx" />
      <MainHero data-magicpath-id="171" data-magicpath-path="Main.tsx" />
      <CarouselPlugin data-magicpath-id="172" data-magicpath-path="Main.tsx" />
      <Trainers data-magicpath-id="173" data-magicpath-path="Main.tsx" />
      <Programs data-magicpath-id="174" data-magicpath-path="Main.tsx" />
      <Rates data-magicpath-id="175" data-magicpath-path="Main.tsx" />
      <TrainingHours data-magicpath-id="176" data-magicpath-path="Main.tsx" />
      <Contact data-magicpath-id="177" data-magicpath-path="Main.tsx" />
      <Footer data-magicpath-id="178" data-magicpath-path="Main.tsx" />
    </SortableContainer>;
};