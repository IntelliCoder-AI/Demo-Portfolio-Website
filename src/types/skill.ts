export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'cloud' | 'tools' | 'ai-ml' | 'databases';

export interface Skill {
  name: string;
  icon: string; // Lucide icon name or path
  level: SkillLevel;
  category: SkillCategory;
  yearsOfExperience: number;
}
