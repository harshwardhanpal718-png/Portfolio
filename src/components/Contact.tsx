import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Check,
  Copy,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioConfig';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = personalInfo.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleMailto = () => {
    const mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Data Analyst Role / Project Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Full-Width Soft Rounded Pastel Mint-Green Container */}
        <div className="bg-[#E8F1E8] border border-[#D5E5D5] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-soft-md relative overflow-hidden">

          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCE9DF] rounded-full blur-3xl opacity-70 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

            {/* Left Column: Heading, Description & Contact Links (6 Cols) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DCE9DF] mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 font-sans">
                  LET'S WORK TOGETHER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171923] tracking-tight leading-[1.18] mb-6">
                Have a Data Challenge <br className="hidden sm:inline" />
                <span className="italic font-serif text-emerald-900">in Mind</span>?
              </h2>

              <p className="text-sm sm:text-base text-[#62616A] leading-relaxed mb-8 font-sans">
                Let's transform your data into meaningful insights. I'm always interested in discussing analytical challenges, business intelligence projects and exciting data opportunities.
              </p>

              {/* Direct Info Pills */}
              <div className="w-full space-y-3 font-sans text-xs mb-8">
                {/* Email with 1-click copy */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#DCE9DF] flex items-center justify-between shadow-card">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-emerald-800 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-medium text-[#171923] hover:text-[#A98468] transition-colors truncate"
                    >
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 rounded-full bg-[#FAF7F2] hover:bg-[#F5F0E9] border border-[#EBE5DC] text-[10px] font-semibold text-[#171923] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#DCE9DF] flex items-center gap-3 shadow-card">
                  <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] flex items-center justify-center text-[#A98468] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[#62616A]">
                    Location: <strong className="text-[#171923]">Jaipur, Rajasthan, India</strong>
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white border border-[#DCE9DF] text-xs font-semibold text-[#171923] hover:text-emerald-900 hover:bg-[#FAF7F2] transition-colors flex items-center gap-2 shadow-card"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-700" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white border border-[#DCE9DF] text-xs font-semibold text-[#171923] hover:text-emerald-900 hover:bg-[#FAF7F2] transition-colors flex items-center gap-2 shadow-card"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

            </div>

            {/* Right Column: Clean White Working Contact Form (6 Cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#DCE9DF] shadow-card">
              <h3 className="font-serif text-xl font-bold text-[#171923] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#62616A] mb-6 font-sans">
                Fill in the details below and I'll respond within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#E8F1E8] border border-[#DCE9DF] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto text-emerald-700 shadow-card">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#171923]">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="text-xs text-[#62616A] leading-relaxed font-sans">
                    Your inquiry is ready to send. Click the button below to transmit directly via your mail client.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={handleMailto}
                      className="btn-dark py-2.5 px-4 rounded-full text-xs font-semibold"
                    >
                      Open Email App to Confirm
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="text-xs text-[#62616A] hover:text-[#171923] underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label htmlFor="name" className="text-[11px] font-semibold text-[#171923] block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EBE5DC] focus:border-[#A98468] focus:bg-white focus:outline-none text-xs text-[#171923] placeholder-[#62616A]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-[11px] font-semibold text-[#171923] block mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EBE5DC] focus:border-[#A98468] focus:bg-white focus:outline-none text-xs text-[#171923] placeholder-[#62616A]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-[11px] font-semibold text-[#171923] block mb-1">
                      SUBJECT
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Data Analyst Opportunity / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EBE5DC] focus:border-[#A98468] focus:bg-white focus:outline-none text-xs text-[#171923] placeholder-[#62616A]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[11px] font-semibold text-[#171923] block mb-1">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your dataset or analytical requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#EBE5DC] focus:border-[#A98468] focus:bg-white focus:outline-none text-xs text-[#171923] placeholder-[#62616A]/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-dark py-3 rounded-full font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-soft"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
