import React from 'react';
import { Clock, Users, Award, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import jenmainImage from '@/assets/jenmain.jpg';

export const MainHero = () => {
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
            <div className="relative group w-full max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <img src={jenmainImage} alt="Lead Trainer" className="relative object-cover rounded-2xl shadow-2xl w-full h-auto max-h-[38rem] md:max-h-[40rem] lg:max-h-[42rem]" />
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

