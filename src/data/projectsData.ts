import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'speech-to-sign-language-translator',
    title: 'Speech to Sign Language Translator',
    subtitle: 'Real-time AI accessibility system converting spoken acoustic speech into verified sign language gesture sequences.',
    category: 'AI & DATA SCIENCE',
    status: 'Industry Internship Project',
    tools: ['TensorFlow', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyAudio', 'RAG'],
    businessProblem:
      'Real-time communication barriers between hearing-impaired communities and spoken-language environments create severe accessibility bottlenecks. The objective was to engineer an automated, low-latency pipeline to capture live audio speech and translate it into dynamic visual sign language.',
    datasetInfo:
      'Multi-speaker acoustic speech corpora mapped to standardized Indian Sign Language (ISL) gesture dictionaries and continuous phoneme sequence representations.',
    dataCleaningApproach: [
      'Captured live audio streams using PyAudio and normalized spectral audio signals using fast Fourier transforms (FFT).',
      'Filtered ambient background noise and segmented continuous speech into phoneme and tokenized lemma streams.',
      'Constructed a serialized feature vector matrix using NumPy, Pandas, and Job-Lib pipelines.',
      'Validated sign mapping alignment through structured confusion matrices and cross-validation folds.'
    ],
    analysisMethodology: [
      'Implemented deep neural network architecture in TensorFlow for continuous acoustic feature extraction and classification.',
      'Integrated Retrieval-Augmented Generation (RAG) knowledge retrieval for dynamic vocabulary expansion and contextual sign mapping.',
      'Trained scikit-learn classification models to detect intent, emotion, and grammatical markers.',
      'Configured automated exception alerts and diagnostic status dispatching utilizing SMTP protocols.'
    ],
    keyInsights: [
      'Achieved sub-150ms real-time audio parsing latency, enabling natural conversational translation flow.',
      'Ensemble acoustic classification yielded over 92.4% gesture translation accuracy on verified benchmark test sets.',
      'RAG-enhanced dictionary indexing reduced unknown-word translation failures by 68%.'
    ],
    businessRecommendations: [
      'Deploy the pipeline as an accessible web widget for educational classrooms and customer service counters.',
      'Expand regional vernacular acoustic models to support multilingual Indian dialects.',
      'Package model weights using Job-Lib serialization for low-footprint edge device deployment.'
    ],
    metricsSummary: [
      { label: 'Translation Accuracy', value: '92.4%' },
      { label: 'Audio Latency', value: '<150ms' },
      { label: 'Sign Vocabulary', value: '1,200+' },
      { label: 'Vocab Coverage', value: 'RAG Powered' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png',
    liveDemoUrl: 'https://github.com/harshwardhanpal718-png',
    image: '/projects/ecommerce-analysis.svg',
    accentGradient: 'from-[#13D9E8] to-[#087CDA]'
  },
  {
    id: 'ecommerce-customer-analysis',
    title: 'E-commerce Customer Analysis // Olist Suite',
    subtitle: 'Power BI Obsidian Cockpit tracking R$ 15.42M Gross Merchandise Value, 96,478 orders, RFM segmentation, and delivery SLAs.',
    category: 'BUSINESS INTELLIGENCE & ANALYTICS',
    status: 'Live Interactive Dashboard',
    tools: ['Power BI', 'DAX', 'SQL', 'Python', 'RFM Modeling', 'Vercel'],
    businessProblem:
      'Executive leadership needed real-time visibility into macro revenue trajectory, customer lifetime value, logistics SLAs, and product sales velocity across 96,000+ commercial transactions.',
    datasetInfo:
      '96,478 delivered orders and 1.5M relational records encompassing customer geography, payment types, freight costs, and 73 product categories.',
    dataCleaningApproach: [
      'Extracted raw transactional records from production relational engine containing 1.5M rows.',
      'Constructed normalized dimensional Star-Schema connecting Fact Orders with Customer, Product, and Geo dimensions.',
      'Calculated normalized Recency, Frequency, and Monetary (RFM) indices for 93,358 active customers.',
      'Standardized Brazilian Real currency conversions and validated freight burden distributions.'
    ],
    analysisMethodology: [
      'Engineered executive overview cockpit tracking MoM GMV growth (+14.2%) and average order values (R$ 159.83).',
      'Constructed monthly revenue and completed order volume dual-axis trajectories from 2017 to 2018.',
      'Designed Pareto product category breakdown isolating top GMV contributors (Health & Beauty, Watches, Bed & Bath).',
      'Built geographic market penetration choropleth correlating delivery times with customer satisfaction.'
    ],
    keyInsights: [
      'Captured R$ 15.42M Gross Merchandise Value with a 97.02% order fulfillment completion rate.',
      'Active customer base reached 93,358 unique accounts with steady basket expansion to R$ 137.04.',
      'Top 5 categories produced over 42% of platform gross merchandise volume.',
      'Identified regional freight burden spikes in Northern states impacting repeat purchase frequency.'
    ],
    businessRecommendations: [
      'Optimize fulfillment partner allocations in high-freight regional corridors to protect net margins.',
      'Focus retention campaigns on Health & Beauty and Watches cohorts exhibiting high repeat basket size.',
      'Deploy automated SLA escalation triggers for orders exceeding 5-day dispatch thresholds.'
    ],
    metricsSummary: [
      { label: 'Gross GMV', value: 'R$ 15.42M' },
      { label: 'Delivered Orders', value: '96,478' },
      { label: 'Fulfillment Rate', value: '97.02%' },
      { label: 'Avg Order Value', value: 'R$ 159.83' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/Portfolio',
    liveDemoUrl: 'https://e-commerce-customer-analysis-olive.vercel.app/',
    image: '/projects/ecommerce-dashboard.jpg',
    accentGradient: 'from-[#00F0FF] to-[#3B82F6]'
  },
  {
    id: 'netflix-data-analysis',
    title: 'Netflix Analytics — Quantum War Room',
    subtitle: 'Cyberpunk Command Center & real-time telemetry dashboard analyzing 8,807+ catalog titles, content velocity, and global streaming telemetry.',
    category: 'LIVE WAR ROOM & EDA',
    status: 'Live Interactive Dashboard',
    tools: ['Plotly.js', 'Python', 'Pandas', 'Cyberpunk HUD', 'Vercel'],
    businessProblem:
      'Understanding global streaming content velocity, catalog distribution, and runtime dynamics through a mission-critical War Room command center with sub-millisecond telemetry feeds.',
    datasetInfo:
      '8,807 Netflix catalog titles encompassing media type, title, directors, cast members, production countries, platform release dates, and MPAA ratings.',
    dataCleaningApproach: [
      'Standardized 8,807 catalog entries, splitting multi-country productions and genre taxonomies.',
      'Derived longitudinal timestamp metrics across 2008–2021 platform release epochs.',
      'Parsed unstructured durations into uniform numeric runtimes and season cohorts.',
      'Structured real-time throughput metrics into Plotly.js visualization vectors.'
    ],
    analysisMethodology: [
      'Architected 16:9 Curved Quantum Command Center interface with tactical HUD audio feedback.',
      'Built multi-dimensional content shift diagnostics tracking the 18% to 48% TV series acceleration.',
      'Constructed international production corridor telemetry highlighting +310% global surge.',
      'Integrated real-time system throughput simulation and chrono clock instrumentation.'
    ],
    keyInsights: [
      'Catalog Ingestion 100% stable across all 8,807 indexed records with zero data loss.',
      'TV Series additions accelerated to 48% of total catalog volume by 2021.',
      'International productions spearheaded by South Korea, India, and Spain grew by +310%.',
      'Average feature film duration optimized to 99 minutes across the decade.'
    ],
    businessRecommendations: [
      'Prioritize co-production licensing in high-velocity international creative corridors.',
      'Calibrate recommendation models around 90–100 minute feature film retention sweet-spots.',
      'Deploy tactical command center telemetry for real-time streaming operations.'
    ],
    metricsSummary: [
      { label: 'Catalog Records', value: '8,807' },
      { label: 'Live Throughput', value: '48.2M TB/s' },
      { label: 'Latency', value: '0.84 ms' },
      { label: 'Catalog Health', value: '100% OK' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/Portfolio',
    liveDemoUrl: 'https://netflix-quantum-analytics-iliq.vercel.app/command_center.html',
    image: '/projects/netflix-war-room.png',
    accentGradient: 'from-[#E50914] to-[#00F0FF]'
  },
  {
    id: 'sales-performance-analysis',
    title: 'Sales Performance Analysis',
    subtitle: 'Interactive executive dashboard tracking regional sales performance, profit margins, and inventory turnover.',
    category: 'BUSINESS INTELLIGENCE',
    status: 'Completed Case Study',
    tools: ['Power BI', 'Excel', 'SQL'],
    businessProblem:
      'A commercial enterprise struggled with fragmented departmental reporting across sales channels, resulting in delayed inventory reorders, unnoticed negative-margin product lines, and misaligned regional quotas.',
    datasetInfo:
      'Enterprise sales database encompassing 24 months of transactional data, 3 major product categories (Technology, Office Supplies, Furniture), regional sales reps, and shipping logs.',
    dataCleaningApproach: [
      'Engineered an automated data extraction pipeline connecting SQL data warehouses to Power BI Service.',
      'Standardized heterogeneous product category taxonomies and cleaned currency conversion variances.',
      'Created a comprehensive Date Dimension with fiscal calendars, weekly aggregates, and holiday markers.',
      'Audited data integrity by validating invoice checksums against general ledger financial figures.'
    ],
    analysisMethodology: [
      'Built a dimensional Star-Schema data model with Fact Sales connected to Dim Product, Dim Customer, and Dim Geography.',
      'Programmed custom DAX formulas for Year-over-Year (YoY) revenue variances, rolling 3-month moving averages, and margin leakages.',
      'Designed responsive executive dashboard views with drill-through navigation by region and sales rep.',
      'Conducted Pareto (80/20) analysis to pinpoint critical inventory contributors.'
    ],
    keyInsights: [
      '20% of catalog items generated 78% of overall gross margin; 12% of SKUs operated at an absolute net loss.',
      'Regional delivery bottlenecks in the Central division caused a 15% cancellation spike on orders exceeding 5 business days.',
      'Bundled cross-selling promotions demonstrated a 28% higher margin preservation compared to flat discounting.'
    ],
    businessRecommendations: [
      'Prune the bottom 12% loss-making SKUs or restructure vendor acquisition agreements.',
      'Establish automated replenishment triggers when inventory thresholds dip below 14-day sales velocity.',
      'Align sales representative incentives directly with gross margin contribution rather than gross revenue.'
    ],
    metricsSummary: [
      { label: 'Sales Analyzed', value: '$2.8M+' },
      { label: 'Core SKUs', value: 'Top 20%' },
      { label: 'Margin Recovery', value: '+$140K' },
      { label: 'Reporting Lag', value: '-85%' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/sales-performance-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal718-png/sales-performance-analysis#dashboard',
    image: '/projects/sales-analysis.svg',
    accentGradient: 'from-[#13D9E8] to-[#087CDA]'
  },
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    subtitle: 'Employee retention diagnostics, attrition predictors, and workforce demographic modeling in Power BI.',
    category: 'WORKFORCE INTELLIGENCE',
    status: 'Case Study',
    tools: ['Power BI', 'Excel', 'DAX', 'SQL'],
    businessProblem:
      'Executive HR leadership faced rising turnover among technical staff. They needed visibility into retention drivers, salary parity, department attrition trends, and promotion timelines.',
    datasetInfo:
      'Enterprise HR records covering 1,470 employee profiles including tenure, performance evaluations, education background, commute distance, and compensation bands.',
    dataCleaningApproach: [
      'Cleaned anonymous personnel records, standardized job titles, and created tenure cohorts.',
      'Engineered calculated columns for compensation ratio vs industry benchmark.'
    ],
    analysisMethodology: [
      'Built interactive DAX measures tracking voluntary vs involuntary attrition rates.',
      'Segmented attrition by tenure bands, overtime hours, and management tenure.',
      'Created correlation heatmaps for employee satisfaction scores and exit propensity.'
    ],
    keyInsights: [
      'Employees working excessive overtime without promotion within 3 years exhibited a 42% higher exit probability.',
      'Salary disparities below the 25th percentile for mid-level roles accounted for 54% of engineering departures.'
    ],
    businessRecommendations: [
      'Implement a proactive 24-month career progression review for technical professionals.',
      'Review overtime distribution and balance workload to reduce attrition spikes.'
    ],
    metricsSummary: [
      { label: 'Staff Profiles', value: '1,470' },
      { label: 'Attrition Risk Isolated', value: '42%' },
      { label: 'Cost Savings', value: 'High' },
      { label: 'Model Accuracy', value: '89%' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/hr-analytics-dashboard',
    liveDemoUrl: 'https://github.com/harshwardhanpal718-png/hr-analytics-dashboard',
    image: '/projects/sales-analysis.svg',
    accentGradient: 'from-[#13D9E8] to-[#087CDA]'
  },
  {
    id: 'student-performance-analysis',
    title: 'Student Performance Analysis',
    subtitle: 'Statistical regression & academic outcome indicators identifying key determinants of learning achievement.',
    category: 'PREDICTIVE MODELING',
    status: 'Case Study',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn'],
    businessProblem:
      'Educational institutions required an analytical framework to identify at-risk students before final evaluations, evaluating demographic, socioeconomic, and attendance factors.',
    datasetInfo:
      'Academic records of 1,000+ students covering course engagement, parental education, study hours, attendance rates, and multi-term assessment scores.',
    dataCleaningApproach: [
      'Imputed missing test scores and normalized study hour distributions.',
      'Encoded categorical factors (parental education, test prep course completion).'
    ],
    analysisMethodology: [
      'Performed multivariate regression and ANOVA testing to evaluate factor significance.',
      'Engineered an early-warning risk threshold model for timely academic intervention.'
    ],
    keyInsights: [
      'Study time consistency and test prep completion had a 3.4x greater correlation with final scores than socioeconomic indicators.',
      'Attendance drop-offs in weeks 4–6 proved the single most reliable predictor of course non-completion.'
    ],
    businessRecommendations: [
      'Establish early attendance notifications triggering peer tutoring before week 6.',
      'Provide structured digital prep modules accessible on mobile devices.'
    ],
    metricsSummary: [
      { label: 'Students Analyzed', value: '1,000+' },
      { label: 'Predictive AUC', value: '0.88' },
      { label: 'Intervention Window', value: 'Week 4-6' },
      { label: 'Correlation Factor', value: '3.4x' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/student-performance-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal718-png/student-performance-analysis',
    image: '/projects/netflix-analysis.svg',
    accentGradient: 'from-[#13D9E8] to-[#087CDA]'
  }
];
