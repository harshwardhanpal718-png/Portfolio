import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#C81024] text-white relative overflow-hidden select-none">
      
      {/* Background Stylized Oversized Quote watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <Quote className="w-[450px] h-[450px] text-white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Oversized Quotation Icon */}
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-black/20 border border-white/20 flex items-center justify-center">
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Master Quote */}
        <blockquote className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight uppercase max-w-4xl mx-auto mb-8 text-white drop-shadow-md">
          "WITHOUT DATA, YOU'RE JUST ANOTHER PERSON WITH AN OPINION."
        </blockquote>

        {/* Handwritten Signature-Style Author */}
        <div className="font-script text-4xl sm:text-5xl text-white font-bold tracking-wide mb-3">
          Harshwardhan Pal
        </div>

        {/* Philosophy Tagline */}
        <div className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase font-semibold">
          TURNING DATA INTO MEANINGFUL DECISIONS.
        </div>

      </div>
    </section>
  );
};
