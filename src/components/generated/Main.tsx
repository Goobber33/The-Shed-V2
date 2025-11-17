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
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'default',
  size = 'default',
  ...props
}, ref) => {
  return <button className={buttonVariants(variant, size, className)} ref={ref} {...props} />;
});
Button.displayName = 'Button';
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => {
  return <div ref={ref} className={cn('rounded-lg', className)} {...props} />;
});
Card.displayName = 'Card';
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => {
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />;
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
  return <nav className={cn('w-full bg-black backdrop-blur-md z-50 border-b border-white/5', position === 'sticky' && 'sticky top-0', position === 'fixed' && 'fixed top-0', className)}>
      {children}
    </nav>;
};
const NavbarComponent = () => {
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
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 group">
            <Dumbbell className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-300 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xl sm:text-2xl font-bold text-white">
              THE <span className="text-green-500">SHED</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200">
                {item.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
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
            {menuItems.map((item, index) => <button key={item.id} onClick={() => scrollToSection(item.id)} className={cn('w-full text-left px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200', 'transform', isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0')} style={{
            transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
          }}>
                {item.label}
              </button>)}
          </div>
        </div>
      </div>
    </Navbar>;
};
const MainHero = () => {
  return <div id="home" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5 animate-pulse" style={{
      animationDuration: '4s'
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 gap-12 max-w-6xl mx-auto">
          <div className="flex-1 text-white space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight">
              WELCOME&nbsp;TO
              <br />
              <span className="text-yellow-300 drop-shadow-lg">THE</span>
              <span className="text-green-500 drop-shadow-lg">&nbsp;SHED</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl">
              At The Shed, we offer group personal training and personal training on site and online. Each of our workouts are researched, thought out and created with the client's goals and bodies in mind. We believe in building a base and strong body, gradually.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => {
              const section = document.querySelector('#contact');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} className="bg-gradient-to-r from-yellow-300 to-green-500 text-black font-bold text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
              <Button onClick={() => {
              const section = document.querySelector('#programs');
              section?.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-2 border-white text-white font-bold text-lg px-8 py-6 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                View Programs
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <img src="/jenmain.jpg" alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl max-h-[38rem] w-full md:w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[{
          icon: Clock,
          label: '24/7 Access',
          value: 'Lockbox'
        }, {
          icon: Users,
          label: 'Personal Training',
          value: 'Group & Solo'
        }, {
          icon: Award,
          label: 'Experience',
          value: '10+ Years'
        }, {
          icon: Target,
          label: 'Custom Plans',
          value: 'Your Goals'
        }].map((stat, index) => <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-yellow-300/50 transition-all duration-300 hover:transform hover:scale-105">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
              <div className="text-white font-bold text-lg mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </div>;
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
  return <div id="about" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/2 flex flex-col justify-start order-2 lg:order-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
              ABOUT <span className="text-yellow-300">THE</span> <span className="text-green-500">SHED</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto lg:mx-0" />
            <div className="space-y-6 text-base lg:text-lg text-gray-300">
              <p className="leading-relaxed">
                The Shed is a unique facility where youth and adults gather to workout. The gym is intimate and different than any other in the area and perhaps the nation.
              </p>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-yellow-300 p-4 rounded-r-lg">
                <p className="text-white font-semibold">Are you an adult training for a race, event or is that on your "bucket list"?</p>
              </div>
              <p className="text-center text-xl font-bold text-yellow-300">Or</p>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-white font-semibold">
                  Are you finding that your body is "breaking down", your back, knee or hip is causing you to slow down or even give up activities you love? Our expertise and training background will help you get on track.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
              <div ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex">
                  {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0">
                      <img src={src} alt={`Training session ${index + 1}`} className="w-full h-[350px] md:h-[450px] object-cover" />
                    </div>)}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              {imageSources.map((_, index) => <div key={index} className={cn('h-2 rounded-full transition-all duration-300', current === index + 1 ? 'w-8 bg-gradient-to-r from-yellow-300 to-green-500' : 'w-2 bg-gray-600')} />)}
            </div>
            <p className="text-base md:text-lg text-gray-300 mt-8 text-center lg:text-left leading-relaxed">
              The concept and program was created by Jen Barden, Lead Trainer and Owner, from years of working in different fields of health and fitness and also from her own athletic achievements. The Shed in Sandpoint, Idaho cannot be duplicated and the program itself has been tested with proven results.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
const Trainers = () => {
  return <div id="trainers" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            LEAD <span className="text-yellow-300">TRAINER</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="md:w-5/12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <img src="/jen.webp" alt="Jen - Lead Trainer" className="relative rounded-xl shadow-2xl w-full" />
            </div>
          </div>
          <div className="md:w-7/12 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Jen</h2>
              <Award className="w-8 h-8 text-yellow-300" />
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl p-6">
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                "After working 20 plus years in the fitness and health industry and being a competitive runner, triathlete, and tennis player, I knew the benefits of strength training. By adding cross training to my workouts, I was less prone to injury, stronger overall and more successful racing. In 2012, I decided to share my knowledge and experience and opened The Shed, in Sandpoint, Idaho. It was my goal to create an affordable gym for people of all ages, where they could improve their fitness level, receive personal training, workouts designed for their bodies and goals, and be encouraged and supported. Where everyone gets individual attention and is listened to. We don't compete with each other at The Shed, but rather, build each other up. That's what being a ShedHead is all about! As the gym has grown, I've even expanded into online training. Helping people live healthier lives has been and continues to be my mission!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const Programs = () => {
  return <div id="programs" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            OUR <span className="text-green-500">PROGRAMS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" />
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {[{
          image: '/adultp.jpeg',
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell
        }, {
          image: '/adult.jpeg',
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap
        }].map((program, index) => <div key={index} className="flex-1 group">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-300 to-green-500 p-3 rounded-full z-20">
                    <program.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent">
                    {program.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
const Rates = () => {
  return <div id="rates" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-yellow-300">RATES</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl hover:border-yellow-300/30 transition-all duration-500">
            <div className="grid gap-6">
              {[{
              label: 'Basic gym membership',
              price: '$50/month',
              icon: Dumbbell
            }, {
              label: 'Two sessions a week with training',
              price: '$85/month',
              icon: Users
            }, {
              label: 'Three to Four sessions a week with training',
              price: '$125/month',
              icon: Award
            }, {
              label: 'Online Training',
              price: '$85/month',
              icon: Zap
            }].map((rate, index) => <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-700/20 to-gray-800/20 hover:from-gray-700/40 hover:to-gray-800/40 transition-all duration-300 group">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-gradient-to-r from-yellow-300 to-green-500 p-2 rounded-lg">
                      <rate.icon className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">{rate.label}</span>
                  </div>
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-300 to-green-500 bg-clip-text text-transparent">
                    {rate.price}
                  </span>
                </div>)}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-base lg:text-lg text-gray-400 text-center leading-relaxed">
                All memberships include <span className="text-yellow-300 font-semibold">24/7 lockbox access</span> to the gym. <span className="text-green-500 font-semibold">Family discounts</span> available. There is <span className="text-white font-semibold">no contract or sign-up fee</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const TrainingHours = () => {
  const hours = [{
    day: 'Monday',
    time: '7am - 12pm'
  }, {
    day: 'Tuesday',
    time: '7am - 12pm'
  }, {
    day: 'Thursday',
    time: '7am - 12pm'
  }, {
    day: 'Friday',
    time: '7am - 12pm'
  }] as any[];
  return <div id="hours" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-green-500">TRAINING HOURS</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="space-y-4">
              {hours.map((schedule, index) => <div key={index} className="flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-gray-700/30 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-green-500 group-hover:text-yellow-300 transition-colors" />
                    <span className="text-lg lg:text-xl font-semibold text-white">{schedule.day}</span>
                  </div>
                  <span className="text-lg lg:text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{schedule.time}</span>
                </div>)}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-base">
                <Clock className="w-5 h-5 inline mr-2 text-yellow-300" />
                Remember: Members have <span className="text-yellow-300 font-semibold">24/7 access</span> to the gym
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleContactClick = () => {
    window.location.href = 'mailto:jenattheshed@gmail.com';
  };
  return <div id="contact" className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-green-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Ready to Start Your <span className="text-yellow-300">Fitness</span> <span className="text-green-500">Journey?</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-green-500 mx-auto mb-8" />
            </div>
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Got questions or ready to join? Email us today and take the first step toward your fitness goals!
            </p>
            <div className="pt-8">
              <Button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleContactClick} className={cn('text-white font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 transform', isHovered ? 'bg-gradient-to-r from-yellow-300 to-green-500 text-black border-transparent shadow-2xl scale-110' : 'bg-transparent border-2 border-white hover:scale-105')}>
                <Mail className="mr-3 h-6 w-6" />
                Contact Us Today
              </Button>
            </div>
            <div className="pt-8 text-gray-400">
              <p className="text-base">jenattheshed@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const Footer = () => {
  return <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <img src="/shed logo.png" className="h-16 opacity-80" alt="The Shed Logo" />
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} The Shed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">Sandpoint, Idaho</p>
          </div>
        </div>
      </div>
    </footer>;
};

// @component: Main
export const Main = () => {
  return <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <NavbarComponent />
      <MainHero />
      <CarouselPlugin />
      <Trainers />
      <Programs />
      <Rates />
      <TrainingHours />
      <Contact />
      <Footer />
    </main>;
};