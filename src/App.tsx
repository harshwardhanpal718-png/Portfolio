import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { EducationSkills } from './components/EducationSkills';
import { DataWorkflow } from './components/DataWorkflow';
import { QuoteSection } from './components/QuoteSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#C81024] selection:text-white">
      {/* Editorial Floating Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Editorial Sections */}
      <main>
        {/* Section 1: Hero Section with Oversized Red PORTFOLIO & Portrait */}
        <Hero />

        {/* Section 2: Selected Projects (3 Horizontal Showcase Cards) */}
        <Projects />

        {/* Section 3: Education & Technical Skills (Two-Column Layout) */}
        <EducationSkills />

        {/* Section 4: Data Analysis Workflow (HOW I WORK WITH DATA - 5 Steps) */}
        <DataWorkflow />

        {/* Section 5: Quote / Personal Philosophy (Dedicated Crimson-Red Panel) */}
        <QuoteSection />

        {/* Section 6: Contact Section (LET'S WORK WITH DATA.) */}
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <ScrollToTop />

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
