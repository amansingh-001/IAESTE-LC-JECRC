import React from 'react';
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
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Register Chart.js components
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

export default function StatisticsCharts() {
  const [chartType, setChartType] = React.useState('line');
  const [isMobile, setIsMobile] = React.useState(false);
  const [animatedOutgoing, setAnimatedOutgoing] = React.useState(0);
  const [animatedIncoming, setAnimatedIncoming] = React.useState(0);
  const [animatedCombined, setAnimatedCombined] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const chartCardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const chartVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const countryBadgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 10
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  const legendItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: -20
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 150,
        damping: 12
      }
    })
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };
  // Color palette matching the image
  const colors = {
    '2013-14': '#F7C59F', // Light apricot
    '2014-15': '#FF6B9D', // Light red/pink
    '2015-16': '#4ECDC4', // Light green/teal
    '2016-17': '#FFE66D', // Yellow
    '2017-18': '#FF8C42', // Orange
    '2018-19': '#95E1D3', // Light blue/teal
    '2019-20': '#C7CEEA', // Light purple
    '2020-21': '#A8E6CF', // Light mint
    '2021-22': '#FFD3A5', // Light peach
    '2022-23': '#CAB8FF', // Light lavender
    '2023-24': '#FFAAA5', // Light coral
    '2024-25': '#B8E6B8', // Light green
  };

  // Base numeric data (same as Outgoing/Incoming pages)
  const years = ['2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25'];

  const outgoingCounts = [2, 9, 2, 15, 17, 12, 1, 2, 6, 4, 8, 13];
  const incomingCounts = [0, 11, 8, 24, 28, 21, 3, 2, 2, 1, 9, 20];

  const totalOutgoing = outgoingCounts.reduce((sum, v) => sum + v, 0);
  const totalIncoming = incomingCounts.reduce((sum, v) => sum + v, 0);
  const totalCombined = totalOutgoing + totalIncoming;

  // Animated counter effect - optimized to avoid blocking main thread
  React.useEffect(() => {
    if (hasAnimated) return;

    // Use setTimeout instead of requestAnimationFrame for better performance
    // This allows browser to yield control and prevent blocking
    const animateValue = (start, end, duration, setter) => {
      const startTime = Date.now();
      const range = end - start;
      const stepSize = Math.max(1, Math.floor(range / (duration / 16))); // 16ms chunks (60fps)
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(start + (range * progress));
        
        setter(currentValue);
        
        if (progress < 1) {
          // Use setTimeout with 0 delay to allow browser to yield control
          setTimeout(animate, 0);
        }
      };
      
      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        requestIdleCallback(animate, { timeout: 16 });
      } else {
        setTimeout(animate, 0);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1500; // 1.5 seconds
            
            // Stagger animations slightly to avoid all running at once
            setTimeout(() => {
              animateValue(0, totalOutgoing, duration, setAnimatedOutgoing);
            }, 0);
            setTimeout(() => {
              animateValue(0, totalIncoming, duration, setAnimatedIncoming);
            }, 50);
            setTimeout(() => {
              animateValue(0, totalCombined, duration, setAnimatedCombined);
            }, 100);
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = document.querySelector('[data-stats-section]');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [hasAnimated, totalOutgoing, totalIncoming, totalCombined]);

  const lineOptions = React.useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    layout: {
      padding: {
        left: isMobile ? 0 : 10,
        right: isMobile ? 0 : 10,
        top: 5,
        bottom: isMobile ? 0 : 10
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#003F68',
          font: { size: isMobile ? 11 : 13, weight: '600' },
          padding: isMobile ? 8 : 16,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,63,104,0.95)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        borderColor: '#003F68',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Number of Interns', color: '#003F68', font: { size: isMobile ? 10 : 12 } },
        ticks: { color: '#555', font: { size: isMobile ? 9 : 11 }, padding: isMobile ? 5 : 8 },
        grid: { color: 'rgba(0,63,104,0.10)' },
        padding: { left: isMobile ? 0 : 5, right: isMobile ? 0 : 5 }
      },
      x: {
        title: { display: true, text: 'Years', color: '#003F68', font: { size: isMobile ? 10 : 12 } },
        ticks: { color: '#555', maxRotation: isMobile ? 45 : 0, minRotation: isMobile ? 45 : 0, font: { size: isMobile ? 8 : 11 }, padding: isMobile ? 3 : 8 },
        grid: { display: false },
        padding: { top: isMobile ? 0 : 5, bottom: isMobile ? 0 : 5 }
      },
    },
  }), [isMobile]);

  const barOptions = React.useMemo(() => ({
    ...lineOptions
  }), [lineOptions]);

  // Country data for each year
  const outgoingCountries = {
    '2013-14': ['Czech Republic', 'Bosnia'],
    '2014-15': ['Iran', 'Lebanon', 'Oman'],
    '2015-16': ['Germany', 'Iran'],
    '2016-17': ['Germany', 'Nepal', 'Kenya', 'Poland', 'Belgium', 'Czech Republic'],
    '2017-18': ['Poland', 'Vietnam', 'Kazakhstan', 'Turkey', 'Portugal'],
    '2018-19': ['Nepal', 'Germany', 'Thailand', 'Brazil', 'Poland', 'Turkey'],
    '2019-20': ['Turkey'],
    '2020-21': ['Bangladesh'],
    '2021-22': ['Saudi Arabia'],
    '2022-23': ['Various'],
    '2023-24': ['UAE', 'Tanzania', 'Iran', 'Kenya', 'Canada', 'Oman'],
    '2024-25': ['Vietnam', 'Iran', 'Tanzania', 'Brazil', 'Oman', 'Kazakhstan', 'Ghana'],
  };

  const incomingCountries = {
    '2013-14': [],
    '2014-15': ['Germany', 'Argentina', 'Tunisia', 'Turkey', 'Croatia', 'Oman', 'Thailand'],
    '2015-16': ['USA', 'Croatia', 'Belarus', 'Norway', 'Hungary', 'Germany'],
    '2016-17': ['UK', 'Spain', 'Indonesia', 'Greece', 'Kenya', 'Czech Republic', 'Vietnam', 'Saudi Arabia', 'Poland', 'Belgium', 'Thailand', 'Slovak Republic', 'Colombia'],
    '2017-18': ['Germany', 'Tunisia', 'Nepal', 'Norway', 'Oman', 'Indonesia', 'Nigeria', 'Poland', 'Turkey', 'Slovakia', 'Belarus', 'Austria', 'Belgium', 'Vietnam', 'Ireland', 'Hungary'],
    '2018-19': ['Spain', 'Argentina', 'Brazil', 'Czech Republic', 'Iran', 'Poland', 'Tunisia', 'Thailand', 'Colombia', 'Germany', 'UK', 'Serbia', 'Turkey'],
    '2019-20': ['Bolivia', 'Colombia', 'Peru'],
    '2020-21': ['Bangladesh', 'Yemen'],
    '2021-22': ['Vietnam', 'Ghana'],
    '2022-23': ['Iran'],
    '2023-24': ['Tunisia', 'Ghana', 'Tanzania', 'Iran', 'Palestine', 'Belarus'],
    '2024-25': ['Mexico', 'Canada', 'Austria', 'Norway', 'Czech Republic', 'Palestine', 'Tunisia', 'Jordan', 'Spain', 'Iran', 'Bangladesh'],
  };

  // Legend items - starting from 2014-15
  const legendItems = [
    { year: '2013-14', color: colors['2013-14'] },
    { year: '2014-15', color: colors['2014-15'] },
    { year: '2015-16', color: colors['2015-16'] },
    { year: '2016-17', color: colors['2016-17'] },
    { year: '2017-18', color: colors['2017-18'] },
    { year: '2018-19', color: colors['2018-19'] },
    { year: '2019-20', color: colors['2019-20'] },
    { year: '2020-21', color: colors['2020-21'] },
    { year: '2021-22', color: colors['2021-22'] },
    { year: '2022-23', color: colors['2022-23'] },
    { year: '2023-24', color: colors['2023-24'] },
    { year: '2024-25', color: colors['2024-25'] },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white pt-4 sm:pt-6 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Statistics
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our exchange program participation over the years
          </motion.p>
          
          {/* Outgoing and Incoming Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/testimonials/outgoing"
              className="px-6 py-3 bg-[#003F68] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#005a8f] transition-all duration-300 transform hover:scale-105"
            >
              Outgoing
            </Link>
            <Link
              to="/testimonials/incoming"
              className="px-6 py-3 bg-[#ff7b2f] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#ff8a4a] transition-all duration-300 transform hover:scale-105"
            >
              Incoming
            </Link>
          </motion.div>
        </motion.div>

        {/* Charts Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 mb-8"
        >
          {/* Toggle + Main Graph */}
            <motion.div
              variants={chartCardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ perspective: "1000px" }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003F68]">
                  Outgoing vs Incoming
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Year-wise comparison of total interns
                </p>
              </div>
              <div className="inline-flex rounded-lg bg-gray-100 p-1 self-start">
                <button
                  onClick={() => setChartType('line')}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${chartType === 'line'
                    ? 'bg-[#003F68] text-white shadow-sm'
                    : 'text-gray-700 hover:bg-white'
                    }`}
                >
                  Line
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`ml-1 px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${chartType === 'bar'
                    ? 'bg-[#003F68] text-white shadow-sm'
                    : 'text-gray-700 hover:bg-white'
                    }`}
                >
                  Bar
                </button>
              </div>
            </div>

            <motion.div
              className="relative h-72 sm:h-80 -mx-2 sm:mx-0"
              variants={chartVariants}
            >
              {chartType === 'line' ? (
                <Line
                  data={{
                    labels: years,
                    datasets: [
                      {
                        label: 'Outgoing',
                        data: outgoingCounts,
                        borderColor: '#003F68',
                        backgroundColor: 'rgba(0,63,104,0.15)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.35,
                        pointRadius: 5,
                      },
                      {
                        label: 'Incoming',
                        data: incomingCounts,
                        borderColor: '#ff8a4a',
                        backgroundColor: 'rgba(255,138,74,0.15)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.35,
                        pointRadius: 5,
                      },
                    ],
                  }}
                  options={lineOptions}
                />
              ) : (
                <Bar
                  data={{
                    labels: years,
                    datasets: [
                      {
                        label: 'Outgoing',
                        data: outgoingCounts,
                        backgroundColor: 'rgba(0,63,104,0.9)',
                        borderColor: '#003F68',
                        borderWidth: 2,
                        borderRadius: 6,
                      },
                      {
                        label: 'Incoming',
                        data: incomingCounts,
                        backgroundColor: 'rgba(255,138,74,0.9)',
                        borderColor: '#ff7b2f',
                        borderWidth: 2,
                        borderRadius: 6,
                      },
                    ],
                  }}
                  options={barOptions}
                />
              )}
            </motion.div>
          </motion.div>

          {/* Quick Stats Cards */}
          <motion.div
            variants={chartCardVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            data-stats-section
          > 
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border border-gray-100">
              <p className="text-xs sm:text-sm text-gray-600 mb-1 text-center">Total Outgoing</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#003F68] text-center">{animatedOutgoing}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border border-gray-100">
              <p className="text-xs sm:text-sm text-gray-600 mb-1 text-center">Total Incoming</p>
              <p className="text-2xl sm:text-3xl font-bold text-[#ff7b2f] text-center">{animatedIncoming}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 border border-gray-100">
              <p className="text-xs sm:text-sm text-gray-600 mb-1 text-center">Total Internships</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">{animatedCombined}</p>
            </div>
          </motion.div>
        </motion.div>

      
      </div>
    </div>
  );
}

