import React from 'react';
import OutsideLink from './outside-link';

function Signature() {
  return (
    <div className="signature text-base border rounded p-6 mb-10 mx-auto max-w-3xl">
      <span>
        Hi! I'm Chris J Mears.{' '}
        <span aria-label="wave" role="img">
          👋
        </span>
      </span>
      <span>
        {' '}
        I'm an independent{' '}
        <OutsideLink to="https://github.com/chrisjm" name="full stack web developer" />,{' '}
        <OutsideLink to="https://www.wanderingleafstudios.com/" name="solopreneur" />, and{' '}
        <OutsideLink to="https://chrisjmears.com/" name="consultant" />.{' '}
        <span aria-label="geek" role="img">
          🤓
        </span>
      </span>
      <span>
        {' '}
        My mission is to help non-technical freelancers and solopreneurs gain control of their web
        technologies and get back to their passion.{' '}
        <span aria-label="arm muscle" role="img">
          💪
        </span>
      </span>
      <span>
        {' '}
        I built and maintain the{' '}
        <OutsideLink to="https://www.openbrewerydb.org/" name="Open Brewery DB" /> open-source
        project.{' '}
        <span aria-label="beer cheers" role="img">
          🍻
        </span>
      </span>
      <span>
        {' '}
        I have a rescue dog named Cooper{' '}
        <span aria-label="dog" role="img">
          🐶
        </span>
      </span>
      <span>
        {' '}
        You can follow me on <OutsideLink
          to="https://instagram.com/chrisjm"
          name="Instagram"
        />, <OutsideLink to="https://twitter.com/chrisjm" name="Twitter" />, and{' '}
        <OutsideLink to="https://www.linkedin.com/in/chrisjm80/" name="LinkedIn" />.{' '}
        <span aria-label="thank you" role="img">
          🙏
        </span>
      </span>
    </div>
  );
}

export default Signature;
