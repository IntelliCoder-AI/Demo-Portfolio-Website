export type ExperienceType = 'work' | 'education';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}
