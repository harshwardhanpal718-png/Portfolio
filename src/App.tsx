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

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03001e] text-[#f3f4f6] font-sans selection:bg-[#7300ff]/40 selection:text-[#00f2fe]">
      {/* Glassmorphism Floating Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* The Six Core Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Featured Projects */}
        <Projects />

        {/* Section 5: Experience & Education */}
        <ExperienceEducation />

        {/* Section 6: Contact */}
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Glassmorphic Minimal Footer */}
      <Footer />

      {/* Back to top */}
      <ScrollToTop />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;