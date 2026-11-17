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
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-white hover:bg-[#2A170B] border border-[#E8DFD5] hover:border-[#2A170B] text-[#7E5331] hover:text-white shadow-warm-md transition-all duration-200 hover:-translate-y-0.5 group focus:outline-none"
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
};
