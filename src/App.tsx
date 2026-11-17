import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] font-sans selection:bg-blue-600/30 selection:text-blue-300">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Minimalist Footer */}
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
