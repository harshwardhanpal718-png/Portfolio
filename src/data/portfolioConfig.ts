/**
 * =========================================================================
 * 🛠️ MASTER PORTFOLIO CONFIGURATION FILE
 * =========================================================================
 * Bhai, aapko jo bhi text, link, photo, skills ya section badalna ya hatana ho,
 * aap is single file se sab kuch edit kar sakte hain!
 * 
 * 1. Kisi section ko HATAANE ke liye: neeche `sectionVisibility` me true ko false kar dein.
 * 2. Kisi text/link ko BADALNE ke liye: bas text ko edit kar dein.
 * 3. Naye skills ADD karne ke liye: `skillsList` me comma laga kar naya naam likh dein.
 * =========================================================================
 */

// 1. SECTION VISIBILITY (Aap jo section rakhna chahein true karein, jo hatana chahein false karein)
export const sectionVisibility = {
  hero: true,            // Hero Section (Top headline, photo, floating cards)
  about: true,           // About Me (Bio, College, verified stats)
  skills: true,          // Skills & Technologies (4 pastel cards)
  projects: true,        // Featured Projects (Case study cards & details)
  dashboard: false,      // Interactive Dashboard Showcase (Removed as requested)
  experience: true,      // Learning Journey & Certifications
  contact: true,         // Contact Section & Form
};

// 2. PERSONAL INFORMATION (Apni details yahan edit karein)
export const personalInfo = {
  name: 'Harshwardhan Pal',
  shortName: 'HARSHWARDHAN',
  role: 'Data Analyst',
  eyebrow: "HELLO, I'M A",
  headlineMain: 'Turning Raw Data Into',
  headlineAccent: 'Business Insights', // Ye stylish handwritten font me dikhta hai
  tagline: 'Turning Data Into Better Decisions.',
  
  // Hero Section Short Bio
  heroBio:
    'I transform complex datasets into meaningful insights through data analysis, visualization and business intelligence, helping businesses make smarter, data-driven decisions.',

  // About Section Detailed Bio
  aboutBioP1:
    "I'm a passionate Data Analyst who enjoys exploring data, identifying hidden patterns and transforming complex information into clear, actionable business insights.",
  aboutBioP2:
    'My focus is on combining analytical thinking, technical skills and data visualization to solve real-world business problems. I believe that data becomes valuable when it helps people make better decisions.',

  // Education & Location
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Jagannath University, Jaipur',
  graduationYear: 'Expected 2027',
  location: 'Jaipur, Rajasthan, India',
  
  // Status indicator
  availabilityStatus: 'Available for Data Analytics Opportunities',
  
  // Email
  email: 'harshwardhanpal718@gmail.com',
};

// 3. SOCIAL & RESUME LINKS (Aapke verified links)
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/harshwardhan-pal-3a0726293',
  github: 'https://github.com/harshwardhanpal718-png',
  kaggle: 'https://www.kaggle.com/', // Apna Kaggle profile URL
  email: 'mailto:harshwardhanpal718@gmail.com',
  emailAddress: 'harshwardhanpal718@gmail.com',
  resumeFile: '/Harshwardhan_Pal_Resume.pdf', // public/ folder me is naam se PDF hai
};

// 4. HERO SECTION FLOATING CARDS (Photo ke aas-paas ke 3 badges)
export const heroFloatingCards = {
  card1: {
    number: '05+',
    label: 'Analytics Tools',
  },
  card2: {
    number: '04+',
    label: 'Projects Completed',
  },
  card3: {
    title: 'Data Driven',
    subtitle: 'Problem Solver',
  },
};

// 5. ABOUT SECTION STATISTICS
export const aboutStats = [
  { value: '04+', label: 'Projects Completed' },
  { value: '05+', label: 'Analytical Tools' },
  { value: '100%', label: 'Data-Driven Focus' },
];

// 6. SKILLS & EXPERTISE CARDS (Aap jo skill chahein add ya remove kar sakte hain)
export const skillsData = [
  {
    id: 'sql',
    title: 'SQL & DATABASES',
    bgClass: 'bg-[#E5EEF8]',
    borderClass: 'border-[#D2E2F2]',
    iconName: 'Database',
    iconColor: 'text-blue-800',
    description: 'Extracting, querying, cleaning and analyzing structured data using efficient SQL techniques.',
    skills: [
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Joins',
      'CTEs',
      'Window Functions',
      'Query Optimization',
    ],
  },
  {
    id: 'python',
    title: 'PYTHON & DATA ANALYSIS',
    bgClass: 'bg-[#E8F1E8]',
    borderClass: 'border-[#D5E5D5]',
    iconName: 'Terminal',
    iconColor: 'text-emerald-800',
    description: 'Using Python to clean, manipulate, explore and analyze complex datasets.',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Exploratory Data Analysis',
    ],
  },
  {
    id: 'bi',
    title: 'BUSINESS INTELLIGENCE',
    bgClass: 'bg-[#F9EBDD]',
    borderClass: 'border-[#EEDAC7]',
    iconName: 'BarChart3',
    iconColor: 'text-[#8E6347]',
    description: 'Converting business data into interactive dashboards and actionable insights.',
    skills: [
      'Power BI',
      'Tableau',
      'DAX',
      'Data Modeling',
      'KPI Reporting',
      'Data Storytelling',
    ],
  },
  {
    id: 'excel',
    title: 'EXCEL & DATA MANAGEMENT',
    bgClass: 'bg-[#F4E9E7]',
    borderClass: 'border-[#E7D6D3]',
    iconName: 'Table',
    iconColor: 'text-[#965A54]',
    description: 'Organizing, transforming and analyzing data to generate reliable business reports.',
    skills: [
      'Microsoft Excel',
      'Pivot Tables',
      'Power Query',
      'VLOOKUP / XLOOKUP',
      'Data Cleaning',
      'Reporting',
    ],
  },
];

// 7. INTERNSHIP & INDUSTRY EXPERIENCE
export const internshipExperience = {
  role: 'Artificial Intelligence & Data Science Intern',
  company: 'Knowx Innovations Pvt. Ltd.',
  location: 'Bangalore, India',
  period: 'July 13 — August 28, 2026',
  regNo: '1BG23CS407',
  university: 'Jagannath University, Jaipur',
  director: 'Bhimsen G.V (Director & CEO)',
  projectCompleted: 'Speech to Sign Language Translator',
  description:
    'Worked on real-time AI and machine learning projects aligning with industry standards. Gained deep hands-on expertise across data analysis, machine learning pipelines, NLP/speech processing, and predictive modeling.',
  tools: [
    'Pandas',
    'NumPy',
    'TensorFlow',
    'Scikit-learn',
    'Matplotlib',
    'PyAudio',
    'Job-Lib',
    'RAG',
    'SMTP for Mail',
  ],
  certificateImage: '/certificates/knowx-internship-certificate.jpg',
  badge: 'Official Industry Internship',
};

// 8. CERTIFICATIONS & CREDENTIALS
export const certificationsList = [
  {
    title: 'AI & Data Science Industry Internship',
    issuer: 'Knowx Innovations Pvt. Ltd., Bangalore',
    year: 'August 2026',
    badge: 'Verified Certificate',
    skills: 'Pandas, NumPy, TensorFlow, Scikit-learn, PyAudio, RAG & Job-Lib',
    hasCertificateModal: true,
  },
  {
    title: 'SQL & Relational Databases',
    issuer: 'Technical Training Lab',
    year: '2024',
    badge: 'Verified',
    skills: 'Complex JOINs, Window Functions, CTEs, Aggregations',
    hasCertificateModal: false,
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'Practical Data Science Track',
    year: '2024',
    badge: 'Verified',
    skills: 'Pandas DataFrames, NumPy, Matplotlib & Seaborn',
    hasCertificateModal: false,
  },
  {
    title: 'Power BI Business Intelligence',
    issuer: 'Dashboard Analytics Lab',
    year: '2024',
    badge: 'Verified',
    skills: 'DAX Calculations, Star-Schema Modeling, Drill-throughs',
    hasCertificateModal: false,
  },
  {
    title: 'Advanced Excel & Business Analytics',
    issuer: 'Analytics Proficiency Practice',
    year: '2024',
    badge: 'Verified',
    skills: 'XLOOKUP, Pivot Tables, Scenario Modeling, Power Query',
    hasCertificateModal: false,
  },
];
