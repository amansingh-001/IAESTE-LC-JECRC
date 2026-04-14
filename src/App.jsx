import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import SEOHead from '../components/SEOHead';

// Lazy load heavy components for better code splitting
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Benefits = lazy(() => import('../pages/Benefits'));
const Membership = lazy(() => import('../pages/Membership'));
// const Login = lazy(() => import('../pages/Login'));
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Original loading logic (if any specific one was there, else just the completion)
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <SEOHead />
          <Navbar />
          <div id="main-content" className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/membership" element={<Membership />} />
                {/* <Route path="/login" element={<Login />} /> */}
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
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
