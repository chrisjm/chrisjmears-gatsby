import React from 'react';
import PropTypes from 'prop-types';

function Section({ sectionClasses, containerClasses, children,  }) {
  return (
    <section className={`${sectionClasses}`}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
}

Section.propTypes = {
  sectionClasses: PropTypes.string,
  containerClasses: PropTypes.string,
  children: PropTypes.node.isRequired
}

Section.defaultProps = {
  sectionClasses: 'bg-white text-black',
  containerClasses: 'container mx-auto p-8 md:p-16'
}

export default Section;
