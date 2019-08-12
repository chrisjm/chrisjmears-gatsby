import React from 'react';
import Section from './section';
import OutsideLink from './outside-link';
import Heading2 from './heading2';

function AboutMe() {
  return (
    <Section>
      <Heading2 title="About Me" />
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
                <OutsideLink to="https://www.almanacbeer.com/" name="Almanac Brewing Co." />,{' '}
                <OutsideLink to="https://www.amazon.com/" name="Amazon" />,{' '}
                <OutsideLink to="https://www.cisco.com/" name="Cisco Systems" />,{' '}
                <OutsideLink to="https://curiomodern.com" name="CURIO" />,{' '}
                <OutsideLink to="https://www.exactdrive.com" name="ExactDrive" />,{' '}
                <OutsideLink to="https://www.goodreads.com" name="Goodreads" />,{' '}
                <OutsideLink to="https://www.patientwisdom.com" name="PatientWisdom" />,{' '}
                <OutsideLink to="https://www.wineinstitute.org" name="Wine Institute" />.
              </li>
              <li className="mb-4 leading-tight">
                <strong>Projects</strong> -{' '}
                <OutsideLink to="https://www.openbrewerydb.org/" name="Open Brewery DB" />.
              </li>
              <li className="mb-4 leading-tight">
                <strong>I Have a Cute Dog</strong>- Seriously. Look at him!
              </li>
              <li className="mb-4 leading-tight">
                <strong>Social Media</strong> -{' '}
                <OutsideLink to="https://twitter.com/chrisjm" name="Twitter" />,{' '}
                <OutsideLink to="https://instagram.com/chrisjm" name="Instagram" />,{' '}
                <OutsideLink to="https://github.com/chrisjm" name="Github" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
