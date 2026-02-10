// // src/App.jsx
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import Navbar from "./components/landing/Navbar";
// import HeroSection from "./components/landing/HeroSection";
// import FeaturesSection from "./components/landing/FeaturesSection";
// import LiveDemoSection from "./components/landing/LiveDemoSection";
// import PricingSection from "./components/landing/PricingSection";
// import CTASection from "./components/landing/CTASection";
// import Footer from "./components/landing/Footer";
// import Advantage from "./components/landing/Advantage";
// import OrganizeTasksSection from "./components/landing/OrganizeTasksSection";
// import { Route , Routes } from "react-router-dom";
// import ContactUs from "./components/pages/ContactUs";
// import Features from "./components/pages/Features";

// export default function TeamForTasksSite() {
//   const [billingAnnual, setBillingAnnual] = useState(true);
  


// return (

//   <React.Fragment>
//   <Routes>
//     {/* LANDING PAGE */}
//     <Route
//       path="/"
//       element={
//         <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
//           <Navbar />

//           <section id="home" className="scroll-mt-24">
//             <HeroSection />
//           </section>

//           <section id="features" className="scroll-mt-24">
//             <FeaturesSection />
//           </section>

//           <section id="demo" className="scroll-mt-24">
//             <LiveDemoSection
//               // demoTeams={demoTeams}
//               // pieData={pieData}
//               // COLORS={COLORS}
//             />
//           </section>

//           <section id="pricing" className="scroll-mt-24">
//             <PricingSection
//               // billingAnnual={billingAnnual}
//               // setBillingAnnual={setBillingAnnual}
//             />
//           </section>

//           <OrganizeTasksSection />
//           <Advantage />



//           <Footer />
//         </div>
//       }
//     />

//     {/* CONTACT PAGE */}

// <Routes>
//   <Route
//     path="/contact"
//     element={
//       <div className="min-h-screen bg-white">
//         <Navbar />
//         <ContactUs />
//         <Footer />
//       </div>
//     }
//   />

//   <Route
//     path="/features"
//     element={
//       <div className="min-h-screen bg-white">
//         <Navbar />
//         <Features />
//         <Footer />
//       </div>
//     }
//   />
// </Routes>

  
//   </Routes>

//   </React.Fragment>
// );

// }


// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import LiveDemoSection from "./components/landing/LiveDemoSection";
import PricingSection from "./components/landing/PricingSection";
import Footer from "./components/landing/Footer";
import Advantage from "./components/landing/Advantage";
import OrganizeTasksSection from "./components/landing/OrganizeTasksSection";

import ContactUs from "./components/pages/ContactUs";
import Features from "./components/pages/Features";
import WatchDemoPopup from "./components/landing/WatchDemoPopup";
import About from "./components/pages/About";
import Terms from "./components/pages/Terms";

export default function TeamForTasksSite() {
  const [billingAnnual, setBillingAnnual] = useState(true);

  return (
    <Routes>
      {/* HOME / LANDING PAGE */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
            <Navbar />

            <HeroSection />
            <FeaturesSection />
            <LiveDemoSection />
<section id="pricing" className="scroll-mt-24">
  <PricingSection />
</section>

            <OrganizeTasksSection />
            <Advantage />

            <Footer />
          </div>
        }
      />

      {/* CONTACT PAGE */}
      <Route
        path="/contactus"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <ContactUs />
            <Footer />
          </div>
        }
      />

      {/* FEATURES PAGE */}
      <Route
        path="/features"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Features />
            <Footer />
          </div>
        }
      />

            <Route
        path="/watchdemopopup"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <WatchDemoPopup />
            <Footer />
          </div>
        }
      />

            {/* ABOUT PAGE */}
      <Route
        path="/about"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <About />
            <Footer />
          </div>
        }
      />

      {/* TERMS PAGE */}
      <Route
        path="/terms"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Terms />
            <Footer />
          </div>
        }
      />

      
    </Routes>
  );
}
