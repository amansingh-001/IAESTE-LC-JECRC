import React from 'react';
import TeamGrid from '../components/TeamGrid';
import FAQAccordion from '../components/FAQAccordion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003F68] to-[#005a8f] text-white py-16 sm:py-20 lg:py-24" aria-labelledby="about-hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl font-sans">
            <h1 id="about-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              About IAESTE LC JECRC
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95">
              IAESTE LC JECRC is the local committee of IAESTE at JECRC University. We are dedicated to providing students with life-changing international internship opportunities, fostering cultural exchange, and building a global network of professionals.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-white/95 mt-4">
              Our mission is to empower students through technical experience, cultural immersion, and professional development, creating leaders who are ready to make a difference in the global community.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" aria-labelledby="benefits-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <p className="text-sm font-semibold text-[#003F68] uppercase tracking-wide">Why IAESTE</p>
            <h2 id="benefits-title" className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Benefits of Joining</h2>
            <p className="text-base sm:text-lg text-gray-600 mt-3">
              From hands-on international exposure to a strong professional network, IAESTE helps you grow faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Global Internships',
                desc: 'Access technical internships in 80+ countries with trusted hosts.',
              },
              {
                title: 'Career Boost',
                desc: 'Stand out with real-world projects, references, and practical experience.',
              },
              {
                title: 'Cultural Exchange',
                desc: 'Work and live abroad, build cross-cultural skills and confidence.',
              },
              {
                title: 'Mentorship & Support',
                desc: 'Guidance on applications, documents, and interview prep from our team.',
              },
              {
                title: 'Networking',
                desc: 'Connect with IAESTE alumni, industry mentors, and global peers.',
              },
              {
                title: 'Campus Leadership',
                desc: 'Lead events, manage projects, and develop team skills within the LC.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#003F68]/10 text-[#003F68] font-bold mb-4" aria-hidden="true">
                  +
                </div>
                <h3 className="text-xl font-bold text-[#003F68]">{benefit.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section aria-labelledby="team-section-title">
        <h2 id="team-section-title" className="sr-only">Our Team</h2>
        <TeamGrid />
      </section>

      {/* FAQ Section */}
      <section aria-labelledby="faq-section-title">
        <h2 id="faq-section-title" className="sr-only">Frequently Asked Questions</h2>
        <FAQAccordion />
      </section>
    </div>
  );
}


