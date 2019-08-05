import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Header({ backgroundColor, mobileMenuTextColor, textColor }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className={`bg-${backgroundColor} text-${textColor}`}>
      <div className="container mx-auto p-8 md:px-16">
        <div className="flex flex-row justify-between items-center">
          <div className="flex-1 text-3xl md:text-4xl font-black">
            <Link to="/" className="no-underline antialiased">
              Chris J Mears
            </Link>
          </div>
          <div className="md:text-right">
            <div className="flex flex-wrap items-center justify-end">
              <button
                className={`block md:hidden border flex items-center px-3 py-2 rounded border-${textColor} text-${textColor}`}
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isExpanded
                  ? `bg-white absolute right-0 mr-5 mt-2 text-${mobileMenuTextColor}`
                  : `hidden`
              } md:block md:flex md:items-center md:w-auto`}
            >
              <ul className="list-none flex flex-col p-4 shadow md:inline-block md:shadow-none md:p-0 border font-black rounded border-gray-200 md:border-none">
                <li className="inline-block mr-5 mb-0">
                  <Link className="no-underline antialiased p-2 block" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="inline-block mr-5 mb-0">
                  <Link className="no-underline antialiased p-2 block" to="/#newsletter">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  backgroundColor: PropTypes.string,
  mobileMenuTextColor: PropTypes.string,
  textColor: PropTypes.string,
};

Header.defaultProps = {
  backgroundColor: 'blue-500',
  mobileMenuTextColor: 'blue-500',
  textColor: 'white',
};

export default Header;
