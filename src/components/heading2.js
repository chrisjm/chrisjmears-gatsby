import React from 'react';

function Heading2({ title }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <hr className="h-1 bg-blue-800" />
    </div>
  );
}

export default Heading2;
