import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaBuilding, FaGlobeAsia } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-gray-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gray-300 rotate-45"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
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
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-300" viewBox="0 0 300 20">
                  <path d="M0,10 Q75,5 150,10 T300,10" fill="none" stroke="currentColor" strokeWidth="6"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mt-6">
              We're here to support your journey with IndoTask. Reach out for partnerships, support, or just to say hello.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 pb-16">
        
        {/* CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 mt-4">
          
          {/* EMAIL CARD */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-emerald-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-emerald-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-500 text-sm mb-4">Get detailed assistance via email</p>
                <a 
                  href="mailto:support@indotask.com" 
                  className="text-emerald-600 font-medium hover:text-emerald-800 transition-colors text-lg"
                >
                  support@indotask.com
                </a>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  Response within 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* PHONE CARD */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-blue-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaPhoneAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-500 text-sm mb-4">Speak directly with our team</p>
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-900 font-medium hover:text-blue-600 transition-colors text-lg"
                >
                  +91 98765 43210
                </a>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  Available during business hours
                </div>
              </div>
            </div>
          </div>

          {/* ADDRESS CARD */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 border border-orange-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-orange-50 border-2 border-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBuilding className="text-orange-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                <p className="text-gray-500 text-sm mb-4">Meet us in person</p>
                <div className="text-gray-700">
                  <p className="font-medium">Bhubaneswar, Odisha</p>
                  <p className="text-sm text-gray-500">India – 751024</p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  Schedule a visit
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN - MAP */}
          <div className="space-y-8">
            
            {/* MAP SECTION */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="font-bold text-gray-900 text-lg flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FaGlobeAsia className="text-gray-600" />
                  </div>
                  Our Location
                </h3>
              </div>
              <div className="h-80">
                <iframe
                  title="IndoTask Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.665764759117!2d85.8192939758879!3d20.318365512570624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1711049577655!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              {/* <div className="p-6 border-t border-gray-100 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  Visit our headquarters in the heart of Odisha
                </p>
              </div> */}
            </div>
          </div>

          {/* RIGHT COLUMN - BUSINESS INFO */}
          <div className="space-y-8">
            
            {/* BUSINESS HOURS CARD */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 flex items-center justify-center">
                  <FaClock className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
                  <p className="text-gray-500">When our team is available</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Monday – Friday</span>
                    <span className="font-bold text-amber-700">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></div>
                </div>

                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900">Saturday</span>
                    <span className="font-bold text-emerald-700">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></div>
                </div>

                <div className="relative opacity-60">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                  <div className="h-2 bg-red-200 rounded-full"></div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  For urgent matters outside business hours, please call our emergency line
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}