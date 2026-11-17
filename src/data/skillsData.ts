import { SkillCategory } from '../types';

export const skillsCategories: SkillCategory[] = [
  {
    id: 'analytics',
    title: 'Data Analytics & BI',
    badge: 'Core Competency',
    iconName: 'BarChart3',
    description: 'Transforming ambiguous, unstructured data into clean models, business metrics, and high-impact dashboards.',
    skills: [
      {
        name: 'Microsoft Excel',
        description: 'Advanced lookup functions (XLOOKUP, INDEX/MATCH), dynamic Pivot Tables, and automated Power Query ETL pipelines.',
        tag: 'Spreadsheet & ETL',
        highlight: true
      },
      {
        name: 'Power BI',
        description: 'Interactive dashboard authoring, Star-Schema dimensional modeling, and custom DAX measures (YTD, YoY, MTD).',
        tag: 'BI & Reporting',
        highlight: true
      },
      {
        name: 'Data Cleaning',
        description: 'Detecting missing values, removing duplicates, parsing irregular strings, handling outliers, and formatting normalization.',
        tag: 'Data Wrangling'
      },
      {
        name: 'Data Visualization',
        description: 'Translating analytical findings into intuitive visual narratives, charts, heatmaps, and executive presentation visuals.',
        tag: 'Storytelling'
      },
      {
        name: 'Statistics',
        description: 'Descriptive stats, distributions, hypothesis testing (t-tests, ANOVA), confidence intervals, and correlation analysis.',
        tag: 'Foundational'
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        description: 'Formulating hypotheses, investigating distributions, uncovering hidden anomalies, and identifying behavioral patterns.',
        tag: 'Analytical Method'
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    badge: 'Analytical Scripting',
    iconName: 'Code2',
    description: 'Writing reproducible, clean queries and scripts for data extraction, manipulation, and pipeline automation.',
    skills: [
      {
        name: 'Python',
        description: 'Automated data manipulation scripts, analytical pipelines, statistical computing, and programmatic data exploration.',
        tag: 'Core Language',
        highlight: true
      },
      {
        name: 'SQL',
        description: 'Relational data extraction, multi-table JOINs, Common Table Expressions (CTEs), Subqueries, and Window Functions.',
        tag: 'Database Queries',
        highlight: true
      }
    ]
  },
  {
    id: 'python-libraries',
    title: 'Python Data Science Ecosystem',
    badge: 'Libraries & Tooling',
    iconName: 'Boxes',
    description: 'Specialized analytical libraries for tabular computing, array processing, and statistical visualizations.',
    skills: [
      {
        name: 'Pandas',
        description: 'High-performance DataFrame wrangling, grouping, merging, pivot tables, and time-series date indexing.',
        tag: 'DataFrames',
        highlight: true
      },
      {
        name: 'NumPy',
        description: 'Fast numerical computing, multi-dimensional array vectorization, statistical functions, and matrix transformations.',
        tag: 'Numerical'
      },
      {
        name: 'Matplotlib',
        description: 'Fine-grained customization of charts, multi-panel subplots, distributions, and publication-ready static figures.',
        tag: 'Plotting'
      },
      {
        name: 'Seaborn',
        description: 'Statistical data visualization, bivariate kernel densities, correlation heatmaps, categorical plots, and regressions.',
        tag: 'Statistical Viz'
      }
    ]
  },
  {
    id: 'database',
    title: 'Relational Databases',
    badge: 'Data Architecture',
    iconName: 'Database',
    description: 'Relational schema design, data normalization, transactional integrity, and optimized query execution.',
    skills: [
      {
        name: 'MySQL',
        description: 'Relational database schema modeling, indexing for query performance, writing stored procedures, and data integrity constraints.',
        tag: 'RDBMS',
        highlight: true
      }
    ]
  },
  {
    id: 'tools',
    title: 'Developer & Workflow Tools',
    badge: 'Environment',
    iconName: 'Wrench',
    description: 'Modern development environment, version control, and collaborative code management standards.',
    skills: [
      {
        name: 'Git',
        description: 'Distributed version control, atomic commits, branch workflows, conflict resolution, and change tracking.',
        tag: 'Version Control'
      },
      {
        name: 'GitHub',
        description: 'Collaborative code hosting, repository management, markdown documentation, and portfolio showcase deployment.',
        tag: 'Collaboration'
      },
      {
        name: 'VS Code',
        description: 'Primary IDE optimized with Python linting, SQL database connectors, interactive notebooks, and terminal tooling.',
        tag: 'IDE'
      }
    ]
  }
];
