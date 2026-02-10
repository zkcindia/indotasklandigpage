// src/components/landing/FeaturesSection.jsx
import {
  FaTasks,
  FaUsers,
  FaUserShield,
  FaCheckDouble,
  FaEye,
  FaSyncAlt,
  FaCamera,
  FaChartLine,
  FaBolt,
  FaMobileAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: FaTasks,
      title: "Task Management",
      desc: "Create, assign, and track tasks with clear ownership and deadlines.",
      bg: "from-blue-100 to-blue-50",
      color: "text-blue-600",
      iconBg: "bg-blue-500/10",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: FaCheckDouble,
      title: "Task Verification",
      desc: "Verify work before completion to ensure accountability.",
      bg: "from-emerald-100 to-emerald-50",
      color: "text-emerald-600",
      iconBg: "bg-emerald-500/10",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    },
    {
      icon: FaEye,
      title: "Manager Visibility",
      desc: "Monitor progress, delays, and team performance in real time.",
      bg: "from-amber-100 to-amber-50",
      color: "text-amber-600",
      iconBg: "bg-amber-500/10",
      gradient: "bg-gradient-to-br from-amber-500 to-amber-600",
    },
    {
      icon: FaUserShield,
      title: "Admin Control",
      desc: "Manage users, permissions, and workflows from one dashboard.",
      bg: "from-rose-100 to-rose-50",
      color: "text-rose-600",
      iconBg: "bg-rose-500/10",
      gradient: "bg-gradient-to-br from-rose-500 to-rose-600",
    },
    {
      icon: FaChartLine,
      title: "Daily Reports",
      desc: "Auto-generated daily reports with task updates and activity tracking.",
      bg: "from-teal-100 to-teal-50",
      color: "text-teal-600",
      iconBg: "bg-teal-500/10",
      gradient: "bg-gradient-to-br from-teal-500 to-teal-600",
    },
    {
      icon: FaCamera,
      title: "Image Upload",
      desc: "Upload images as task proof for transparent and accurate verification.",
      bg: "from-violet-100 to-violet-50",
      color: "text-violet-600",
      iconBg: "bg-violet-500/10",
      gradient: "bg-gradient-to-br from-violet-500 to-violet-600",
    },
    {
      icon: FaBolt,
      title: "Repeat Shortcut",
      desc: "Create recurring tasks instantly for daily, weekly, or monthly work.",
      bg: "from-indigo-100 to-indigo-50",
      color: "text-indigo-600",
      iconBg: "bg-indigo-500/10",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      icon: FaMobileAlt,
      title: "IndoTask App",
      desc: "Manage tasks, upload images, and verify work directly from the mobile app.",
      bg: "from-orange-100 to-orange-50",
      color: "text-orange-600",
      iconBg: "bg-orange-500/10",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="features" className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Just slightly smaller */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              Powerful Features
            </span>
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Everything you need to
            <span className="relative inline-block ml-2">
              <span className="relative z-10">run tasks efficiently</span>
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-green-500/40" viewBox="0 0 500 20">
                <path d="M0,10 Q50,5 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="8"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 mt-4 text-base max-w-2xl mx-auto">
            IndoTask combines task execution, verification, reporting, and automation
            into one simple platform designed for modern teams.
          </p>
        </div>

        {/* Feature Grid - Just slightly smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Feature Card - Just slightly smaller */}
                <div className={`
                  relative bg-white rounded-xl p-6 border border-gray-200
                  transition-all duration-300 ease-out
                  group-hover:scale-[1.02] group-hover:shadow-lg
                  h-full flex flex-col
                  ${isHovered ? 'shadow-md' : 'shadow-sm'}
                `}>
                  
                  {/* Icon Container - Just slightly smaller */}
                  <div className={`
                    w-14 h-14 rounded-xl ${item.iconBg} mb-6
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-105
                  `}>
                    <div className={`p-3 rounded-lg ${item.color}`}>
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  {/* Title with animated underline - kept but smaller */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 relative inline-block">
                    {item.title}
                    <span className={`
                      absolute -bottom-1 left-0 w-0 h-0.5 ${item.gradient}
                      transition-all duration-300
                      group-hover:w-full
                    `}></span>
                  </h3>

                  {/* Description - Just slightly smaller */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional: Keep the CTA if needed */}
        {/* <div className="text-center mt-16">
          <button className="
            inline-flex items-center gap-2 px-6 py-3
            bg-gradient-to-r from-green-500 to-emerald-600
            text-white font-semibold rounded-xl
            shadow-md shadow-green-500/25
            hover:shadow-lg hover:shadow-green-500/40
            transform hover:-translate-y-0.5
            transition-all duration-300
          ">
            <span>Explore All Features</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
}