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
    <section id="contact" className="py-16 md:py-20 border-t border-[#235347]/60 bg-[#0B2B26]/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#8EB69B] uppercase tracking-wider block mb-1">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#DAF1DE] tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-1 bg-[#235347] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#163832] border border-[#235347] rounded-2xl p-6 space-y-4 shadow-forest-sm">
              <h3 className="text-base font-bold text-[#DAF1DE]">
                Let's Connect
              </h3>
              <p className="text-xs text-[#8EB69B] leading-relaxed font-sans">
                I am open to data analyst internships, entry-level opportunities, and collaborative analytical projects.
              </p>

              {/* Email with Copy */}
              <div className="p-3.5 rounded-xl bg-[#0B2B26] border border-[#235347] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#8EB69B] shrink-0" />
                  <span className="text-xs font-mono text-[#DAF1DE] truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-md hover:bg-[#163832] text-[#8EB69B] hover:text-[#DAF1DE] transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#DAF1DE]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0B2B26] border border-[#235347] hover:border-[#8EB69B] flex items-center justify-center gap-2 text-xs font-semibold text-[#8EB69B] hover:text-[#DAF1DE] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0B2B26] border border-[#235347] hover:border-[#8EB69B] flex items-center justify-center gap-2 text-xs font-semibold text-[#8EB69B] hover:text-[#DAF1DE] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-[#8EB69B] pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#8EB69B] shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            {/* Quick Resume Card */}
            <div className="bg-[#163832] border border-[#235347] rounded-2xl p-5 flex items-center justify-between gap-4 shadow-forest-sm">
              <div>
                <span className="text-xs font-semibold text-[#DAF1DE] block">Download Resume</span>
                <span className="text-[11px] text-[#8EB69B]">PDF Format (Verified details)</span>
              </div>
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 rounded-lg bg-[#235347] hover:bg-[#163832] border border-[#235347] hover:border-[#8EB69B] text-[#DAF1DE] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#8EB69B]" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7">
            <div className="bg-[#163832] border border-[#235347] rounded-2xl p-6 sm:p-7 shadow-forest-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#0B2B26] border border-[#235347] text-[#DAF1DE] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#DAF1DE]">Message Ready!</h4>
                  <p className="text-xs text-[#8EB69B] max-w-sm mx-auto font-sans">
                    Click below to send via your email client or write another message.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-4 py-2 rounded-lg bg-[#235347] hover:bg-[#163832] border border-[#235347] hover:border-[#8EB69B] text-[#DAF1DE] text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Email</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-3 py-2 rounded-lg bg-[#0B2B26] border border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] text-xs font-medium"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {error && (
                    <div className="p-3 rounded-lg bg-[#0B2B26] border border-[#8EB69B] text-[#DAF1DE] text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-[#8EB69B]" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#8EB69B] mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#051F20] border border-[#235347] text-[#DAF1DE] placeholder-[#8EB69B]/40 text-xs focus:outline-none focus:border-[#8EB69B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8EB69B] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#051F20] border border-[#235347] text-[#DAF1DE] placeholder-[#8EB69B]/40 text-xs focus:outline-none focus:border-[#8EB69B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8EB69B] mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Role / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#051F20] border border-[#235347] text-[#DAF1DE] placeholder-[#8EB69B]/40 text-xs focus:outline-none focus:border-[#8EB69B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8EB69B] mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#051F20] border border-[#235347] text-[#DAF1DE] placeholder-[#8EB69B]/40 text-xs focus:outline-none focus:border-[#8EB69B] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#235347] hover:bg-[#163832] border border-[#235347] hover:border-[#8EB69B] text-[#DAF1DE] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
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
