import React from 'react';
import Section from './section';

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
            I help solopreneurs & small business owners take control of their web technology and get
            back to their passion.
          </h2>
          <a
            href="https://calendly.com/chrisjmears/website-woes-intro"
            className="js-event-track bg-blue-900 border-2 border-white hover:bg-blue-500 text-white font-semibold py-3 px-5 rounded shadow-md hover:shadow-none inline-block no-underline text-xl"
          >
            Schedule FREE 15-Minute Intro
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
