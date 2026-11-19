import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl btn-gradient text-white shadow-[0_10px_25px_rgba(115,0,255,0.4)] hover:shadow-[0_15px_35px_rgba(115,0,255,0.6)] transition-all duration-300 hover:-translate-y-1 focus:outline-none"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
