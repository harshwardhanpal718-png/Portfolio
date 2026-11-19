import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Download, CheckCircle2, Copy, Check } from 'lucide-react';

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

  const emailAddress = 'harshwardhan.pal.analytics@gmail.com';

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
    <section id="contact" className="py-24 border-t border-[#242424] bg-[#050505] relative overflow-hidden">
      
      {/* Background Subtle Red Lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#C81024]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dramatic Large Heading & Contact Info (6 Columns) */}
          <div className="lg:col-span-6 space-y-8">
            
            <div>
              <span className="text-xs font-mono tracking-widest text-[#C81024] uppercase block mb-3 font-bold">
                INITIATE CONTACT
              </span>
              <h2 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[0.9] text-white tracking-tight uppercase">
                LET'S WORK <br />
                <span className="text-[#C81024]">WITH DATA.</span>
              </h2>
            </div>

            <p className="text-base text-[#A1A1AA] leading-relaxed font-sans max-w-lg">
              "Have a business problem that needs a data-driven solution? Let's connect and explore what insights your data can reveal."
            </p>

            {/* Opportunities Badge */}
            <div className="p-4 bg-[#0B0B0B] border border-[#242424] border-l-4 border-l-[#C81024] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C81024] shrink-0" />
              <div>
                <span className="text-xs font-mono text-white font-bold block uppercase tracking-wider">
                  Available for Data Analyst Opportunities
                </span>
                <span className="text-xs text-[#A1A1AA] font-sans">
                  Open for internships, junior analytical roles &amp; dashboard consulting.
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Email with 1-click copy */}
              <div className="p-4 bg-[#0B0B0B] border border-[#242424] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#C81024] shrink-0" />
                  <span className="text-white truncate">{emailAddress}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 bg-[#141414] hover:bg-[#C81024] text-[#A1A1AA] hover:text-white transition-colors text-[10px] uppercase flex items-center gap-1 shrink-0"
                >
                  {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Location */}
              <div className="p-4 bg-[#0B0B0B] border border-[#242424] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C81024] shrink-0" />
                <span className="text-[#A1A1AA]">Location: <strong className="text-white font-medium">India</strong></span>
              </div>

            </div>

            {/* Action Buttons: Resume & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 btn-crimson flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0B0B0B] border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0B0B0B] border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  className="p-3 bg-[#0B0B0B] border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form (6 Columns) */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B0B0B] border border-[#242424] p-8 sm:p-10 relative shadow-2xl">
              
              {/* Crimson Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#C81024]" />

              <h3 className="font-display text-2xl text-white tracking-wider uppercase mb-6">
                SEND AN ANALYTICAL MESSAGE
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C81024]/10 border border-[#C81024] text-[#C81024] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-3xl text-white tracking-wider">
                    MESSAGE PREPARED!
                  </h4>
                  <p className="text-xs text-[#A1A1AA] max-w-sm mx-auto font-sans">
                    Click below to trigger your default email client with all your message fields pre-filled.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-6 py-3 btn-crimson text-xs flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>DISPATCH VIA EMAIL</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 border border-[#242424] text-[#A1A1AA] text-xs font-mono hover:text-white"
                    >
                      RESET
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-[#050505] border border-[#242424] focus:border-[#C81024] text-white text-xs font-mono focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="w-full px-4 py-3 bg-[#050505] border border-[#242424] focus:border-[#C81024] text-white text-xs font-mono focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Opportunity / Dashboard Project"
                      className="w-full px-4 py-3 bg-[#050505] border border-[#242424] focus:border-[#C81024] text-white text-xs font-mono focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your business problem, project scope, or opportunity..."
                      className="w-full px-4 py-3 bg-[#050505] border border-[#242424] focus:border-[#C81024] text-white text-xs font-mono focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 btn-crimson text-center flex items-center justify-center gap-2 mt-4"
                  >
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
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
