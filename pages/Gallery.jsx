// src/pages/Gallery.jsx
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * Dynamic scan for images from the assets folder.
 * Vite's import.meta.glob allows us to find all images without manual imports.
 */
const imageModules = import.meta.glob("../src/assets/images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,svg,avif,AVIF}", { eager: true });

// --- Mappings for better display names ---
const NAME_MAP = {
    'Membership_Drive': 'Membership Drive 2025',
    'Rhythm 2026': 'Rhythm 2026',
    'Womens_Day': "Women's Day 2025",
    'IAESTE X Zarurat': 'IAESTE X Zarurat',
    'Felicitation Ceremony': 'Felicitation Ceremony 2025',
    'Trips': 'Trips & Fun',
    'Dinner': 'Events & Culture',
    'Induction': 'Member Induction 2025-26',
    'Aarunya': 'Aarunya 2025',
    'Rhythm 2025': 'Rhythm 2025',
    'Rakhi': 'Rakhi Celebration 2025',
    'Orientation': 'Orientation 2025',
    'Admin Session': 'Admin Session',
    'Team': 'IAESTE Team'
};

// --- Sub-components ---

const splitEventNameAndYear = (name) => {
    const match = name.match(/^(.*?)(\s(20\d{2}(?:-\d{2})?))$/);
    if (!match) return { eventName: name, year: "" };
    return { eventName: match[1], year: match[2].trim() };
};

const CategoryCard = ({ category, onSelect }) => {
    const { eventName, year } = splitEventNameAndYear(category.name);
    const longTitleCards = [
        "Dinner",
        "Trips",
        "Felicitation Ceremony",
        "IAESTE X Zarurat",
        "Membership_Drive",
        "Womens_Day",
        "Rakhi",
        "Orientation",
        "Induction",
        "Admin Session",
    ];

    const isLongTitleCard = longTitleCards.includes(category.id);
    const titleSizeClass = isLongTitleCard ? "text-base md:text-2xl" : "text-xl md:text-3xl";
    const titleWidthClass = isLongTitleCard
        ? "max-w-[250px] md:max-w-[420px] group-hover:max-w-[94%]"
        : "max-w-[270px] md:max-w-[420px] group-hover:max-w-[82%]";

    return (
        <motion.div
            onClick={() => onSelect(category)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative min-h-[350px] md:h-[65vh] cursor-pointer overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-300"
            style={{ contentVisibility: 'auto' }}
        >
            <div
                className="absolute inset-0 transform transition-transform duration-700 group-hover:scale-105"
                style={{
                    background: `url(${category.image}) center/cover no-repeat`,
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent transition-opacity duration-300 group-hover:bg-black/50" />

            {category.isNew && (
                <div className="absolute top-6 right-6 z-20">
                    <span className="bg-[#0B3D59] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl ring-4 ring-white/20">
                        New
                    </span>
                </div>
            )}

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end items-start text-white z-10">
                <h2
                    className={`font-black uppercase tracking-tight transition-all duration-500 leading-[0.95] drop-shadow-2xl md:-rotate-90 md:origin-bottom-left md:translate-x-10 md:-translate-y-10 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 whitespace-nowrap group-hover:whitespace-normal break-normal text-ellipsis ${isLongTitleCard ? "overflow-visible group-hover:wrap-break-word" : "overflow-hidden"} ${titleWidthClass} ${titleSizeClass}`}
                >
                    <span className={isLongTitleCard ? "inline" : "inline-block whitespace-nowrap"}>{eventName}</span>
                    {year && <span className="ml-2 inline-block whitespace-nowrap text-[0.78em] md:text-[0.75em] font-extrabold tracking-normal">{year}</span>}
                </h2>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 mt-3 translate-y-2 group-hover:translate-y-0">
                    <p className="text-white/80 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-white/50 rounded-full" />
                        {category.items.length} Photos
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const MasonryGrid = ({ items }) => {
    const [displayLimit, setDisplayLimit] = useState(12);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 350);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="pb-32">
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 p-4">
                {items.slice(0, displayLimit).map((item, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg group relative bg-gray-100"
                        style={{ contentVisibility: 'auto' }}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <p className="text-white font-bold text-xs md:text-sm leading-tight">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mt-12 mb-24 px-4">
                {items.length > displayLimit && (
                    <button
                        onClick={() => setDisplayLimit(prev => prev + 12)}
                        className="px-10 py-4 bg-[#0B3D59]/10 text-[#0B3D59] font-black rounded-2xl hover:bg-[#0B3D59]/20 transition-all tracking-widest text-sm"
                    >
                        LOAD MORE PHOTOS
                    </button>
                )}
            </div>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        type="button"
                        aria-label="Scroll to top"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-5 right-4 md:bottom-10 md:right-8 z-50 inline-flex items-center gap-2 px-4 md:px-5 py-3 rounded-full bg-[#0B3D59] text-white font-black text-xs md:text-sm tracking-wider shadow-xl shadow-[#0B3D59]/30 hover:bg-[#0B3D59]/90 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <KeyboardArrowUpIcon fontSize="small" />
                        <span className="hidden sm:inline">TOP</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Page ---

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        setSelectedCategory(category);
    };

    // Group images dynamicly
    const categories = useMemo(() => {
        const data = {};

        // Filter out HEIC files which might not render in all browsers
        const validPathModules = Object.entries(imageModules).filter(([path]) =>
            !path.toLowerCase().endsWith('.heic')
        );

        validPathModules.forEach(([path, module]) => {
            const parts = path.split('/');
            const folder = parts[parts.length - 2];
            const fileName = parts[parts.length - 1];

            // Ignore root images for the dynamic menu
            if (folder === 'images' || folder === 'Team') return;

            if (!data[folder]) {
                data[folder] = {
                    id: folder,
                    name: NAME_MAP[folder] || folder.replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                    image: module.default,
                    items: [],
                    isNew: folder.toLowerCase().includes('2026') || folder.toLowerCase().includes('induction') || folder.toLowerCase().includes('aarunya')
                };
            }

            if (folder === 'Trips' && /^Trip\s*10\b/i.test(fileName)) {
                data[folder].image = module.default;
            }

            if (folder === 'Membership_Drive' && /^membership\s*4\b/i.test(fileName)) {
                data[folder].image = module.default;
            }

            data[folder].items.push({
                image: module.default,
                title: fileName.replace(/_/g, ' ').replace(/-/g, ' ').split('.')[0],
                sortKey: fileName
            });
        });

        Object.values(data).forEach((folderData) => {
            folderData.items.sort((a, b) => a.sortKey.localeCompare(b.sortKey, undefined, { numeric: true, sensitivity: 'base' }));
        });

        // Group sorting: New ones first, then alphabetical
        return Object.values(data).sort((a, b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return a.name.localeCompare(b.name);
        });
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#0B3D59] font-sans selection:bg-[#0B3D59] selection:text-white overflow-x-hidden">
            <AnimatePresence mode="wait">
                {!selectedCategory ? (
                    <motion.div
                        key="gallery-home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Header */}
                        <motion.div
                            className="pt-32 pb-12 text-center px-4 relative z-10"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0B3D59] to-[#0E517A]">
                                Our Gallery
                            </h1>
                            <p className="text-[#0B3D59]/60 font-black text-lg uppercase tracking-widest">
                                Explore the legacy of IAESTE LC JECRC
                            </p>
                            <div className="w-24 h-2 bg-[#0B3D59] mx-auto mt-6 rounded-full" />
                        </motion.div>

                        {/* Interactive Grid Categories */}
                        <div className="max-w-[1600px] mx-auto px-6 pb-32">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
                                {categories.map((cat) => (
                                    <CategoryCard
                                        key={cat.id}
                                        category={cat}
                                        onSelect={handleSelectCategory}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="gallery-detail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative pt-32"
                    >
                        <div className="max-w-[1600px] mx-auto px-6">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-[#0B3D59]/5 p-8 rounded-[3rem] border border-[#0B3D59]/10">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#0B3D59] leading-none">
                                        {selectedCategory.name}
                                    </h2>
                                    <p className="text-[#0B3D59]/60 font-black uppercase tracking-widest mt-4 flex items-center gap-3">
                                        <span className="w-8 h-1 bg-[#0B3D59] rounded-full" />
                                        Collection of {selectedCategory.items.length} Memories
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className="flex items-center gap-3 px-8 py-4 bg-[#0B3D59] text-white rounded-2xl font-black hover:bg-[#0B3D59]/90 transition-all duration-300 shadow-xl shadow-[#0B3D59]/20"
                                >
                                    <ArrowBackIcon /> ALL CATEGORIES
                                </button>
                            </div>

                            <MasonryGrid
                                items={selectedCategory.items}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stylistic Background elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-white">
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0B3D59]/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#0B3D59_0.5px,transparent_0.5px)] [background-size:40px_40px] opacity-[0.05]" />
            </div>
        </div>
    );
}
