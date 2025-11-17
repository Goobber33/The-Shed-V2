import React from 'react';
import { Clock } from 'lucide-react';

export const TrainingHours = () => {
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

