import React from 'react';

function Section({ backgroundColor = 'bg-white', textColor = 'text-black', wrapperClasses = 'container mx-auto p-5 md:p-10', children }) {
  return (
    <section className={`${backgroundColor} ${textColor}`}>
      <div className={wrapperClasses}>{children}</div>
    </section>
  );
}

export default Section;
