import React from "react";
import Hero from "./components/Hero";
import WorkflowSection from "./components/WorkflowSection";
import FeaturesSection from "./components/FeaturesSection";
import ResultsSection from "./components/ResultsSection";
import StudyAreaSection from "./components/StudyAreaSection";
import ContactSection from "./components/ContactSection";
import ScrollProgress from "./components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
        <ScrollProgress />
        <Hero />
        <WorkflowSection />
        <FeaturesSection />
        <ResultsSection />
        <StudyAreaSection />
        {/* <ContactSection /> */}
      </div>
      <Analytics />
    </>
  );
}

export default App;
