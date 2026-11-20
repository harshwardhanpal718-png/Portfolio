import React, { useState } from 'react';
import { Calendar, Award, CheckCircle2, FileText, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { CertificateModal } from './CertificateModal';
import { internshipExperience } from '../data/portfolioConfig';

export const ExperienceEducation: React.FC = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const learningTimeline = [
    {
      period: internshipExperience.period,
      title: internshipExperience.role,
      institution: internshipExperience.company,
      location: internshipExperience.location,
      status: 'Completed with Honors',
      description: internshipExperience.description,
      projectTitle: internshipExperience.projectCompleted,
      highlights: internshipExperience.tools,
      badge: 'Industry Internship',
      bgClass: 'bg-[#FAF7F2] border-[#C8A287]/40',
      isInternship: true,
    },
    {
      period: '2023 — Present',
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'Jagannath University, Jaipur',
      location: 'Jaipur, Rajasthan',
      status: 'In Progress (Expected 2027)',
      description: 'Specializing in data analytics foundations, relational database management systems (RDBMS), statistical analysis, and algorithm design.',
      projectTitle: null,
      highlights: ['Data Structures & Algorithms', 'Database Management (SQL)', 'Statistical Modeling', 'Software Engineering'],
      badge: 'Academic Degree',
      bgClass: 'bg-[#E5EEF8] border-[#D2E2F2]',
      isInternship: false,
    },
    {
      period: '2024 — Present',
      title: 'Independent Data Analytics Practice & Projects',
      institution: 'Self-Directed Portfolio Labs',
      location: 'Remote / Jaipur',
      status: 'Active',
      description: 'Building end-to-end analytical pipelines: raw SQL extraction, data wrangling in Python Pandas, DAX modeling, and Power BI executive dashboards across retail and entertainment datasets.',
      projectTitle: null,
      highlights: ['Customer Segmentation (RFM)', 'Sales KPI Tracking', 'Exploratory Data Analysis (EDA)', 'Executive Dashboards'],
      badge: 'Applied Practice',
      bgClass: 'bg-[#E8F1E8] border-[#D5E5D5]',
      isInternship: false,
    }
  ];

  const certifications = [
    {
      title: 'AI & Data Science Industry Internship',
      issuer: 'Knowx Innovations Pvt. Ltd.',
      year: 'August 2026',
      badge: 'Verified Credential',
      skills: 'Pandas, NumPy, TensorFlow, Scikit-learn, PyAudio, RAG & Job-Lib',
      hasModal: true,
      bgClass: 'bg-[#FAF7F2] border-[#C8A287]/60',
    },
    {
      title: 'SQL & Relational Databases',
      issuer: 'Technical Training Lab',
      year: '2024',
      badge: 'Verified',
      skills: 'Complex JOINs, Window Functions, CTEs, Aggregations',
      hasModal: false,
      bgClass: 'bg-[#FAF7F2] border-[#EBE5DC]',
    },
    {
      title: 'Python for Data Analysis',
      issuer: 'Practical Data Science Track',
      year: '2024',
      badge: 'Verified',
      skills: 'Pandas DataFrames, NumPy, Matplotlib & Seaborn',
      hasModal: false,
      bgClass: 'bg-[#FAF7F2] border-[#EBE5DC]',
    },
    {
      title: 'Power BI Business Intelligence',
      issuer: 'Dashboard Analytics Lab',
      year: '2024',
      badge: 'Verified',
      skills: 'DAX Calculations, Star-Schema Modeling, Drill-throughs',
      hasModal: false,
      bgClass: 'bg-[#FAF7F2] border-[#EBE5DC]',
    },
    {
      title: 'Advanced Excel & Business Analytics',
      issuer: 'Analytics Proficiency Practice',
      year: '2024',
      badge: 'Verified',
      skills: 'XLOOKUP, Pivot Tables, Scenario Modeling, Power Query',
      hasModal: false,
      bgClass: 'bg-[#FAF7F2] border-[#EBE5DC]',
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#EBE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EBE5DC]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] mb-2 block font-sans">
              EXPERIENCE &amp; EDUCATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171923] tracking-tight">
              Professional Growth &amp; <span className="italic font-serif text-[#A98468]">Credentials</span>.
            </h2>
          </div>
          <p className="text-sm text-[#62616A] max-w-md font-sans leading-relaxed">
            Hands-on industry internship experience, university computer science foundations, and verified practical competencies.
          </p>
        </div>

        {/* Featured Internship Spotlight Banner */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#A98468]/30 shadow-soft-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9EBDD]/50 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F9EBDD] border border-[#EEDAC7] flex items-center justify-center text-[#A98468] shrink-0 shadow-xs">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8F1E8] text-emerald-900 border border-[#DCE9DF] font-sans">
                    ★ Verified Industry Internship
                  </span>
                  <span className="text-xs text-[#62616A] font-sans">
                    Knowx Innovations Pvt. Ltd. (Bangalore)
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171923] tracking-tight mb-2">
                  Artificial Intelligence &amp; Data Science Intern
                </h3>
                <p className="text-xs sm:text-sm text-[#62616A] font-sans max-w-2xl leading-relaxed">
                  Completed industrial training focusing on AI, Machine Learning, and Data Science. Developed and delivered an end-to-end real-time project: <strong className="text-[#171923] font-semibold">Speech to Sign Language Translator</strong> under Director &amp; CEO Bhimsen G.V.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => setIsCertificateOpen(true)}
                className="btn-dark px-6 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-2 shadow-soft hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#A98468]" />
                <span>View Verified Certificate</span>
                <span className="text-[10px] bg-[#A98468] text-white px-1.5 py-0.5 rounded-full uppercase">Official</span>
              </button>
              <a
                href={internshipExperience.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cream-border px-5 py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 hover:border-[#171923] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#A98468]" />
                <span>Open Full</span>
              </a>
            </div>
          </div>
        </div>

        {/* Education & Experience Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {learningTimeline.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bgClass} border rounded-3xl p-7 flex flex-col justify-between shadow-card hover:-translate-y-1 transition-all duration-300 relative`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-[#171923] border border-white shadow-xs font-sans">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#62616A] font-sans">
                    <Calendar className="w-3.5 h-3.5 text-[#A98468]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#171923] tracking-tight mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-medium text-[#A98468] mb-4 font-sans">
                  <span>{item.institution}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>

                <p className="text-xs text-[#62616A] leading-relaxed mb-4 font-sans">
                  {item.description}
                </p>

                {item.projectTitle && (
                  <div className="p-3 rounded-2xl bg-white/80 border border-[#EBE5DC] mb-4">
                    <span className="text-[10px] font-bold text-[#A98468] uppercase tracking-wider block font-sans">
                      Key Real-Time Project Delivered:
                    </span>
                    <span className="text-xs font-semibold text-[#171923] font-sans">
                      {item.projectTitle}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-black/5">
                  <span className="text-[10px] font-semibold text-[#62616A] uppercase tracking-wider block mb-2 font-sans">
                    CORE COMPETENCIES &amp; TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="px-2.5 py-1 rounded-full bg-white/90 border border-white text-[11px] font-medium text-[#171923] font-sans shadow-xs"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {item.isInternship && (
                  <button
                    onClick={() => setIsCertificateOpen(true)}
                    className="w-full py-2.5 px-4 rounded-2xl bg-[#171923] text-white hover:bg-black text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer font-sans shadow-soft"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#A98468]" />
                    <span>View Official Certificate Modal</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certifications Section Sub-Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] mb-1 block font-sans">
              CREDENTIALS &amp; CERTIFICATIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171923]">
              Verified <span className="italic font-serif text-[#A98468]">Credentials</span> &amp; Industry Standards
            </h3>
          </div>
          <p className="text-xs text-[#62616A] font-sans">
            Click on verified certificates to preview official documentation.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certifications.map((cert, cIdx) => (
            <div
              key={cIdx}
              onClick={() => cert.hasModal && setIsCertificateOpen(true)}
              className={`card-editorial p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all ${cert.hasModal ? 'cursor-pointer border-2 border-[#A98468]/40 hover:border-[#A98468] bg-white shadow-soft' : ''
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${cert.hasModal ? 'bg-[#E8F1E8] text-emerald-800' : 'bg-[#F9EBDD] text-[#A98468]'
                    }`}>
                    {cert.hasModal ? <Sparkles className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                  </div>
                  <span className={`text-[10px] font-bold font-sans uppercase tracking-wider px-2 py-0.5 rounded-full ${cert.hasModal ? 'bg-[#E8F1E8] text-emerald-900 border border-[#DCE9DF]' : 'bg-[#FAF7F2] text-[#62616A] border border-[#EBE5DC]'
                    }`}>
                    {cert.badge}
                  </span>
                </div>

                <h4 className="font-serif text-base font-bold text-[#171923] mb-1 group-hover:text-[#A98468] transition-colors leading-snug">
                  {cert.title}
                </h4>
                <span className="text-xs text-[#A98468] font-medium block mb-3 font-sans">
                  {cert.issuer} • {cert.year}
                </span>

                <p className="text-[11px] text-[#62616A] leading-relaxed font-sans">
                  {cert.skills}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#EBE5DC] flex items-center justify-between text-xs font-sans font-medium">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{cert.hasModal ? 'Official Doc' : 'Verified'}</span>
                </div>
                {cert.hasModal && (
                  <span className="text-[11px] text-[#A98468] group-hover:underline flex items-center gap-0.5">
                    View ↗
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        certificateUrl={internshipExperience.certificateImage}
        title={internshipExperience.role}
        issuer={internshipExperience.company}
        date={internshipExperience.period}
      />
    </section>
  );
};
