import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto p-5 md:p-10">
        <div className="content">
          <div className="text-center">
            &copy; {new Date().getFullYear()}
            &nbsp;<a className="text-white" href="https://wanderingleafstudios.com/" target="_blank" rel="noopener noreferrer">
              Wandering Leaf Studios LLC
            </a>
          </div>
          <div className="text-center">All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
