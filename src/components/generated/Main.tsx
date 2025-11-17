import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
const buttonVariants = (variant: string = 'default', size: string = 'default', className?: string) => {
  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
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
  // @return
  return <button className={buttonVariants(variant, size, className)} ref={ref} {...props} data-magicpath-id="0" data-magicpath-path="Main.tsx" />;
});
Button.displayName = 'Button';
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => {
  // @return
  return <div ref={ref} className={cn('rounded-lg', className)} {...props} data-magicpath-id="1" data-magicpath-path="Main.tsx" />;
});
Card.displayName = 'Card';
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => {
  // @return
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
  // @return
  return <nav className={cn('w-full bg-black/95 backdrop-blur-sm z-50', position === 'sticky' && 'sticky top-0', position === 'fixed' && 'fixed top-0', className)} data-magicpath-id="3" data-magicpath-path="Main.tsx">
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

  // @return
  return <Navbar position="sticky" className="py-2 sm:py-4 md:py-8 text-white" onMenuOpenChange={setIsMenuOpen} data-magicpath-id="4" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="3bb0631e-64c7-4ae3-b68d-65c55a32c332" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="5" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="2c5b7679-9fd6-4a43-91b3-bf7cd9a56382" containerType="regular" prevTag="div" className="flex items-center justify-between" data-magicpath-id="6" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="d32f93db-b38a-4261-bf42-ff6bc812395b" containerType="regular" prevTag="div" className="flex items-center" data-magicpath-id="7" data-magicpath-path="Main.tsx">
            <img src="/shed logo.png" className="h-12 sm:h-20 md:h-22 lg:h-32" alt="Shed Logo" data-magicpath-id="8" data-magicpath-path="Main.tsx" />
          </SortableContainer>

          <SortableContainer dndKitId="a4fe47c6-38b6-428e-8357-ee6ab4ef9039" containerType="collection" prevTag="div" className="hidden md:flex items-center space-x-8" data-magicpath-id="9" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-white hover:text-yellow-300 transition-colors duration-200 text-sm lg:text-base font-medium relative group" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="Main.tsx">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-green-500 group-hover:w-full transition-all duration-300" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="Main.tsx" />
              </button>)}
          </SortableContainer>

          <SortableContainer dndKitId="197d8312-ff54-43ea-855d-a93377807ce2" containerType="regular" prevTag="button" className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} data-magicpath-id="12" data-magicpath-path="Main.tsx">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-magicpath-id="13" data-magicpath-path="Main.tsx">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" data-magicpath-id="14" data-magicpath-path="Main.tsx" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" data-magicpath-id="15" data-magicpath-path="Main.tsx" />}
            </svg>
          </SortableContainer>
        </SortableContainer>

        {isMenuOpen && <SortableContainer dndKitId="e7547db1-a3df-416d-b354-97283b27a586" containerType="collection" prevTag="div" className="md:hidden py-8 bg-black border-t border-gray-800 mt-4" data-magicpath-id="16" data-magicpath-path="Main.tsx">
            {menuItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="w-full text-center text-white font-bold py-3 hover:text-yellow-300 transition-colors duration-200" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="Main.tsx">
                {item}
              </button>)}
          </SortableContainer>}
      </SortableContainer>
    </Navbar>;
};
const MainHero = () => {
  // @return
  return <SortableContainer dndKitId="cb2788f6-a33d-4a54-af76-e729e314f652" containerType="regular" prevTag="div" id="home" className="bg-gradient-to-b from-gray-900 to-black" data-magicpath-id="18" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="605e4784-c77d-483a-b525-ee6a6bf24d45" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="19" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="0d0f73a0-f09a-4fc4-8f0c-30abe9a14b1f" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center justify-between py-16 gap-12 max-w-6xl mx-auto" data-magicpath-id="20" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="11128021-4037-4dcc-916f-8d661834c89f" containerType="regular" prevTag="div" className="flex-1 text-white" data-magicpath-id="21" data-magicpath-path="Main.tsx">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 md:mb-12 leading-tight" data-magicpath-id="22" data-magicpath-path="Main.tsx">
              WELCOME&nbsp;TO
              <br data-magicpath-id="23" data-magicpath-path="Main.tsx" />
              <span className="text-yellow-300" data-magicpath-id="24" data-magicpath-path="Main.tsx">THE</span>
              <span className="text-green-500" data-magicpath-id="25" data-magicpath-path="Main.tsx">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300" data-magicpath-id="26" data-magicpath-path="Main.tsx">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually. We provide monthly programs or new workouts each session, depending on each client's interest. We also offer general memberships for gym use only. No sign up fees or commitment beyond a month. All members have 24/7 lockbox access to the gym.
            </p>
          </SortableContainer>
          <SortableContainer dndKitId="3bfd841a-a923-4bad-9f5c-545d44ceffe1" containerType="regular" prevTag="div" className="flex-1 flex justify-center" data-magicpath-id="27" data-magicpath-path="Main.tsx">
            <img src="/jenmain.jpg" alt="Lead Trainer" className="object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" data-magicpath-id="28" data-magicpath-path="Main.tsx" />
          </SortableContainer>
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

    // Manual autoplay implementation
    const intervalId = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3500);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  // @return
  return <SortableContainer dndKitId="dfdbf87d-5dae-4743-b073-9baa95446385" containerType="regular" prevTag="div" id="about" className="bg-black text-white py-20 lg:py-32" data-magicpath-id="29" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="cdf65ef2-728a-4a3c-937b-c438cde94004" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="30" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="f0b1e0f5-aae3-492b-93bf-2721a4abc855" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto" data-magicpath-id="31" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="dbdd8be6-86e8-4c9c-8fb7-a90915c95a30" containerType="regular" prevTag="div" className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1" data-magicpath-id="32" data-magicpath-path="Main.tsx">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left" data-magicpath-id="33" data-magicpath-path="Main.tsx">
              ABOUT <span className="text-yellow-300" data-magicpath-id="34" data-magicpath-path="Main.tsx">THE</span> <span className="text-green-500" data-magicpath-id="35" data-magicpath-path="Main.tsx">SHED</span>
            </h1>
            <SortableContainer dndKitId="e21eb8dd-c80b-49cc-8681-9a33f1e1492c" containerType="regular" prevTag="div" className="space-y-6 text-base lg:text-lg text-gray-300" data-magicpath-id="36" data-magicpath-path="Main.tsx">
              <p data-magicpath-id="37" data-magicpath-path="Main.tsx">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <p data-magicpath-id="38" data-magicpath-path="Main.tsx">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              <p className="font-semibold" data-magicpath-id="39" data-magicpath-path="Main.tsx">Or</p>
              <p data-magicpath-id="40" data-magicpath-path="Main.tsx">
                Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love. Our expertise and training background will help you get on track.
              </p>
            </SortableContainer>
          </SortableContainer>

          <SortableContainer dndKitId="3d443423-fadb-4fb8-a33d-68fa5e37dad1" containerType="regular" prevTag="div" className="lg:w-1/2 order-1 lg:order-2" data-magicpath-id="41" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="ebdacd88-ff1b-45e7-b5c3-72bda00a993d" containerType="regular" prevTag="div" ref={emblaRef} className="overflow-hidden rounded-2xl" data-magicpath-id="42" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="8001897c-c226-4fdc-83a8-96717535998f" containerType="collection" prevTag="div" className="flex" data-magicpath-id="43" data-magicpath-path="Main.tsx">
                {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="44" data-magicpath-path="Main.tsx">
                    <img src={src} alt={`Training session ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover" data-magicpath-uuid={(src as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="Main.tsx" />
                  </div>)}
              </SortableContainer>
            </SortableContainer>
            <div className="text-center text-lg text-gray-400 mt-4" data-magicpath-id="46" data-magicpath-path="Main.tsx">
              {current} of {count}
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-6 text-center lg:text-left" data-magicpath-id="47" data-magicpath-path="Main.tsx">
              The concept and program was created by Jen Barden, Lead Trainer and Owner, from years of working in different fields of health and fitness and also from her own athletic achievements. The Shed in Sandpoint, Idaho cannot be duplicated and the program itself has been tested with proven results.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Trainers = () => {
  // @return
  return <SortableContainer dndKitId="ee8c378c-bb8f-4d96-a7c9-3cac4e7c7673" containerType="regular" prevTag="div" id="trainers" className="bg-gradient-to-b from-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="48" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="40693df9-c6bf-4d84-88ac-b89db1adba30" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="49" data-magicpath-path="Main.tsx">
        <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center" data-magicpath-id="50" data-magicpath-path="Main.tsx">
          LEAD <span className="text-yellow-300" data-magicpath-id="51" data-magicpath-path="Main.tsx">TRAINER</span>
        </h1>

        <SortableContainer dndKitId="a81f0a41-eaa8-4a0b-b284-4ef7446a38aa" containerType="regular" prevTag="div" className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto" data-magicpath-id="52" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="d4b49bde-112d-4310-87f1-924ab693ded0" containerType="regular" prevTag="div" className="md:w-5/12" data-magicpath-id="53" data-magicpath-path="Main.tsx">
            <img src="/jen.webp" alt="Jen - Lead Trainer" className="rounded-xl shadow-2xl w-full" data-magicpath-id="54" data-magicpath-path="Main.tsx" />
          </SortableContainer>
          <SortableContainer dndKitId="9c1242ed-450d-457a-b9d5-56de09e27042" containerType="regular" prevTag="div" className="md:w-7/12" data-magicpath-id="55" data-magicpath-path="Main.tsx">
            <h2 className="text-3xl font-bold mb-6" data-magicpath-id="56" data-magicpath-path="Main.tsx">Jen</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed" data-magicpath-id="57" data-magicpath-path="Main.tsx">
              "After working 20 plus years in the fitness and health industry and being a competitive runner, triathlete, and tennis player, I knew the benefits of strength training. By adding cross training to my workouts, I was less prone to injury, stronger overall and more successful racing. In 2012, I decided to share my knowledge and experience and opened The Shed, in Sandpoint, Idaho. It was my goal to create an affordable gym for people of all ages, where they could improve their fitness level, receive personal training, workouts designed for their bodies and goals, and be encouraged and supported. Where everyone gets individual attention and is listened to. We don't compete with each other at The Shed, but rather, build each other up. That's what being a ShedHead is all about! As the gym has grown, I've even expanded into online training. Helping people live healthier lives has been and continues to be my mission!"
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Programs = () => {
  // @return
  return <SortableContainer dndKitId="20382e25-f2b8-43c0-8e72-6d5406f9668e" containerType="regular" prevTag="div" id="programs" className="bg-black text-white py-20 lg:py-32" data-magicpath-id="58" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="a4bc0ef2-f87c-4eac-87ab-4ccb8ce3ab92" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="59" data-magicpath-path="Main.tsx">
        <h1 className="text-4xl lg:text-5xl font-bold mb-16 text-center" data-magicpath-id="60" data-magicpath-path="Main.tsx">
          OUR <span className="text-green-500" data-magicpath-id="61" data-magicpath-path="Main.tsx">PROGRAMS</span>
        </h1>
        <SortableContainer dndKitId="030264ab-e51b-4452-a275-30e1f09517fb" containerType="regular" prevTag="div" className="flex flex-col lg:flex-row justify-center gap-12 max-w-6xl mx-auto" data-magicpath-id="62" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="bb9a8cb9-a7ae-46ab-9915-409ac648b66f" containerType="regular" prevTag="div" className="flex flex-col items-center text-center flex-1" data-magicpath-id="63" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="6825152f-a303-4400-baaf-8ee8a3b4108a" containerType="regular" prevTag="div" className="w-full mb-8 relative aspect-[4/3] overflow-hidden rounded-2xl" data-magicpath-id="64" data-magicpath-path="Main.tsx">
              <img src="/adultp.jpeg" alt="Adult Programs" className="w-full h-full object-cover object-top" data-magicpath-id="65" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-magicpath-id="66" data-magicpath-path="Main.tsx">Adult Programs</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl" data-magicpath-id="67" data-magicpath-path="Main.tsx">
              At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client's needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.
            </p>
          </SortableContainer>
          <SortableContainer dndKitId="f55a8f11-0ee2-4fa6-83a0-0262421e5e0c" containerType="regular" prevTag="div" className="flex flex-col items-center text-center flex-1" data-magicpath-id="68" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="d72573c8-6492-4ac9-901e-12f3e4f32603" containerType="regular" prevTag="div" className="w-full mb-8 relative aspect-[4/3] overflow-hidden rounded-2xl" data-magicpath-id="69" data-magicpath-path="Main.tsx">
              <img src="/adult.jpeg" alt="Online Training" className="w-full h-full object-cover object-top" data-magicpath-id="70" data-magicpath-path="Main.tsx" />
            </SortableContainer>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-magicpath-id="71" data-magicpath-path="Main.tsx">Online Training</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl" data-magicpath-id="72" data-magicpath-path="Main.tsx">
              I offer online fitness training, and it's affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Rates = () => {
  // @return
  return <SortableContainer dndKitId="4159aaca-d510-4498-9d1b-a55ea8833140" containerType="regular" prevTag="div" id="rates" className="bg-gradient-to-b from-gray-900 to-black text-white py-20 lg:py-32" data-magicpath-id="73" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="086b586c-9b09-4415-9a7a-75bb95b3b86f" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="74" data-magicpath-path="Main.tsx">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center" data-magicpath-id="75" data-magicpath-path="Main.tsx">
          <span className="text-yellow-300" data-magicpath-id="76" data-magicpath-path="Main.tsx">RATES</span>
        </h1>
        <SortableContainer dndKitId="3402c29b-7afc-474f-9574-1906974f46fe" containerType="regular" prevTag="div" className="max-w-2xl mx-auto" data-magicpath-id="77" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="0b5f3f5c-a4c5-402b-a678-e639202aa41d" containerType="regular" prevTag="div" className="bg-gray-900/50 rounded-2xl p-8 shadow-xl border border-gray-800" data-magicpath-id="78" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="d90bae50-2cb8-4511-8036-58938b4cda4f" containerType="regular" prevTag="ul" className="space-y-4 text-lg lg:text-xl text-gray-300" data-magicpath-id="79" data-magicpath-path="Main.tsx">
              <li className="flex items-start" data-magicpath-id="80" data-magicpath-path="Main.tsx">
                <span className="text-green-500 mr-3" data-magicpath-id="81" data-magicpath-path="Main.tsx">•</span>
                <span data-magicpath-id="82" data-magicpath-path="Main.tsx">Basic gym membership $50 a month</span>
              </li>
              <li className="flex items-start" data-magicpath-id="83" data-magicpath-path="Main.tsx">
                <span className="text-green-500 mr-3" data-magicpath-id="84" data-magicpath-path="Main.tsx">•</span>
                <span data-magicpath-id="85" data-magicpath-path="Main.tsx">Two sessions a week with training $85 a month</span>
              </li>
              <li className="flex items-start" data-magicpath-id="86" data-magicpath-path="Main.tsx">
                <span className="text-green-500 mr-3" data-magicpath-id="87" data-magicpath-path="Main.tsx">•</span>
                <span data-magicpath-id="88" data-magicpath-path="Main.tsx">Three to Four sessions a week with training $125 a month</span>
              </li>
              <li className="flex items-start" data-magicpath-id="89" data-magicpath-path="Main.tsx">
                <span className="text-green-500 mr-3" data-magicpath-id="90" data-magicpath-path="Main.tsx">•</span>
                <span data-magicpath-id="91" data-magicpath-path="Main.tsx">Online Training $85 a month</span>
              </li>
            </SortableContainer>
            <p className="text-base lg:text-lg text-gray-400 mt-8 text-center" data-magicpath-id="92" data-magicpath-path="Main.tsx">
              All memberships include 24/7 lockbox access to the gym. Family discounts available. There is no contract or sign-up fee.
            </p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const TrainingHours = () => {
  // @return
  return <SortableContainer dndKitId="64aededc-c698-4c94-baa4-7e4d232e62f7" containerType="regular" prevTag="div" id="hours" className="bg-black text-white py-20 lg:py-32" data-magicpath-id="93" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="ef48a015-7945-4c42-8f04-be9224a4b5a0" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="94" data-magicpath-path="Main.tsx">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center" data-magicpath-id="95" data-magicpath-path="Main.tsx">
          <span className="text-green-500" data-magicpath-id="96" data-magicpath-path="Main.tsx">TRAINING HOURS</span>
        </h1>
        <SortableContainer dndKitId="e4eca891-7c58-40a2-8464-f8f21485ca36" containerType="regular" prevTag="div" className="max-w-xl mx-auto" data-magicpath-id="97" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="f47e7352-a129-412a-803f-0ee13e488d4d" containerType="regular" prevTag="div" className="bg-gray-900/50 rounded-2xl p-8 shadow-xl border border-gray-800" data-magicpath-id="98" data-magicpath-path="Main.tsx">
            <SortableContainer dndKitId="611ebad6-1b88-4c27-b593-ae7fad4b0b6a" containerType="regular" prevTag="div" className="space-y-3 text-lg lg:text-xl text-gray-300" data-magicpath-id="99" data-magicpath-path="Main.tsx">
              <SortableContainer dndKitId="0162bcf9-ac8b-4800-99a0-9240c79d401a" containerType="regular" prevTag="div" className="flex justify-between items-center" data-magicpath-id="100" data-magicpath-path="Main.tsx">
                <span className="font-semibold" data-magicpath-id="101" data-magicpath-path="Main.tsx">Mondays</span>
                <span data-magicpath-id="102" data-magicpath-path="Main.tsx">7am - 12pm</span>
              </SortableContainer>
              <SortableContainer dndKitId="2c089ac3-27b4-4ac6-a42c-2d28512f702f" containerType="regular" prevTag="div" className="flex justify-between items-center" data-magicpath-id="103" data-magicpath-path="Main.tsx">
                <span className="font-semibold" data-magicpath-id="104" data-magicpath-path="Main.tsx">Tuesday</span>
                <span data-magicpath-id="105" data-magicpath-path="Main.tsx">7am - 12pm</span>
              </SortableContainer>
              <SortableContainer dndKitId="56cd5c97-0df1-4e6a-966c-7dcd57ea7651" containerType="regular" prevTag="div" className="flex justify-between items-center" data-magicpath-id="106" data-magicpath-path="Main.tsx">
                <span className="font-semibold" data-magicpath-id="107" data-magicpath-path="Main.tsx">Thursday</span>
                <span data-magicpath-id="108" data-magicpath-path="Main.tsx">7am - 12pm</span>
              </SortableContainer>
              <SortableContainer dndKitId="54522494-846d-4888-9c79-d6dcfed0ecfd" containerType="regular" prevTag="div" className="flex justify-between items-center" data-magicpath-id="109" data-magicpath-path="Main.tsx">
                <span className="font-semibold" data-magicpath-id="110" data-magicpath-path="Main.tsx">Friday</span>
                <span data-magicpath-id="111" data-magicpath-path="Main.tsx">7am - 12pm</span>
              </SortableContainer>
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

  // @return
  return <SortableContainer dndKitId="4815bcf6-4501-45f6-8993-868fa1844f07" containerType="regular" prevTag="div" id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white py-20 lg:py-32" data-magicpath-id="112" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="73bf75d9-0a33-401f-b59b-d0c963b5e5bb" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="113" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="7f2c3724-3c7f-42d0-a2ce-e12e697416e6" containerType="regular" prevTag="div" className="max-w-3xl mx-auto text-center" data-magicpath-id="114" data-magicpath-path="Main.tsx">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8" data-magicpath-id="115" data-magicpath-path="Main.tsx">
            Ready to Start Your <span className="text-yellow-300" data-magicpath-id="116" data-magicpath-path="Main.tsx">Fitness</span> <span className="text-green-500" data-magicpath-id="117" data-magicpath-path="Main.tsx">Journey?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed" data-magicpath-id="118" data-magicpath-path="Main.tsx">
            Got questions or ready to join? Email us today and take the first step toward your fitness goals!
          </p>
          <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white border-2 border-white px-8 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105', isHovered && 'bg-gradient-to-r from-yellow-300 to-green-500 border-transparent shadow-lg')} data-magicpath-id="119" data-magicpath-path="Main.tsx">
            <Mail className="mr-2 h-5 w-5" data-magicpath-id="120" data-magicpath-path="Main.tsx" />
            Contact Us
          </Button>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};
const Footer = () => {
  // @return
  return <SortableContainer dndKitId="3cd99434-ec49-49aa-afcc-dc142aa807db" containerType="regular" prevTag="footer" className="bg-black text-white py-12 border-t border-gray-800" data-magicpath-id="121" data-magicpath-path="Main.tsx">
      <SortableContainer dndKitId="08c5aa02-a04d-4bed-8c7a-7f28aab05d9d" containerType="regular" prevTag="div" className="container mx-auto px-4" data-magicpath-id="122" data-magicpath-path="Main.tsx">
        <SortableContainer dndKitId="a568d4e6-266f-4cb4-a355-9ffa0fcda974" containerType="regular" prevTag="div" className="flex flex-col items-center justify-center space-y-6" data-magicpath-id="123" data-magicpath-path="Main.tsx">
          <SortableContainer dndKitId="76df5b21-d024-4e82-9200-2b60a7d11821" containerType="regular" prevTag="div" className="flex space-x-6" data-magicpath-id="124" data-magicpath-path="Main.tsx">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-all duration-200 hover:scale-110" aria-label="Instagram" data-magicpath-id="125" data-magicpath-path="Main.tsx">
              <Instagram className="w-10 h-10" data-magicpath-id="126" data-magicpath-path="Main.tsx" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-all duration-200 hover:scale-110" aria-label="Facebook" data-magicpath-id="127" data-magicpath-path="Main.tsx">
              <Facebook className="w-10 h-10" data-magicpath-id="128" data-magicpath-path="Main.tsx" />
            </a>
          </SortableContainer>
          <SortableContainer dndKitId="58a8733a-5bd9-4b76-b2b7-de119ffb912b" containerType="regular" prevTag="div" className="text-center text-gray-400 text-sm" data-magicpath-id="129" data-magicpath-path="Main.tsx">
            <p data-magicpath-id="130" data-magicpath-path="Main.tsx">&copy; {new Date().getFullYear()} The Shed. All rights reserved.</p>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};

// @component: Main
export const Main = () => {
  // @return
  return <SortableContainer dndKitId="9273193b-ddcb-4bb2-9465-a6dde2f95281" containerType="regular" prevTag="main" className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900" data-magicpath-id="131" data-magicpath-path="Main.tsx">
      <NavbarComponent data-magicpath-id="132" data-magicpath-path="Main.tsx" />
      <MainHero data-magicpath-id="133" data-magicpath-path="Main.tsx" />
      <CarouselPlugin data-magicpath-id="134" data-magicpath-path="Main.tsx" />
      <Trainers data-magicpath-id="135" data-magicpath-path="Main.tsx" />
      <Programs data-magicpath-id="136" data-magicpath-path="Main.tsx" />
      <Rates data-magicpath-id="137" data-magicpath-path="Main.tsx" />
      <TrainingHours data-magicpath-id="138" data-magicpath-path="Main.tsx" />
      <Contact data-magicpath-id="139" data-magicpath-path="Main.tsx" />
      <Footer data-magicpath-id="140" data-magicpath-path="Main.tsx" />
    </SortableContainer>;
};