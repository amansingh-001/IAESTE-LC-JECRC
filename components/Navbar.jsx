import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../src/assets/logos/Iaeste Logo Standard.png';

export default function Navbar() {
  // ==================== STATE MANAGEMENT ====================
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);
  const [departmentDropdown, setDepartmentDropdown] = useState(false);
  const [statsDropdown, setStatsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutMobileDropdown, setAboutMobileDropdown] = useState(false);
  const [galleryMobileDropdown, setGalleryMobileDropdown] = useState(false);
  const [departmentMobileDropdown, setDepartmentMobileDropdown] = useState(false);
  const [statsMobileDropdown, setStatsMobileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const aboutTimeoutRef = useRef(null);
  const galleryTimeoutRef = useRef(null);
  const departmentTimeoutRef = useRef(null);
  const statsTimeoutRef = useRef(null);

  // ==================== EFFECTS ====================
  // Handle scroll effect for navbar shadow (throttled for performance)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
      if (departmentTimeoutRef.current) clearTimeout(departmentTimeoutRef.current);
      if (statsTimeoutRef.current) clearTimeout(statsTimeoutRef.current);
    };
  }, []);

  // ==================== HELPER FUNCTIONS ====================
  const closeAllDropdowns = () => {
    setAboutDropdown(false);
    setGalleryDropdown(false);
    setDepartmentDropdown(false);
    setStatsDropdown(false);
    // Clear all timeouts
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
    if (departmentTimeoutRef.current) clearTimeout(departmentTimeoutRef.current);
    if (statsTimeoutRef.current) clearTimeout(statsTimeoutRef.current);
  };

  const handleDropdownEnter = (setDropdown, timeoutRef) => {
    // Close all other dropdowns first
    closeAllDropdowns();
    // Clear timeout if exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Open the current dropdown
    setDropdown(true);
  };

  const handleDropdownLeave = (setDropdown, timeoutRef) => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
      timeoutRef.current = null;
    }, 300);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setAboutMobileDropdown(false);
    setGalleryMobileDropdown(false);
    setDepartmentMobileDropdown(false);
    setStatsMobileDropdown(false);
  };

  // ==================== REUSABLE COMPONENTS ====================
  // Navigation Link Component
  const NavItem = ({ to, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`relative text-gray-700 hover:text-[#003F68] transition-all duration-300 font-semibold text-base lg:text-lg ${isActive ? 'text-[#003F68]' : ''
          }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#003F68] animate-fade-in-down"></span>
        )}
      </Link>
    );
  };

  // Dropdown Arrow Icon
  const DropdownArrow = ({ isOpen }) => (
    <svg
      className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Desktop Dropdown Component
  const DesktopDropdown = ({
    isOpen,
    setIsOpen,
    timeoutRef,
    buttonLabel,
    children
  }) => (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => handleDropdownEnter(setIsOpen, timeoutRef)}
      onMouseLeave={() => handleDropdownLeave(setIsOpen, timeoutRef)}
    >
      <button className="flex items-center text-gray-700 hover:text-[#003F68] transition-all duration-300 font-semibold text-base lg:text-lg focus:outline-none">
        {buttonLabel}
        <DropdownArrow isOpen={isOpen} />
      </button>

      {isOpen && (
        <>
          <div className="absolute top-full left-0 w-full h-2"></div>
          <div
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in-down overflow-hidden z-50"
            onMouseEnter={() => handleDropdownEnter(setIsOpen, timeoutRef)}
            onMouseLeave={() => handleDropdownLeave(setIsOpen, timeoutRef)}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );

  // Dropdown Link Item
  const DropdownLink = ({ to, children }) => (
    <Link
      to={to}
      className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#003F68] hover:pl-6 transition-all duration-300 rounded-md"
    >
      {children}
    </Link>
  );

  // Mobile Menu Link Component
  const MobileNavLink = ({ to, icon, children, onClick }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 mb-2 ${isActive
          ? 'bg-gradient-to-r from-[#003F68]/10 to-[#003F68]/5 text-[#003F68] shadow-sm'
          : 'text-gray-700 hover:bg-gray-50/80 hover:text-[#003F68]'
          }`}
      >
        {icon && <span className="mr-3">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  };

  // Mobile Dropdown Component
  const MobileDropdown = ({
    isOpen,
    setIsOpen,
    label,
    icon,
    children
  }) => (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 ${isOpen
          ? 'bg-gradient-to-r from-[#003F68]/10 to-[#003F68]/5 text-[#003F68] shadow-sm'
          : 'text-gray-700 hover:bg-gray-50/80 hover:text-[#003F68]'
          }`}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span>{label}</span>
        </div>
        <DropdownArrow isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-1.5 pl-8 animate-fade-in-down">
          {children}
        </div>
      )}
    </div>
  );

  // Mobile Dropdown Link
  const MobileDropdownLink = ({ to, children, onClick }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
          ? 'bg-[#003F68]/10 text-[#003F68]'
          : 'text-gray-600 hover:bg-[#003F68]/5 hover:text-[#003F68]'
          }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#003F68] mr-3"></span>
        {children}
      </Link>
    );
  };

  // ==================== ICONS ====================
  const InfoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const BuildingIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const ChatIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  );

  const GalleryIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const HomeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );

  const HamburgerIcon = ({ isOpen }) => (
    <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );

  // ==================== RENDER ====================
  return (
    <nav className={`bg-white border-b-2 border-gray-300 sticky top-0 z-50 font-sans transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center group -ml-8 lg:-ml-12">
            <img
              src={logo}
              alt="IAESTE Logo"
              width="200"
              height="80"
              className="h-20 w-auto object-contain group-hover:scale-105 transition-all duration-300 ease-out"
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavItem to="/" label="Home" />

            <DesktopDropdown
              isOpen={aboutDropdown}
              setIsOpen={setAboutDropdown}
              timeoutRef={aboutTimeoutRef}
              buttonLabel="About"
            >
              <DropdownLink to="/benefits">Benefits</DropdownLink>
              <DropdownLink to="/faq">FAQ</DropdownLink>
              <DropdownLink to="/contact">Contact</DropdownLink>
            </DesktopDropdown>

            <DesktopDropdown
              isOpen={galleryDropdown}
              setIsOpen={setGalleryDropdown}
              timeoutRef={galleryTimeoutRef}
              buttonLabel="Gallery"
            >
              <DropdownLink to="/gallery">Gallery</DropdownLink>
              <DropdownLink to="/brochure">Brochure</DropdownLink>
            </DesktopDropdown>

            <NavItem to="/employers" label="Employers" />

            <DesktopDropdown
              isOpen={departmentDropdown}
              setIsOpen={setDepartmentDropdown}
              timeoutRef={departmentTimeoutRef}
              buttonLabel="Departments"
            >
              <DropdownLink to="/department">Departments</DropdownLink>
              <DropdownLink to="/team">Team</DropdownLink>
            </DesktopDropdown>

            <DesktopDropdown
              isOpen={statsDropdown}
              setIsOpen={setStatsDropdown}
              timeoutRef={statsTimeoutRef}
              buttonLabel="Stats"
            >
              <DropdownLink to="/testimonials/outgoing">Outgoing</DropdownLink>
              <DropdownLink to="/testimonials/incoming">Incoming</DropdownLink>
            </DesktopDropdown>
          </div>

          {/* Login and Join Membership Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 ml-6 -mr-8 lg:-mr-12">
              <a
                href="https://member.iaestelcjecrc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative border-2 border-[#003F68] text-[#003F68] bg-transparent px-6 py-2.5 rounded-md hover:bg-[#003F68]/5 transition-all duration-300 shadow-md hover:shadow-xl font-semibold text-base tracking-wide transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
              </a>
          
            <Link
              to="/membership"
              className="relative bg-[#003F68] text-white px-6 py-2.5 rounded-md hover:bg-[#003F68] transition-all duration-300 shadow-md hover:shadow-xl font-semibold text-base tracking-wide transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Avail Membership</span>
              <span className="absolute inset-0 bg-[#003F68] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#003F68] focus:outline-none p-2 transition-all duration-300 hover:scale-110"
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-20"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Slide-in Menu */}
      <div className={`md:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex flex-col h-full overflow-y-auto bg-gradient-to-b from-white via-gray-50/30 to-white">
          <div className="flex-1 px-3 py-6">
            <MobileNavLink
              to="/"
              icon={<HomeIcon />}
              onClick={closeMobileMenu}
            >
              Home
            </MobileNavLink>

            <MobileDropdown
              isOpen={aboutMobileDropdown}
              setIsOpen={setAboutMobileDropdown}
              label="About"
              icon={<InfoIcon />}
            >
              <MobileDropdownLink to="/benefits" onClick={closeMobileMenu}>Benefits</MobileDropdownLink>
              <MobileDropdownLink to="/faq" onClick={closeMobileMenu}>FAQ</MobileDropdownLink>
              <MobileDropdownLink to="/contact" onClick={closeMobileMenu}>Contact</MobileDropdownLink>
            </MobileDropdown>

            <MobileDropdown
              isOpen={galleryMobileDropdown}
              setIsOpen={setGalleryMobileDropdown}
              label="Gallery"
              icon={<GalleryIcon />}
            >
              <MobileDropdownLink to="/gallery" onClick={closeMobileMenu}>Gallery</MobileDropdownLink>
              <MobileDropdownLink to="/brochure" onClick={closeMobileMenu}>Brochure</MobileDropdownLink>
            </MobileDropdown>

            <MobileNavLink to="/employers" icon={<UsersIcon />} onClick={closeMobileMenu}>
              Employers
            </MobileNavLink>

            <MobileDropdown
              isOpen={departmentMobileDropdown}
              setIsOpen={setDepartmentMobileDropdown}
              label="Departments"
              icon={<BuildingIcon />}
            >
              <MobileDropdownLink to="/department" onClick={closeMobileMenu}>Departments</MobileDropdownLink>
              <MobileDropdownLink to="/team" onClick={closeMobileMenu}>Team</MobileDropdownLink>
            </MobileDropdown>

            <MobileDropdown
              isOpen={statsMobileDropdown}
              setIsOpen={setStatsMobileDropdown}
              label="Stats"
              icon={<ChatIcon />}
            >
              <MobileDropdownLink to="/testimonials/outgoing" onClick={closeMobileMenu}>Outgoing</MobileDropdownLink>
              <MobileDropdownLink to="/testimonials/incoming" onClick={closeMobileMenu}>Incoming</MobileDropdownLink>
            </MobileDropdown>
          </div>

          {/* Login and Join Membership Buttons - Fixed at Bottom */}
          <div className="p-5 pt-3 border-t border-gray-200/80 bg-gradient-to-b from-white via-gray-50/50 to-white backdrop-blur-sm flex gap-3">
            <a
                href="https://member.iaestelcjecrc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative border-2 border-[#003F68] text-[#003F68] bg-transparent px-6 py-2.5 rounded-md hover:bg-[#003F68]/5 transition-all duration-300 shadow-md hover:shadow-xl font-semibold text-base tracking-wide transform hover:-translate-y-1 hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
              </a>
            <Link
              to="/membership"
              onClick={closeMobileMenu}
              className="group relative flex-1 text-center bg-[#003F68] text-white px-4 py-4 rounded-xl font-bold text-base hover:bg-[#003F68] active:scale-[0.98] transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <CheckIcon />
                <span className="ml-2">Avail Membership</span>
              </span>
              <span className="absolute inset-0 bg-[#003F68] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
