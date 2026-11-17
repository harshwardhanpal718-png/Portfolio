import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Clock
} from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'harshwardhan.pal.analytics@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a message subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch with mailto fallback mechanism
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleDirectMailto = () => {
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      formData.subject || 'Data Analyst Inquiry'
    )}&body=${encodeURIComponent(
      `Hi Harshwardhan,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#080B12] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Let's Connect and <span className="text-gradient">Explore Opportunities</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Whether you have an internship opportunity, a business analytics challenge, or want to discuss a data project, my inbox is always open.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Channels & Resume Download */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-5">
              <h3 className="text-lg font-bold font-heading text-white">
                Contact Information
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Feel free to copy my email or message me on professional channels. I typically respond within 24 hours.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-dark-bg/80 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Email Address</span>
                    <span className="text-xs font-mono font-medium text-slate-200 truncate block">
                      {contactEmail}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn & GitHub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-bg/80 border border-white/5 hover:border-blue-500/40 flex items-center gap-3 group transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">PROFESSIONAL</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">LinkedIn</span>
                  </div>
                </a>

                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-bg/80 border border-white/5 hover:border-purple-500/40 flex items-center gap-3 group transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block">CODE &amp; QUERIES</span>
                    <span className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">GitHub</span>
                  </div>
                </a>
              </div>

              {/* Location & Status */}
              <div className="p-3.5 rounded-xl bg-dark-bg/50 border border-white/5 flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Jaipur, Rajasthan, India • Open to In-office &amp; Remote</span>
              </div>
            </div>

            {/* Resume Callout Card (Requirement 13) */}
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-purple-950/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>
              <h4 className="text-base font-bold font-heading text-white">
                Looking for Harshwardhan's Complete Resume?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Review detailed coursework, project breakdowns, technical tool proficiency, and academic milestones in one document.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume PDF</span>
                </button>

                <a
                  href="/Harshwardhan_Pal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-colors"
                >
                  Preview Document
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been composed. You can also send it directly via your default email client to guarantee instant delivery.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDirectMailto}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/25"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Via Email Client</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ fullName: '', email: '', subject: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-white/10 pb-3 mb-4">
                    <h3 className="text-lg font-bold font-heading text-white">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-muted">
                      All fields are checked to ensure smooth communication.
                    </p>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 border text-white text-xs font-sans placeholder-slate-500 focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. john@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 border text-white text-xs font-sans placeholder-slate-500 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Data Analyst Internship / Project Discussion"
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 border text-white text-xs font-sans placeholder-slate-500 focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share details regarding your team, the dataset, or requirements..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-bg/80 border text-white text-xs font-sans placeholder-slate-500 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-400'
                            : 'border-white/10 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 font-mono">
                      Fast response guaranteed within 24 hours.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
