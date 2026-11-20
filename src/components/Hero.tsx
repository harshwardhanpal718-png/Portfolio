import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Upload, 
  Camera, 
  RotateCcw,
  MessageCircle
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioConfig';

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('/profile-placeholder.svg');
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('harshwardhan_portfolio_avatar');
    if (saved) {
      setImgSrc(saved);
      setHasCustomPhoto(true);
    } else {
      setImgSrc('/profile.jpg');
    }
  }, []);

  const handleImageError = () => {
    setImgSrc('/profile-placeholder.svg');
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, JPEG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setImgSrc(result);
        setHasCustomPhoto(true);
        localStorage.setItem('harshwardhan_portfolio_avatar', result);
        setUploadNotice('Photo updated!');
        setTimeout(() => setUploadNotice(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('harshwardhan_portfolio_avatar');
    setImgSrc('/profile-placeholder.svg');
    setHasCustomPhoto(false);
    setUploadNotice('Reset to default');
    setTimeout(() => setUploadNotice(null), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF7F2]">
      
      {/* Subtle Warm Background Accent Gradients */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F9EBDD] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DCE9DF] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1E8] border border-[#DCE9DF] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-medium text-[#171923]">
                {personalInfo.availabilityStatus}
              </span>
            </div>

            {/* Eyebrow Label */}
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] mb-2 font-sans">
              {personalInfo.eyebrow}
            </span>

            {/* Large Elegant Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171923] tracking-tight leading-[1.12] mb-6">
              {personalInfo.role} <br className="hidden sm:inline" />
              {personalInfo.headlineMain} <br />
              <span className="font-script text-[#A98468] text-5xl sm:text-6xl lg:text-7xl font-bold not-italic inline-block -rotate-1 ml-1">
                {personalInfo.headlineAccent}
              </span>
              <span className="font-serif">.</span>
            </h1>

            {/* Short Narrative Description */}
            <p className="text-base sm:text-lg text-[#62616A] leading-relaxed max-w-xl mb-8 font-sans">
              {personalInfo.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-dark px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 group cursor-pointer shadow-soft"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="btn-cream-border px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 shadow-card cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#A98468]" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links & Decorative Arrow */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#EBE5DC] w-full max-w-xl">
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#EBE5DC] hover:border-[#A98468] hover:bg-[#F5F0E9] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#EBE5DC] hover:border-[#A98468] hover:bg-[#F5F0E9] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-full bg-white border border-[#EBE5DC] hover:border-[#A98468] hover:bg-[#F5F0E9] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Decorative Handwritten Note with Curve */}
              <div className="flex items-center gap-2">
                <span className="font-script text-xl text-[#A98468] font-bold">
                  Turning Data Into Decisions
                </span>
                <span className="text-[#A98468] text-lg">⤴</span>
              </div>
            </div>

          </div>

          {/* Right Column: Organic Portrait & 3 Pastel Floating Cards (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            
            {/* Hidden Input for Instant Photo Upload */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {/* Soft Organic Pastel Ambient Backdrop */}
            <div className="absolute w-[340px] sm:w-[380px] h-[460px] rounded-[2.5rem] bg-[#E8F1E8] rotate-2 pointer-events-none" />
            <div className="absolute w-[340px] sm:w-[380px] h-[460px] rounded-[2.5rem] bg-[#F9EBDD] -rotate-2 pointer-events-none opacity-80" />

            {/* Central Portrait Container */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="relative w-full max-w-[320px] sm:max-w-[350px] aspect-[4/5] rounded-[2rem] border-2 border-white bg-white overflow-hidden shadow-soft-lg group cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
              title="Click or drag to update your portrait photo"
            >
              {/* Profile Image */}
              <img
                src={imgSrc}
                alt={personalInfo.name}
                onError={handleImageError}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Hover Overlay with Camera Icon */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white z-25 text-center p-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-md">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase font-sans">
                  Click to Upload Photo
                </span>
                <span className="text-[10px] text-white/80 font-mono">
                  PNG, JPG, WEBP
                </span>
              </div>

              {/* Top-Right Pill: Change Photo */}
              <div className="absolute top-3 right-3 z-30">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-3 py-1.5 rounded-full bg-white/95 border border-[#EBE5DC] text-[#171923] hover:text-[#A98468] text-[10px] font-bold tracking-wider flex items-center gap-1.5 shadow-card transition-all cursor-pointer font-sans"
                  title="Upload / Change Photo"
                >
                  <Upload className="w-3 h-3 text-[#A98468]" />
                  <span>CHANGE PHOTO</span>
                </button>
              </div>

              {/* If custom photo, Reset button */}
              {hasCustomPhoto && (
                <div className="absolute top-3 left-3 z-30">
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="px-2.5 py-1 rounded-full bg-white/95 border border-red-200 text-red-600 hover:bg-red-50 text-[9px] font-bold tracking-wider flex items-center gap-1 shadow-card transition-all cursor-pointer font-sans"
                    title="Reset to default illustration"
                  >
                    <RotateCcw className="w-2.5 h-2.5" />
                    <span>RESET</span>
                  </button>
                </div>
              )}

              {/* Success Notification */}
              {uploadNotice && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-35 px-3 py-1.5 rounded-full bg-[#171923] text-white font-sans text-xs font-semibold shadow-lg animate-bounce">
                  {uploadNotice}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
