export type ProjectCategory = 
  | 'All' 
  | 'Business Intelligence' 
  | 'Entertainment Analytics' 
  | 'Customer Analytics' 
  | 'Data Analytics' 
  | 'Exploratory Data Analysis';

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
  period: string;
  location: string;
  type: string;
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
  period?: string;
  expectedGraduation?: string;
  status: string;
  grade?: string;
  academicPerformance?: string;
  coursework: string[];
  focusAreas?: string[];
  overview: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  status: string;
  skillsCovered: string[];
  description: string;
}
