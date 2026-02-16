import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white"> {/* removed min-h-screen to fix footer gap */}
      
      {/* HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-gray-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gray-300 rotate-45"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-6">
          <div className="text-center max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                Contact Us
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Connect &<br />
              <span className="relative">
                <span className="relative z-10">Build Something Great</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-emerald-300"
                  viewBox="0 0 300 20"
                >
                  <path
                    d="M0,10 Q75,5 150,10 T300,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6">
              We're here to support your journey with IndoTask. Reach out for partnerships, support, or just to say hello.
            </p>

          </div>
        </div>
      </div>


      {/* MAIN CONTENT - FLEX BASED */}
      <div className="flex justify-center items-center py-12 px-6 bg-emerald-50">

        <div className="w-full max-w-xl py-6">

          <div className="bg-white border border-emerald-100 shadow-md rounded-xl p-12 text-center transition duration-300 hover:shadow-lg">

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="h-14 w-14 rounded-lg bg-emerald-600 flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Email Support
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              Need assistance? Our team is ready to help you.
            </p>

            {/* Email Button */}
            <a
              href="mailto:support@indotask.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 transition"
            >
              <FaEnvelope className="text-sm" />
              support@indotask.com
            </a>

          </div>

        </div>
      </div>

    </div>
  );
}
