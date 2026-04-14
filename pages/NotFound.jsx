import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4"
      role="main"
      aria-label="Page not found"
    >
      <div className="text-center max-w-lg">
        <h1 className="text-8xl sm:text-9xl font-black text-[#003F68] mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#003F68] text-[#003F68] font-semibold rounded-lg hover:bg-[#003F68]/5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
