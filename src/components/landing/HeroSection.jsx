// src/components/landing/HeroSection.jsx
import React from "react";
import {
  FaStar,
  FaPlay,
  FaUserShield,
  FaCheckCircle,
  FaSync,
  FaUsers,
  FaClipboardList,
  FaCamera,
  FaUserCheck
} from "react-icons/fa";
import WatchDemoPopup from "./WatchDemoPopup";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      
      {/* TOP SECTION - TEXT CONTENT */}
      <div className="w-full md:px-4">
        <div className=" px-4 md:px-16 mx-auto text-center">
          
          {/* Badge */}
          {/* 
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <FaStar className="mr-2" />
            Trusted by 500+ teams
          </div> 
          */}
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Task Management Made
            <span className="block text-blue-600 mt-2">
              Simple & Powerful
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            IndoTask is a smart task management platform that helps teams assign
            responsibilities, track progress, and verify task completion in
            real time, ensuring transparency, accountability, and full
            administrative control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
<button
  onClick={() =>
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
>
  Start Free Trial
</button>

            
<WatchDemoPopup>
  <button className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-xl border border-gray-300 hover:border-blue-400 flex items-center transition">
    <FaPlay className="mr-3 text-blue-600" />
    Watch Demo
  </button>
</WatchDemoPopup>
          </div>
          
          {/* FEATURES */}
 {/* FEATURES */}
<div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-16 mt-1">

  {/* Admin Controls */}
  <div className="text-center w-[140px]">
    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
      <FaUserShield className="h-5 w-5 text-blue-600" />
    </div>
    <div className="font-medium text-sm">Admin Controls</div>
    <div className="text-xs text-gray-500">
      Create & assign
    </div>
  </div>

  {/* User Tasks */}
  <div className="text-center w-[140px]">
    <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
      <FaUsers className="h-5 w-5 text-green-600" />
    </div>
    <div className="font-medium text-sm">User Tasks</div>
    <div className="text-xs text-gray-500">
      Complete & submit
    </div>
  </div>

  {/* Verification */}
  <div className="text-center w-[140px]">
    <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
      <FaCheckCircle className="h-5 w-5 text-purple-600" />
    </div>
    <div className="font-medium text-sm">Verification</div>
    <div className="text-xs text-gray-500">
      Approvals
    </div>
  </div>

  {/* Repeat Tasks */}
  <div className="text-center w-[140px]">
    <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
      <FaSync className="h-5 w-5 text-orange-600" />
    </div>
    <div className="font-medium text-sm">Repeat Tasks</div>
    <div className="text-xs text-gray-500">
      Auto-schedule
    </div>
  </div>

  {/* SOP Templates */}
  <div className="text-center w-[140px]">
    <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
      <FaClipboardList className="h-5 w-5 text-red-600" />
    </div>
    <div className="font-medium text-sm">SOP Templates</div>
    <div className="text-xs text-gray-500">
      Standard steps
    </div>
  </div>

  {/* Image Proof */}
  <div className="text-center w-[140px]">
    <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
      <FaCamera className="h-5 w-5 text-teal-600" />
    </div>
    <div className="font-medium text-sm">Image Proof</div>
    <div className="text-xs text-gray-500">
      Photo verify
    </div>
  </div>



</div>

        </div>
      </div>
      
      {/* BOTTOM SECTION - DASHBOARD IMAGE */}
      <div className="w-full -mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/taskimg3.png"
              alt="IndoTask Dashboard Preview"
              className="w-full h-[650px] object-contain bg-transparent"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
