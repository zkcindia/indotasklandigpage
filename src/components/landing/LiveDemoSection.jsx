import React from "react";
import {
  FaTasks,
  FaChartBar,
  FaClock,
  FaUserCheck,
  FaAndroid
} from "react-icons/fa";

const LiveDemoSection = () => {
  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="w-full max-w-7xl mx-auto px-2">
<div className="flex flex-col lg:flex-row gap-16 items-center">


          {/* LEFT SIDE – CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              IndoTask Mobile App
            </h2>

            <p className="text-gray-600 mt-4 max-w-lg">
              Manage tasks, track work hours, and generate reports directly
              from your Android device. IndoTask helps teams stay productive
              even on the move.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <Feature
                icon={<FaTasks />}
                title="Task Management"
                desc="Create, assign, and update tasks anytime."
              />
              <Feature
                icon={<FaClock />}
                title="Time Tracking"
                desc="Start and stop work with one tap."
              />
              <Feature
                icon={<FaUserCheck />}
                title="Verification"
                desc="Upload images to verify completed work."
              />
              <Feature
                icon={<FaChartBar />}
                title="Reports"
                desc="View performance and task reports instantly."
              />
            </div>

            {/* CTA */}
            <button className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-xl
                               bg-green-600 text-white font-medium
                               hover:bg-green-700 transition">
              <FaAndroid className="text-xl" />
              Android App
            </button>
          </div>

          {/* RIGHT SIDE – SINGLE APP IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
<img
  src="/images/appimages.png"
  alt="IndoTask Android App"
  className="w-100 h-[320px] rounded-3xl shadow-2xl bg-white"
/>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* Feature Card */
const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-lg">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  </div>
);

export default LiveDemoSection;
