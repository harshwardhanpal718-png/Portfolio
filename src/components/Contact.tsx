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
    <section id="contact" className="py-16 md:py-20 border-t border-[#4717F6]/25 bg-[#0E0B16] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#A239CA] uppercase tracking-wider block mb-1">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#E7DFDD] tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4717F6] to-[#A239CA] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#151022] border border-[#4717F6]/30 rounded-2xl p-6 space-y-4 shadow-sm">
              <h3 className="text-base font-bold text-[#E7DFDD]">
                Let's Connect
              </h3>
              <p className="text-xs text-[#A99F9D] leading-relaxed font-sans">
                I am open to data analyst internships, entry-level opportunities, and collaborative analytical projects.
              </p>

              {/* Email with Copy */}
              <div className="p-3.5 rounded-xl bg-[#0E0B16] border border-[#4717F6]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#A239CA] shrink-0" />
                  <span className="text-xs font-mono text-[#E7DFDD] truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-[#181228] text-[#A99F9D] hover:text-[#E7DFDD] transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#A239CA]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0E0B16] border border-[#4717F6]/30 hover:border-[#A239CA] flex items-center justify-center gap-2 text-xs font-semibold text-[#A99F9D] hover:text-[#E7DFDD] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#4717F6]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0E0B16] border border-[#4717F6]/30 hover:border-[#A239CA] flex items-center justify-center gap-2 text-xs font-semibold text-[#A99F9D] hover:text-[#E7DFDD] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-[#A99F9D] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#A239CA] shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Quick Resume Card */}
            <div className="bg-[#151022] border border-[#4717F6]/30 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs font-semibold text-[#E7DFDD] block">Download Resume</span>
                <span className="text-[11px] text-[#A99F9D]">PDF Format (Verified details)</span>
              </div>
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 rounded-lg bg-[#4717F6] hover:bg-[#A239CA] border border-[#4717F6] hover:border-[#A239CA] text-[#E7DFDD] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-jewel-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#E7DFDD]" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7">
            <div className="bg-[#151022] border border-[#4717F6]/30 rounded-2xl p-6 sm:p-7 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0E0B16] border border-[#4717F6] text-[#A239CA] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#E7DFDD]">Message Ready!</h4>
                  <p className="text-xs text-[#A99F9D] max-w-sm mx-auto font-sans">
                    Click below to send via your email client or write another message.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-4 py-2 rounded-lg bg-[#4717F6] hover:bg-[#A239CA] border border-[#4717F6] hover:border-[#A239CA] text-[#E7DFDD] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-jewel-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Email</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-3 py-2 rounded-lg bg-[#0E0B16] border border-[#4717F6]/30 text-[#A99F9D] hover:text-[#E7DFDD] text-xs font-medium"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {error && (
                    <div className="p-3 rounded-lg bg-[#0E0B16] border border-[#A239CA] text-[#E7DFDD] text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#A239CA]" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A99F9D] mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/30 text-[#E7DFDD] placeholder-[#A99F9D]/40 text-xs focus:outline-none focus:border-[#A239CA] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#A99F9D] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/30 text-[#E7DFDD] placeholder-[#A99F9D]/40 text-xs focus:outline-none focus:border-[#A239CA] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A99F9D] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Role / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/30 text-[#E7DFDD] placeholder-[#A99F9D]/40 text-xs focus:outline-none focus:border-[#A239CA] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A99F9D] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/30 text-[#E7DFDD] placeholder-[#A99F9D]/40 text-xs focus:outline-none focus:border-[#A239CA] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#4717F6] hover:bg-[#A239CA] border border-[#4717F6] hover:border-[#A239CA] text-[#E7DFDD] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-jewel-sm"
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