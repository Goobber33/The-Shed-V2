import React from 'react';
import { Dumbbell, Zap } from 'lucide-react';
import adultpImage from '@/assets/adultp.jpeg';
import adultImage from '@/assets/adult.jpeg';

export const Programs = () => {
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
          image: adultpImage,
          title: 'Adult Programs',
          description: 'At the Shed, we offer group personal training for Adults. Each workout is specifically designed to address the client\'s needs, whether you are an athlete wishing to cross train for your sport, prepare physically for a race/event; work on gait or core strength; or a client desiring inch loss; or have special needs: MS, paralysis, prosthetics. We look forward to helping you reach your goals.',
          icon: Dumbbell
        }, {
          image: adultImage,
          title: 'Online Training',
          description: 'I offer online fitness training, and it\'s affordable! I am working with people as far away as NY and as close as Upper Pack River and Spokane! If you need support, a plan, guidance, I am here for you. Workouts are written based on your goals, body, and available equipment. Together, we can make it work and take the stress out of finding the time to go to the gym!',
          icon: Zap
        }].map((program, index) => <div key={index} className="flex-1 group">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-300/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-100 transition-transform duration-700"
                    loading="lazy"
                  />
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

