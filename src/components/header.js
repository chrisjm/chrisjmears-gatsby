import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Header({ bgColor = 'bg-blue-500', linkColor = 'text-white' }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div>
      <header className={bgColor}>
        <div className="container mx-auto p-5 md:p-10">
          <div className="content">
            <div className="flex flex-col md:flex-row justify-center content-center">
              <div className="branding flex-1">
                <div className="text-3xl md:text-4xl font-black mb-1 md:mb-0">
                  <Link to="/" className={`${linkColor} no-underline antialiased`}>
                    Chris J Mears
                  </Link>
                </div>
              </div>
              <div className="menu flex-1 md:text-right">
                <nav>
                  <div className="flex flex-wrap items-center justify-end">
                    <button
                      className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
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

                    <div
                      className={`${
                        isExpanded ? `block` : `hidden`
                      } md:block md:flex md:items-center w-full md:w-auto`}
                    >
                      <ul className="list-reset mt-5 inline-block">
                        <li className="inline-block mr-5 mb-5">
                          <Link className={`${linkColor} no-underline antialiased`} to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li className="inline-block mr-5 mb-5">
                          <Link
                            className={`${linkColor} no-underline antialiased`}
                            to="/#newsletter"
                          >
                            Newsletter
                          </Link>
                        </li>
                        <li className="inline-block mr-5 mb-5">
                          <Link
                            className={`${linkColor} no-underline antialiased`}
                            to="/roadmapping"
                          >
                            Roadmapping
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
