import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import groupImage from '@/assets/group.png';
import group1Image from '@/assets/group1.png';
import group2Image from '@/assets/group2.png';

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];

export const AboutSection = () => {
  const imageSources = [groupImage, group1Image, group2Image];
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
              <div ref={emblaRef} className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] w-full">
                <div className="flex h-full">
                  {imageSources.map((src, index) => <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                      <img 
                        src={src} 
                        alt={`Training session ${index + 1}`} 
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
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

