import React from 'react';
import { Link } from 'react-router-dom';

export default function MembershipSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Membership
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the membership plan that suits you and join our global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* INSTATION Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#003F68]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#003F68] mb-4">
                INSTATION
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-sm sm:text-base">
                  Valid for students of <span className="font-semibold text-[#003F68]">JECRC University</span>
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-sm sm:text-base">
                  Access to all IAESTE programs and events
                </p>
              </div>
            </div>
            
          </div>

          {/* OUTSTATION Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#003F68]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#003F68] mb-4">
                OUTSTATION
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-sm sm:text-base">
                  Valid for students other than <span className="font-semibold text-[#003F68]">JECRC University</span>
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-700 text-sm sm:text-base">
                  Full access to IAESTE opportunities and resources
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/join"
            className="inline-flex items-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join Membership
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


