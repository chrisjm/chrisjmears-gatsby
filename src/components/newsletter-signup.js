import React, { useState } from 'react';
import Section from './section';

function NewsletterSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleEmailChange = event => {
    setEmail(event.currentTarget.value);
  };

  const handleHoneypotChange = event => {
    setHoneypot(event.currentTarget.value);
  };

  return (
    <Section sectionClasses="bg-blue-900 text-white">
      <div className="content">
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-bold">I have solutions for your web tech woes.</h2>
        </div>
        <div className="md:max-w-2xl md:mx-auto">
          <form
            className="mb-0"
            action="https://chrisjmears.us17.list-manage.com/subscribe/post?u=94e0dca41551038d6ef6f68bd&amp;id=1c278b28af"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
          >
            <p className="mb-4">
              Sign up for my weekly newsletter where I break down tough tech topics in plain
              English. All value. No spam. Guaranteed dog photos.
            </p>
            <div className="flex justify-between flex-col md:flex-row">
              <div className="flex-1 mr-5">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="mce-FNAME"
                  type="text"
                  name="FNAME"
                  placeholder="First Name"
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
              <div className="flex-1 mr-5">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="mce-EMAIL"
                  type="email"
                  name="EMAIL"
                  placeholder="you@email.com"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div className="flex-0 mr-5">
                <button
                  className="shadow bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded border-2 border-white focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_94e0dca41551038d6ef6f68bd_1c278b28af"
                tabIndex="-1"
                onChange={handleHoneypotChange}
                value={honeypot}
              />
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSignup;