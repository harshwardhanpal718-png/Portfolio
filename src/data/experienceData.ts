import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'python-internship',
    role: 'Python Data Analysis Intern',
    organization: 'Technology Training & Internship Program',
    type: 'Internship',
    period: 'Summer 2024 (Editable Timeline)',
    location: 'Remote / Jaipur, India',
    statusBadge: 'Verified Technical Training',
    summary:
      'Engaged in hands-on practical Python data analysis workflows. Focused on exploratory data analysis (EDA), data wrangling with Pandas and NumPy, data pipeline automation, and translating raw data into charts with Matplotlib and Seaborn.',
    responsibilities: [
      'Processed, cleaned, and normalized structured and semi-structured tabular datasets using Pandas DataFrames.',
      'Constructed exploratory visualizations to identify skewness, missing values, and bivariate correlations.',
      'Developed modular Python scripts to automate repetitive CSV data transformation tasks.',
      'Participated in code reviews focusing on vectorization performance, code readability, and analytical documentation.'
    ],
    toolsUsed: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook']
  },
  {
    id: 'cisco-virtual-internship',
    role: 'Cisco Virtual Internship / Learning Program',
    organization: 'Cisco Networking Academy',
    type: 'Certification & Practical Program',
    period: '2023 - 2024 (Editable Timeline)',
    location: 'Virtual / Online',
    statusBadge: 'Industry Curriculum',
    summary:
      'Completed industry-grade practical modules covering fundamental networking protocols, computational architectures, network security, and structured data transmission across modern enterprise infrastructures.',
    responsibilities: [
      'Studied foundational network architectures, IP routing protocols, packet transmission, and network security baselines.',
      'Configured and simulated network topologies, understanding data flow, latency factors, and packet loss metrics.',
      'Completed structured virtual labs and practical assessments simulating enterprise networking scenarios.',
      'Applied analytical troubleshooting techniques to isolate connectivity failures and packet routing anomalies.'
    ],
    toolsUsed: ['Cisco Packet Tracer', 'Networking Protocols', 'TCP/IP', 'Routing & Switching', 'Network Security']
  }
];
