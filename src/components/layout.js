import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

function Layout({ children, headerClasses, headerLinkClasses }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="flex flex-col min-h-screen text-gray-900">
          <Header headerClasses={headerClasses} headerLinkClasses={headerLinkClasses} siteTitle={data.site.siteMetadata.title} />

          <main className="flex flex-col flex-1 md:justify-center">{children}</main>

          <Footer />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClasses: PropTypes.string,
  headerLinkClasses: PropTypes.string
};

export default Layout;
