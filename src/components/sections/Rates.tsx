import React from 'react';
import { Dumbbell, Users, Award, Zap } from 'lucide-react';

export const Rates = () => {
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

