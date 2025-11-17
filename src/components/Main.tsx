import React from 'react';
import { NavbarComponent } from './layout/NavbarComponent';
import { MainHero } from './sections/MainHero';
import { AboutSection } from './sections/AboutSection';
import { Trainers } from './sections/Trainers';
import { Programs } from './sections/Programs';
import { Rates } from './sections/Rates';
import { TrainingHours } from './sections/TrainingHours';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export const Main = () => {
  return <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <NavbarComponent />
      <MainHero />
      <AboutSection />
      <Trainers />
      <Programs />
      <Rates />
      <TrainingHours />
      <Contact />
      <Footer />
    </main>;
};
