import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEOHead - Updates document head meta tags and structured data for each route.
 * This component handles dynamic title, description, Open Graph tags, 
 * and JSON-LD schema markup to maximize SEO performance.
 */

const SEO_DATA = {
  '/': {
    title: 'IAESTE LC JECRC | International Internships & Student Exchange Programs',
    description: 'IAESTE LC JECRC provides paid international technical internships for students at JECRC University, Jaipur. Gain global work experience in 100+ countries.',
    keywords: 'IAESTE, IAESTE JECRC, international internships, student exchange, JECRC University, paid internships abroad, technical internships India',
  },
  '/about': {
    title: 'About Us | IAESTE LC JECRC - Our Mission & Vision',
    description: 'Learn about IAESTE LC JECRC, the local committee at JECRC University dedicated to empowering students through international exchange programs and professional development.',
    keywords: 'about IAESTE JECRC, IAESTE mission, student organization JECRC, international exchange JECRC University',
  },
  '/benefits': {
    title: 'Benefits of Joining IAESTE | Career Growth & Global Exposure',
    description: 'Discover how IAESTE LC JECRC transforms students through global experiences, professional development, career growth, and personal transformation.',
    keywords: 'IAESTE benefits, career development, global exposure, student internship benefits, professional growth international',
  },
  '/membership': {
    title: 'Join IAESTE Membership | IAESTE LC JECRC - Apply Now',
    description: 'Become a member of IAESTE LC JECRC in just 2 minutes. Access exclusive international internships, workshops, and cultural exchange programs.',
    keywords: 'IAESTE membership, join IAESTE, IAESTE registration, student membership JECRC, internship access',
  },
  '/employers': {
    title: 'Hire Global Talent | IAESTE LC JECRC - Employer Solutions',
    description: 'Hire pre-evaluated international talent from 100+ countries through IAESTE. Zero agency fees, end-to-end visa and onboarding support for employers.',
    keywords: 'hire international interns, IAESTE employers, global talent hiring, international student internships employer',
  },
  '/department': {
    title: 'Our Departments | IAESTE LC JECRC - Organizational Structure',
    description: 'Explore the departments of IAESTE LC JECRC - from technical and corporate to cultural and administrative teams working together for student success.',
    keywords: 'IAESTE departments, IAESTE JECRC teams, student organization structure',
  },
  '/team': {
    title: 'Meet Our Team | IAESTE LC JECRC - Student Leaders',
    description: 'Meet the dedicated student leaders and team members of IAESTE LC JECRC who work tirelessly to create international opportunities for students.',
    keywords: 'IAESTE team, IAESTE JECRC members, student leaders JECRC',
  },
  '/gallery': {
    title: 'Photo Gallery | IAESTE LC JECRC - Events & Memories',
    description: 'Browse through the photo gallery of IAESTE LC JECRC events, cultural programs, internship experiences, and memorable moments.',
    keywords: 'IAESTE gallery, IAESTE events photos, JECRC events, student exchange photos',
  },
  '/brochure': {
    title: 'Brochure | IAESTE LC JECRC - Download Our Brochure',
    description: 'Download the official IAESTE LC JECRC brochure with complete information about membership, internships, and how to apply.',
    keywords: 'IAESTE brochure, IAESTE JECRC brochure, internship brochure download',
  },
  '/handbook': {
    title: 'Student Handbook | IAESTE LC JECRC - Complete Guide',
    description: 'Access the comprehensive IAESTE LC JECRC student handbook with everything you need to know about internships, applications, and preparation.',
    keywords: 'IAESTE handbook, student guide, internship preparation guide, IAESTE application guide',
  },
  '/faq': {
    title: 'FAQ | IAESTE LC JECRC - Frequently Asked Questions',
    description: 'Find answers to common questions about IAESTE internships, membership, application process, eligibility, and more at IAESTE LC JECRC.',
    keywords: 'IAESTE FAQ, internship questions, IAESTE eligibility, how to apply IAESTE, IAESTE membership FAQ',
  },
  '/contact': {
    title: 'Contact Us | IAESTE LC JECRC - Get In Touch',
    description: 'Contact IAESTE LC JECRC at JECRC University, Jaipur. Reach us via email, phone, or visit our office for internship inquiries and membership support.',
    keywords: 'contact IAESTE JECRC, IAESTE JECRC address, IAESTE phone number, IAESTE email',
  },
  '/testimonials/outgoing': {
    title: 'Outgoing Student Testimonials | IAESTE LC JECRC Success Stories',
    description: 'Read success stories from JECRC University students who completed international IAESTE internships abroad and transformed their careers.',
    keywords: 'IAESTE testimonials, outgoing intern stories, international internship experience, student success stories JECRC',
  },
  '/testimonials/incoming': {
    title: 'Incoming Intern Testimonials | IAESTE LC JECRC Experiences',
    description: 'Discover experiences of international students who completed their IAESTE internships at JECRC University, Jaipur, India.',
    keywords: 'incoming intern testimonials, international students JECRC, IAESTE India experience, Jaipur internship stories',
  },
  '/join': {
    title: 'Join IAESTE | IAESTE LC JECRC - Start Your Journey',
    description: 'Start your international journey with IAESTE LC JECRC. Join now and access global internship opportunities in 100+ countries.',
    keywords: 'join IAESTE, IAESTE application, start internship journey, IAESTE JECRC join',
  },
  '/register': {
    title: 'Register | IAESTE LC JECRC - Create Your Account',
    description: 'Register with IAESTE LC JECRC to access international internship opportunities, events, and exclusive member resources.',
    keywords: 'IAESTE register, create account IAESTE, IAESTE JECRC registration',
  },
};

const DEFAULT_SEO = {
  title: 'IAESTE LC JECRC | International Internships & Student Exchange',
  description: 'IAESTE LC JECRC provides paid international technical internships for students. Gain global work experience in 100+ countries.',
  keywords: 'IAESTE, IAESTE JECRC, international internships, student exchange',
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const seo = SEO_DATA[location.pathname] || DEFAULT_SEO;
    const currentUrl = `https://www.iaestelcjecrc.com${location.pathname}`;

    // 1. Update title
    document.title = seo.title;

    // 2. Helper to update or create meta tags
    const setMeta = (attr, attrValue, content) => {
      let tag = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords);

    // Open Graph
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:type', 'website');

    // Twitter Card
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);

    // 3. Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // 4. Update Schema Markup (JSON-LD)
    const updateSchema = (id, data) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    };

    // BreadcrumbList Schema
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.iaestelcjecrc.com/"
        },
        ...pathSegments.map((segment, index) => ({
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          "item": `https://www.iaestelcjecrc.com/${pathSegments.slice(0, index + 1).join('/')}`
        }))
      ]
    };
    updateSchema('breadcrumb-schema', breadcrumbList);

    // FAQ Schema (Only for /faq route)
    if (location.pathname === '/faq') {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is IAESTE LC JECRC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IAESTE LC JECRC is the local committee at JECRC University that provides paid international technical internships for students in 100+ countries."
            }
          },
          {
            "@type": "Question",
            "name": "How can I join IAESTE JECRC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Students can join by registering on our website and paying the membership fee for INSTATION or OUTSTATION categories."
            }
          }
          // Additional FAQ items can be added here
        ]
      };
      updateSchema('faq-schema', faqSchema);
    } else {
      // Remove FAQ schema if not on FAQ page
      const faqScript = document.getElementById('faq-schema');
      if (faqScript) faqScript.remove();
    }

    // 5. Scroll to top on route change for better UX
    window.scrollTo({ top: 0, behavior: 'instant' });

  }, [location.pathname]);

  return null;
}
