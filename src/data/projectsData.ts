import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-COMMERCE SALES ANALYSIS',
    subtitle: 'Sales KPIs, multi-region revenue trends, product category diagnostics & margin protection',
    category: 'Business Intelligence',
    status: 'Completed & Interactive Demo',
    tools: ['Python', 'SQL', 'Power BI', 'Excel'],
    businessProblem:
      'A multi-region commercial enterprise experienced inconsistent quarterly revenue and unexplained margin compression. Executive leadership lacked a unified view to determine whether revenue drops stemmed from regional logistics delays, excessive discounting, or underperforming product categories.',
    datasetInfo:
      'Transactional dataset containing 50,000+ sales records across 4 global regions, 3 core product categories (Technology, Furniture, Office Supplies), including unit cost, discount rates, shipping modes, and order timestamps over a 24-month horizon.',
    dataCleaningApproach: [
      'Extracted raw data from transactional MySQL database using modular SQL views and common table expressions (CTEs).',
      'Cleaned inconsistent geographic strings, removed duplicate transactions, and standardized postal codes in Power Query.',
      'Constructed a dynamic Calendar Dimension table to support time-intelligence calculations (YoY, MoM, QTD).',
      'Imputed missing customer segment records and validated numerical constraints on profit margins.'
    ],
    analysisMethodology: [
      'Calculated dynamic DAX measures for YTD Revenue, Prior Year Variance, Gross Margin %, and Discount Sensitivity.',
      'Constructed a Star-Schema dimensional model linking Fact Orders to Dim Customer, Dim Product, and Dim Date.',
      'Conducted Pareto (80/20) analysis to isolate top-performing SKUs contributing disproportionately to gross margin.',
      'Analyzed shipping duration vs customer churn across delivery carriers.'
    ],
    keyInsights: [
      'Top 20% of catalog SKUs drove 74% of total gross profit, while bottom 15% generated negative net margins due to high return rates.',
      'The Southern region suffered an 18% decline in repeat customer orders directly correlated with a 4.2-day average shipping delay.',
      'Promotional discounts above 20% failed to boost order volume and eroded operating margins by 11.4%.'
    ],
    businessRecommendations: [
      'Rationalize unprofitable SKUs in the Furniture category and renegotiate volume discounts with top manufacturers.',
      'Transition Southern region logistics to localized 3PL fulfillment centers to bring average delivery under 48 hours.',
      'Implement an automated discount cap in the POS/checkout system at 18% to preserve baseline margin integrity.'
    ],
    metricsSummary: [
      { label: 'Dataset Records', value: '50,000+' },
      { label: 'Revenue Analyzed', value: '$2.45M' },
      { label: 'Unprofitable SKUs Isolated', value: '15%' },
      { label: 'Logistics SLA Gap', value: '4.2 Days' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal/sales-performance-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal/sales-performance-analysis#dashboard',
    image: '/projects/sales-analysis.svg',
    accentGradient: 'from-red-600 to-rose-900'
  },
  {
    id: 'netflix-data-analysis',
    title: 'NETFLIX DATA ANALYSIS',
    subtitle: 'Global content distribution, genre evolution, runtime metrics, and platform release trajectory',
    category: 'Entertainment Analytics',
    status: 'Case Study',
    tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
    businessProblem:
      'Evaluating how the streaming platform transformed its content library over time—assessing shifts between licensed Hollywood movies, original TV series, and international productions across global markets.',
    datasetInfo:
      '8,807 Netflix titles catalog entries covering release year, date added to platform, rating classification, runtime duration, country of origin, and listed genres.',
    dataCleaningApproach: [
      'Standardized duration metrics by separating "Minutes" for movies and "Seasons" for multi-episode series.',
      'Exploded comma-separated listed genres and multi-country production tags into normalized rows for aggregation.',
      'Converted unstructured "date_added" strings into datetime format, extracting year and month of addition.',
      'Handled null values in Director and Cast columns using clear "Not Specified" placeholders.'
    ],
    analysisMethodology: [
      'Time-series trend analysis examining annual volume of Movie vs TV Show additions from 2008 through 2021.',
      'Geographical content mapping calculating title volume across top producing countries.',
      'Genre co-occurrence network analysis using heatmaps to observe emerging multi-genre blends.'
    ],
    keyInsights: [
      'TV Shows grew from representing 18% of newly added catalog titles in 2015 to over 48% in recent years, signaling an episodic focus.',
      'International productions (notably India, South Korea, and Spain) witnessed a 310% post-2017 acceleration.',
      'Average movie runtime decreased steadily from 108 minutes down to 99 minutes, mirroring shifting viewer attention spans.'
    ],
    businessRecommendations: [
      'Continue aggressive investment in localized international episodic series which exhibit the highest completion rates.',
      'Optimize licensing budgets around mid-length movies (90-100 min) which maximize streaming session completions.'
    ],
    metricsSummary: [
      { label: 'Titles Analyzed', value: '8,807' },
      { label: 'International Surge', value: '+310%' },
      { label: 'Avg Film Runtime', value: '99 Min' },
      { label: 'TV Catalog Growth', value: '18% → 48%' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal/netflix-data-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal/netflix-data-analysis#eda',
    image: '/projects/netflix-analysis.svg',
    accentGradient: 'from-red-600 to-rose-900'
  },
  {
    id: 'customer-behaviour-analysis',
    title: 'CUSTOMER BEHAVIOUR ANALYSIS',
    subtitle: 'Customer purchasing behavior, RFM cohort segmentation, and churn propensity exploration',
    category: 'Customer Analytics',
    status: 'Completed & Interactive Demo',
    tools: ['SQL', 'Excel', 'Power BI'],
    businessProblem:
      'A digital commerce platform was experiencing escalating customer acquisition costs (CAC) alongside a stagnant 90-day repeat purchase rate. Marketing required customer segmentation to deliver tailored retention campaigns rather than generic blanket email blasts.',
    datasetInfo:
      '120,000+ customer transaction rows including unique customer identifiers, invoice timestamps, basket item count, line-item totals, and acquisition channel tags.',
    dataCleaningApproach: [
      'Removed cancelled orders, negative balance transactions, and test store accounts.',
      'Formatted UTC timestamps to local operating timezones and extracted behavioral features (hour of day, day of week).',
      'Handled outlier basket amounts using the Interquartile Range (IQR) technique to avoid skewing cluster centroids.',
      'Engineered normalized Recency (days since last purchase), Frequency (order count), and Monetary value (total spend) features.'
    ],
    analysisMethodology: [
      'Exploratory Data Analysis (EDA) using statistical summaries and distribution plots.',
      'Applied log-transformations and normalization to RFM variables.',
      'Trained an optimal K-Means clustering model (evaluated via Elbow method and Silhouette coefficient).',
      'Built a cohort retention matrix tracking customer survival rates across 12 consecutive months.'
    ],
    keyInsights: [
      'Cluster 1 ("VIP Champions") constituted only 12% of the customer base but delivered 41% of cumulative gross margin.',
      'Customers acquired through organic search had a 2.4x higher 6-month retention rate compared to paid social ad traffic.',
      'Customers with an initial basket size exceeding 3 items had an 82% higher likelihood of making a second purchase within 45 days.'
    ],
    businessRecommendations: [
      'Create an automated VIP loyalty tier providing early access to seasonal launches for Cluster 1 customers.',
      'Reallocate 25% of the paid social acquisition budget towards organic SEO and informative product comparison content.',
      'Introduce bundle discounts on the cart page to nudge first-time buyers over the 3-item threshold.'
    ],
    metricsSummary: [
      { label: 'Transactions Processed', value: '120k+' },
      { label: 'Identified Clusters', value: '4 Tiers' },
      { label: 'VIP Margin Contribution', value: '41%' },
      { label: 'Retention Multiplier', value: '2.4x' }
    ],
    githubUrl: 'https://github.com/harshwardhanpal/ecommerce-customer-analysis',
    liveDemoUrl: 'https://github.com/harshwardhanpal/ecommerce-customer-analysis#notebook',
    image: '/projects/ecommerce-analysis.svg',
    accentGradient: 'from-red-600 to-rose-900'
  }
];
