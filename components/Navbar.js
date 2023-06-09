import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-lg font-semibold">Logo</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Projects', '/projects'],
              ['Contact', '/contact'],
            ].map(([title, url]) => (
              <a href={url} className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium" key={url}>{title}</a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
