import React from "react";
import { 
  FaTasks, 
  FaUserCheck, 
  FaCamera, 
  FaShieldAlt, 
  FaChartLine,
  FaSync,
  FaUsers,
  FaClipboardCheck,
  FaCalendarCheck
} from "react-icons/fa";
import { 
  Target, 
  CheckCircle, 
  BarChart, 
  Clock,
  TrendingUp,
  Shield
} from "lucide-react";

export default function About() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white pt-8 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-6">
            <Target className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-600">About Our Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for 
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ml-3">
              Real Accountability
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            IndoTask transforms how teams manage daily operations through structured workflows,
            visual verification, and real-time tracking—ensuring every task is completed with proof.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* MISSION CARD */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  Eliminate task ambiguity and false completion reports by providing a
                  transparent system where work is assigned, tracked, and verified with evidence.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Clear task ownership</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Photo verification system</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Real-time progress tracking</span>
              </div>
            </div>
          </div>
          
          {/* VISION CARD */}
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  Become the leading platform for operational task management, helping
                  thousands of stores and teams achieve perfect task execution.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BarChart className="h-5 w-5 text-indigo-500" />
                <span className="text-gray-700">Data-driven insights</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-indigo-500" />
                <span className="text-gray-700">Time-saving automation</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-indigo-500" />
                <span className="text-gray-700">Enterprise-grade security</span>
              </div>
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes IndoTask Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* VALUE 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Accountability First</h3>
              </div>
              <p className="text-gray-600">
                Every task has a clear owner and verification requirement. No more "I thought someone else did it."
              </p>
            </div>
            
            {/* VALUE 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaCamera className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Visual Proof System</h3>
              </div>
              <p className="text-gray-600">
                Critical tasks require photo evidence. See the completed work before verification.
              </p>
            </div>
            
            {/* VALUE 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FaChartLine className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Real-Time Insights</h3>
              </div>
              <p className="text-gray-600">
                Know exactly what's pending, in progress, or completed across all teams at any moment.
              </p>
            </div>
          </div>
        </div>

        {/* FEATURE HIGHLIGHTS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Features
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6">
              <FaTasks className="text-blue-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Task-Based Workflow</h4>
              <p className="text-sm text-gray-600">
                Assign tasks by date, team, or store with full visibility and deadlines.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6">
              <FaUserCheck className="text-green-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Multi-Level Verification</h4>
              <p className="text-sm text-gray-600">
                Manager and admin verification ensures accuracy before completion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6">
              <FaSync className="text-purple-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Repeat & Scheduled Tasks</h4>
              <p className="text-sm text-gray-600">
                Automate recurring tasks with custom schedules and templates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-xl p-6">
              <FaUsers className="text-amber-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Team Collaboration</h4>
              <p className="text-sm text-gray-600">
                Multiple teams (Store, Team A, Team B) with separate task boards.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-xl p-6">
              <FaCamera className="text-rose-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Image Proof System</h4>
              <p className="text-sm text-gray-600">
                Tasks backed by photo evidence—eliminate guesswork and assumptions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-xl p-6">
              <FaClipboardCheck className="text-cyan-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">SOP Templates</h4>
              <p className="text-sm text-gray-600">
                Standard operating procedure templates for consistent task execution.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-xl p-6">
              <FaCalendarCheck className="text-violet-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Date-Driven Tasks</h4>
              <p className="text-sm text-gray-600">
                Tasks organized by Today, Tomorrow, or custom dates with reminders.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-xl p-6">
              <FaShieldAlt className="text-emerald-600 text-2xl mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Role-Based Access</h4>
              <p className="text-sm text-gray-600">
                Different permissions for team members, managers, and administrators.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}