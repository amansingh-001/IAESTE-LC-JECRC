import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

// Lazy load heavy components for better code splitting
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Benefits = lazy(() => import('../pages/Benefits'));
const Membership = lazy(() => import('../pages/Membership'));
const Register = lazy(() => import('../pages/Register'));
const Department = lazy(() => import('../pages/Department'));
const Team = lazy(() => import('../pages/Team'));
const Join = lazy(() => import('../pages/Join'));
const Outgoing = lazy(() => import('../pages/Outgoing'));
const Incoming = lazy(() => import('../pages/Incoming'));
const Gallery = lazy(() => import('../pages/Gallery'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));
const Brochure = lazy(() => import('../pages/Brochure'));
const Handbook = lazy(() => import('../pages/Handbook'));
const Employers = lazy(() => import('../pages/Employers'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#003F68]"></div>
  </div>
);

export default function App() {
  // Check if page was restored from bfcache
  const [isLoading, setIsLoading] = useState(() => {
    // Skip loading screen if restored from bfcache
    return !window.performance?.getEntriesByType('navigation')[0]?.type?.includes('back_forward');
  });

  useEffect(() => {
    // Handle page restoration from bfcache
    const handlePageShow = (e) => {
      if (e.persisted) {
        // Page was restored from bfcache, skip loading screen
        setIsLoading(false);
      }
    };

    // Handle page unload - don't prevent bfcache
    const handlePageHide = (e) => {
      // Allow page to be cached
      if (!e.persisted) {
        // Page is being unloaded normally
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/register" element={<Register />} />
              <Route path="/department" element={<Department />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/handbook" element={<Handbook />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/testimonials/outgoing" element={<Outgoing />} />
              <Route path="/testimonials/incoming" element={<Incoming />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
}
