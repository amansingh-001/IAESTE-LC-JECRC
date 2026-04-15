import React, { useEffect, useState, useRef } from 'react';

// Counter animation component - starts when visible in viewport
function AnimatedCounter({ targetValue }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericTarget = parseInt(targetValue.replace(/\D/g, ''));
    let current = 0;
    const step = Math.ceil(numericTarget / 30);

    const timer = setInterval(() => {
      current += step;
      if (current >= numericTarget) {
        setDisplayValue(numericTarget);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return <span ref={counterRef}>{displayValue}</span>;
}

export default function Benefits() {
  const [hoveredCard, setHoveredCard] = useState(null); // 'before', 'after', or null
  const [currentSlide, setCurrentSlide] = useState(0); // For mobile carousel
  const [hoveredStat, setHoveredStat] = useState(null); // Track which stat card is hovered

  // SEO: Update document title and meta tags
  useEffect(() => {
    document.title = "Benefits | IAESTE LC JECRC";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover how IAESTE LC JECRC transforms students through global experiences, professional development, and personal growth. Learn about the benefits of joining our organization.');
    
    // Update or create Open Graph tags
    const ogTags = {
      'og:title': 'Benefits | IAESTE LC JECRC',
      'og:description': 'Discover how IAESTE LC JECRC transforms students through global experiences, professional development, and personal growth.',
      'og:type': 'website',
      'og:url': window.location.href
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Cleanup function to restore original title if needed
    return () => {
      document.title = 'iaestelcjecrc.com';
    };
  }, []);

  // Auto-slide carousel for mobile (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Benefit cards data
  const benefits = [
    {
      id: 1,
      title: "Global Mindset",
      description: "You stop thinking locally and start understanding international cultures, work ethics, and perspectives.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Confidence That Shows",
      description: "From emails to meetings, you learn how to express yourself clearly and professionally.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Real Responsibility",
      description: "You don't just observe - you handle situations, people, tasks, and outcomes.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Personal Growth",
      description: "IAESTE pushes you out of comfort zones and turns challenges into confidence.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Career Clarity",
      description: "Exposure to real working environments helps you decide what you actually want from your career.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Lifelong Network",
      description: "Connections made here don't end after college - they grow across countries and careers.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const beforePoints = [
    "Limited practical exposure beyond classroom learning.",
    "Lack of confidence in professional communication.",
    "Uncertainty about career direction.",
    "Minimal global awareness and industry experience."
  ];

  const afterPoints = [
    "Confident communication and international networking skills.",
    "Broader global perspective and cultural understanding.",
    "Hands-on technical and professional experience.",
    "Clear career direction with real-world industry exposure."
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-[#003F68] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
                Not Just an Organization.<br />
                <span className="text-blue-200">A Personal Transformation.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                IAESTE LC JECRC is where students move beyond classrooms and step into global thinking, real responsibility, and self-belief.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IAESTE students working together"
                  className="relative w-full h-64 md:h-80 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How IAESTE Makes You Ready Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003F68] mb-4">
            How IAESTE makes you ready for the world?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Before Card */}
          <div 
            className="flex-1 w-full"
            onMouseEnter={() => setHoveredCard('before')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`rounded-2xl shadow-xl border-2 p-8 md:p-10 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              hoveredCard === 'before' 
                ? 'bg-gradient-to-br from-[#5A9FD8] to-[#7AB3E8] border-[#5A9FD8]' 
                : hoveredCard === 'after'
                ? 'bg-gray-100 border-gray-200'
                : 'bg-white border-gray-100 hover:border-[#003F68]/30 hover:bg-gray-50'
            }`}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center transition-colors duration-500 ${
                hoveredCard === 'before' ? 'text-white' : 'text-[#003F68]'
              }`}>
                Before IAESTE
              </h3>
              <ul className="space-y-4">
                {beforePoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 transition-colors duration-300 ${
                      hoveredCard === 'before' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-red-100 text-red-600 group-hover:bg-red-200'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${
                      hoveredCard === 'before' ? 'text-white font-medium' : 'text-gray-700'
                    }`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-[#003F68] to-[#005a8f] rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl md:text-2xl">V/S</span>
            </div>
          </div>

          {/* After Card */}
          <div 
            className="flex-1 w-full"
            onMouseEnter={() => setHoveredCard('after')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`rounded-2xl shadow-xl border-2 p-8 md:p-10 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] ${
              hoveredCard === 'after' 
                ? 'bg-gradient-to-br from-[#5A9FD8] to-[#7AB3E8] border-[#5A9FD8]' 
                : hoveredCard === 'before'
                ? 'bg-gray-100 border-gray-200'
                : 'bg-gradient-to-br from-[#003F68] to-[#005a8f] border-transparent hover:bg-gray-50'
            }`}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center transition-colors duration-500 ${
                hoveredCard === 'after' ? 'text-white' : hoveredCard === 'before' ? 'text-[#003F68]' : 'text-white'
              }`}>
                After IAESTE
              </h3>
              <ul className="space-y-4">
                {afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 transition-colors duration-300 ${
                      hoveredCard === 'after' 
                        ? 'bg-white/20 text-white' 
                        : hoveredCard === 'before'
                        ? 'bg-green-100 text-green-600 group-hover:bg-green-200'
                        : 'bg-green-100 text-green-600 group-hover:bg-green-200'
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className={`text-base md:text-lg leading-relaxed transition-colors duration-500 ${
                      hoveredCard === 'after' 
                        ? 'text-white font-medium' 
                        : hoveredCard === 'before'
                        ? 'text-gray-700'
                        : 'text-white font-medium'
                    }`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What IAESTE Gives You Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003F68] mb-4">
            What IAESTE Gives You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the transformative benefits that come with being part of IAESTE LC JECRC
          </p>
        </div>

        {/* Desktop 3x2 Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] overflow-hidden flex flex-col items-center text-center"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003F68]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[#003F68] to-[#005a8f] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#003F68] mb-4 group-hover:text-[#005a8f] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#003F68]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Vertical 1x3 format */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* First 3 cards - Vertical Stack */}
            <div className="min-w-full flex flex-col gap-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="group relative bg-white rounded-xl shadow-lg border border-gray-100 p-5 transform transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="relative mb-4 transform group-hover:scale-110 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#003F68] to-[#005a8f] rounded-lg flex items-center justify-center text-white shadow-md">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-base font-bold text-[#003F68] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next 3 cards - Vertical Stack */}
            <div className="min-w-full flex flex-col gap-4">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="group relative bg-white rounded-xl shadow-lg border border-gray-100 p-5 transform transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="relative mb-4 transform group-hover:scale-110 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#003F68] to-[#005a8f] rounded-lg flex items-center justify-center text-white shadow-md">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-base font-bold text-[#003F68] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === 0 ? 'bg-[#003F68] w-8' : 'bg-gray-300'
              }`}
              aria-label="Go to slide 1"
            />
            <button
              onClick={() => setCurrentSlide(1)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === 1 ? 'bg-[#003F68] w-8' : 'bg-gray-300'
              }`}
              aria-label="Go to slide 2"
            />
          </div>
        </div>

      </section>

      {/* Statistics Creative Section - Zigzag with Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="relative">
          {/* Timeline line - appears on hover */}
          <div 
            className={`hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-[#003F68] transform -translate-y-1/2 transition-opacity duration-500 ${
              hoveredStat !== null ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: 1 }}
          ></div>

          {/* Statistics Cards - Zigzag Layout */}
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { 
                value: "100+", 
                label: "Countries Connected",
                icon: "🌍",
                position: "top",
                hasCounter: true
              },
              { 
                value: "90+", 
                label: "Outgoing Students Transformed",
                icon: "🎓",
                position: "bottom",
                hasCounter: true
              },
              { 
                value: "220+", 
                label: "Experiences Created",
                icon: "✨",
                position: "top",
                hasCounter: true
              },
              { 
                value: "∞", 
                label: "Growth Potential",
                icon: "🚀",
                position: "bottom",
                hasCounter: false
              }
            ].map((stat, index) => (
              <div
                key={index}
                className={`relative group ${
                  stat.position === 'top' ? 'md:mt-0' : 'md:mt-16'
                }`}
                onMouseEnter={() => setHoveredStat(index)}
              >
                {/* Connection line to timeline - hidden for first and third cards */}
                {index !== 0 && index !== 2 && (
                  <div 
                    className={`hidden md:block absolute left-1/2 w-0.5 h-16 bg-[#003F68] transition-opacity duration-500 ${
                      hoveredStat !== null ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      top: stat.position === 'top' ? 'auto' : '50%',
                      bottom: stat.position === 'top' ? '50%' : 'auto',
                      transform: stat.position === 'top' 
                        ? 'translateX(-50%) translateY(100%)' 
                        : 'translateX(-50%) translateY(-50%)',
                      zIndex: 2
                    }}
                  ></div>
                )}

                {/* Card with creative design - Reduced Size */}
                <div className="relative bg-white rounded-xl shadow-md p-4 md:p-6 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 border border-gray-200 overflow-hidden text-center md:text-left" style={{ zIndex: 3 }}>
                  
                  {/* Icon */}
                  <div className="text-3xl md:text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex justify-center md:justify-start">
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#003F68] mb-1 group-hover:text-[#005a8f] transition-colors duration-300">
                      {stat.hasCounter ? (
                        <>
                          <AnimatedCounter targetValue={stat.value} />
                          {stat.value.replace(/\d+/g, '')}
                        </>
                      ) : stat.value}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How IAESTE Prepares You for the Global Stage */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003F68] mb-6 text-left md:text-center">
            How IAESTE Prepares You
            for the Global Stage
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-left md:text-center">
            IAESTE helps you grow from a classroom learner into a globally ready professional.
          </p>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
            <ul className="space-y-4 md:space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">
              <li>• Builds practical skills that go beyond classroom learning.</li>
              <li>• Offers international exposure and real professional experience.</li>
              <li>• Develops strong communication and teamwork abilities.</li>
              <li>• Encourages leadership through hands-on responsibilities.</li>
              <li>• Enhances cultural awareness and a global mindset.</li>
              <li>• Bridges the gap between academics and the workplace.</li>
              <li>• Prepares students to adapt, grow, and succeed in a global environment.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Begin Your Growth Story */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 bg-white">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl transform -translate-x-20 translate-y-20"></div>

          <div className="relative z-10 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003F68] mb-6 leading-tight">
              IAESTE for All
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              IAESTE LC JECRC is for everyone - especially those who are ready to grow, learn, and challenge themselves.
            </p>

            {/* CTA Button */}
            <a
              href="/membership"
              className="inline-block bg-gradient-to-r from-[#003F68] to-[#005a8f] hover:from-[#002d4d] hover:to-[#00457a] text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
            >
              Start Your IAESTE Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
