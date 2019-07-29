import React from 'react';
import PropTypes from 'prop-types';

function Section({ backgroundColor, textColor, wrapperClasses, children }) {
  return (
    <section className={`${backgroundColor} ${textColor}`}>
      <div className={wrapperClasses}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  wrapperClasses: PropTypes.string,
  children: PropTypes.node.isRequired
}

Section.defaultProps = {
  backgroundColor: 'bg-white',
  textColor: 'text-black',
  wrapperClasses: 'container mx-auto p-5 md:p-10'
}

export default Section;
