import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Handbook() {
  const [activeBrochure, setActiveBrochure] = useState('beyond-borders');

  const brochures = {
    'beyond-borders': {
      id: 'beyond-borders',
      title: 'Beyond Borders',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      subtitle: 'Understanding the philosophy and global mission of IAESTE.',
      description: 'Beyond Borders shows the apt mission of IAESTE as it connects students with a world of opportunity through visual and narrative elements. In addition to providing valuable experience, international internships also play an important role in how students will view the world and improve their understanding of different cultures. Both past and current IAESTE interns have gone through this transformation and share their experiences in the brochure. The brochure explains how students learn to become true global professionals through developing, collaborating and sharing their expertise around the world. Beyond Borders teaches us that careers and ways of thinking will be successful when boundaries cease to exist.',
      atAGlance: [
        'Global exposure',
        'Cultural exchange',
        'Student growth'
      ],
      whoIsThisFor: [
        'New members',
        'All departments',
        'Prospective interns'
      ],
      whatYoullLearn: [
        'What IAESTE stands for',
        'Why international exposure matters',
        'How students grow globally'
      ],
      whyThisMatters: 'This brochure sets the foundation of IAESTE and builds a global mindset.'
    },
    'incoming': {
      id: 'incoming',
      title: 'Handbook for Incoming',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      subtitle: 'Home Away from Home - Making international interns feel at home in India.',
      description: 'The brochure by the Incoming Department shows that IAESTE LC JECRC provides an experience for international interns which makes them feel at home while they are away from their own country, therefore resonates with the title, "Home Away from Home". The organization manages all aspects of the intern\'s time spent in India, adjusting to the cultural differences in India, and providing the best possible support for the intern\'s health during their entire stay in India.',
      atAGlance: [
        'Cultural immersion',
        'Complete support system',
        'Indian traditions & festivals'
      ],
      whoIsThisFor: [
        'International interns',
        'Incoming department members',
        'Host families'
      ],
      whatYoullLearn: [
        'Hospitality & accommodation',
        'Cross-cultural exchange programs',
        'Indian festivals & regional traditions',
        'Food & daily expressions'
      ],
      whyThisMatters: 'The brochure enables the international intern to make the transition into the local culture seamlessly.'
    },
    'cra': {
      id: 'cra',
      title: 'CRA Department',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      subtitle: 'Corporate Relations & Alumni - Connecting students with global opportunities.',
      description: 'IAESTE connects its members to employers through Corporate Relations & Alumni by establishing partnerships that create internship opportunities for students across the world. They work with organizations to bring interns from different countries into those organizations, allowing students to gain experience that directly meets the needs of that employer. In addition to facilitating internship experiences for students, the alumni network continues to build a legacy of IAESTE by bringing together former members and current interns to support one another\'s initiatives. Together, they ensure that IAESTE\'s commitment to being relevant to industry and maintaining a connection with their alumni continues through global connections.',
      atAGlance: [
        'Industry partnerships',
        'Global opportunities',
        'Alumni network'
      ],
      whoIsThisFor: [
        'Corporate partners',
        'Alumni members',
        'Students seeking internships'
      ],
      whatYoullLearn: [
        'How IAESTE connects students with employers',
        'Partnership establishment process',
        'Alumni network benefits',
        'Industry relevance & connections'
      ],
      whyThisMatters: 'CRA ensures that IAESTE\'s commitment to being relevant to industry and maintaining connections with alumni continues through global networks.'
    }
  };

  const currentBrochure = brochures[activeBrochure];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            HANDBOOK
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Ever wondered if there's a guide to help you out? Don't worry - we've got your back!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar - Brochures Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:w-1/4"
          >
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 sticky top-8">
              <h2 className="text-lg font-bold text-[#003F68] mb-5 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Brochures
              </h2>
              <div className="space-y-2">
                {Object.values(brochures).map((brochure) => (
                  <button
                    key={brochure.id}
                    onClick={() => setActiveBrochure(brochure.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 ${
                      activeBrochure === brochure.id
                        ? 'bg-[#003F68] text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#003F68] border border-transparent hover:border-gray-200'
                    }`}
                  >
                    <span className={`flex-shrink-0 ${activeBrochure === brochure.id ? 'text-white' : 'text-[#003F68]'}`}>
                      {brochure.icon}
                    </span>
                    <span className="text-sm">{brochure.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrochure}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
              >
                {/* Brochure Header */}
                <div className="bg-[#003F68] p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <div className="text-white">
                        {currentBrochure.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-1">
                        {currentBrochure.title}
                      </h2>
                      <p className="text-blue-100 text-sm sm:text-base">
                        {currentBrochure.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Description */}
                  <div className="mb-8">
                    <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#003F68]">
                      <p className="text-gray-800 text-base leading-relaxed">
                        {currentBrochure.description}
                      </p>
                    </div>
                  </div>

                  {/* At a Glance */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#003F68] text-white rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      At a Glance
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentBrochure.atAGlance.map((item, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-[#003F68]/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#003F68] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <p className="text-gray-800 font-semibold text-sm">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Who is this for? */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#003F68] text-white rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      Who is this for?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentBrochure.whoIsThisFor.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-6 h-6 bg-[#003F68] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-800 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What you'll learn? */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#003F68] text-white rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      What you'll learn?
                    </h3>
                    <div className="space-y-2">
                      {currentBrochure.whatYoullLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border-l-4 border-[#003F68] hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-6 h-6 bg-[#003F68] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white font-bold text-xs">{index + 1}</span>
                          </div>
                          <span className="text-gray-800 text-sm font-medium pt-0.5">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why this matters? */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#003F68] text-white rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      Why this matters?
                    </h3>
                    <div className="bg-[#003F68] rounded-lg p-6 text-white">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="text-base leading-relaxed font-medium">
                          {currentBrochure.whyThisMatters}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-[#003F68] rounded-lg p-8 text-center">
                    <p className="text-white text-lg font-semibold mb-6">
                      Curious to know more? Feel free to contact us!
                    </p>
                    <Link
                      to="/contact"
                      className="inline-block bg-white text-[#003F68] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                    >
                      CLICK NOW
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
