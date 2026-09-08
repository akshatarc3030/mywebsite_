export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year?: string;
  tag: string;
  description: string;
  tags: string[];
  type: 'ai-iot' | 'c-graphics' | 'iot-hardware';
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  iconName: string;
  skills: {
    name: string;
    tag?: string;
    description: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Completed' | 'Verified' | 'Coursework' | 'Enrolled';
  badgeCategory: string;
  description: string;
  competencies: string[];
  footerNote?: string;
  credentialUrl?: string;
}

export interface WorkflowStage {
  step: string;
  title: string;
  description: string;
}
