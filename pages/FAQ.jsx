import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqsData = [
    {
        category: "Internships",
        question: "What are AGC offers?",
        answer: "AGC offers exclusive internships tailored specifically for JECRC students through IAESTE LC JECRC. With less competition, these opportunities significantly enhance your chances of selection, offering a fantastic way to gain practical experience."
    },
    {
        category: "Preparation",
        question: "What technical skills should students develop before applying for internships?",
        answer: "Students should build strong branch-specific knowledge along with essential technical tools. For example, Mechanical students can focus on AutoCAD or SolidWorks, Computer Science students on Python or MATLAB, and Chemical/Biotech students on laboratory techniques. Strong communication and teamwork skills are equally important for success in international environments."
    },
    {
        category: "Application",
        question: "How do I apply for an IAESTE internship?",
        answer: "Become an IAESTE member to unlock exclusive opportunities. Follow the detailed application instructions shared in the IAESTE LC JECRC members’ group. For further assistance, you can contact the Head of Administration."
    },
    {
        category: "Application",
        question: "Can I apply for multiple offers or receive more than one internship?",
        answer: "Yes, students can apply for multiple offers and rank their preferences. If selected for more than one opportunity, IAESTE coordinates the process to help secure your top choice."
    },
    {
        category: "Requirements",
        question: "Is prior international internship experience required?",
        answer: "No, prior international experience is not required. IAESTE internships are designed specifically for students seeking their first global professional exposure."
    },
    {
        category: "Requirements",
        question: "Do IAESTE internships require prior experience?",
        answer: "While prior experience is beneficial, it is not mandatory. Employers value enthusiasm, technical foundation, and a willingness to learn."
    },
    {
        category: "Internships",
        question: "When do internships start?",
        answer: "Internship start dates vary depending on the specific offer. Most Internships are scheduled during flexible summer periods to avoid semester overlap. Students should regularly check timelines and coordinate with their academic office if needed."
    },
    {
        category: "Internships",
        question: "Are short-term (4-6 week) IAESTE internships available?",
        answer: "Yes, short-term internships of 4-6 weeks are occasionally available. However, most IAESTE internships require a minimum duration of 8 weeks to ensure meaningful technical learning and compliance with visa regulations."
    },
    {
        category: "Internships",
        question: "Can IAESTE interns participate in multiple internships?",
        answer: "Yes, students may apply again after a 6-month cooling period. A maximum of three internships is allowed, subject to satisfactory academic progress."
    },
    {
        category: "General",
        question: "What fields are IAESTE internships available in?",
        answer: "IAESTE offers internships across engineering, IT, architecture, applied sciences, management, mathematics, physics, and other technical disciplines. Students can explore diverse opportunities aligned with their academic background and career goals."
    },
    {
        category: "Membership",
        question: "What are the benefits of becoming an IAESTE member?",
        answer: "Members receive priority access to internships, personalized guidance throughout the application process, and opportunities to participate in professional and cultural exchange programs."
    },
    {
        category: "Membership",
        question: "Is there a fee for IAESTE membership?",
        answer: "Yes, a nominal membership fee is applicable. Complete details are shared during the registration process."
    },
    {
        category: "General",
        question: "What support does IAESTE LC JECRC provide?",
        answer: "IAESTE LC JECRC supports students throughout the entire journey - from application guidance and interview preparation to visa documentation assistance and pre-departure guidance."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(faqsData.map(f => f.category))];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFaqs = useMemo(() => {
        return faqsData.filter(faq => {
            const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-32 pt-20 overflow-x-hidden">
            {/* Hero Section */}
            <div className="py-20 relative">
                <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        
                    <h1 className="text-xl md:text-6xl font-black text-[#11577f] uppercase tracking-tighter leading-tight mb-3">
                    FREQUENTLY ASKED QUESTIONS
                    </h1>

                    <p className="text-[#0B3D59]/60 text-sm md:text-lg font-black uppercase tracking-[0.3em] mb-8">
                        Legacy in every answer
                    </p>
                    </motion.div>

                    {/* Search Bar Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto relative group"
                    >
                        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[#0B3D59]/30 group-focus-within:text-[#0B3D59] transition-colors">
                            <SearchIcon fontSize="large" />
                        </div>
                        <input
                            type="text"
                            placeholder="Type reaching your question..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border-2 border-[#0B3D59]/5 rounded-[2rem] py-6 pl-20 pr-8 focus:outline-none focus:border-[#0B3D59]/20 transition-all shadow-2xl shadow-[#0B3D59]/5 font-bold text-lg text-[#0B3D59] placeholder:text-gray-300"
                        />
                    </motion.div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#0B3D59] text-white shadow-2xl shadow-[#0B3D59]/40 scale-105"
                                    : "bg-white text-[#0B3D59]/40 hover:bg-[#0B3D59]/5 border border-[#0B3D59]/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-[1600px] mx-auto px-6">
                <AnimatePresence mode="popLayout">
                    {filteredFaqs.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                        >
                            {filteredFaqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={faq.question}
                                        layout
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className={`overflow-hidden rounded-[3rem] border-2 transition-all duration-500 ${isOpen
                                            ? "border-[#0B3D59]/20 bg-white shadow-2xl shadow-[#0B3D59]/10"
                                            : "border-transparent bg-white shadow-xl shadow-[#0B3D59]/5 hover:shadow-2xl hover:border-[#0B3D59]/10"
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(index)}
                                            className="w-full flex justify-between items-start p-10 text-left focus:outline-none group"
                                        >
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-10 h-[3px] bg-blue-500 rounded-full" />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B3D59]/40">
                                                        {faq.category}
                                                    </span>
                                                </div>
                                                <span className={`text-xl font-black leading-tight transition-colors ${isOpen ? "text-[#0B3D59]" : "text-[#0B3D59]/80 group-hover:text-[#0B3D59]"}`}>
                                                    {faq.question}
                                                </span>
                                            </div>
                                            <div className={`mt-2 p-3 rounded-2xl transition-all duration-500 ${isOpen ? "bg-[#0B3D59] text-white rotate-180 shadow-lg shadow-[#0B3D59]/30" : "bg-[#0B3D59]/5 text-[#0B3D59]"}`}>
                                                <ExpandMoreIcon />
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                >
                                                    <div className="px-10 pb-12 pt-6 border-t border-[#0B3D59]/5 mx-8">
                                                        <p className="text-[#0B3D59]/70 text-lg font-bold leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    ) : (
                        <div className="text-center py-40 bg-white rounded-[5rem] border-2 border-dashed border-[#0B3D59]/10 shadow-2xl">
                            <h2 className="text-5xl font-black text-[#0B3D59]/20 uppercase tracking-tighter mb-4">No Matches Found</h2>
                            <p className="text-[#0B3D59]/40 font-bold text-xl uppercase tracking-widest">Widen your search or reset filters</p>
                            <button
                                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                                className="mt-12 px-16 py-6 bg-[#0B3D59] text-white rounded-3xl font-black tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[#0B3D59]/40"
                            >
                                RESET KNOWLEDGE HUB
                            </button>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Floating background elements */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#F8FAFC]">
                <div className="absolute top-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-blue-100/30 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[1000px] h-[1000px] bg-[#0B3D59]/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0B3D59 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }} />
            </div>
        </div>
    );
};

export default FAQ;
