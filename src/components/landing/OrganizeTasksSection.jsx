import React from "react";

export default function TaskFeatureSections() {
  return (
    <section className="w-full max-w-7xl mx-auto space-y-10 px-4">

      {/* ================= Section 1 : DAILY REPORTS ================= */}
      <div className="bg-blue-50 rounded-[32px] p-8 md:p-16 2xl:p-10 
                      flex flex-col lg:flex-row items-center gap-14 2xl:gap-24">

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-5">
            <img
              src="/images/reportsimg.png" 
              alt="IndoTask Daily Activity Reports"
              className="rounded-2xl w-full max-w-[520px] 2xl:max-w-[640px]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-4">
            Daily Reports
          </p>

          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Track daily work <br className="hidden lg:block" />
            with repeat tasks
          </h2>

          <p
            className="text-gray-600 text-base md:text-lg 2xl:text-xl 
                       leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0"
          >
            IndoTask generates detailed daily activity reports showing task
            updates, changes, and user actions. Combined with repeat task
            tracking (daily, weekly, monthly), managers get complete visibility
            without manual reporting.
          </p>
        </div>
      </div>

      {/* ================= Section 2 : IMAGE VERIFICATION + REPEAT ================= */}
      <div className="bg-green-50 rounded-[32px] p-8 md:p-16 2xl:p-10 
                      flex flex-col lg:flex-row items-center gap-14 2xl:gap-24">

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-4">
            Image Verification
          </p>

          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Verify work with <br className="hidden lg:block" />
            image proof
          </h2>

          <p
            className="text-gray-600 text-base md:text-lg 2xl:text-xl 
                       leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0"
          >
            Field users upload images as proof of task completion. Admins and
            managers can verify, approve, or reject tasks ideal for repeated
            work that needs regular confirmation.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-5">
            <img
              src="/images/verifyimg2.png"
              alt="Image Verification"
              className="rounded-2xl w-full max-w-[520px] 2xl:max-w-[640px]"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
