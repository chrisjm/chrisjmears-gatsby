import React from 'react';
import Section from './section';
import Heading2 from './heading2';

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
                Iʼm a <strong>Technical Support Engineer</strong> with over 15 years of experience
                in web development, networking, and telecommunications.
              </li>
              <li className="mb-4 leading-tight">
                I currently own and operate a web development and technology consulting agency. I
                have previously worked for companies large and small in different sectors including
                Fortune 500, startups, and non-profits.
              </li>
              <li className="mb-4 leading-tight">
                I strongly believe in customer success through empathy and goal-finding.
              </li>
              <li className="mb-4 leading-tight">
                Iʼm a remote and distributed team evangelist, open-source contributor, and rescue
                dog owner.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
