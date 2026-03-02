import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import StatisticsCharts from '../components/StatisticsCharts';
import HowToApply from '../components/HowToApply';
import Stepper, { Step } from '../components/Stepper';
import homeImage from '../src/assets/images/home.jpg';

export default function Home() {
  // Carousel slides data with home image repeated
  const slides = [
    {
      id: 1,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
    {
      id: 2,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
    {
      id: 3,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
    {
      id: 4,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
    {
      id: 5,
      title: "Welcome to IAESTE LC JECRC",
      subtitle: "Work. Experience. Discover.",
      description: "Empowering students through international exchange programs and professional development opportunities worldwide.",
      buttonText: "Apply Now",
      buttonLink: "/apply",
      backgroundImage: homeImage,
      fallbackGradient: "linear-gradient(135deg, #003F68 0%, #005a8f 100%)",
    },
  ];

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Career Development",
      description: "Gain real-world exposure by working on innovative projects with companies and research labs abroad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 2,
      title: "Cultural Exchange",
      description: "Adapt to new cultures, build confidence and strengthen your communication and people skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 3,
      title: "Professional Network",
      description: "Join a global family of alumni, professionals and mentors who can support your future goals.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 4,
      title: "Language Skills",
      description: "Practice new languages and learn how professionals communicate in international environments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 5,
      title: "Lasting Memories",
      description: "Travel with fellow interns, explore iconic places and create unforgettable stories.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    },
    {
      id: 6,
      title: "Competitive Edge",
      description: "Stand out in applications with unique global experience on your resume and LinkedIn.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      iconColor: "text-[#003F68]"
    }
  ];

  return (
    <div>
      <Carousel slides={slides} />
      
      {/* Who we are & Why IAESTE Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 lg:pb-8 -mt-16 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Who we are Section - Left */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">Who we are</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg font-normal">
                The International Association for the Exchange of Students for Technical Experience (<span className="font-bold text-[#003F68]">IAESTE</span>) is a global, independent, non-profit organisation providing high-quality, paid internships for students in technical, scientific and professional fields.
              </p>
              
              <p className="text-base sm:text-lg font-normal">
                <span className="font-bold text-[#003F68]">IAESTE India LC JECRC</span> is the local committee at <span className="font-bold text-[#003F68]">JECRC University</span>. We connect students with global technical internships, organise workshops and cultural events, and help you build an international network while still on campus.
              </p>
              
              <p className="text-base sm:text-lg font-normal">
                From documentation and visa support to accommodation guidance and cultural trips, our student-run departments handle everything so you can focus on learning, exploring and making memories that stay with you for life.
              </p>
            </div>
            
            {/* Single Image Display */}
            <div className="pt-4 relative overflow-hidden rounded-lg border-4 border-[#003F68] shadow-xl w-full" style={{ minHeight: '300px', height: '400px' }}>
              <img 
                src={homeImage} 
                alt="IAESTE LC JECRC" 
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          {/* Why IAESTE Section - Right */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
                Why <span className="text-[#003F68]">IAESTE</span> ?
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 leading-relaxed">
                How does <span className="font-bold text-[#003F68]">IAESTE</span> benefit you as a student member?
              </h3>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.id}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    scale: 0.9
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 transition-all duration-500"
                  style={{
                    boxShadow: '0 8px 20px -4px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 63, 104, 0.05)',
                    transform: 'translateZ(0)',
                    willChange: 'transform, box-shadow'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 40px -8px rgba(0, 63, 104, 0.3), 0 12px 24px -6px rgba(0, 63, 104, 0.25), 0 0 0 1px rgba(0, 63, 104, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 63, 104, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <div className={`${benefit.iconColor} mb-3`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-base sm:text-[15px] text-gray-700 leading-[1.7] font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Know More Button */}
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link
                to="/benefits"
                className="inline-flex items-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Know More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="bg-white pt-8 sm:pt-12 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
              Membership
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              It takes 2 minutes to get yourself enrolled as a member of this prestigious organization!
            </p>
          </div>

          {/* Membership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* INSTATION Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 border-2 border-[#003F68]/10 hover:border-[#003F68]/30 transition-all duration-300"
              style={{
                boxShadow: '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px -8px rgba(0, 63, 104, 0.25), 0 6px 15px -4px rgba(0, 63, 104, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#003F68]/10 mb-4">
                  <svg className="w-8 h-8 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003F68]">
                  INSTATION
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Valid for students of <span className="font-semibold text-[#003F68]">JECRC University</span>.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#003F68]/20">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Access to all IAESTE programs and events.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* OUTSTATION Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 border-2 border-[#003F68]/10 hover:border-[#003F68]/30 transition-all duration-300"
              style={{
                boxShadow: '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px -8px rgba(0, 63, 104, 0.25), 0 6px 15px -4px rgba(0, 63, 104, 0.2)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0, 63, 104, 0.1), 0 2px 8px -2px rgba(0, 63, 104, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#003F68]/10 mb-4">
                  <svg className="w-8 h-8 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003F68]">
                  OUTSTATION
                </h3>
              </div>
              <div className="space-y-5">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#003F68] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Valid for students other than <span className="font-semibold text-[#003F68]">JECRC University</span>.
                  </p>
                </div>
                <div className="pt-4 border-t-2 border-[#003F68]/20">
                  <p className="text-base text-gray-700 leading-relaxed">
                    Full access to IAESTE opportunities and resources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Know More Button */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <Link
              to="/membership"
              className="inline-flex items-center px-8 py-3 bg-[#003F68] text-white font-semibold rounded-lg hover:bg-[#005a8f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Know More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* How to Apply Section 
       <HowToApply />
      */}
      
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-center mb-3 sm:mb-4"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              HOW TO APPLY FOR AN IAESTE INTERNSHIP
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              3 simple steps and you're good to go!
            </p>
          </motion.div>

          {/* Stepper Component */}
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(`Step ${step}`);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <div className="text-center py-1">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-[#003F68]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Click on "Join Membership"
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  You will get to see it in the starting of the website. Look for the "Join Membership" button in the navigation bar at the top of the page.
                </p>
              </div>
            </Step>
            <Step>
              <div className="text-center py-1">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-[#003F68]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Pay the Membership Fee
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Submit the fee through our secure online payment portal. Choose between INSTATION (₹2,900) or OUTSTATION (₹2,000) membership based on your university.
                </p>
              </div>
            </Step>
            <Step>
              <div className="text-center py-1">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-[#003F68]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#003F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Get Full Access
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  Receive access to all the internship offers and application forms. Start exploring international opportunities and apply for internships that match your skills and interests.
                </p>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>

      {/* Statistics Charts Section */}
      <StatisticsCharts />

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8 sm:mb-10"
          >
            <p className="text-sm font-semibold text-[#003F68] uppercase tracking-wide">Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">What Our Students Say</h2>
            <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              Real experiences from students who have transformed their careers through IAESTE internships.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                id: 1,
                name: "Adnan Ayman",
                location: "Palestine",
                testimonial: "India was not just a training destination for me, but a journey that changed my life. Living far from home taught me independence, patience, and the ability to face challenges with confidence.",
                image: "https://www.iaestelcjecrc.com/assets/img/avatars/Adnan1.jpeg",
                type: "Incoming"
              },
              {
                id: 2,
                name: "Homa Ramezani",
                location: "Iran",
                testimonial: "I spent about 6 weeks at JECRC University in Jaipur. Besides working on projects, I had the chance to travel to different cities in India and enjoy the beauty of this AMAZING country.",
                image: "https://www.iaestelcjecrc.com/assets/img/avatars/Homa.jpeg",
                type: "Incoming"
              },
              {
                id: 3,
                name: "Vikram Singh",
                location: "Jaipur, India",
                testimonial: "I completed a remote IAESTE internship with IAESTE Burundi, focusing on Full Stack Web Development. This experience was truly enriching and one of the most rewarding chapters of my journey.",
                image: "https://www.iaestelcjecrc.com/assets/img/avatars/Vikram.jpeg",
                type: "Outgoing"
              },
              {
                id: 4,
                name: "Emna",
                location: "Tunisia",
                testimonial: "My IAESTE journey at JECRC University, Jaipur, was transformative, blending vibrant culture with unparalleled technical learning. The friendships and connections made here feel like family.",
                image: "https://www.iaestelcjecrc.com/assets/img/avatars/emna.jpg",
                type: "Incoming"
              },
              {
                id: 5,
                name: "Aaditya Mittal",
                location: "Jaipur, India",
                testimonial: "My internship at the Iran Institute of Science & Technology was an enriching experience that strengthened my academic and personal growth. I gained real research exposure and technical skills.",
                image: "https://www.iaestelcjecrc.com/assets/img/avatars/Aaditya.jpeg",
                type: "Outgoing"
              },
              {
                id: 6,
                name: "Tasuku Nagata",
                location: "Japan",
                testimonial: "This internship started as a short summer project but turned into a great opportunity to consolidate my knowledge and work with machine learning techniques for the first time.",
                image: "https://www.iaestelcjecrc.com/assets/img/avatars/Tasuku.jpeg",
                type: "Incoming"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 12px 25px -10px rgba(0, 0, 0, 0.18)'
                }}
              >
                {/* Quote Icon */}
                <div className="mb-3">
                  <svg className="w-8 h-8 text-[#003F68] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-4 line-clamp-4 font-medium">
                  "{testimonial.testimonial}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#003F68]"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=003F68&color=fff&size=128`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
                    <span className="inline-block mt-1 px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#003F68]/10 text-[#003F68]">
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

