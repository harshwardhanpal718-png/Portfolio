import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'cisco-networking-academy',
    title: 'Cisco Certified Program / Virtual Training',
    issuer: 'Cisco Networking Academy',
    issueDate: '2023 - 2024',
    credentialId: 'CISCO-NA-2024-HP',
    verificationUrl: 'https://www.credly.com/organizations/cisco',
    status: 'Verified',
    skillsCovered: ['Networking Fundamentals', 'TCP/IP Architecture', 'Packet Flow Analysis', 'Security Protocols'],
    description: 'Practical training focusing on foundational routing, packet switching, data communications, and network infrastructure management.'
  },
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis & Scientific Computing',
    issuer: 'Technical Training Academy',
    issueDate: '2024',
    credentialId: 'PY-DA-2024-VERIFIED',
    verificationUrl: 'https://github.com/harshwardhanpal',
    status: 'Verified',
    skillsCovered: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Exploratory Data Analysis'],
    description: 'Rigorous coursework in tabular data manipulation, statistical analysis, data cleaning pipelines, and automated report generation.'
  },
  {
    id: 'sql-relational-analytics',
    title: 'SQL & Relational Database Analytics',
    issuer: 'Data Analytics Training Curriculum',
    issueDate: '2024',
    credentialId: 'SQL-ANALYTICS-2024',
    verificationUrl: 'https://github.com/harshwardhanpal',
    status: 'Verified',
    skillsCovered: ['MySQL', 'Complex Joins', 'Window Functions', 'CTEs', 'Query Optimization'],
    description: 'Advanced relational database querying, multi-table aggregations, analytical window functions, and business metric formulation.'
  },
  {
    id: 'power-bi-specialization',
    title: 'Power BI & Business Intelligence Dashboards',
    issuer: 'Business Intelligence Track',
    issueDate: 'In Progress / 2024-2025',
    credentialId: 'BI-PBI-TRACK',
    verificationUrl: '#',
    status: 'In Progress',
    skillsCovered: ['Power BI Desktop', 'DAX Measures', 'Star-Schema Modeling', 'Power Query M'],
    description: 'Interactive dashboard engineering, data transformation using Power Query, data modeling standards, and KPI visualization.'
  }
];
