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
    title: 'E-commerce Customer Analysis',
    subtitle: 'Segmented customer buying behaviors, retention cohorts, and revenue drivers across 50,000+ transaction records.',
    category: 'DATA ANALYTICS',
    status: 'Completed Case Study',
    tools: ['Python', 'Pandas', 'SQL', 'Power BI', 'Excel'],
    businessProblem:
      'A global retail enterprise experienced unpredictable quarterly retention rates and margin compression. Management needed deep customer segmentation to identify high-value cohorts, detect churn early, and optimize promotional expenditure.',
    datasetInfo:
      '50,000+ order records across 4 geographic regions, containing customer identifiers, transaction dates, product categories, discount tiers, shipping SLAs, and profit margins.',
    dataCleaningApproach: [
      'Extracted raw data from relational MySQL database utilizing CTEs and partitioned views.',
      'Treated anomalous negative spend records, null postal codes, and duplicated order lines.',
      'Calculated normalized Recency, Frequency, and Monetary (RFM) indices for each distinct customer.',
      'Constructed a robust Calendar Dimension table in Power Query for cohort retention tracking.'
    ],
    analysisMethodology: [
      'Engineered an RFM segmentation model categorizing consumers into VIP Champions, Loyalists, and At-Risk groups.',
      'Performed cohort survival analysis across 12 consecutive months to evaluate retention curves.',
      'Analyzed price elasticity and discount sensitivity across core product lines.',
      'Designed an interactive Power BI dashboard featuring dynamic slicers and DAX margin measures.'
    ],
    keyInsights: [
      'VIP Champions accounted for only 14% of the customer base but generated 46% of total net profits.',
      'Orders with promotional discounts above 20% exhibited a 22% higher return rate with zero lifetime value gain.',
      'Repeat orders within 30 days increased by 3.2x when initial shipments were delivered within 48 hours.'
    ],
    businessRecommendations: [
      'Launch targeted VIP early-access incentives rather than broad-scale margin-diluting discount codes.',
      'Prioritize fulfillment center logistics in low-performing regions to maintain SLA integrity.',
      'Automate re-engagement triggers at day 45 for consumers entering the "At-Risk" RFM cluster.'
    ],
    metricsSummary: [
      { label: 'Records Processed', value: '50,000+' },
      { label: 'VIP Profit Share', value: '46%' },
      { label: 'Retention Boost', value: '3.2x' },
      { label: 'Margin Recovery', value: '+14%' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/ecommerce-customer-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal718-png/ecommerce-customer-analysis#dashboard',
    image: '/projects/ecommerce-analysis.svg',
    accentGradient: 'from-[#13D9E8] to-[#087CDA]'
  },
  {
    id: 'netflix-data-analysis',
    title: 'Netflix Data Analysis',
    subtitle: 'Comprehensive exploratory analysis uncovering global content distribution patterns, genre evolution, and release trends.',
    category: 'EXPLORATORY DATA ANALYSIS',
    status: 'Completed Case Study',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    businessProblem:
      'Understanding how the streaming platform has shifted its content strategy over time—specifically evaluating the volume transition between licensed films and in-house TV series across diverse international production hubs.',
    datasetInfo:
      '8,807 Netflix catalog titles encompassing media type, title, directors, cast members, production countries, platform release dates, and MPAA ratings.',
    dataCleaningApproach: [
      'Parsed unstructured duration strings into standardized numeric minutes (for movies) and season counts (for TV shows).',
      'Exploded multi-country production credits and listed genre tags into normalized relational tables.',
      'Converted inconsistent "date_added" entries into structured datetime timestamps with derived year and month columns.',
      'Handled missing values in director and production fields using explicit imputation strategies.'
    ],
    analysisMethodology: [
      'Conducted longitudinal time-series analysis comparing Movies vs TV Series additions from 2008 to 2021.',
      'Constructed a global geographic distribution choropleth mapping title volume across 80+ nations.',
      'Generated multi-genre co-occurrence heatmaps to reveal crossover content trends.',
      'Evaluated content rating distributions (TV-MA, TV-14, PG-13) across target demographic segments.'
    ],
    keyInsights: [
      'TV Shows grew from 18% of platform additions in 2015 to over 48% by 2021, reflecting a strategic pivot toward episodic retention.',
      'International productions (spearheaded by South Korea, India, and Spain) experienced a 310% post-2017 acceleration.',
      'Average feature film duration condensed steadily from 108 minutes to 99 minutes over the analyzed decade.'
    ],
    businessRecommendations: [
      'Prioritize co-production licensing in high-velocity international creative corridors with proven viewer completion.',
      'Focus feature-film investments on 90–100 minute formats that optimize single-session completion rates.'
    ],
    metricsSummary: [
      { label: 'Catalog Titles', value: '8,807' },
      { label: 'TV Shift', value: '18% → 48%' },
      { label: 'Global Surge', value: '+310%' },
      { label: 'Avg Duration', value: '99 Min' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal718-png/netflix-data-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal718-png/netflix-data-analysis#eda',
    image: '/projects/netflix-analysis.svg',
    accentGradient: 'from-[#13D9E8] to-[#087CDA]'
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
