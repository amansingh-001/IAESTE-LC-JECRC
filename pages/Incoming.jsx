
import React, { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Counter({ target = 0, duration = 2000, play = true, className = "" }) {
  const [value, setValue] = useState(0);
  const ranRef = useRef(false);

  useEffect(() => {
    if (!play) {
      setValue(0);
      return;
    }
    if (ranRef.current) {
      setValue(target);
      return;
    }
    ranRef.current = true;

    const frameMs = 16;
    const frames = Math.max(1, Math.round(duration / frameMs));
    let current = 0;
    const increment = target / frames;

    const id = setInterval(() => {
      current++;
      const next = Math.round(Math.min(target, increment * current));
      setValue(next);
      if (current >= frames) {
        clearInterval(id);
        setValue(target);
      }
    }, frameMs);

    return () => clearInterval(id);
  }, [target, duration, play]);

  return <span className={className}>{value}</span>;
}

export default function Incoming() {
  // SEO: Update document title and meta tags
  useEffect(() => {
    document.title = "Incoming Exchange Programs | IAESTE LC JECRC";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore IAESTE incoming exchange programs at JECRC. View statistics, success stories, and international interns hosted at our university.');
    
    // Update or create Open Graph tags
    const ogTags = {
      'og:title': 'Incoming Exchange Programs | IAESTE LC JECRC',
      'og:description': 'Explore IAESTE incoming exchange programs at JECRC. View statistics, success stories, and international interns hosted at our university.',
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

  useEffect(() => {
    if (window.location.hash === '#success-stories') {
      const section = document.getElementById('success-stories');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);
  
 const data = [
    { year: "2013-14", countries: [], students: 0 },
    {
      year: "2014-15",
      countries: [
        "Germany",
        "Germany",
        "Argentina",
        "Germany",
        "Tunisia",
        "Turkey",
        "Croatia",
        "Oman",
        "Thailand",
        "Thailand",
        "Germany"
      ],
      students: 11
    },
    {
      year: "2015-16",
      countries: [
        "USA",
        "Croatia",
        "Belarus",
        "Norway",
        "USA",
        "Hungary",
        "Croatia",
        "Germany"
      ],
      students: 8
    },
    {
      year: "2016-17",
      countries: [
        "UK",
        "Spain",
        "UK",
        "Tunisia",
        "Indonesia",
        "Indonesia",
        "Indonesia",
        "Indonesia",
        "Greece",
        "Kenya",
        "UK",
        "Czech Republic",
        "Vietnam",
        "Vietnam",
        "Spain",
        "Vietnam",
        "Vietnam",
        "Kenya",
        "Saudi Arabia",
        "Poland",
        "Belgium",
        "Thailand",
        "Slovak Republic",
        "Columbia"
      ],
      students: 24
    },
    {
      year: "2017-18",
      countries: [
        "Germany",
        "Germany",
        "Tunisia",
        "Nepal",
        "Tunisia",
        "Norway",
        "Oman",
        "Indonesia",
        "Nigeria",
        "Germany",
        "Poland",
        "Poland",
        "Turkey",
        "Slovakia",
        "Belarus",
        "Poland",
        "Turkey",
        "Austria",
        "Belgium",
        "Vietnam",
        "Vietnam",
        "Vietnam",
        "Vietnam",
        "Ireland",
        "Hungary",
        "Austria",
        "Belgium",
        "Vietnam"
      ],
      students: 28
    },
    {
      year: "2018-19",
      countries: [
        "Spain",
        "Argentina",
        "Brazil",
        "Czech Republic",
        "Poland",
        "Iran",
        "Tunisia",
        "Thailand",
        "Tunisia",
        "Colombia",
        "Brazil",
        "Germany",
        "Brazil",
        "Germany",
        "Germany",
        "United Kingdom",
        "Syria",
        "Syria",
        "Turkey",
        "Syria",
        "Syria"
      ],
      students: 21
    },
    {
      year: "2019-20",
      countries: ["Bolivia", "Colombia", "Peru"],
      students: 3
    },
    {
      year: "2020-21",
      countries: ["Bangladesh", "Yemen"],
      students: 2
    },
    {
      year: "2021-22",
      countries: ["Vietnam", "Ghana(Remote)"],
      students: 2
    },
    {
      year: "2022-23",
      countries: ["Iran"],
      students: 1
    },
    {
      year: "2023-24",
      countries: [
        "Tunisia",
        "Tunisia",
        "Tunisia",
        "Tunisia",
        "Ghana",
        "Tanzania",
        "Iran",
        "Palestine",
        "Belarus"
      ],
      students: 9
    },
    {
      year: "2024-25",
      countries: [
        "Mexico",
        "Canada",
        "Austria",
        "Norway",
        "Czech Republic",
        "Palestine",
        "Tunisia",
        "Jordan",
        "Spain",
        "Iran",
        "Palestine",
        "Spain",
        "Iran",
        "Iran",
        "Austria",
        "Yemen(Remote)",
        "Bangladesh(Remote)",
        "Japan(Remote)",
        "Canada(Remote)",
        "Iraq(Remote)"
      ],
      students: 20
    }
  ];

    const successStories = [
    {
      id: 1,
      name: "Adnan Ayman",
      location: "Palestine",
      testimonial:
        "India was not just a training destination for me, but a journey that changed my life. Living far from home taught me independence, patience, and the ability to face challenges with confidence. Adapting to a new culture and environment was not always easy, but it gave me the courage to grow stronger.",
      linkedin: "#",
      email: "#",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Adnan1.jpeg"
    },
    {
      id: 2,
      name: "Homa Ramezani",
      location: "Iran",
      testimonial:
        "I spent about 6 weeks at JECRC University in Jaipur. Besides working on projects, I had the chance to travel to different cities in India and enjoy the beauty of this AMAZING country. The beautiful temples, spicy food and incredible nature were a truly special experience for me. These experiences along with my internship created a lot of GREAT memories for me! I really want to thank IAESTE members because without their support and help this dream experience would not have been as good.",
      linkedin: "#",
      email: "#",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Homa.jpeg"
    },
    {
      id: 3,
      name: "Tasuku Nagata",
      location: "Japan",
      testimonial:
        "This internship originally started as a short project during my summer vacation from university. However, it turned out to be quite intensive and served as a great opportunity to consolidate my knowledge, including network protocols and inter-process communication. Although I was only able to implement the basic components due to time constraints, I was glad to have the chance to develop an application involving machine learning techniques for the first time.",
      linkedin: "#",
      email: "#",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/Tasuku.jpeg"
    },
    {
      id: 4,
      name: "Matthew Walker",
      location: "UK",
      testimonial:
        "During my time at JECRC University, I was able to work on a project completely unrelated to the subject I study at my home university. This allowed me to develop my technical knowledge and gain new skills. I would like to thank the IAESTE crew for being so welcoming and making my stay unforgettable.",
      linkedin: "#",
      email: "#",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/mathew.jpeg"
    },
    {
      id: 5,
      name: "Emna",
      location: "Tunisia",
      testimonial:
        "My IAESTE journey at JECRC University, Jaipur, was transformative, blending vibrant culture with unparalleled technical learning. Guided by my supervisor, I gained hands-on experience shaping my career path. The friendships and connections made here feel like family. Forever grateful to IAESTE LC JECRC, this enriching experience has been pivotal, and I eagerly anticipate returning to my second home.",
      linkedin: "#",
      email: "#",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/emna.jpg"
    },
    {
      id: 6,
      name: "Doaa",
      location: "Palestine",
      testimonial:"My two-month IAESTE internship at JECRC University in civil engineering was transformative. I explored bamboo as a sustainable building material, gained cultural insights, and formed lasting bonds. The warmth and generosity of Indian people made India my second home. From academic growth to exploring iconic sites like the Taj Mahal, this enriching journey will remain unforgettable.",
      linkedin: "#",
      email: "#",
      image: "https://www.iaestelcjecrc.com/assets/img/avatars/doaa.jpg"
    }
  ];

  const topStories = successStories.slice(0, 3);
  const bottomStories = successStories.slice(3);
  const totalTopCards = topStories.length;
  const totalBottomCards = bottomStories.length;

  const [chartType, setChartType] = useState("line");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("year");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [playCounters] = useState(true);
  const [playChartAnim, setPlayChartAnim] = useState(false);
  const chartRef = useRef(null);
  const [expandedIndices, setExpandedIndices] = useState(new Set());
  useEffect(() => {
    const chartObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPlayChartAnim(true);
          chartObserver.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (chartRef.current) chartObserver.observe(chartRef.current);
    return () => {
      try {
        chartObserver.disconnect();
      } catch (e) {
        console.log("error",e)
      }
    };
  }, []);
  useEffect(() => {
    const handler = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const filteredData = data
    .filter((item) => {
      const s = searchTerm.toLowerCase();
      if (!s) return true;
      return (
        item.year.toLowerCase().includes(s) ||
        item.countries.some((c) => c.toLowerCase().includes(s)) ||
        item.students.toString().includes(s)
      );
    })
    .sort((a, b) => {
      if (sortBy === "year") {
        const aNum = parseInt(a.year.slice(0, 4).replace(/\D/g, "")) || 0;
        const bNum = parseInt(b.year.slice(0, 4).replace(/\D/g, "")) || 0;
        return aNum - bNum;
      } else {
        return b.students - a.students;
      }
    });

  const totalInterns = data.reduce((s, d) => s + d.students, 0);
  const avgPerYear = Math.round(totalInterns / data.length);
  const peakYear = data.reduce((max, it) => (it.students > max.students ? it : max), data[0]).year;
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.6,
    animation: { duration: playChartAnim ? 1000 : 0, easing: "easeInOutQuart" },
    interaction: { intersect: false, mode: "index" },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#003F68",
          font: { size: 13, weight: "600" },
          padding: 12
        }
      },
      tooltip: {
        backgroundColor: "rgba(0,63,104,0.95)",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 12,
        borderColor: "#003F68",
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Interns", color: "#003F68" },
        ticks: { color: "#555" },
        grid: { color: "rgba(0,63,104,0.08)" }
      },
      x: {
        title: { display: true, text: "Years", color: "#003F68" },
        ticks: { color: "#555", maxRotation: 0, minRotation: 0 },
        grid: { display: false }
      }
    }
  };

  const barOptions = JSON.parse(JSON.stringify(lineOptions));
  const toggleExpand = (idx) => {
    const next = new Set(expandedIndices);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setExpandedIndices(next);
  };

  const isExpanded = (idx) => expandedIndices.has(idx);

  const nextTopCard = () => setCurrentIndex((p) => (p + 1) % totalTopCards);
  const prevTopCard = () => setCurrentIndex((p) => (p - 1 + totalTopCards) % totalTopCards);
  const nextBottomCard = () => setBottomIndex((p) => (p + 1) % totalBottomCards);
  const prevBottomCard = () => setBottomIndex((p) => (p - 1 + totalBottomCards) % totalBottomCards);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="w-full bg-[#003F68] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              Incoming Exchange - JECRC
            </h1>
            <p className="mt-4 text-gray-200 max-w-md">
              Hosting global interns strengthens our campus and community. Explore incoming exchange statistics, records and stories.
            </p>
           
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?_gl=1*1sip93w*_ga*MjE5OTI2MzIzLjE3NTM4ODU2NDU.*_ga_8JE65Q40S6*czE3NjU0NDM5NjQkbzExJGcwJHQxNzY1NDQzOTY0JGo2MCRsMCRoMA.."
              alt="International students and incoming exchange interns"
              width="256"
              height="192"
              // width="400"
              // height="300"
              className="w-[400px] h-[300px] object-cover rounded-2xl shadow-md"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section ref={chartRef} className="max-w-6xl mx-auto mt-12 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#003F68]">Incoming Students Statistics</h2>
            <p className="text-gray-600 mt-1">Records & trends for incoming interns.</p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => setChartType("line")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${chartType === "line" ? "bg-[#003F68] text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Line Chart
            </button>
            <button
              onClick={() => setChartType("bar")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${chartType === "bar" ? "bg-[#003F68] text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Bar Chart
            </button>
          </div>
        </div>
        <div className="hidden md:block bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          {chartType === "line" ? (
            <Line
              data={{
                labels: data.map((d) => d.year),
                datasets: [
                  {
                    label: "Incoming Interns",
                    data: data.map((d) => d.students),
                    borderColor: "#003F68",
                    backgroundColor: "rgba(0,63,104,0.12)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.35,
                    pointRadius: 5
                  }
                ]
              }}
              options={lineOptions}
            />
          ) : (
            <Bar
              data={{
                labels: data.map((d) => d.year),
                datasets: [
                  {
                    label: "Incoming Interns",
                    data: data.map((d) => d.students),
                    backgroundColor: "rgba(0,63,104,0.8)",
                    borderColor: "#003F68",
                    borderWidth: 2,
                    borderRadius: 6
                  }
                ]
              }}
              options={barOptions}
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-[#EAF4FF] rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Total Incoming</p>
            <p className="text-2xl font-bold text-[#003F68]">
              <Counter target={totalInterns} duration={1600} play={playCounters} />
            </p>
          </div>
          <div className="bg-[#EAF4FF] rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Peak Year</p>
            <p className="text-2xl font-bold text-[#003F68]">{peakYear}</p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto mt-12 p-6">
        <div>
          <h2 className="text-2xl font-bold text-[#003F68]">Incoming Exchange Records</h2>
          <p className="text-gray-600 mt-1">
            Total incoming : <span className="font-semibold"><Counter target={totalInterns} duration={1600} play={playCounters} /></span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => {
              const expanded = isExpanded(idx);
              return (
                <div
                  key={item.year + idx}
                  className={`group relative bg-[#EAF4FF] rounded-2xl shadow-sm border border-transparent p-5 overflow-hidden transition-all duration-300 ease-out cursor-pointer
                    min-h-[120px] ${expanded ? "max-h-[1200px]" : "max-h-[150px] md:max-h-[150px] group-hover:max-h-[1200px]"}`}
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="absolute top-3 right-4 z-20">
                    <div className="bg-white shadow px-4 py-1 text-sm rounded-full text-[#003F68] font-medium inline-flex items-center">
                      <Counter target={item.students} duration={1100} play={playCounters} />
                      <span className="ml-2 text-xs">Students</span>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-[#003F68]">{item.year}</p>

                  <div
                    className={`flex flex-wrap gap-1.5 mt-3 pr-32 transition-all duration-150 ease-out
                      ${expanded ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[1000px]"}`}
                  >
                    {item.countries.length > 0 ? (
                      item.countries.map((c, i) => (
                        <span key={i} className="bg-[#003F68] text-white text-xs px-2.5 py-1 rounded-full whitespace-nowrap">
                          {c}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 italic">No country data available for this year</p>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-gray-500 text-lg">No results found</p>
              <button onClick={() => setSearchTerm("")} className="mt-4 text-[#003F68] hover:underline">Clear search</button>
            </div>
          )}
        </div>
      </section>

      <section id="success-stories" className="max-w-7xl mx-auto mt-16 px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003F68] mb-3">Success Stories</h2>
          <p className="text-lg text-gray-600">Incoming interns - real experiences from visiting students</p>
        </div>

        <div className="relative max-w-6xl mx-auto space-y-10">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {topStories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-all duration-300 flex flex-col md:flex-row gap-6 relative max-w-6xl mx-auto">
                    {/* profile image */}
                    <div className="shrink-0 mx-auto md:mx-0">
                      <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden border-4 border-[#003F68] relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 opacity-40 z-0">
                          {/* decorative svg omitted for brevity */}
                        </div>
                        <img src={story.image} alt={story.name} width="250" height="250" className="w-[250px] h-[250px] object-cover relative z-10" loading="lazy" decoding="async" />
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-3 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                        <p className="text-base text-gray-600">{story.location}</p>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">
                        {story.testimonial}
                      </p>

                      <div className="flex gap-2 justify-end mt-auto">
                        <button onClick={prevTopCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Previous">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={nextTopCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Next">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-8">
            {topStories.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-[#003F68] w-8" : "bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to story ${i+1}`} />
            ))}
          </div>

          <div className="overflow-hidden pt-4">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${bottomIndex * 100}%)` }}>
              {bottomStories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-all duration-300 flex flex-col md:flex-row gap-6 relative max-w-6xl mx-auto">
                    {/* profile image */}
                    <div className="shrink-0 mx-auto md:mx-0">
                      <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden border-4 border-[#003F68] relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 opacity-40 z-0">
                          {/* decorative svg omitted for brevity */}
                        </div>
                        <img src={story.image} alt={story.name} width="250" height="250" className="w-[250px] h-[250px] object-cover relative z-10" loading="lazy" decoding="async" />
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex-1 flex flex-col">
                      <div className="mb-3 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                        <p className="text-base text-gray-600">{story.location}</p>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">
                        {story.testimonial}
                      </p>

                      <div className="flex gap-2 justify-end mt-auto">
                        <button onClick={prevBottomCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Previous bottom">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={nextBottomCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Next bottom">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {bottomStories.map((_, i) => (
              <button key={i} onClick={() => setBottomIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${bottomIndex === i ? "bg-[#003F68] w-8" : "bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to story ${i+1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* scroll to top button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-[#003F68] text-white p-4 rounded-full shadow-lg hover:bg-[#005a8f] transition-all duration-300 hover:scale-110 z-50" aria-label="Scroll to top">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}
    </div>
  );
}
