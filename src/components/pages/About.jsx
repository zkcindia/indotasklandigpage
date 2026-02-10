import React from "react";
import { FaTasks, FaUserCheck, FaCamera } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          
          {/* LEFT */}
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase">
              About IndoTask
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Work. Verify. Deliver.
            </h1>

            <p className="text-gray-600 leading-relaxed mb-4">
              IndoTask is a task-based workflow and verification platform built
              for teams that value accountability and clarity.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From daily store operations to enterprise task tracking,
              IndoTask ensures that every task is assigned, verified,
              and completed with proof.
            </p>
          </div>

          {/* RIGHT – VISUAL BLOCK */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-3">
              Why IndoTask exists
            </h3>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>• No more unclear task ownership</li>
              <li>• No fake task completion</li>
              <li>• No manual follow-ups</li>
            </ul>
          </div>

        </div>

        {/* FEATURE STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="border border-gray-200 rounded-xl p-5">
            <FaTasks className="text-blue-600 mb-2" />
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Task-Based Workflow
            </h4>
            <p className="text-xs text-gray-600">
              Assign tasks by date, team, or store with full visibility.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <FaUserCheck className="text-green-600 mb-2" />
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Multi-Level Verification
            </h4>
            <p className="text-xs text-gray-600">
              Manager and admin verification ensures accuracy.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <FaCamera className="text-purple-600 mb-2" />
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              Image Proof System
            </h4>
            <p className="text-xs text-gray-600">
              Tasks backed by photo evidence—no guesswork.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
