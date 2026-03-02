// src/components/landing/PricingSection.jsx
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaCrown,
  FaClock,
} from "react-icons/fa";

const PricingSection = () => {
  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: "Demo",
      tagline: "Trial users",
      price: 0,
      // period: "forever",
      perks: ["Limited to 1 team", "expires in 7 days."],
      cta: "free for 7 days",
      icon: <FaStar className="h-5 w-5 text-blue-500" />,
      color: "blue",
      active: true,
    },
    {
      name: "Premium",
      tagline: "Large business",
      price: billingAnnual ? 1499 : 2000,
      period: "month",
      perks: [
        "Multiple Admins.",
        "Unlimited Users.",
        "Unlimited Branches.",
        "Unlimited Items.",
        "Role-based Access Control.",
        "Advanced Analytics Dashboard.",
        "More..",
      ],
      highlighted: true,
      cta: "Upgrade now",
      icon: <FaRocket className="h-5 w-5 text-purple-500" />,
      color: "purple",
    },
    {
      name: "Enterprise",
      tagline: "For large teams",
      price: billingAnnual ? 3000 : 2500,
      period: "month",
      perks: [
        "HQ dashboard",
        "SLA & escalations",
        "API access",
        "SSO login",
        "Priority support",
        "Custom workflows",
      ],
      cta: "Coming Soon",
      icon: <FaCrown className="h-5 w-5 text-orange-500" />,
      color: "orange",
      comingSoon: true, // Added coming soon flag
    },
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
            No credit card required
          </div> */}

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>

          <p className="text-gray-600 max-w-lg mx-auto">
            Start free, upgrade as you grow. Cancel anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingAnnual(false)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !billingAnnual
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingAnnual(true)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingAnnual
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly <span className="text-green-600 ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border flex flex-col h-full ${
                plan.active
                  ? "border-green-500 border-2 shadow-xl transform hover:scale-[1.02] transition-transform"
                  : plan.highlighted
                    ? "border-blue-500 shadow-xl transform hover:scale-[1.02] transition-transform"
                    : plan.comingSoon
                      ? "border-gray-200 shadow-lg opacity-90"
                      : "border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              } p-5 md:p-6 relative overflow-hidden`}
            >
              {/* Active Plan Badge for Demo */}
              {plan.active && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    Currently Active
                  </div>
                </div>
              )}

              {/* Coming Soon Badge for Enterprise */}
              {plan.comingSoon && (
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow flex items-center gap-1">
                    <FaClock className="h-3 w-3" />
                    Coming Soon
                  </div>
                </div>
              )}

              {/* Highlighted Plan Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}

              {/* Popular Badge */}
              {/* {plan.highlighted && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    Most Popular
                  </div>
                </div>
              )} */}

              {/* Content wrapper - takes available space */}
              <div className="flex-1">
                {/* Plan Icon & Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br from-${plan.color}-50 to-white border border-${plan.color}-100 flex items-center justify-center ${
                      plan.comingSoon ? "opacity-70" : ""
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                      {plan.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{plan.tagline}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span
                      className={`text-3xl md:text-4xl font-bold ${
                        plan.comingSoon ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      ₹{plan.price}
                    </span>
                    {plan.period !== "forever" && (
                      <span className="text-gray-500 ml-2">/month</span>
                    )}
                  </div>
                  {plan.period === "forever" ? (
                    <p className="text-gray-500 text-sm mt-1">Free forever</p>
                  ) : billingAnnual ? (
                    <p className="text-green-600 text-sm mt-1"></p>
                  ) : null}

                  {/* Coming Soon Message */}
                  {plan.comingSoon && (
                    <p className="text-orange-500 text-xs mt-2 font-medium">
                      This plan is under development
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6 md:mb-8">
                  <ul className="space-y-3">
                    {plan.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle
                          className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            plan.comingSoon ? "text-gray-300" : "text-green-500"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.comingSoon ? "text-gray-400" : "text-gray-700"
                          }`}
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button - Always at bottom */}
              {/* CTA Button - Always at bottom */}
              <button
                disabled={plan.active || plan.comingSoon}
                onClick={() => {
                  if (plan.active || plan.comingSoon) {
                    return;
                  }
                  if (plan.name === "Premium") {
                    window.open("https://app.indotask.com/login", "_blank");
                  }
                  // Handle other plan actions here
                }}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                  plan.active
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-70"
                    : plan.comingSoon
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-70 border border-gray-200"
                      : plan.highlighted
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:shadow-lg"
                        : plan.price === 0
                          ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          : "border-2 border-blue-500 text-blue-600 hover:bg-blue-50"
                }`}
              >
                {plan.active
                  ? "Already on Demo Plan"
                  : plan.comingSoon
                    ? "Coming Soon"
                    : plan.cta}
              </button>

              {/* Starter Plan Note */}
              {/* {plan.price === 0 && (
                <p className="text-center text-xs text-gray-500 mt-3">
                  No credit card required
                </p>
              )} */}
            </div>
          ))}
        </div>

        {/* All Plans Include */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="h-4 w-4 text-green-500" />
              <span>7-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
