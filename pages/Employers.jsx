import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmployerHireSection from '../components/EmployerHireSection';

export default function Employers() {
  const [activeTab, setActiveTab] = useState('incoming');

  const incomingTestimonials = [
    {
      id: 1,
      name: "Adnan Ayman",
      location: "Palestine",
      testimonial: "India was not just a training destination for me, but a journey that changed my life. Living far from home taught me independence, patience, and the ability to face challenges with confidence.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Adnan1.jpeg"
    },
    {
      id: 2,
      name: "Homa Ramezani",
      location: "Iran",
      testimonial: "I spent about 6 weeks at JECRC University in Jaipur. The beautiful temples, spicy food and incredible nature were a truly special experience. IAESTE members support made this dream reality.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Homa.jpeg"
    },
    {
      id: 3,
      name: "Tasuku Nagata",
      location: "Japan",
      testimonial: "This internship was a great opportunity to consolidate my knowledge, including network protocols and inter-process communication. I developed an application involving machine learning for the first time.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Tasuku.jpeg"
    }
  ];

  const outgoingTestimonials = [
    {
      id: 1,
      name: "Vikram Saini",
      location: "Jaipur, India",
      testimonial: "I completed a remote IAESTE internship with IAESTE Burundi. I developed a website using React, Tailwind CSS, and Node.js, which enhanced my technical expertise and understanding of global work culture.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Vikram.jpeg"
    },
    {
      id: 2,
      name: "Priyansh Singh",
      location: "Jaipur, India",
      testimonial: "My internship with Universidad Santo Tomás, Colombia was highly enriching. I worked on smart-tourism projects, creating 3D character models and WebAR prototypes using Blender and 8th Wall.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Priyansh.jpeg"
    },
    {
      id: 3,
      name: "Nakul Kandira",
      location: "Jaipur, India",
      testimonial: "I worked on an AI and Machine Learning project focused on drug discovery. Along with professional learning, I explored beautiful places like Rio de Janeiro, experiencing the vibrant culture of Brazil.",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Nakul.jpeg"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#0B3D59] selection:text-white">
      {/* 🚀 Premium Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-12 overflow-hidden bg-[#002B45]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,61,89,0.2),transparent)] pointer-events-none" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full pointer-events-none"
        />

        <div className="max-w-[10 00px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-500 text-white text-[10px] md:text-xs font-black px-4 py-2 rounded-full uppercase tracking-[0.4em] mb-8 inline-block shadow-2xl shadow-blue-500/20"
            >
              Enterprise Solutions
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Hire Global <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Talent</span>
            </h1>

            <p className="max-w-3xl mx-auto text-blue-100/60 text-sm md:text-xl font-bold uppercase tracking-[0.2em] leading-relaxed">
              Scale your organization with the best young minds from over 100+ countries.
            </p>
          </motion.div>
        </div>


      </section>

      {/* 🛠️ Dynamic Process Section */}
      <EmployerHireSection />

      {/* ⭐ Global Testimonials Section */}
      <section className="bg-[#F8FAFC] py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(11,61,89,0.03),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#003F68] uppercase tracking-tighter mb-4">
              Legacy of <span className="text-blue-500">Success</span>
            </h2>
            <div className="w-32 h-2 bg-[#003F68] mx-auto rounded-full" />
          </motion.div>

          {/* Testimonial Tabs */}
          <div className="flex justify-center gap-4 mb-16">
            {['incoming', 'outgoing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                  ? "bg-[#003F68] text-white shadow-2xl shadow-[#003F68]/30 scale-105"
                  : "bg-white text-[#003F68]/40 border border-[#003F68]/10 hover:bg-[#003F68]/5"
                  }`}
              >
                {tab === 'incoming' ? 'Incoming Interns' : 'Outgoing Interns'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {(activeTab === 'incoming' ? incomingTestimonials : outgoingTestimonials).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-[#003F68]/5 border border-gray-50 flex flex-col h-full group"
                >
                  <div className="mb-10 relative">
                    <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-all duration-700">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.813a1 1 0 00-.454-.394 1 1 0 00-.454.394l-5.384 9.14a1 1 0 001.373 1.341l.983-.41V16a1 1 0 001 1h4a1 1 0 001-1v-3.111l.983.41a1 1 0 001.373-1.341l-5.384-9.14z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-500 font-bold text-lg leading-relaxed italic mb-8 flex-1">
                    "{testimonial.testimonial}"
                  </p>

                  <div className="pt-8 border-t border-gray-50">
                    <h3 className="text-xl font-black text-[#003F68] uppercase tracking-tight">{testimonial.name}</h3>
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] mt-1">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 💎 Why IAESTE - Feature Grid */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "100+", label: "Countries Connected", desc: "Access students from a truly global talent pool." },
              { val: "0₹", label: "No Agency Fees", desc: "Cost-effective international hiring with zero middleman." },
              { val: "PRE", label: "Evaluated Talent", desc: "Only verified and nominated candidates from top unis." },
              { val: "END", label: "End-to-End Support", desc: "From visa guidance to onboarding and stipends." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-white border-2 border-gray-50 hover:border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-6xl font-black text-[#003F68]/5 group-hover:text-blue-500/10 transition-colors mb-4">{feature.val}</div>
                <h3 className="text-xl font-black text-[#003F68] uppercase tracking-tight mb-3">{feature.label}</h3>
                <p className="text-gray-400 font-bold leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
