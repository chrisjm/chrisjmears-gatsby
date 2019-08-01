import React from 'react';
import Section from './section';

function AboutMe() {
  return (
    <Section>
      <div className="mb-10">
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 mb-5 md:mr-5 text-center">
          <img
            className="w-64 h-64 rounded-full shadow-lg inline"
            src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031462/chrisjmears.com/Cooper_and_I_in_Julian.jpg"
            alt="Cooper, the tiny black dog, and I in Julian, California"
          />
          <div className="mt-2">
            <em>My dog, Cooper, and I.</em>
          </div>
        </div>
        <div className="flex-1 mb-5 md:mr-5">
          <div>
            <ul className="text-lg mb-8">
              <li className="mb-4 leading-tight">
                <strong>Wide Range of Experience</strong> - Over 15 years of wide-ranging technical
                experience in web development, systems administration, networking, and
                telecommunications.
              </li>
              <li className="mb-4 leading-tight">
                <strong>Work</strong> - Over the years, I have worked with and for several
                outstanding people and companies including{' '}
                <a href="https://www.almanacbeer.com/" target="_blank" rel="noopener noreferrer">
                  Almanac Brewing Co.
                </a>
                ,{' '}
                <a href="https://www.amazon.com/" target="_blank"  rel="noopener noreferrer">
                  Amazon
                </a>
                ,{' '}
                <a href="https://www.cisco.com/" target="_blank"  rel="noopener noreferrer">
                  Cisco Systems
                </a>
                ,{' '}
                <a href="https://curio-craft.com" target="_blank"  rel="noopener noreferrer">
                  Curio
                </a>
                ,{' '}
                <a href="https://www.exactdrive.com" target="_blank"  rel="noopener noreferrer">
                  ExactDrive
                </a>
                ,{' '}
                <a href="https://www.goodreads.com" target="_blank"  rel="noopener noreferrer">
                  Goodreads
                </a>
                ,{' '}
                <a href="https://www.patientwisdom.com" target="_blank"  rel="noopener noreferrer">
                  PatientWisdom
                </a>
                ,{' '}
                <a href="https://www.wineinstitute.org" target="_blank"  rel="noopener noreferrer">
                  Wine Institute
                </a>
                .
              </li>
              <li className="mb-4 leading-tight">
                <strong>Projects</strong> -{' '}
                <a href="https://www.openbrewerydb.org/" target="_blank"  rel="noopener noreferrer">
                  Open Brewery DB
                </a>
                .
              </li>
              <li className="mb-4 leading-tight">
                <strong>I Have a Cute Dog</strong> - Seriously. Look at him!
              </li>
              <li className="mb-4 leading-tight">
                <strong>Social Media</strong> - <a href="https://twitter.com/chrisjm" target="_blank" rel="noopener noreferrer">Twitter</a>,{' '}
                <a href="https://instagram.com/chrisjm" target="_blank" rel="noopener noreferrer">Instagram</a>,{' '}
                <a href="https://github.com/chrisjm" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
