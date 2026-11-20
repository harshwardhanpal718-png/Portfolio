import React from 'react';
import { 
  User, 
  Sparkles, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  ArrowUpRight,
  Database,
  BarChart2,
  Code2,
  Cpu,
  BrainCircuit
} from 'lucide-react';

interface AboutExpertiseProps {
  onOpenResume?: () => void;
}

export const AboutExpertise: React.FC<AboutExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 relative bg-[#031126] overflow-hidden">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#087CDA]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#13D9E8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A35] border border-[rgba(65,190,220,0.3)] mb-3">
            <User className="w-3.5 h-3.5 text-[#13D9E8]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#13D9E8] font-bold">
              PROFILE &amp; CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5FAFF] font-display tracking-tight">
            About Me &amp; <span className="gradient-text-cyan">My Expertise</span>
          </h2>
        </div>

        {/* Dual Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: ABOUT ME (6 Cols) */}
          <div className="lg:col-span-6 glass-card-navy rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#13D9E8]/40 transition-all duration-300">
            {/* Top Cyan Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#13D9E8]/60 to-transparent" />
            
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(65,190,220,0.15)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#061A35] border border-[rgba(65,190,220,0.3)] flex items-center justify-center text-[#13D9E8]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F5FAFF]">About Me</h3>
                    <p className="text-xs text-[#13D9E8] font-mono">Data Analyst</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#061A35] text-[10px] font-mono text-[#A8BBD1] border border-[rgba(65,190,220,0.2)]">
                  HARSHWARDHAN PAL
                </span>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-[#A8BBD1] leading-relaxed mb-6">
                I am a passionate <strong className="text-[#F5FAFF]">Data Analyst</strong> and Computer Science Engineering student dedicated to transforming complex datasets into actionable business intelligence. My analytical focus spans exploratory data analysis, relational query design, statistical modeling, and interactive executive reporting.
              </p>

              <p className="text-sm text-[#A8BBD1] leading-relaxed mb-8">
                I thrive at the intersection of business strategy and analytical rigor—cleaning messy data, uncovering non-obvious correlations, and delivering clear visual narratives that guide executive decisions.
              </p>

              {/* Personal Details & Education */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#061A35]/80 border border-[rgba(65,190,220,0.15)]">
                  <GraduationCap className="w-4 h-4 text-[#13D9E8] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-[#A8BBD1] block font-mono">Education</span>
                    <strong className="text-[#F5FAFF]">B.Tech in Computer Science &amp; Engineering</strong>
                    <span className="text-[#A8BBD1] block">Jagannath University, Jaipur • Expected 2027</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#061A35]/80 border border-[rgba(65,190,220,0.15)] text-xs">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#13D9E8]" />
                    <span className="text-[#F5FAFF]">Jaipur, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#13D9E8] font-mono">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Open to Roles</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#061A35]/80 border border-[rgba(65,190,220,0.15)] text-xs">
                  <Mail className="w-4 h-4 text-[#13D9E8]" />
                  <a 
                    href="mailto:harshwardhan.pal.analytics@gmail.com" 
                    className="text-[#A8BBD1] hover:text-[#13D9E8] transition-colors truncate"
                  >
                    harshwardhan.pal.analytics@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-[rgba(65,190,220,0.15)]">
              <a
                href="#contact"
                className="btn-cyan px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="btn-glass-navy px-5 py-2.5 rounded-xl text-xs font-semibold text-[#F5FAFF] hover:text-[#13D9E8] cursor-pointer"
                >
                  View Full CV
                </button>
              )}
            </div>

          </div>

          {/* RIGHT PANEL: MY EXPERTISE (6 Cols) */}
          <div id="skills" className="lg:col-span-6 glass-card-navy rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group hover:border-[#13D9E8]/40 transition-all duration-300">
            {/* Top Cyan Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#13D9E8]/60 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(65,190,220,0.15)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#061A35] border border-[rgba(65,190,220,0.3)] flex items-center justify-center text-[#13D9E8]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#F5FAFF]">My Expertise</h3>
                    <p className="text-xs text-[#13D9E8] font-mono">Core Competencies</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#061A35] text-[10px] font-mono text-[#A8BBD1] border border-[rgba(65,190,220,0.2)]">
                  ANALYTICS STACK
                </span>
              </div>

              {/* Categorized Skills Breakdown with Cyan Separators */}
              <div className="space-y-4">
                
                {/* 1. Data Analysis */}
                <div className="pb-3 border-b border-[rgba(65,190,220,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-4 h-4 text-[#13D9E8]" />
                    <span className="text-xs font-bold font-mono text-[#F5FAFF] uppercase tracking-wider">
                      Data Analysis
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Exploratory Data Analysis (EDA)', 'Data Cleaning & Wrangling', 'Statistical Analysis', 'Trend Identification', 'KPI Tracking'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md bg-[#061A35] text-xs text-[#A8BBD1] border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8] hover:text-[#F5FAFF] transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Programming & Scripting */}
                <div className="pb-3 border-b border-[rgba(65,190,220,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-[#13D9E8]" />
                    <span className="text-xs font-bold font-mono text-[#F5FAFF] uppercase tracking-wider">
                      Programming &amp; Scripting
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python (Pandas, NumPy)', 'Matplotlib & Seaborn', 'SQL (PostgreSQL, MySQL)', 'DAX'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md bg-[#061A35] text-xs text-[#A8BBD1] border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8] hover:text-[#F5FAFF] transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Data Visualization */}
                <div className="pb-3 border-b border-[rgba(65,190,220,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4 text-[#13D9E8]" />
                    <span className="text-xs font-bold font-mono text-[#F5FAFF] uppercase tracking-wider">
                      Data Visualization &amp; BI
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Power BI Dashboards', 'Advanced Excel (XLOOKUP, Pivot)', 'Macros & Modeling', 'Interactive Charts'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md bg-[#061A35] text-xs text-[#A8BBD1] border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8] hover:text-[#F5FAFF] transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Databases & Storage */}
                <div className="pb-3 border-b border-[rgba(65,190,220,0.12)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-[#13D9E8]" />
                    <span className="text-xs font-bold font-mono text-[#F5FAFF] uppercase tracking-wider">
                      Databases &amp; Querying
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Relational Databases (MySQL, PostgreSQL)', 'Query Optimization', 'Relational Schemas', 'Window Functions & CTEs'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md bg-[#061A35] text-xs text-[#A8BBD1] border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8] hover:text-[#F5FAFF] transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. Core Knowledge */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BrainCircuit className="w-4 h-4 text-[#13D9E8]" />
                    <span className="text-xs font-bold font-mono text-[#F5FAFF] uppercase tracking-wider">
                      Analytical Mindset
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Business Intelligence', 'Data Storytelling', 'Root-Cause Diagnosis', 'Analytical Thinking'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md bg-[#061A35] text-xs text-[#A8BBD1] border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8] hover:text-[#F5FAFF] transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Footer Note */}
            <div className="pt-4 mt-4 border-t border-[rgba(65,190,220,0.15)] flex items-center justify-between text-[11px] font-mono text-[#A8BBD1]">
              <span>TOOLS TESTED ON REAL DATASETS</span>
              <span className="text-[#13D9E8]">100% PRODUCTION-READY CODE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
