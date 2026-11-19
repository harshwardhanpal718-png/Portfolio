import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DataShowcase } from './components/DataShowcase';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06070D] text-[#F8FAFC] font-sans selection:bg-[#7C3AED]/40 selection:text-[#06B6D4]">
      {/* Floating Glassmorphism Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills Ecosystem */}
        <Skills />

        {/* Section 4: Featured Projects Showcase */}
        <Projects />

        {/* Section 5: Analytics Showcase — "Data In Action" */}
        <DataShowcase />

        {/* Section 6: Education & Certifications Timeline */}
        <ExperienceEducation />

        {/* Section 7: Contact */}
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top floating trigger */}
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
