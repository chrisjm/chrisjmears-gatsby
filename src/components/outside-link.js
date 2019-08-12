import React from 'react';

function OutsideLink({ to, name }) {
  return (
    <>
      <a href={to} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </>
  );
}

export default OutsideLink;
