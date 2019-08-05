import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

function Layout({ children, headerBackgroundColor, headerTextColor, headerMobileMenuTextColor }) {
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
          <Header
            backgroundColor={headerBackgroundColor}
            mobileMenuTextColor={headerMobileMenuTextColor}
            siteTitle={data.site.siteMetadata.title}
            textColor={headerTextColor}
          />

          <main className="flex flex-col flex-1 md:justify-center">{children}</main>

          <Footer />
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  mobileMenuTextColor: PropTypes.string,
};

export default Layout;
