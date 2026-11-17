export type ProjectCategory = 'All' | 'Excel' | 'Power BI' | 'Python' | 'SQL';

export type ProjectStatus = 'Completed & Interactive Demo' | 'Case Study' | 'In Progress' | 'Planned';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tools: string[];
  businessProblem: string;
  datasetInfo: string;
  dataCleaningApproach: string[];
  analysisMethodology: string[];
  keyInsights: string[];
  businessRecommendations: string[];
  metricsSummary: ProjectMetric[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  accentGradient: string;
}

export interface SkillItem {
  name: string;
  description: string;
  tag: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
  statusBadge: string;
  summary: string;
  responsibilities: string[];
  toolsUsed: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  expectedGraduation: string;
  status: string;
  academicPerformance: string;
  overview: string;
  coursework: string[];
  focusAreas: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  status: 'Verified' | 'In Progress' | 'Planned';
  skillsCovered: string[];
  description: string;
}

export interface DashboardMetric {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  benchmark: string;
  subtext: string;
}
