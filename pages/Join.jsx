import React from 'react';

export default function Join() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
            Join IAESTE LC JECRC
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Membership registration form coming soon. Please contact us for more information.
          </p>
          <div className="text-center">
            <a
              href="mailto:head.hra@iaestejecrc.com"
              className="inline-flex items-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

