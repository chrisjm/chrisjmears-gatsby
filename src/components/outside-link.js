import React from 'react';

function OutsideLink({ to, className, children }) {
  return (
    <>
      <a href={to} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </>
  );
}

export default OutsideLink;
