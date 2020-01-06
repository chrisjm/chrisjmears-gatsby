import React from 'react';
import Section from './section';
import Heading2 from './heading2';
import OutsideLink from './outside-link'
import { Link } from 'gatsby';

function AboutMe() {
  return (
    <Section>
      <Heading2 title="About Me" />
      <div className="flex flex-col lg:flex-row">
        <div className="mb-5 md:mr-5 text-center">
          <img
            className="w-64 h-64 rounded-full shadow-lg inline"
            src="https://res.cloudinary.com/wanderingleafstudios/image/upload/c_scale,w_512/v1543031462/chrisjmears.com/Cooper_and_I_in_Julian.jpg"
            alt="Cooper, the tiny black dog, and I in Julian, California"
          />
        </div>
        <div className="flex-1 mb-5 md:mr-5">
          <div>
            <ul className="text-lg mb-8">
              <li className="mb-4 leading-tight">
                Iʼm a Customer Success Manager with over 10 years of technical experience focusing on goal-oriented, empathetic, and strategic customer guidance and happiness.
              </li>
              <li className="mb-4 leading-tight">
                I currently own and operate a web development consulting agency and have previously worked for companies large and small in different sectors including
                Fortune 500, startups, and non-profits.
              </li>
              <li className="mb-4 leading-tight">
                I strongly believe in customer success through empathy, compassion,  goal-finding, and mentorship.
              </li>
              <li className="mb-4 leading-tight">
                Iʼm a remote and distributed team evangelist,{' '}
                <OutsideLink to='https://www.openbrewerydb.org/'>
                  open-source contributor
                </OutsideLink>
                , and rescue dog owner.
              </li>
              <li className="mb-4 leading-tight">
                I'm currently seeking full-time opportunities at SaaS (or similar) companies with a healthy distributed philosophy.

                <Link
                  to="/contact"
                  className="js-event-track bg-green-700 border-2 border-blue-100 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded shadow-lg hover:shadow-md inline-block no-underline text-xl mt-4"
                >
                  <span className="text-white">Contact Me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
