import React from 'react';
import Section from './section';
import { Link } from 'gatsby';

function Hero() {
  return (
    <Section sectionClasses="bg-blue-700 text-white hero">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-5 md:mb-0 md:mr-10">
          <img
            className="w-48 h-48 rounded-full shadow-lg mb-0"
            src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031975/chrisjmears.com/chris-mears-profile-2018.jpg"
            alt="Chris J Mears"
          />
        </div>
        <div className="flex-1 antialiased">
          <h1 className="text-5xl font-bold mb-2">Hi! My name is Chris.</h1>
          <h2 className="text-2xl font-bold text-blue-200 mb-6">
            Iʼm a <strong className="text-white">Customer Success Manager</strong> with over 10 years of technical experience focusing on <strong className="text-white">goal-oriented, empathetic, and strategic</strong> customer guidance and happiness.
          </h2>
          <h3 className="text-xl font-bold text-white mb-6">
            Currently looking for new opportunities.
          </h3>
          <Link
            to="/contact"
            className="js-event-track bg-blue-900 border-2 border-white hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-none inline-block no-underline text-xl"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
