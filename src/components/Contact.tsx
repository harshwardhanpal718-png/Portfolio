import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, Download, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const email = 'harshwardhan.pal.analytics@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleMailto = () => {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-t border-white/[0.06] bg-[#0A0D14] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider block mb-1">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F8FAFC] tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-1 bg-[#3B82F6] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#121724] border border-white/[0.08] rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[#F8FAFC]">
                Let's Connect
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                I am open to data analyst internships, entry-level opportunities, and collaborative analytical projects. Feel free to reach out directly.
              </p>

              {/* Email with Copy */}
              <div className="p-3.5 rounded-xl bg-[#0A0D14] border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="text-xs font-mono text-[#F8FAFC] truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-[#182032] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#3B82F6]" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0A0D14] border border-white/[0.06] hover:border-[#3B82F6]/50 flex items-center justify-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0A0D14] border border-white/[0.06] hover:border-[#3B82F6]/50 flex items-center justify-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Quick Resume Card */}
            <div className="bg-[#121724] border border-white/[0.08] rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs font-semibold text-[#F8FAFC] block">Download Resume</span>
                <span className="text-[11px] text-[#94A3B8]">Verified PDF format</span>
              </div>
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-accent-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7">
            <div className="bg-[#121724] border border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0A0D14] border border-[#3B82F6] text-[#3B82F6] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#F8FAFC]">Message Prepared!</h4>
                  <p className="text-xs text-[#94A3B8] max-w-sm mx-auto font-sans">
                    Click below to open your default email client with your message pre-filled.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-accent-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-3 py-2 rounded-lg bg-[#0A0D14] border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] text-xs font-medium"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {error && (
                    <div className="p-3 rounded-lg bg-[#0A0D14] border border-red-500/40 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D14] border border-white/[0.08] text-[#F8FAFC] placeholder-[#94A3B8]/40 text-xs focus:outline-none focus:border-[#3B82F6] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D14] border border-white/[0.08] text-[#F8FAFC] placeholder-[#94A3B8]/40 text-xs focus:outline-none focus:border-[#3B82F6] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Role / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D14] border border-white/[0.08] text-[#F8FAFC] placeholder-[#94A3B8]/40 text-xs focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0D14] border border-white/[0.08] text-[#F8FAFC] placeholder-[#94A3B8]/40 text-xs focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-accent-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
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