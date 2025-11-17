import React from 'react';
import { Mail } from 'lucide-react';

export const Contact = () => {
  const email = 'jenattheshed@gmail.com';
  
  // Use mailto: to open user's default email client on both desktop and mobile
  const emailHref = `mailto:${email}`;

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
            <div className="pt-8 flex justify-center">
              <a 
                href={emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-300 to-green-500 text-black font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us Today
              </a>
            </div>
            <div className="pt-8 text-gray-400">
              <p className="text-base">jenattheshed@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

