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
    const mailto = `mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Data Analytics Role / Project Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-[#7C3AED]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#06B6D4] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let's Turn Data <span className="gradient-text">Into Insights.</span>
          </h2>
          <p className="text-sm text-[#94A3B8] mt-2 font-sans">
            "Have an interesting project or opportunity? Let's connect."
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#F59E0B] mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white">
                Initiate Conversation
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                I am actively seeking data analyst internships, entry-level opportunities, and analytical collaborative projects. Reach out via email, LinkedIn, or the inquiry form.
              </p>

              {/* Email with Copy */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#06B6D4] shrink-0" />
                  <span className="text-xs font-mono text-slate-200 truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#94A3B8] hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#06B6D4]" /> : <Copy className="w-3.5 h-3.5 text-[#94A3B8]" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl btn-secondary flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl btn-secondary flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white"
                >
                  <Github className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Quick Resume Card */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between gap-4 border border-white/[0.08]">
              <div>
                <span className="text-xs font-bold text-white block">Download Resume</span>
                <span className="text-[11px] text-[#94A3B8]">Verified PDF Curriculum</span>
              </div>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-xl btn-primary text-white text-xs font-bold flex items-center gap-1.5 transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/30 text-[#06B6D4] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-[#94A3B8] max-w-sm mx-auto font-sans leading-relaxed">
                    Click below to open your preferred email client with your message pre-filled and ready to send.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-5 py-2.5 rounded-xl btn-primary text-white text-xs font-bold flex items-center gap-1.5 transition-opacity"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl btn-secondary text-slate-300 hover:text-white text-xs font-medium"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#94A3B8]/60 text-xs focus:outline-none focus:border-[#06B6D4] focus:bg-white/[0.06] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#94A3B8]/60 text-xs focus:outline-none focus:border-[#06B6D4] focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Role / Business Intelligence Project"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#94A3B8]/60 text-xs focus:outline-none focus:border-[#06B6D4] focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94A3B8] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your analytical inquiry or message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-[#94A3B8]/60 text-xs focus:outline-none focus:border-[#06B6D4] focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl btn-primary text-white text-xs font-bold flex items-center justify-center gap-2"
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
