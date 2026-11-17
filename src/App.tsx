import { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DataDashboardDemo } from './components/DataDashboardDemo';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-sans relative selection:bg-blue-600/30 selection:text-blue-300">
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Featured Projects */}
        <Projects />

        {/* Section 5: Interactive Data Dashboard Demo */}
        <DataDashboardDemo />

        {/* Section 6: Experience & Internships */}
        <Experience />

        {/* Section 7: Education */}
        <Education />

        {/* Section 8: Certifications */}
        <Certifications />

        {/* Section 9: Contact */}
        <Contact onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTop />

      {/* Resume Download/Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}

export default App;
