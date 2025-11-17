import React from 'react';
import { Award } from 'lucide-react';
import jenImage from '@/assets/jen.webp';

export const Trainers = () => {
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
              <div className="relative rounded-xl shadow-2xl overflow-hidden aspect-[3/4] w-full">
                <img 
                  src={jenImage} 
                  alt="Jen - Lead Trainer" 
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
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

