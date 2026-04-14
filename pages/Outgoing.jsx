
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
// import { log } from "console";

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
function Counter({ target = 0, duration = 1200, play = true, className = "" }) {
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
    const totalFrames = Math.max(1, Math.round(duration / frameMs));
    let frame = 0;
    const increment = target / totalFrames;

    const id = setInterval(() => {
      frame++;
      const next = Math.round(Math.min(target, increment * frame));
      setValue(next);
      if (frame >= totalFrames) {
        clearInterval(id);
        setValue(target);
      }
    }, frameMs);

    return () => clearInterval(id);
  }, [target, duration, play]);

  return <span className={className}>{value}</span>;
}

export default function Outgoing() {

  const successStories = [
    {
      id: 1,
      name: "Vikram Saini",
      location: "Jaipur, India",
      testimonial:
"I completed a remote IAESTE internship with IAESTE Burundi, focusing on Full Stack Web Development. During this period, I developed a website using React, Tailwind CSS, and Node.js, which enhanced my technical expertise, collaboration skills, and understanding of global work culture. This experience was truly enriching and one of the most rewarding chapters of my journey.",
      linkedin: "https://www.linkedin.com/in/vikram-saini-0b35ab207?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image:
        "https://www.iaestelcjecrc.com/assets/img/avatars/Vikram.jpeg"
    },
    {
      id: 2,
      name: "Aaditya Mittal",
      location: "Jaipur, India",
      testimonial:"My internship at the Iran Institute of Science & Technology was an enriching experience that strengthened my academic and personal growth. Under the guidance of Ms. Marzieh Davoodabadi, I worked on Twitter Bot detection, evaluating datasets using existing models and analyzing their performance. I gained real research exposure, technical skills, and cultural understanding. I am grateful to IAESTE LC JECRC and JECRC University for this global opportunity and seamless support. This internship remains a valuable milestone in my learning journey.",
        linkedin: "https://www.linkedin.com/in/aadityamittal01?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image:
        "https://www.iaestelcjecrc.com/assets/img/avatars/Aaditya.jpeg"
    },
    {
      id: 3,
      name: "Palak Kumari",
      location: "Jaipur, India",
      testimonial:
        "My internship at IAESTE Tanzania (NECTA) was one of the most enriching experiences of my journey so far. I had the opportunity to work on the Billing System of NECTA, where I was involved in improving and developing features using C# and the .NET Framework.",
      linkedin: "https://www.linkedin.com/in/palak-kumari-b855a521b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image:
        "https://www.iaestelcjecrc.com/assets/img/avatars/Palak.jpeg"
    },
    {
      id: 4,
      name: "Nakul Kandira",
      location: "Jaipur, India",
      testimonial:
        "During my internship, I worked on an Artificial Intelligence and Machine Learning project focused on drug discovery, which allowed me to enhance my technical knowledge and research skills. Along with professional learning, I had the opportunity to explore beautiful places like Rio de Janeiro, experiencing the warmth and vibrant culture of Brazil.",
      linkedin: "https://www.linkedin.com/in/nakul-kandira-914568286?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image:
        "https://www.iaestelcjecrc.com/assets/img/avatars/Nakul.jpeg"
    },
    {
      id: 5,
      name: "Priyansh Singh",
      location: "Jaipur, India",
      testimonial:
        "My internship with Universidad Santo Tomás, Tunja (Colombia) was a highly enriching experience. I worked on the DTI – Tunja smart-tourism project, creating 3D character models and WebAR prototypes using Blender and 8th Wall. I gained practical skills in immersive media and cultural storytelling. I am grateful to Prof. William Álvarez and IAESTE India LC JECRC for their support, which inspires my future work in XR and digital heritage.",
      linkedin: "https://www.linkedin.com/in/priyanshsingh211?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image:
        "https://www.iaestelcjecrc.com/assets/img/avatars/Priyansh.jpeg"
    }
  ];

  const data = [
    { year: "2013-14", countries: ["Czech Republic","Bosnia"], students: 2 },
    {
      year: "2014-15",  
      countries: ["Iran", "Croatia", "Poland", "Lebanon", "Germany", "Germany", "Oman", "Germany", "Germany"],
      students: 9
    },
    { year: "2015-16", countries: ["Germany", "Iran"], students: 2 },
    {
      year: "2016-17",
      countries: ["Germany", "Germany", "Nepal", "Nepal", "Poland", "Belgium", "Vietnam", "Vietnam", "Vietnam", "Germany", "Germany", "Kenya", "Kenya", "Czech Republic", "Vietnam"],
      students: 15
    },
    {
      year: "2017-18",
      countries: ["Poland", "Vietnam", "Vietnam", "Vietnam", "Vietnam", "Poland", "Kazakhstan", "Vietnam", "Iran", "Turkey", "Belarus", "Macedonia", "Iran", "Portugal", "Turkey", "Vietnam", "Vietnam"],
      students: 17
    },
    {
      year: "2018-19",
      countries: ["Nepal", "Germany", "Thailand", "Thailand", "Belarus", "Thailand", "Brazil", "Germany", "Poland", "Germany", "Turkey", "Poland"],
      students: 12
    },
    { year: "2019-20", countries: ["Turkey(Remote)"], students: 1 },
    { year: "2020-21", countries: ["Bangladesh(Remote)", "Yemen(Remote)"], students: 2 },
    { year: "2021-22", countries: ["Saudi Arabia(Remote)", "Saudi Arabia(Remote)", "Turkey(Remote)", "Turkey(Remote)", "Turkey(Remote)", "Bangladesh(Remote)"], students: 6 },
    { year: "2022-23", countries: ["Czech Republic", "Iran(Remote)", "Tanzania(Remote)", "Hong Kong"], students: 4 },
    {
      year: "2023-24",
      countries: ["United Arab Emirates", "Tanzania(Remote)", "Tanzania(Remote)", "Iran(Remote)", "Kenya(Remote)", "Canada", "Oman", "Tanzania(Remote)"],
      students: 8
    },
    {
      year: "2024-25",
      countries: ["Vietnam(Remote)", "Colombia(Remote)", "Iran(Remote)", "Palestine(Remote)", "Iran(Remote)", "Tanzania(Remote)", "Tanzania(Remote)", "Brazil", "Tajikistan(Remote)", "Oman", "Ghana(Remote)", "Burundi(Remote)", "Panama(Remote)"],
      students: 13
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [chartType, setChartType] = useState("line");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [playCounters] = useState(true);
  const [openCards, setOpenCards] = useState({});
  const [playChartAnim, setPlayChartAnim] = useState(false);
  const chartRef = useRef(null);
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
      } catch (err) {
        // Silent error for observer disconnect
      }
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const topStories = successStories.slice(0, 3);
  const bottomStories = successStories.slice(3);

  const totalCards = topStories.length;
  const totalBottomCards = bottomStories.length;

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);

  const [bottomIndex, setBottomIndex] = useState(0);
  const nextBottomCard = () => setBottomIndex((prev) => (prev + 1) % totalBottomCards);
  const prevBottomCard = () => setBottomIndex((prev) => (prev - 1 + totalBottomCards) % totalBottomCards);

  const filteredData = data;
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2.5,
    animation: { duration: playChartAnim ? 1200 : 0, easing: "easeInOutQuart" },
    interaction: { intersect: false, mode: "index" },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#003F68",
          font: { size: 14, weight: "bold", family: "'Inter', sans-serif" },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
      tooltip: {
        backgroundColor: "rgba(0, 63, 104, 0.95)",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#003F68",
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Number of Interns", color: "#003F68" },
        ticks: { color: "#666666" },
        grid: { color: "rgba(0,63,104,0.12)" }
      },
      x: {
        title: { display: true, text: "Years", color: "#003F68" },
        ticks: { color: "#666666", maxRotation: 0, minRotation: 0 },
        grid: { display: false }
      }
    }
  };

  const barOptions = JSON.parse(JSON.stringify(lineOptions));
  const totalInterns = data.reduce((sum, d) => sum + d.students, 0);
  const avgPerYear = Math.round(totalInterns / data.length);
  const peakYear = data.reduce((max, item) => (item.students > max.students ? item : max), data[0]).year;
  const toggleMobileCard = (index) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) return;
    setOpenCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isCardOpen = (index) => !!openCards[index];
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="w-full bg-[#003F68] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Take Your Career Global with <br /> IAESTE Outgoing
            </h1>
            <p className="mt-4 text-gray-200 max-w-md">
              Work abroad. Explore cultures. Build your future with international exchange opportunities.
            </p>
            
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Plane"
              width="256"
              height="192"
              // width="400"
              // height="300"
              className="w-[400px] h-[300px] object-cover rounded-2xl shadow-md lg:mr-[-15px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section ref={chartRef} className="max-w-6xl mx-auto mt-12 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-[#003F68]">Outgoing Students Statistics</h2>
          <div className="hidden md:flex gap-2 items-center">
            <button
              onClick={() => setChartType("line")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${chartType === "line" ? "bg-[#003F68] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Line Chart
            </button>
            <button
              onClick={() => setChartType("bar")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${chartType === "bar" ? "bg-[#003F68] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Bar Chart
            </button>
          </div>
        </div>
        <div className="hidden md:block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          {chartType === "line" ? (
            <Line
              data={{
                labels: data.map((d) => d.year),
                datasets: [
                  {
                    label: "Number of Interns",
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
                    label: "Number of Interns",
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
            <p className="text-sm text-gray-600 mb-1">Total Interns</p>
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
          <h2 className="text-2xl font-bold text-[#003F68]">Outgoing Exchange Statistics</h2>
          <p className="text-gray-600 mt-1">
            Total outgoing : <span className="font-semibold"><Counter target={totalInterns} duration={1600} play={playCounters} /></span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const open = isCardOpen(index);
              return (
                <div
                  key={index}
                  onClick={() => toggleMobileCard(index)}
                  className={`group relative bg-[#EAF4FF] rounded-2xl shadow-sm border border-transparent p-5 overflow-hidden transition-all duration-300 ease-out cursor-pointer min-h-[120px] ${
                    open ? "max-h-[1200px]" : "max-h-[150px] md:max-h-[150px] md:group-hover:max-h-[1200px]"
                  }`}
                  aria-expanded={open}
                >
                  <div className="absolute top-3 right-4 z-20">
                    <div className="bg-white shadow px-4 py-1 text-sm rounded-full text-[#003F68] font-medium inline-flex items-center">
                      <Counter target={item.students} duration={1100} play={playCounters} />
                      <span className="ml-2 text-xs">Students</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-[#003F68]">{item.year}</p>
                  <div
                    className={`flex flex-wrap gap-1.5 mt-3 pr-32 transition-all duration-180 ease-out ${
                      open ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
                    } md:group-hover:opacity-100 md:group-hover:max-h-[1000px]`}
                  >
                    {item.countries.length > 0 ? (
                      item.countries.map((c, idx) => (
                        <span key={idx} className="bg-[#003F68] text-white text-xs px-2.5 py-1 rounded-full whitespace-nowrap">
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
            </div>
          )}
        </div>
      </section>
      <section className="max-w-7xl mx-auto mt-16 px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003F68] mb-3">Success Stories</h2>
          <p className="text-lg text-gray-600">Real experiences from JECRC students</p>
        </div>

        <div className="relative max-w-6xl mx-auto space-y-10">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {topStories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-all duration-300 flex flex-col md:flex-row gap-6 relative max-w-6xl mx-auto">
                    <div className="shrink-0 mx-auto md:mx-0">
                      <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden border-4 border-[#003F68] relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 opacity-40 z-0">
                          <svg className="w-full h-full opacity-30" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                            <path d="M50,50 Q100,30 150,50 T200,50" stroke="#003F68" strokeWidth="1" fill="none" opacity="0.3"/>
                            <path d="M30,80 Q80,60 130,80 T200,80" stroke="#003F68" strokeWidth="1" fill="none" opacity="0.3"/>
                            <path d="M40,120 Q90,100 140,120 T200,120" stroke="#003F68" strokeWidth="1" fill="none" opacity="0.3"/>
                            <circle cx="80" cy="60" r="3" fill="#003F68" opacity="0.2"/>
                            <circle cx="120" cy="100" r="3" fill="#003F68" opacity="0.2"/>
                            <circle cx="100" cy="140" r="3" fill="#003F68" opacity="0.2"/>
                          </svg>
                        </div>
                        <img src={story.image} alt={story.name} width="250" height="250" className="w-[250px] h-[250px] object-cover relative z-10" loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-3 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                        <p className="text-base text-gray-600">{story.location}</p>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">{story.testimonial}</p>
                      <div className="flex flex-col sm:flex-row gap-3 mb-2 mt-4 md:mt-0 justify-center md:justify-start">
                        <a href={story.linkedin} target="_blank" rel="noreferrer" onClick={stopPropagation} className="bg-[#003F68] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#005a8f] transition text-center">Linkedin</a>
                      </div>
                      <div className="flex gap-2 justify-end mt-auto">
                        <button onClick={prevCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Previous">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button onClick={nextCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Next">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {topStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-[#003F68] w-8" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          <div className="overflow-hidden pt-4">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${bottomIndex * 100}%)` }}>
              {bottomStories.map((story) => (
                <div key={story.id} className="min-w-full px-4">
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 transition-all duration-300 flex flex-col md:flex-row gap-6 relative max-w-6xl mx-auto">
                    <div className="shrink-0 mx-auto md:mx-0">
                      <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden border-4 border-[#003F68] relative mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 opacity-40 z-0">
                          <svg className="w-full h-full opacity-30" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
                            <path d="M50,50 Q100,30 150,50 T200,50" stroke="#003F68" strokeWidth="1" fill="none" opacity="0.3"/>
                            <path d="M30,80 Q80,60 130,80 T200,80" stroke="#003F68" strokeWidth="1" fill="none" opacity="0.3"/>
                            <path d="M40,120 Q90,100 140,120 T200,120" stroke="#003F68" strokeWidth="1" fill="none" opacity="0.3"/>
                            <circle cx="80" cy="60" r="3" fill="#003F68" opacity="0.2"/>
                            <circle cx="120" cy="100" r="3" fill="#003F68" opacity="0.2"/>
                            <circle cx="100" cy="140" r="3" fill="#003F68" opacity="0.2"/>
                          </svg>
                        </div>
                        <img src={story.image} alt={story.name} width="250" height="250" className="w-[250px] h-[250px] object-cover relative z-10" loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-3 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                        <p className="text-base text-gray-600">{story.location}</p>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed mb-6 flex-1">{story.testimonial}</p>
                      <div className="flex flex-col sm:flex-row gap-3 mb-2 mt-4 md:mt-0 justify-center md:justify-start">
                        <a href={story.linkedin} target="_blank" rel="noreferrer" onClick={stopPropagation} className="bg-[#003F68] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#005a8f] transition text-center">Linkedin</a>
                      </div>
                      <div className="flex gap-2 justify-end mt-auto">
                        <button onClick={prevBottomCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Previous bottom">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button onClick={nextBottomCard} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110" aria-label="Next bottom">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {bottomStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setBottomIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${bottomIndex === index ? "bg-[#003F68] w-8" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to bottom card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-[#003F68] text-white p-4 rounded-full shadow-lg hover:bg-[#005a8f] transition-all duration-300 hover:scale-110 z-50" aria-label="Scroll to top">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
