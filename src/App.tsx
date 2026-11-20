import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';
import { sectionVisibility } from './data/portfolioConfig';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171923] font-sans selection:bg-[#A98468]/20 selection:text-[#171923]">
      {/* Editorial Sticky Navbar with Download Resume on Top Right */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Sections — Configured via src/data/portfolioConfig.ts */}
      <main>
        {/* Section 1: Hero Section */}
        {sectionVisibility.hero && (
          <Hero />
        )}

        {/* Section 2: About Me (With 2nd Photo Upload Support) */}
        {sectionVisibility.about && (
          <About />
        )}

        {/* Section 3: Skills & Technologies (4 Pastel Cards) */}
        {sectionVisibility.skills && (
          <Skills />
        )}

        {/* Section 4: Featured Projects */}
        {sectionVisibility.projects && (
          <Projects />
        )}

        {/* Section 5: Experience & Learning Journey */}
        {sectionVisibility.experience && (
          <ExperienceEducation />
        )}

        {/* Section 6: Contact Section */}
        {sectionVisibility.contact && (
          <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
        )}
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
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
